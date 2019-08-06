package org.frb.hackathon.team3.hunt.controllers;

import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.User;
import org.apache.commons.lang3.RandomStringUtils;
import org.frb.hackathon.team3.hunt.entities.HighScores;
import org.frb.hackathon.team3.hunt.entities.Questions;
import org.frb.hackathon.team3.hunt.entities.UserInfo;
import org.frb.hackathon.team3.hunt.services.HighScoreService;
import org.frb.hackathon.team3.hunt.services.QuestionService;
import org.frb.hackathon.team3.hunt.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@RestController
@RequestMapping(value="/hunt")
public class HuntController {

    @Autowired
    QuestionService questionService;

    @Autowired
    UserService userService;

    @Autowired
    HighScoreService highScoreService;

    @PostMapping(value="/newgame")
    public ResponseEntity<UserInfo> createNewGame(@RequestBody UserInfo userInfo) {
        log.info("Creating a new user and game.");
        String sessionId = RandomStringUtils.randomAlphanumeric(12);
        userInfo.setSessionId(sessionId);
        userInfo.setEntryTime(LocalDateTime.now());
        userInfo.setQuestionCount(0);
        userInfo.setQuestionSetId(1);
        userInfo.setCurrentQuestionId(0);
        userInfo.setGroupId(0);
        userInfo.setScore(0);

        userService.saveUser(userInfo);

        return new ResponseEntity<>(userInfo, HttpStatus.OK);
    }

    @GetMapping(value="/user/{sessionId}")
    public ResponseEntity<UserInfo> getUser(@PathVariable String sessionId) {
        log.info("Getting user info for session id: " + sessionId);
        UserInfo player = userService.findBySessionId(sessionId);

        return new ResponseEntity<>(player, HttpStatus.OK);
    }

    @GetMapping(value="/question/{sessionId}")
    public ResponseEntity<Questions> getQuestion(@PathVariable String sessionId) {
        log.info("Getting a new question for session id: " + sessionId);
        UserInfo player = userService.findBySessionId(sessionId);

        int newQuestionId = player.getCurrentQuestionId() + 1;

        Questions newQuestion = questionService.findByLocationIdAndQuestionSetId(newQuestionId, player.getQuestionSetId());
        player.setCurrentQuestionId(newQuestion.getLocationId());
        player.setQuestionStartTime(LocalDateTime.now());
        player.setQuestionCount(player.getQuestionCount()+1);
        player.setQuestionSetId(newQuestion.getQuestionSetId());
        player.setCorrect(false);
        userService.saveUser(player);

        return new ResponseEntity<>(newQuestion, HttpStatus.OK);
    }

    @GetMapping(value="/answer/{sessionId}/{answer}")
    public ResponseEntity<UserInfo> finishQuestion(@PathVariable String sessionId, @PathVariable String answer) {
        log.info("Checking the answer for sessionId: " + sessionId + " and answer: " + answer);
        UserInfo player = userService.findBySessionId(sessionId);
        player = questionService.checkAnswer(player, answer);
        userService.saveUser(player);

        return new ResponseEntity<>(player, HttpStatus.OK);
    }

    @GetMapping(value="/scores/{sessionId}")
    public ResponseEntity<List<HighScores>> pullHighScores(@PathVariable String sessionId) {
        log.info("Returning list of user high scores...");
        UserInfo player = userService.findBySessionId(sessionId);
        List<HighScores> highScores;
        if (player.getGroupId() != 0) {
            // pull a specific group's high score list
            highScores = highScoreService.findByGroupId(player.getGroupId());
        } else {
            highScores = highScoreService.findAll();
        }

        return new ResponseEntity<>(highScores, HttpStatus.OK);
    }

    @GetMapping(value="/scores")
    public ResponseEntity<List<HighScores>> pullAllHighScores() {
        log.info("Returning list of high scores...");
        List<HighScores> highScores = highScoreService.findAll();

        return new ResponseEntity<>(highScores, HttpStatus.OK);
    }
}

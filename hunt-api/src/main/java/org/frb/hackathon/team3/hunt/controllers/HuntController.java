package org.frb.hackathon.team3.hunt.controllers;

import lombok.extern.slf4j.Slf4j;
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
        userInfo.setCurrentQuestionId(0L);
        userInfo.setGroupId(0);
        userInfo.setScore(0);

        userService.saveUser(userInfo);
        ResponseEntity<UserInfo> response = new ResponseEntity<>(userInfo, HttpStatus.OK);
        response.getHeaders().add("Access-Control-Allow-Origin", "*");
        return response;
    }


    @GetMapping(value="/question/{sessionId}")
    public ResponseEntity<Questions> getQuestion(@PathVariable String sessionId) {
        log.info("Getting a new question for session id: " + sessionId);
        UserInfo player = userService.findBySessionId(sessionId);

        Long newQuestionId = player.getCurrentQuestionId() + 1;

        Questions newQuestion = questionService.findByIdAndQuestionSetId(newQuestionId, player.getQuestionSetId()).orElse(null);
        player.setCurrentQuestionId(newQuestion.getId());
        player.setQuestionStartTime(LocalDateTime.now());
        player.setQuestionCount(player.getQuestionCount()+1);
        player.setQuestionSetId(newQuestion.getQuestionSetId());
        player.setCorrect(false);
        userService.saveUser(player);
        ResponseEntity<Questions> response = new ResponseEntity<>(newQuestion, HttpStatus.OK);
        response.getHeaders().add("Access-Control-Allow-Origin", "*");
        return response;
    }

    @GetMapping(value="/answer/{sessionId}/{answer}")
    public ResponseEntity<UserInfo> finishQuestion(@PathVariable String sessionId, @PathVariable String answer) {
        log.info("Checking the answer for sessionId: " + sessionId + " and answer: " + answer);
        UserInfo player = userService.findBySessionId(sessionId);
        player = questionService.checkAnswer(player, answer);
        userService.saveUser(player);

        ResponseEntity<UserInfo> response = new ResponseEntity<>(player, HttpStatus.OK);
        response.getHeaders().add("Access-Control-Allow-Origin", "*");
        return response;
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

        ResponseEntity<List<HighScores>> response = new ResponseEntity<>(highScores, HttpStatus.OK);
        response.getHeaders().add("Access-Control-Allow-Origin", "*");

        return response;
    }

    @GetMapping(value="/scores")
    public ResponseEntity<List<HighScores>> pullAllHighScores() {
        log.info("Returning list of high scores...");
        List<HighScores> highScores = highScoreService.findAll();

        ResponseEntity<List<HighScores>> response = new ResponseEntity<>(highScores, HttpStatus.OK);
        response.getHeaders().add("Access-Control-Allow-Origin", "*");

        return response;
    }
}

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
        userService.saveUser(userInfo);

        return new ResponseEntity<>(userInfo, HttpStatus.OK);
    }


    @GetMapping(value="/question/{sessionId}")
    public ResponseEntity<Questions> getQuestion(@PathVariable String sessionId) {
        log.info("Getting the question for session id: " + sessionId);
        UserInfo player = userService.findBySessionId(sessionId);

        Questions lastQuestion = questionService.findById(player.getCurrentQuestionId()).orElse(null);

        return new ResponseEntity<>(lastQuestion, HttpStatus.OK);
    }

    @GetMapping(value="/answer/{sessionId}/{answer}")
    public ResponseEntity<Questions> finishQuestion(@PathVariable String sessionId, @PathVariable String answer) {
        log.info("Checking the answer for sessionId: " + sessionId + " and answer: " + answer);
        UserInfo player = userService.findBySessionId(sessionId);

        Long newQuestionId = player.getCurrentQuestionId() + 1;

        Questions newQuestion = questionService.findByIdAndQuestionSetId(newQuestionId, player.getQuestionSetId()).orElse(null);

        return new ResponseEntity<>(newQuestion, HttpStatus.OK);
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
}

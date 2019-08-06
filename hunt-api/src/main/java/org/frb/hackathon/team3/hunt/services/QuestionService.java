package org.frb.hackathon.team3.hunt.services;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.weaver.patterns.TypePatternQuestions;
import org.frb.hackathon.team3.hunt.entities.Questions;
import org.frb.hackathon.team3.hunt.entities.UserInfo;
import org.frb.hackathon.team3.hunt.repositories.QuestionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Optional;

@Slf4j
@Service
public class QuestionService {
    @Autowired
    private QuestionsRepository questionsRepository;

    public Optional<Questions> findById(Long questionId) {
        return questionsRepository.findById(questionId);
    }

    public UserInfo checkAnswer(UserInfo player, String answer) {
        Questions answeredQuestion = questionsRepository.findByLocationIdAndQuestionSetId(player.getCurrentQuestionId(), player.getQuestionSetId()).orElse(null);
        int scoreToAdd = 0;
        LocalDateTime currentTime = LocalDateTime.now();
        if (answer.equals(answeredQuestion.getAnswer())) {
            // add the score based on time elapsed
            int secondsElapsed = (int)player.getQuestionStartTime().until(currentTime, ChronoUnit.SECONDS);
            if (secondsElapsed * 3 > 90){
                scoreToAdd += 10;
            } else {
                scoreToAdd += 100 - (secondsElapsed * 3);
            }
            log.info("User answered question correctly");
            scoreToAdd += 100 - (secondsElapsed * 3);
            player.setScore(player.getScore() + scoreToAdd);
            player.setCorrect(true);
        } else {
            log.info("User did not answer correctly");
        }

        return player;
    }

    public Questions findByLocationIdAndQuestionSetId(int newQuestionId, int questionSetId) {
        return questionsRepository.findByLocationIdAndQuestionSetId(newQuestionId, questionSetId).orElse(null);
    }
}

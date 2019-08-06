package org.frb.hackathon.team3.hunt.services;

import org.frb.hackathon.team3.hunt.entities.Questions;
import org.frb.hackathon.team3.hunt.entities.UserInfo;
import org.frb.hackathon.team3.hunt.repositories.QuestionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Optional;

@Service
public class QuestionService {
    @Autowired
    private QuestionsRepository questionsRepository;

    public Optional<Questions> findById(Long questionId) {
        return questionsRepository.findById(questionId);
    }

    public Optional<Questions> findByIdAndQuestionSetId(Long newQuestionId, int questionSetId) {
        return questionsRepository.findByIdAndQuestionSetId(newQuestionId, questionSetId);
    }

    public UserInfo checkAnswer(UserInfo player, String answer) {
        Questions answeredQuestion = questionsRepository.findByIdAndQuestionSetId(player.getCurrentQuestionId(), player.getQuestionSetId()).orElse(null);
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
            player.setScore(player.getScore() + scoreToAdd);
            player.setCorrect(true);
        }

        return player;
    }
}

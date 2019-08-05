package org.frb.hackathon.team3.hunt.services;

import org.frb.hackathon.team3.hunt.entities.Questions;
import org.frb.hackathon.team3.hunt.repositories.QuestionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}

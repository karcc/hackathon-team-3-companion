package org.frb.hackathon.team3.hunt.repositories;

import org.frb.hackathon.team3.hunt.entities.Questions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface QuestionsRepository extends JpaRepository<Questions, Long> {
    Optional<Questions> findByIdAndQuestionSetId(Long newQuestionId, int questionSetId);
}

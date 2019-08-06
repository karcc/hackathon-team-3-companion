package org.frb.hackathon.team3.hunt.repositories;

import org.frb.hackathon.team3.hunt.entities.HighScores;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface HighScoresRepository extends JpaRepository<HighScores, Long> {

    List<HighScores> findByGroupId(int groupId);
    HighScores findBySessionId(String sessionId);
}

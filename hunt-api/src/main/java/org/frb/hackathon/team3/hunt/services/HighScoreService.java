package org.frb.hackathon.team3.hunt.services;

import org.frb.hackathon.team3.hunt.entities.HighScores;
import org.frb.hackathon.team3.hunt.repositories.HighScoresRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HighScoreService {

    @Autowired
    private HighScoresRepository highScoresRepository;

    public List<HighScores> findByGroupId(int groupId) {
        return highScoresRepository.findByGroupId(groupId);
    }

    public List<HighScores> findAll() {
        return highScoresRepository.findAll();
    }
}

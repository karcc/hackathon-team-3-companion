package org.frb.hackathon.team3.hunt.services;

import lombok.extern.slf4j.Slf4j;
import org.frb.hackathon.team3.hunt.entities.HighScores;
import org.frb.hackathon.team3.hunt.entities.UserInfo;
import org.frb.hackathon.team3.hunt.repositories.HighScoresRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Slf4j
@Service
public class HighScoreService {

    @Autowired
    private HighScoresRepository highScoresRepository;

    public List<HighScores> findByGroupId(int groupId) {
        return highScoresRepository.findByGroupId(groupId);
    }

    public HighScores findBySessionId(String sessionId) { return highScoresRepository.findBySessionId(sessionId);}

    public List<HighScores> findAll() {
        return highScoresRepository.findAll(Sort.by(Sort.Direction.DESC, "score"));
    }

    public void saveHighScores(UserInfo userInfo){
        log.info("this is highscore userinfo " + userInfo.getSessionId());
        //log.info("Highscore findBySessionId: " + this.highScoresRepository.findBySessionId(userInfo.getSessionId()).getSessionId());
        if(this.highScoresRepository.findBySessionId(userInfo.getSessionId()) != null){
            log.info("first block made it");
            HighScores existingHighscore = highScoresRepository.findBySessionId(userInfo.getSessionId());
            existingHighscore.setGroupId(userInfo.getGroupId());
            existingHighscore.setNickname(userInfo.getNickname());
            existingHighscore.setScore(userInfo.getScore());
            existingHighscore.setEntryTime(LocalDateTime.now());
            highScoresRepository.save(existingHighscore);
        } else {
            log.info("made it to else");
            HighScores highScore = new HighScores();
            highScore.setSessionId(userInfo.getSessionId());
            highScore.setGroupId(userInfo.getGroupId());
            highScore.setNickname(userInfo.getNickname());
            highScore.setScore(userInfo.getScore());
            highScore.setEntryTime(LocalDateTime.now());
            log.info("display what's in highscore: " + highScore.getSessionId());
            highScoresRepository.save(highScore);
        }
    }
}

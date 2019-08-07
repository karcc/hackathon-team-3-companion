package org.frb.hackathon.team3.hunt.services;

import lombok.extern.slf4j.Slf4j;
import org.frb.hackathon.team3.hunt.entities.UserInfo;
import org.frb.hackathon.team3.hunt.repositories.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserService {


    @Autowired
    private UserInfoRepository userInfoRepository;

    @Autowired
    private HighScoreService highScoreService;

    public UserInfo findBySessionId(String sessionId) {
        return userInfoRepository.findBySessionId(sessionId);
    }

    public void saveUser(UserInfo userInfo) {
        userInfoRepository.save(userInfo);
        log.info("Made it to save user after answer");
        if(userInfo.getScore() > 0){
            //highScoreService.saveHighScores(userInfo);
        }
    }
}

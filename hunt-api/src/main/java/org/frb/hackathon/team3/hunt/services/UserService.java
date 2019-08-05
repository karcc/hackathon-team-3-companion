package org.frb.hackathon.team3.hunt.services;

import org.frb.hackathon.team3.hunt.entities.UserInfo;
import org.frb.hackathon.team3.hunt.repositories.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {


    @Autowired
    private UserInfoRepository userInfoRepository;

    public UserInfo findBySessionId(String sessionId) {
        return userInfoRepository.findBySessionId(sessionId);
    }

    public void saveUser(UserInfo userInfo) {
        userInfoRepository.save(userInfo);
    }
}

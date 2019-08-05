package org.frb.hackathon.team3.hunt.repositories;

import org.frb.hackathon.team3.hunt.entities.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {
    UserInfo findBySessionId(String sessionId);
}

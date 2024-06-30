package com.project.library.Service;

import com.project.library.Entity.LiUserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface LiUserInfoRepository extends JpaRepository<LiUserInfo, Long> {

    @Query(value = "SELECT * FROM LI_USER_INFO WHERE ID = :id AND PWD = :pwd", nativeQuery = true)
    LiUserInfo findUser(@Param(value = "id") String id, @Param(value = "pwd") String pwd);
}

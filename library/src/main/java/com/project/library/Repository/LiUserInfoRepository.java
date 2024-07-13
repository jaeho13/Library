package com.project.library.Repository;

import com.project.library.Entity.LiUserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LiUserInfoRepository extends JpaRepository<LiUserInfo, Long> {

    @Query(value = "SELECT * FROM LI_USER_INFO WHERE ID = :id AND PWD = :pwd", nativeQuery = true)
    LiUserInfo findUser(@Param(value = "id") String id, @Param(value = "pwd") String pwd);

    @Query(value = "SELECT " +
            "SUM(CASE WHEN l.AGE BETWEEN 0 AND 19 THEN 1 ELSE 0 END), " +
            "SUM(CASE WHEN l.AGE BETWEEN 20 AND 29 THEN 1 ELSE 0 END), " +
            "SUM(CASE WHEN l.AGE BETWEEN 30 AND 39 THEN 1 ELSE 0 END), " +
            "SUM(CASE WHEN l.AGE BETWEEN 40 AND 49 THEN 1 ELSE 0 END), " +
            "SUM(CASE WHEN l.AGE BETWEEN 50 AND 59 THEN 1 ELSE 0 END), " +
            "SUM(CASE WHEN l.AGE BETWEEN 60 AND 69 THEN 1 ELSE 0 END) " +
            "FROM LI_USER_INFO l", nativeQuery = true)
    List<Object[]> findUserAge();

    @Query(value = "SELECT COUNT(*) FROM LI_USER_INFO", nativeQuery = true)
    int countUserCnt();
}

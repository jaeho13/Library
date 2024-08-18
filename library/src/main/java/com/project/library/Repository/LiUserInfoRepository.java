package com.project.library.Repository;

import com.project.library.Entity.LiUserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface LiUserInfoRepository extends JpaRepository<LiUserInfo, Long> {

    @Query(value = "SELECT * FROM LI_USER_INFO WHERE ID = :id AND PWD = :pwd", nativeQuery = true)
    LiUserInfo findUser(@Param(value = "id") String id, @Param(value = "pwd") String pwd);

    @Query(value = "SELECT " +
            "SUM(CASE WHEN TRUNC(MONTHS_BETWEEN(SYSDATE, TO_DATE(l.AGE, 'YYYYMMDD')) / 12) BETWEEN 0 AND 19 THEN 1 ELSE 0 END) AS \"0-19\", " +
            "SUM(CASE WHEN TRUNC(MONTHS_BETWEEN(SYSDATE, TO_DATE(l.AGE, 'YYYYMMDD')) / 12) BETWEEN 20 AND 29 THEN 1 ELSE 0 END) AS \"20-29\", " +
            "SUM(CASE WHEN TRUNC(MONTHS_BETWEEN(SYSDATE, TO_DATE(l.AGE, 'YYYYMMDD')) / 12) BETWEEN 30 AND 39 THEN 1 ELSE 0 END) AS \"30-39\", " +
            "SUM(CASE WHEN TRUNC(MONTHS_BETWEEN(SYSDATE, TO_DATE(l.AGE, 'YYYYMMDD')) / 12) BETWEEN 40 AND 49 THEN 1 ELSE 0 END) AS \"40-49\", " +
            "SUM(CASE WHEN TRUNC(MONTHS_BETWEEN(SYSDATE, TO_DATE(l.AGE, 'YYYYMMDD')) / 12) BETWEEN 50 AND 59 THEN 1 ELSE 0 END) AS \"50-59\", " +
            "SUM(CASE WHEN TRUNC(MONTHS_BETWEEN(SYSDATE, TO_DATE(l.AGE, 'YYYYMMDD')) / 12) BETWEEN 60 AND 69 THEN 1 ELSE 0 END) AS \"60-69\" " +
            "FROM LI_USER_INFO l", nativeQuery = true)
    List<Object[]> findUserAge();

    @Query(value = "SELECT COUNT(*) FROM LI_USER_INFO", nativeQuery = true)
    int countUserCnt();

    @Query(value = "SELECT * FROM LI_USER_INFO", nativeQuery = true)
    List<LiUserInfo> findUserList();

    @Query(value = "SELECT * FROM LI_USER_INFO WHERE USER_KEY = :userKey", nativeQuery = true)
    LiUserInfo findUserInfo(@Param(value = "userKey") Long userKey);

    @Query(value = "SELECT * FROM LI_USER_INFO WHERE NAME LIKE :name", nativeQuery = true)
    List<LiUserInfo> searchUser(@Param("name") String name);

}

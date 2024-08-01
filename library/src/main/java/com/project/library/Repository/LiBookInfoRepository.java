package com.project.library.Repository;

import com.project.library.Entity.LiBookInfo;
import com.project.library.Entity.LiUserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LiBookInfoRepository extends JpaRepository<LiBookInfo, Long> {

    @Query(value = "SELECT * FROM LI_BOOK_INFO WHERE IS_DELETED = 0 ORDER BY BOOK_KEY DESC", nativeQuery = true)
    List<LiBookInfo> selectBook();

    @Query(value = "SELECT COUNT(*) FROM LI_BOOK_INFO WHERE IS_DELETED = 0", nativeQuery = true)
    int countBook();

    @Query(value = "SELECT COUNT(*) FROM LI_BOOK_INFO WHERE IS_DELETED = 0 AND BOOK_GENRE LIKE :genre", nativeQuery = true)
    int countBookGenre(@Param(value = "genre") String genre);

    @Query(value = "SELECT * FROM LI_BOOK_INFO bi WHERE bi.BOOK_KEY = :bookKey AND bi.BOOK_STATUS = 0 AND IS_DELETED = 0", nativeQuery = true)
    LiBookInfo findByBookStatus(@Param(value = "bookKey") Long bookKey);

    @Query(value = "UPDATE LI_BOOK_INFO b SET b.IS_DELETED = 1 WHERE b.BOOK_KEY = :bookKey", nativeQuery = true)
    void deleteBookInfo(@Param(value = "bookKey") Long bookKey);
}

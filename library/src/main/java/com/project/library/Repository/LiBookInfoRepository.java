package com.project.library.Repository;

import com.project.library.Entity.LiBookInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LiBookInfoRepository extends JpaRepository<LiBookInfo, Long> {

    @Query(value = "SELECT * FROM LI_BOOK_INFO WHERE IS_DELETED = 0", nativeQuery = true)
    List<LiBookInfo> selectBook();

    @Query(value = "SELECT COUNT(*) FROM LI_BOOK_INFO WHERE IS_DELETED = 0", nativeQuery = true)
    int countBook();

    @Query(value = "SELECT COUNT(*) FROM LI_BOOK_INFO WHERE IS_DELETED = 0 AND BOOK_GENRE LIKE :genre", nativeQuery = true)
    int countBookGenre(@Param(value = "genre") String genre);

    @Query(value = "SELECT * FROM LI_BOOK_INFO bi WHERE bi.BOOK_KEY = :bookKey AND bi.BOOK_STATUS = 0 AND IS_DELETED = 0", nativeQuery = true)
    List<LiBookInfo> findByBookStatus(@Param(value = "bookKey") Long bookKey);

    @Query(value = "UPDATE LI_BOOK_INFO b SET b.IS_DELETED = 1 WHERE b.BOOK_KEY = :bookKey", nativeQuery = true)
    void deleteBookInfo(@Param(value = "bookKey") Long bookKey);


//    @Query(value = "SELECT COUNT(*) FROM LI_BOOK_INFO WHERE BOOK_GENRE LIKE '%인문%' AND IS_DELETED = 0", nativeQuery = true)
//    int findByHumanities();
//
//    @Query(value = "SELECT COUNT(*) FROM LI_BOOK_INFO WHERE BOOK_GENRE LIKE '%에세이%' AND IS_DELETED = 0", nativeQuery = true)
//    int findByEssay();
//
//    @Query(value = "SELECT COUNT(*) FROM LI_BOOK_INFO WHERE BOOK_GENRE LIKE '%소설%' AND IS_DELETED = 0", nativeQuery = true)
//    int findByNovel();
//
//    @Query(value = "SELECT COUNT(*) FROM LI_BOOK_INFO WHERE BOOK_GENRE LIKE '%과학%' AND IS_DELETED = 0", nativeQuery = true)
//    int findByScience();
//
//    @Query(value = "SELECT COUNT(*) FROM LI_BOOK_INFO WHERE BOOK_GENRE LIKE '%예술%' AND IS_DELETED = 0", nativeQuery = true)
//    int findByArt();
//
//    @Query(value = "SELECT COUNT(*) FROM LI_BOOK_INFO WHERE BOOK_GENRE LIKE '%경제%' AND IS_DELETED = 0", nativeQuery = true)
//    int findByEconomy();
//
//    @Query(value = "SELECT COUNT(*) FROM LI_BOOK_INFO WHERE BOOK_GENRE LIKE '%여행%' AND IS_DELETED = 0", nativeQuery = true)
//    int findByTravel();
}

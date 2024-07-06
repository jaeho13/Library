package com.project.library.Repository;

import com.project.library.Entity.LiBookInfo;
import com.project.library.Entity.LiRentList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LiBookInfoRepository extends JpaRepository<LiBookInfo, Long> {

    @Query(value = "SELECT * FROM LI_BOOK_INFO WHERE IS_DELETED = 0", nativeQuery = true)
    List<LiBookInfo> findBook();

    @Query(value = "SELECT COUNT(*) FROM LI_BOOK_INFO WHERE IS_DELETED = 0", nativeQuery = true)
    int findBookCnt();

}

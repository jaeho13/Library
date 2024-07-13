package com.project.library.Repository;

import com.project.library.Entity.LiRentList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LiRentListRepository extends JpaRepository<LiRentList, Long> {

    @Query(value = "SELECT * FROM LI_RENT_LIST WHERE IS_RETURN = 0", nativeQuery = true)
    List<LiRentList> selectRentList();

    @Query(value = "SELECT COUNT(*) FROM LI_RENT_LIST WHERE IS_RETURN = 0", nativeQuery = true)
    int countRentBook();

}

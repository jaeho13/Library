package com.project.library.Repository;

import com.project.library.DTO.RentListDTO;
import com.project.library.Entity.LiRentList;
import org.antlr.v4.runtime.atn.SemanticContext;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LiRentListRepository extends JpaRepository<LiRentList, Long> {

    @Query("SELECT new com.project.library.DTO.RentListDTO(rl.rentKey, ui.id, ui.name, bi.bookName, rl.rentDate) " +
            "FROM LiRentList rl " +
            "JOIN rl.liUserInfo ui " +
            "JOIN rl.liBookInfo bi " +
            "WHERE bi.bookStatus = 1 " +
            "AND rl.rentDeleted = 0")
    List<RentListDTO> selectRentList();

    @Query("SELECT COUNT(*) " +
            "FROM LiRentList rl " +
            "JOIN rl.liBookInfo bi " +
            "WHERE bi.bookStatus = 1 " +
            "AND rl.rentDeleted = 0")
    int countRentList();
}

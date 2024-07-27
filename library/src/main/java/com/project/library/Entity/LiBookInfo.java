package com.project.library.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "LI_BOOK_INFO")
@Data
public class LiBookInfo {
    @Id
    @Column(name = "BOOK_KEY")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "BOOKKEY")
    @SequenceGenerator(name = "BOOKKEY", sequenceName = "BOOKKEY", allocationSize = 1)
    private Long bookKey;

    @Column(name = "BOOK_NAME")
    private String bookName; //책 제목

    @Column(name = "BOOK_WRITER")
    private String bookWriter; //책 작성자

    @Column(name = "BOOK_GENRE")
    private String bookGenre; //책 장르

    @Column(name = "BOOK_STATUS")
    private int bookStatus; //책 상태 0:대여 가능 1:대여 중

    @Column(name = "DATE_REG")
    private Date dateReg; //책 입고일

    @Column(name = "IS_DELETED")
    private int isDeleted; //책 상태
}

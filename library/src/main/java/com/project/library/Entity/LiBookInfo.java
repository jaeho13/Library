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
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "bookKey")
    @SequenceGenerator(name = "bookKey", sequenceName = "bookKey", allocationSize = 1)
    private Long bookKey;

    @Column(name = "BOOK_NAME")
    private String bookName; //책 제목

    @Column(name = "BOOK_WRITER")
    private String bookWriter; //책 작성자

    @Column(name = "BOOK_GENRE")
    private String bookGenre; //책 장르

    @Column(name = "BOOK_CNT")
    private Long bookCnt; //책 권 수

    @Column(name = "DATE_REG")
    private Date dateReg; //책 입고일

    @Column(name = "IS_DELETED")
    private int isDeleted; //책 상태
}

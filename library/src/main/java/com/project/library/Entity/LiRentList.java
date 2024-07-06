package com.project.library.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "LI_RENT_LIST")
@Data
public class LiRentList {
    @Id
    @Column(name = "RENT_KEY")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "rentKey")
    @SequenceGenerator(name = "rentKey", sequenceName = "rentKey", allocationSize = 1)
    private Long rentKey;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_KEY")
    private LiUserInfo liUserInfo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BOOK_KEY")
    private LiBookInfo liBookInfo;

    @Column(name = "IS_RETURN")
    private int isReturn;

    @Column(name = "DATE_REG")
    private Date dateReg; //반납일
}

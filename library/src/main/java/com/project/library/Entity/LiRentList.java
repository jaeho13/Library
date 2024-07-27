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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "USER_KEY")
    private LiUserInfo liUserInfo;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "BOOK_KEY")
    private LiBookInfo liBookInfo;

    @Column(name = "RENT_DATE")
    private Date rentDate; //대여일

    @Column(name = "RENT_DELETED")
    private int rentDeleted; //대여기록용 반납햇다면 값 1로 변경
}

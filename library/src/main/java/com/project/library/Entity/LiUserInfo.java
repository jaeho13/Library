package com.project.library.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "LI_USER_INFO")
@Data
public class LiUserInfo {
    @Id
    @Column(name = "USER_KEY")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "USERKEY")
    @SequenceGenerator(name = "USERKEY", sequenceName = "USERKEY", allocationSize = 1)
    private Long userKey;

    @Column(name = "ID")
    private String id;

    @Column(name = "PWD")
    private String pwd;

    @Column(name = "NAME")
    private String name;

    @Column(name = "SEX")
    private String sex;

    @Column(name = "AGE")
    private String age;

}

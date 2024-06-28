package com.project.library.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "LI_USER_INFO")
@Data
public class LiUserInfo {
    @Id
    @Column(name = "USER_KEY")
    private Long userKey;

    @Column(name = "ID")
    private String id;

    @Column(name = "PW")
    private String pw;

    @Column(name = "NAME")
    private String name;

    @Column(name = "SEX")
    private String sex;

    @Column(name = "AGE")
    private String age;

}

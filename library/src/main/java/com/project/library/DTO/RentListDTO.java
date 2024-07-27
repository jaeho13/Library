package com.project.library.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class RentListDTO {
    private Long rentKey;

    private String id;

    private String name;

    private String bookName;

    private Date rentDate;

    public RentListDTO(Long rentKey, String id, String name, String bookName, Date rentDate) {
        this.rentKey = rentKey;
        this.id = id;
        this.name = name;
        this.bookName = bookName;
        this.rentDate = rentDate;
    }
}

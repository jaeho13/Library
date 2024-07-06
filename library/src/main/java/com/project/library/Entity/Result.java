package com.project.library.Entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@Data
public class Result {
    private boolean result; //결과 값
    private Map<String, Object> resultMap; //결과
}

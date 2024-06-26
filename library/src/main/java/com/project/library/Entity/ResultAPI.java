package com.project.library.Entity;

import lombok.Data;
import java.util.Map;

@Data
public class ResultAPI {
    private boolean result; //결과 값
    private Map<String, Object> resultMap; //결과
}

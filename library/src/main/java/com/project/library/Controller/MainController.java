package com.project.library.Controller;

import com.project.library.Entity.ResultAPI;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@Tag(name = "Login", description = "Login Admin/User API")
public class MainController {

    //http://localhost:8080/swagger-ui/index.html#/Login/login

    @PostMapping("/login")
    @Operation(summary = "로그인",description = "Admin/User 로그인 API")
    @Parameter(name="id", description = "아이디", required = true)
    @Parameter(name="pw", description = "비밀번호", required = true)
    public ResultAPI login(@RequestBody Map<String, Object> loginInfo) throws Exception{
        ResultAPI result = new ResultAPI();
        result.setResult(false);

        return result;
    }
}

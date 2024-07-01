package com.project.library.Controller;

import com.project.library.Service.LoginService;
import com.project.library.Entity.Result;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RequiredArgsConstructor
@RestController
@Log4j2
@Tag(name = "Login", description = "Login Admin/User API")
public class LoginController {
    // http://localhost:8080/swagger-ui/index.html#/Login/login

    @Autowired
    LoginService loginService;

    @PostMapping("/login")
    @Operation(summary = "로그인",description = "Admin/User 로그인 API")
    @Parameter(name="id", description = "아이디", required = true)
    @Parameter(name="pw", description = "비밀번호", required = true)
    @Parameter(name="type", description = "관리자/사용자", required = true)
    public Result login(@RequestBody Map<String, Object> loginInfo) throws Exception{
        Result result = loginService.login(loginInfo);

        return result;
    }
}

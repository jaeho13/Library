package com.project.library.Controller;

import com.project.library.Entity.Result;
import com.project.library.Service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@Log4j2
public class UserController {

    @Autowired
    private UserService userService;

    final String userUrl = "/user";

    @GetMapping(userUrl + "/findUserList")
    public Map<String,Object> findUserList(@RequestParam String param) {
        Map<String, Object> map = userService.findUserList(param);
        
        return map;
    }

    //차트 : 회원 연령
    @GetMapping(userUrl + "/chartUserAge")
    public Map<String, Object> chartUserAge() {
        Map<String, Object> map = userService.chartUserAge();

        return map;
    }

    @RequestMapping(userUrl + "/insertUser")
    public Result insertUser(@RequestBody Map<String, Object> map) {
        Result result = userService.insertUser(map);
        return result;
    }

    @RequestMapping(userUrl + "/deleteUser")
    public Result deleteUser(@RequestParam String userKey) {
        Result result = userService.deleteUser(userKey);
        return result;
    }
}

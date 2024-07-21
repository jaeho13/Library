package com.project.library.Controller;

import com.project.library.Service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@Log4j2
public class UserController {

    @Autowired
    private UserService userService;
    @GetMapping("/findUserList")
    public Map<String,Object> findUserList() {
        Map<String, Object> map = userService.findUserList();
        
        return map;
    }
}

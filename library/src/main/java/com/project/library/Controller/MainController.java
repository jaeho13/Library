package com.project.library.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
    @GetMapping("/hello")
    public String test() {
        return "Hello, World!";
    }
}

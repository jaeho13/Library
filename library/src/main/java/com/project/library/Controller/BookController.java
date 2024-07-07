package com.project.library.Controller;

import com.project.library.Entity.Result;
import com.project.library.Service.BookService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RequiredArgsConstructor
@RestController
@Log4j2
@Tag(name = "Book", description = "Book List API")
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping("/findBookList")
    public Map<String,Object> findBookList() {
        Map<String,Object> map = bookService.findBookList();

        return map;
    }

    @GetMapping("/findRentList")
    public Map<String,Object> findRentList() {
        Map<String, Object> map = bookService.findRentList();

        return map;
    }
}

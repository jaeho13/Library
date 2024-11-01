package com.project.library.Controller;

import com.project.library.Entity.Result;
import com.project.library.Service.BookService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.persistence.PreUpdate;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@Log4j2
@Tag(name = "Book", description = "Book List API")
public class BookController {
    @Autowired
    private BookService bookService;

    final String bookUrl = "/book";

    //책 리스트
    @GetMapping(bookUrl + "/findBookList")
    public Map<String,Object> findBookList(@RequestParam String param) {
        Map<String,Object> map = bookService.findBookList(param);

        return map;
    }

    //책 대여 리스트
    @GetMapping(bookUrl + "/findRentList")
    public Map<String,Object> findRentList() {
        Map<String, Object> map = bookService.findRentList();

        return map;
    }

    //차트 : 책 장르 수
    @GetMapping(bookUrl + "/chartGenreList")
    public Map<String, Object> chartGenreList() {
        Map<String, Object> map = bookService.chartGenreList();

        return map;
    }

    //차트 : 대출 현황
    @GetMapping(bookUrl + "/chartRentList")
    public Map<String, Object> chartRentList() {
        Map<String, Object> map = bookService.chartRentList();

        return map;
    }

    //책 등록
    @RequestMapping(bookUrl + "/insertBook")
    public Result insertBook(@RequestBody Map<String, Object> map) {

        Result result = bookService.insertBook(map);

        return result;
    }

    //책 삭제
    @RequestMapping(bookUrl + "/deleteBook")
    public Result deleteBook(@RequestParam String bookKey) {
        Result result = bookService.deleteBook(bookKey);

        return result;
    }

}

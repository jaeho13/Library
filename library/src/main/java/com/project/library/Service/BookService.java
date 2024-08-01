package com.project.library.Service;

import com.project.library.Entity.LiBookInfo;
import com.project.library.Entity.Result;
import com.project.library.Repository.LiBookInfoRepository;
import com.project.library.Repository.LiRentListRepository;
import com.project.library.Repository.LiUserInfoRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@Log4j2
public class BookService {
    @Autowired
    private LiBookInfoRepository liBookInfoRepository;

    @Autowired
    private LiRentListRepository liRentListRepository;

    @Autowired
    private LiUserInfoRepository liUserInfoRepository;

    public Map<String, Object> findBookList() {
        Map<String, Object> map = new HashMap<>();
        try {
            map.put("bookList", liBookInfoRepository.selectBook());
            map.put("bookCnt", liBookInfoRepository.countBook());
        } catch (Exception e) {
            System.err.println("Exception : " + e.getMessage());
            throw e;
        }
        return map;
    }

    public Map<String, Object> findRentList() {
        Map<String, Object> map = new HashMap<>();

        try {
            map.put("rentList", liRentListRepository.selectRentList());
            map.put("rentCnt", liRentListRepository.countRentList());
        } catch (Exception e) {
            System.err.println("Exception : " + e.getMessage());
            throw e;
        }
        return map;
    }

    public Map<String, Object> chartGenreList() {
        Map<String, Object> map = new HashMap<>();
        String[] arr = {"인문", "에세이", "소설", "과학", "예술", "경제", "여행"};
        String[] engArr = {"humanities", "essay", "novel", "science", "art", "economy", "trip"};

        log.info(" =============================================== ");

        for (int i = 0; arr.length > i; i++) {
            String genre = arr[i];
            map.put(engArr[i], liBookInfoRepository.countBookGenre(genre));
            log.info(engArr[i] + " : " + map.get(arr[i]) + " 권");
        }

        log.info(" =============================================== ");

        return map;
    }

    public Map<String, Object> chartRentList() {
        Map<String, Object> map = new HashMap<>();

        int tmp = liBookInfoRepository.countBook();
        int rentCnt = liRentListRepository.countRentList();

        int bookCnt = tmp - rentCnt;

        map.put("bookCnt", bookCnt);
        map.put("rentCnt", rentCnt);

        return map;
    }

    public Result insertBook(Map<String, Object> map) {
        Result result = new Result();
        result.setResult(false);

        LiBookInfo bookInfo = new LiBookInfo();

        if (map.size() > 0) {
            bookInfo.setBookName((String) map.get("title"));
            bookInfo.setBookWriter((String) map.get("writer"));
            bookInfo.setBookGenre((String) map.get("genre"));
            bookInfo.setBookStatus(0);
            bookInfo.setDateReg(new Date());
            bookInfo.setIsDeleted(0);

            liBookInfoRepository.save(bookInfo);

            result.setResult(true);
            result.setResultMsg("Book registration success");

            log.info("-------도서 등록 성공-------");

            return result;
        }
        result.setResultMsg("Book registration failed");

        return result;
    }



    @Transactional(isolation = Isolation.SERIALIZABLE)
    public Result deleteBook(String param) {
        Result result = new Result();
        result.setResult(false);
        try {
            Long bookKey = Long.parseLong(param);
            LiBookInfo bookInfo = liBookInfoRepository.findByBookStatus(bookKey);
            if (bookInfo != null) {
                liBookInfoRepository.deleteById(bookKey);
                result.setResult(true);
                return result;
            }
            return result;
        } catch (Exception e) {
            result.setResultMsg("Unable to delete book");
            return result;
        }
    }
}

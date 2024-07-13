package com.project.library.Service;

import com.project.library.Repository.LiBookInfoRepository;
import com.project.library.Repository.LiRentListRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@Log4j2
public class BookService {
    @Autowired
    private LiBookInfoRepository liBookInfoRepository;

    @Autowired
    private LiRentListRepository liRentListRepository;

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
            map.put("rentCnt", liRentListRepository.countRentBook());
        } catch (Exception e) {
            System.err.println("Exception : " + e.getMessage());
            throw e;
        }
        return map;
    }

    public Map<String, Object> chartGenreList() {
        Map<String, Object> map = new HashMap<>();
        String[] arr = {"인문", "에세이", "소설", "과학", "예술", "경제", "여행"};

        log.info(" =============================================== ");

        for (int i = 0; arr.length > i; i++) {
            String genre = arr[i];
            map.put(arr[i], liBookInfoRepository.countBookGenre(genre));
            log.info(genre + " : " + map.get(arr[i]) + " 권");

        }

        log.info(" =============================================== ");
        
        return map;
    }

    public Map<String, Object> chartRentList() {
        Map<String, Object> map = new HashMap<>();

        int tmp = liBookInfoRepository.countBook();
        int rentCnt = liRentListRepository.countRentBook();

        int bookCnt = tmp - rentCnt;

        map.put("bookCnt", bookCnt);
        map.put("rentCnt", rentCnt);

        return map;
    }
}

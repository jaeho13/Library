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
            map.put("bookList", liBookInfoRepository.findBook());
            map.put("bookCnt", liBookInfoRepository.findBookCnt());
        } catch (Exception e) {
            System.err.println("Exception : " + e.getMessage());
            throw e;
        }
        return map;
    }

    public Map<String, Object> findRentList() {
        Map<String, Object> map = new HashMap<>();

        try {
            map.put("rentList", liRentListRepository.findRentList());
            map.put("rentCnt", liRentListRepository.findRentCnt());
        } catch (Exception e) {
            System.err.println("Exception : " + e.getMessage());
            throw e;
        }
        return map;
    }

    public Map<String, Object> findGenreList() {
        Map<String, Object> map = new HashMap<>();

        try {
            // 인문/에세이/소설/과학/예술/경제/여행
            map.put("humanities", liBookInfoRepository.findByHumanities());
            map.put("essay", liBookInfoRepository.findByEssay());
            map.put("novel", liBookInfoRepository.findByNovel());
            map.put("science", liBookInfoRepository.findByScience());
            map.put("art", liBookInfoRepository.findByArt());
            map.put("economy", liBookInfoRepository.findByEconomy());
            map.put("travel", liBookInfoRepository.findByTravel());

        } catch (Exception e) {
            System.err.println("Exception : " + e.getMessage());
            throw e;
        }
        return map;
    }
}

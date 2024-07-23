package com.project.library.Service;

import com.project.library.Entity.LiUserInfo;
import com.project.library.Repository.LiUserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserService {

    @Autowired
    private LiUserInfoRepository liUserInfoRepository;

    public Map<String, Object> findUserList() {
        Map<String, Object> map = new HashMap<>();
        List<LiUserInfo> userList = liUserInfoRepository.findUserList();
        map.put("userList", userList);
        map.put("userCnt", userList.size());

        return map;
    }

    public Map<String, Object> chartUserAge() {
        Map<String, Object> map = new HashMap<>();

        map.put("age", liUserInfoRepository.findUserAge());
        map.put("userCnt", liUserInfoRepository.countUserCnt());
        ;        return map;
    }
}

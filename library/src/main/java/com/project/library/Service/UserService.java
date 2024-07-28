package com.project.library.Service;

import com.project.library.Entity.LiUserInfo;
import com.project.library.Repository.LiUserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
        List<Object[]> age = liUserInfoRepository.findUserAge();
        List<Integer> ageGroups = new ArrayList<>();
        if (!age.isEmpty()) {
            Object[] row = age.get(0);
            for (Object obj : row) {
                ageGroups.add(((Number) obj).intValue());
            }
        }
        map.put("age", ageGroups);
        map.put("userCnt", liUserInfoRepository.countUserCnt());
        ;        return map;
    }
}

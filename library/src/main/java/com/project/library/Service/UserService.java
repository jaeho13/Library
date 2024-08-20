package com.project.library.Service;

import com.project.library.Entity.LiUserInfo;
import com.project.library.Entity.Result;
import com.project.library.Repository.LiUserInfoRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Log4j2
public class UserService {

    @Autowired
    private LiUserInfoRepository liUserInfoRepository;

    public Map<String, Object> findUserList(String name) {
        Map<String, Object> map = new HashMap<>();

        if (name != null && !name.trim().isEmpty()) {
            String searchParam = "%" + name + "%";  // 와일드카드 추가!!!!
            List<LiUserInfo> userList = liUserInfoRepository.searchUser(searchParam);
            map.put("userList", userList);
            map.put("userCnt", userList.size());
        } else {
            map.put("userList", liUserInfoRepository.findUserList());
            map.put("userCnt", liUserInfoRepository.countUserCnt());
        }

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
        return map;
    }

    public Result insertUser(Map<String, Object> map) {
        Result result = new Result();
        result.setResult(false);
        LiUserInfo userInfo = new LiUserInfo();

        try {
            //이름 아이디 생년월일 성별 비밀번호
            userInfo.setId((String) map.get("id"));
            userInfo.setName((String) map.get("name"));
            userInfo.setPwd((String) map.get("pwd"));
            userInfo.setSex((String) map.get("sex"));
            userInfo.setAge((String) map.get("age"));

            liUserInfoRepository.save(userInfo);

            result.setResult(true);
            result.setResultMsg("useer registration success");
            log.info("-------회원 등록 성공-------");

        } catch (Exception e) {
            result.setResultMsg("Unable to insert useer");
            return result;
        }
        return result;
    }

    public Result deleteUser(String param) {
        Result result = new Result();
        result.setResult(false);

        try {
            Long userKey = Long.parseLong(param);
            LiUserInfo userInfo = liUserInfoRepository.findUserInfo(userKey);
            if (userInfo != null) {
                liUserInfoRepository.deleteById(userKey);
                result.setResult(true);
                result.setResultMsg("success");

                return result;
            }
        }catch (Exception e ) {
        }
        return result;
    }
}

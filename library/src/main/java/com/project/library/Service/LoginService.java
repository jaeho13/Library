package com.project.library.Service;

import com.project.library.Entity.Result;
import com.project.library.Repository.LiUserInfoRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@Log4j2
public class LoginService {

    @Autowired
    LiUserInfoRepository liUserInfoRepository;

    public Result login(Map<String, Object> loginInfo) throws Exception {
        Result result = new Result();
        result.setResult(false);

        String id = (String) loginInfo.get("id");
        String pwd = (String) loginInfo.get("pwd");

        System.out.println("성공" + id + "@@@@@@@" + pwd);
        result.setResult(true);

        // try {
        // LiUserInfo userInfo = liUserInfoRepository.findUser(id, pw);
        // if(userInfo != null) {
        // result.setResult(true);
        // }
        // } catch (Exception e) {
        // throw new Exception("=========== login is failed ===========");
        // }

        return result;
    }
}

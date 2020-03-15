package com.parfait.study.vuestudy;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/")
@Controller
public class IndexController {
    @GetMapping(path = { "/", "/html/**" })
    public String route() {
        return "/index";
    }
}

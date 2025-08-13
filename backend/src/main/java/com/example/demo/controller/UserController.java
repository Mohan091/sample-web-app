package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private List<String> users = new ArrayList<>(Arrays.asList("Alice", "Bob"));

    @GetMapping
    public List<String> getUsers() {
        return users;
    }

    @PostMapping
    public List<String> addUser(@RequestParam String name) {
        users.add(name);
        return users;
    }
}
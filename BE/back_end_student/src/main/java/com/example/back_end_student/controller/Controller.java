package com.example.back_end_student.controller;

import com.example.back_end_student.model.Student;
import com.example.back_end_student.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class Controller {
    @Autowired
    IStudentService iStudentService;

    @GetMapping("/student")
    public List<Student> findAll(){
        return iStudentService.findAll();
    }

    @PostMapping("/student/create")
    public ResponseEntity<?> createStudent(@RequestBody Student student){
        iStudentService.create(student);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

//    @GetMapping("/student/findById/{id}")
//    public Student findById(@PathVariable("id") Integer id){
//        return iStudentService.findById(id);
//    }
//
//    @DeleteMapping("/student/delete/{id}")
//    public ResponseEntity<?> deleteStudent(@PathVariable("id") Integer id){
//        iStudentService.delete(id);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
}

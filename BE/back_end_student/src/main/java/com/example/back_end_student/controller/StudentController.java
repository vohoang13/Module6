package com.example.back_end_student.controller;

import com.example.back_end_student.model.Student;
import com.example.back_end_student.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class StudentController {
    @Autowired
    IStudentService iStudentService;

//    @GetMapping("/student")
//    public List<Student> findAll(){
//        return iStudentService.findAll();
//    }

    @GetMapping("/student")
    public ResponseEntity<Page<Student>> findWithPage(@RequestParam(value = "page",defaultValue = "0")int page){
        Page<Student> studentList = iStudentService.findWithPage(PageRequest.of(page,2));
        return ResponseEntity.of(java.util.Optional.ofNullable(studentList));
    }

    @PostMapping("/student/create")
    public ResponseEntity<?> createStudent(@RequestBody Student student){
        iStudentService.create(student);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/student/findById/{id}")
    public Student findById(@PathVariable("id") Integer id){
        return iStudentService.findById(id);
    }

    @DeleteMapping("/student/delete/{id}")
    public ResponseEntity<?> deleteStudent(@PathVariable("id") Integer id){
        iStudentService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/student/update")
    public ResponseEntity<?> updateStudent(@RequestBody Student student){
        iStudentService.update(student);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

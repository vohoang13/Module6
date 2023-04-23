package com.example.back_end_student.service;

import com.example.back_end_student.model.Student;

import java.util.List;

public interface IStudentService {
    List<Student> findAll();

    void create(Student student);

//    Student findById(Integer id);

//    void delete(Integer id);
}

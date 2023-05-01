package com.example.back_end_student.service;

import com.example.back_end_student.model.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.List;

public interface IStudentService {
    List<Student> findAll();

    void create(Student student);

    Student findById(Integer id);

    void delete(Integer id);

    void update(Student student);

    Page<Student> findWithPage(PageRequest pageRequest);
}

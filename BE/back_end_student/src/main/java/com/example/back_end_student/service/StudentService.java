package com.example.back_end_student.service;

import com.example.back_end_student.model.Student;
import com.example.back_end_student.repository.IStudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class StudentService implements IStudentService{
    @Autowired
    IStudentRepository iStudentRepository;
    @Override
    public List<Student> findAll() {
        return iStudentRepository.findAll();
    }

    public void create(Student student){
        iStudentRepository.save(student);
    }

    public Student findById(Integer id){
        return iStudentRepository.findById(id).get();
    }

//    @Override
//    public void delete(Integer id) {
//        iStudentRepository.deleteById(id);
//    }
}

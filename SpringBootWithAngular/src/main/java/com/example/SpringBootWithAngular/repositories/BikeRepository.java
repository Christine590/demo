package com.example.SpringBootWithAngular.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SpringBootWithAngular.models.Bike;

//<bike entity, type of primary key>
public interface BikeRepository extends JpaRepository<Bike, Long> {

}

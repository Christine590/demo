package com.example.SpringBootWithAngular.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.SpringBootWithAngular.models.Bike;
import com.example.SpringBootWithAngular.repositories.BikeRepository;

@RestController
@RequestMapping("/api/v1/bikes") //use JSON as default format
public class BikesController {
	// inject BikeRepository into controller
	@Autowired
	private BikeRepository bikeRepository;
	
	@GetMapping //For Get Method
	public List<Bike> list(){
		//For initial test
		//List<Bike> bikes = new ArrayList<>();
		//return bikes;
		
		return bikeRepository.findAll();
	}
	
	@PostMapping //For Post Method
	@ResponseStatus(HttpStatus.OK) //200
	public void create(@RequestBody Bike bike) {
		bikeRepository.save(bike);
	}
	
	@GetMapping("/{id}")
	public Bike get(@PathVariable("id") long id) {
		//For initial test
		//return new Bike();
		
		return bikeRepository.getOne(id);
	}
}






















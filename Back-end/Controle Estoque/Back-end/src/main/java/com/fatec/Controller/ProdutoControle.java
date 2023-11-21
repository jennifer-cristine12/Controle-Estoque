package com.fatec.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/teste")
public class ProdutoControle {

	@GetMapping
	public String teste() {
		return("Funciona");
	}
}

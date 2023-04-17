package com.example.empleado.excepciones;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{
	
	//esto se lo define como excepciones personalizadas
	
	private static final long serialVersionID = 1L;
	
	public ResourceNotFoundException(String mensaje) {
		super(mensaje);
	}
}

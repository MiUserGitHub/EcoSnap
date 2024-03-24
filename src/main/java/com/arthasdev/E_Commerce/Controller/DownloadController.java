package com.arthasdev.E_Commerce.Controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DownloadController {

    @GetMapping("/downloadDocum")
    public ResponseEntity<Resource> downloadDocumentacion() throws Exception {
    	
        // Ruta del archivo Word dentro de la carpeta static
        Resource resource = new ClassPathResource("static/files/Documentacion EcoSnap.docx");
        
        // Configurar los encabezados de la respuesta
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM); // Para archivos binarios como Word
        headers.setContentDispositionFormData("attachment", resource.getFilename());
        
        // Devolver el recurso como parte de la respuesta
        return ResponseEntity.ok()
                .headers(headers)
                .body(resource);
    }
    
    @GetMapping("/downloadHoja")
    public ResponseEntity<Resource> downloadHojaRuta() throws Exception {
    	
        // Ruta del archivo Word dentro de la carpeta static
        Resource resource = new ClassPathResource("static/files/Hoja de Ruta EcoSnap.docx");
        
        // Configurar los encabezados de la respuesta
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM); // Para archivos binarios como Word
        headers.setContentDispositionFormData("attachment", resource.getFilename());
        
        // Devolver el recurso como parte de la respuesta
        return ResponseEntity.ok()
                .headers(headers)
                .body(resource);
    }
}

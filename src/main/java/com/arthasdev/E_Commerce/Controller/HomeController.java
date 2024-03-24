package com.arthasdev.E_Commerce.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
	
	@GetMapping("EcoSnap")
	public String Home() {
		
		return "homePage";
	}

}

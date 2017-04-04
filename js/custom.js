$(document).ready(function(){

var text ='test';

var select_wrap = document.getElementById('city-type');

var opt = document.createElement('option');
    opt.innerHTML = "Select a City";
    opt.value = "";
    select_wrap.appendChild(opt);

var cities= ["NYC", "SF", "LA","ATX", "SYD"];
 
for (i = 0; i < cities.length; i++) {
var opt = document.createElement('option');
    opt.innerHTML = cities[i];
    opt.value = cities[i];
    select_wrap.appendChild(opt);
}


 $("body").css("background-image", "url(images/citipix_skyline.jpg)");
 
 	 $("#submit-btn").click(function(event){
	  event.preventDefault();
	  var city_type = $('.city-type').val().toLowerCase();
	
      if(city_type=="new york" || city_type=="new york city" || city_type=="nyc"){
       $("body").css("background", "url(images/nyc.jpg)");
	  }
	 
	 else if(city_type=="san francisco" || city_type=="sf" || city_type=="bay area"){
       $("body").css("background", "url(images/sf.jpg)");
	  }
	 else if(city_type=="los angeles" || city_type=="la" || city_type=="lax"){
       $("body").css("background", "url(images/la.jpg)");
	  }

	 else if(city_type=="austin" || city_type=="atx"){
       $("body").css("background", "url(images/austin.jpg)");
	  }

	 else if(city_type=="syndey" || city_type=="syd"){
       $("body").css("background", "url(images/sydney.jpg)");
	  }
	  
	 else{
       $("body").css("background", "url(images/citipix_skyline.jpg)");
	  }

    });
	
  
});
//HTML Control Variables
var header =$("#header");
var sideNav = document.getElementById("sideNav");
var mainContent = document.getElementsByClassName("mainContent");

// shrink HomePage header and reveal footer onscroll
$(".HomePage").scroll(function() {
	if ($(this).scrollTop() > 10) {
		setHeight("Home", 40);
		$(".topNav").addClass(" topNavShrink");
								$(".HomePage").addClass(" HomePageShrink");
	} else {
				$(".topNav").removeClass(" topNavShrink");
						$(".HomePage").removeClass(" HomePageShrink");
				setHeight("Home", 80);
	}
		if ($(this).scrollTop() > 1000) {
		$(".footer").addClass(" footerOpen");
	} else {
				$(".footer").removeClass(" footerOpen");
	}
});

//sideNav open+close 
var sideClicks = 0;
function openNav() {
	sideNav.style.width = "100vw";
			  $(".x").addClass("open");
}
function closeNav() {
	sideNav.style.width = "0";
		  $(".x").removeClass("open");
			sideClicks = 0;
}
$(".hamBurg").click(function(){
	sideClicks++;
	if(sideClicks<=1) {
		openNav();
	} else {
		closeNav();
	}
});
//Tab controls
function openTab(evt, tabName) {
	window.scrollTo(0, 0); /* BUG: Needs to reset ALL scrolls +++++++++++++++++++++++++++++ */
	var i; 
	var tablinks;
	for (i = 0; i < mainContent.length; i++) {
		mainContent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	if(tabName == "About" || tabName == "Contact"||tabName == "Services"){ 
				$(".footer").addClass(" footerOpen");
	} else { 
					$(".footer").removeClass(" footerOpen");
	}
	evt.currentTarget.className += " active";
		$(".btn"+tabName).addClass(" active");
	closeNav();
}
$(document).ready(function(){
	setHeight("Home", 80);
	$(".btnHome").addClass(" active");
});
	//set height of page displays 
/* BUG: needs to update values when screen is minimized +++++++++++++++++++++++++ */
function setHeight(page, value){
		var height = window.innerHeight - value;
	if(window.innerWidth > 1000) {
		height = height-40;
			$("."+page+"Page").css("height", height+"px");
	} else {
			$("."+page+"Page").css("height", height+"px");
	}
}

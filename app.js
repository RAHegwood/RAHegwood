const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    // Set nav active status with boolean
    let isActive = false;
    console.log("nav-active : " + isActive)
    

    burger.addEventListener("click", ()=>{

        //Toggle nav
        nav.classList.toggle("nav-active");

        // Toggle nav active status to true/false
        isActive = !isActive;
        console.log("nav-active : " + isActive)
        
        //Animate link
        navLinks.forEach((link, index)=>{
            if(isActive) {
                link.style.animation = `navLinkFadeIn 0.4s ease forwards ${index / 7 + 0.2}s`;
                console.log("nav li: "+ index + " in");
            } else {
                // link.style.animation = "";
                link.style.animation = `navLinkFadeOut 0.2s ease forwards 0s`;
                // link.style.animation = "";
                console.log("nav li: "+ index + " out");
            }
            console.log(link.style.animation);
        });
        
        //Burger animation
        burger.classList.toggle('toggle');
    });

}
navSlide();
/* Footer testing*/

$(document).ready(function() {
	
	// INITIATE THE FOOTER
  siteFooter();
	// COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
	$(window).resize(function() {
		siteFooter();
	});
	
	function siteFooter() {
		var siteContent = $('#site-content');
		var siteContentHeight = siteContent.height();
		var siteContentWidth = siteContent.width();

		var siteFooter = $('#site-footer');
		var siteFooterHeight = siteFooter.height();
		var siteFooterWidth = siteFooter.width();

		console.log('Content Height = ' + siteContentHeight + 'px');
		console.log('Content Width = ' + siteContentWidth + 'px');
		console.log('Footer Height = ' + siteFooterHeight + 'px');
		console.log('Footer Width = ' + siteFooterWidth + 'px');

		siteContent.css({
			"margin-bottom" : siteFooterHeight + 50
		});
	};
});

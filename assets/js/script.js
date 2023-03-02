$(function() {
    $(".en").click(function() {
        //header
        $(".nav-menu").children().eq(0).text("Home");
        $(".nav-menu").children().eq(1).text("About us");
        $(".nav-menu").children().eq(2).text("portfolio");
        $(".nav-menu").children().eq(3).text("contact");
        $(".language-selected").text("en");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").removeClass("change-pg");
        $(".language-selected").addClass("change-en");
        //section
        $("#about").head("A simple webpage with Milti-language option");
        //About
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Help Center");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Ethics Line");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Payments");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Support");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Help Center");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Terms and Policies");
    });
});
(function() {
    $(".es").click(function() {
        //header
        $(".nav-menu").children().eq(0).text("Casa");
        $(".nav-menu").children().eq(1).text("Sobre Nosotros");
        $(".nav-menu").children().eq(2).text("Portfolio");
        $(".nav-menu").children().eq(3).text("Contacto");
        $(".language-selected").text("es");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-pr");
        $(".language-selected").addClass("change-es");
        //section
        $("#about").text("A simple webpage with Milti-language option");
        //About
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Help Center");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Ethics Line");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Payments");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Support");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Help Center");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Terms and Policies");
    });
});
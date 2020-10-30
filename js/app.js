$(function() {
    
    var header = $("header");
    var introH = $("#intro").innerHeight();
    var scrollOfset = $(window).scrollTop();


    /* Fixed header */
    checkScroll(scrollOfset);

    $(window).on("scroll", function() {
        scrollOfset = $(this).scrollTop();
        
        checkScroll(scrollOfset);
    });

    function checkScroll(scrollOfset) {
        

        if (scrollOfset >= introH) {
            header.addClass("fixed");
        } 
        else {
            header.removeClass("fixed");
        }
    }

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data("scroll"),
            blockOffset = $(blockId).offset().top;

        
        $("nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 600);
    });



    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $("nav").toggleClass("active");
    });


    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');
        
        $this.toggleClass("active");
        
    

    
    });
});
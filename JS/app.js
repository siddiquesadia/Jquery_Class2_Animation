$(function(){
    // JQuery 

    $(window).on(`load`,function(){
      $(`#preloader`).fadeOut();  
    })

    // scroll

    $(window).scroll(function(){
        let scrlTop = $(window).scrollTop()
        if(scrlTop>900){
            $(`nav`).addClass(`menuActive`);
            $(`.backToTop`).slideDown();
        }

        else{
            $(`nav`).removeClass(`menuActive`);  
            $(`.backToTop`).slideUp();
        }
    })

    // Back to Top

    $(`.backToTop`).click(function(){
        $(`html,body`).animate({
            scrollTop : 0
        }, 500)
    })

})
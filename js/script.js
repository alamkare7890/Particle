
$(function () {

scrollBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    
    })
}   
    

    $("#naviBar").click(function () {
        $("#navOpen").slideToggle(1500);
    })
    $("#navClose").click(function () {
        $("#navOpen").fadeOut(300);
    })

    /*skill metter
    
    $(window).scroll(function () {
        $('.skill').each(function () {
            $(this).find('.progrss').animate({
                width: $(this).attr('data-percent'),
            }, 6000);
        });
    })*/
    
    
    /*========animation=======*/
    AOS.init();

    /*========progress-ba=======*/
   
    
    $(window).scroll(function () {

    
        if ($(this).scrollTop() > 50) {
            $('#adobePro').addClass('adobescroll');
        } else {
            $('#adobePro').removeClass('adobescroll');
        }
        
        if ($(this).scrollTop() > 50) {
            $('#wordPro').addClass('wordscroll');
        } else {
            $('#wordPro').removeClass('wordscroll');
        }

        if ($(this).scrollTop() > 50) {
            $('#drupalPro').addClass('drupalscroll');
        } else {
            $('#drupalPro').removeClass('drupalscroll');
        }
        
        if ($(this).scrollTop() > 50) {
            $('#designPro').addClass('designscroll');
        } else {
            $('#designPro').removeClass('designscroll');
        }
        
        if ($(this).scrollTop() > 50) {
            $('#stylePro').addClass('stylescroll');
        } else {
            $('#stylePro').removeClass('stylescroll');
        }
    
        
    })
    
 });
    

    
    
$(document).ready(function() {
    var item = $('.itemslide');
    $(document).on('click','.itemslide',function() {
        var data = $(this).attr("data");

        $('.islide').each(function() {
            $(this).css("transition","all 0.4s");
            setTimeout(() => {
                
            $(this).css("opacity","0");
            $(this).css("visibility","hidden");
            setTimeout(() => {
                $(this).css("display","none");
            }, 50);
            }, 100);
        })
        
        setTimeout(() => {
            $(`#${data}`).css("display","block");
            setTimeout(() => {
                
            $(`#${data}`).css("opacity","1");
            $(`#${data}`).css("visibility","visible");
            }, 50);
        }, 152);
    })
    $('.islide').each(function() {
        
        $(this).css("marginTop","30px");
        if ($(this).attr("id") != "item1") {
            $(this).css("transition","all 0.4s");
            setTimeout(() => {
                
            $(this).css("opacity","0");
            $(this).css("visibility","hidden");
            setTimeout(() => {  
                $(this).css("display","none");
            }, 50);
            }, 152);
        }
    })
})
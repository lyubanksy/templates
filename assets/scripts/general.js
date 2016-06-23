$(document).ready(function () {

    $(".schedule-delete").click(function(){
       $(this).parent('.schedule-item').slideUp(); 
       var RestoreTitle = $(this).prev('.schedule-text').text();
        console.log(RestoreTitle);
        $(".restore-block i").html(RestoreTitle);
       $(".restore-block").fadeIn();
    });
    $(".restore-block").click(function(){
        $('.schedule-item').slideDown();
    })
});




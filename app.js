$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    /* Fixed Header */    

    checkScroll(scrollOffset);    

    $(window).on("scroll", function(){

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
});

    function checkScroll(scrollOffset) {
    if ( scrollOffset >= introH ) {
        header.addClass("fixed");
    } else {
        header.removeClass("fixed");
    }
}
     /* Smooth scroll */ 

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

/* Menu nav toggle */
$("#nav-toggle").on("click", function(event){
    event.preventDefault();
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
});

$("#sendMail").on("click", function() {

    var name = $("#name").val().trim();
    var subject = $("#subject").val().trim();
    var email = $("#email").val().trim();
    var message = $("#message").val().trim();

    if(name == "") {
        $("#errorMess").text("Введите имя");
        return false;
    } else if(subject == "") {
        $("#errorMess").text("Введите тему");
        return false;
    } else if(email == "") {
        $("#errorMess").text("Введите email");
        return false;
    } else if(message == "") {
        $("#errorMess").text("Введите сообщение");
        return false;
    } 
    $("#errorMess").text("");

    //var th = $(this);
    $.ajax({
        url: 'mail.php',
        type: 'POST',
        cache: false,
        data: {'name': name, 'subject': subject, 'email': email, 'message': message },
        dataType: 'html',
        beforeSend: function() {
            $("#sendMail").prop("disabled", true);    
        },
        success: function(data) {
            if (!data) {
                alert("Форма не отправлена!");
        } else {
                $("#errorMess").text("Форма отправлена!");
                $("#mailForm").trigger("reset");
                $("#sendMail").prop("disabled", false);
            }
        }
    });
});
    
});
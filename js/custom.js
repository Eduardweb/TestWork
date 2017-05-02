$(document).ready(function(){


// ============ PreventDefault for a href ============
    $(".btn").on("click","a", function (event) {
        event.preventDefault();
    });
    	
// ============== //delete placeholder================
    $('input').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'))
        $(this).attr('placeholder','');
    });
        $('input').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
    });

// ============== //Form validate (https://jqueryvalidation.org/documentation/)================
    $("#js-register-form").validate({
        rules:{
            name:{
                required: true,
                minlength: 2
            },
             email:{
                required: true,
                email: true
            },
             address:{
                required: true
            },
             zipcode:{
                required: true,
                number: true,
                minlength: 5
            },
             country:{
                required: true
            }
        },
        focusCleanup: true,
    });

});




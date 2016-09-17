

function ValidationForm(validUser, validPass){
	
    validateUsername();
    validatePassword();
    validateRePassword();
    validateEmail();

    function validateUsername(){
        $('.error-user').hide();
        $('.error-pass').hide();
        $(validUser).on('blur',function (){

            var name = $(validUser).val();
            var nameRegex = /[^A-Z][a-z]{3,20}/;

            if(!nameRegex.test(name)){
                $('.error-user').html('The username must begin with a capital letter and have at least 5 letters!');
                $('.error-user').show();
            } else {
                $('.error-user').hide();
            }

        })
    }

    function validatePassword(){
    	   $('.error-pass').hide();
        $(validPass).on('blur',function (){

            var pwd = $(validPass).val();
            var pwdRegex = /[0-z]{7,}/;

            if(!pwdRegex.test(pwd)){
                $('.error-pass').html('Invalid re-password!');
                $('.error-pass').show();
            } else {
                $('.error-pass').hide();
            }

        })
    }

    function validateRePassword(){
        $('#r-password').on('blur',function (){
            var pwd = $("#s-password").val();
            var rePwd = $('#r-password').val();
            var rePwdRegex = /[0-z]{7,}/;
        if (rePwd == pwd) {
            if (!rePwdRegex.test(rePwd)) {
                $('.error-r-pass').html('Invalid re-password!');
                $('.error-r-pass').show();
            } else {
                $('.error-r-pass').hide();
            }
        } else if (rePwd != pwd){
                $('.error-r-pass').html("Passwords didn't match!");
                $('.error-r-pass').show();
        } else {
        	 $('.error-r-pass').hide();
        }
        });
    }

    function validateEmail(){
        $('#s-email').on('blur',function (){

            var name = $('#s-email').val();
            var email = $('#s-email').val();
            var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if(!emailRegex.test(email)){
                $('.error-email').html('Invalid email!');
                $('.error-email').show();
            } else {
                $('.error-email').hide();
            }

        })
    }
}

/*$(function(){
    $('#form').on('click', function (e) {
        e.preventDefault();
    });
    $("#submit").on("click", function(){

        var login = $('#s-username').val();
        var pass = $('#s-password').val();
        var email = $('#s-email').val();

        $.ajax({
            url: 'assets/db/insert.php',
            method: 'POST',
            dataType: 'json',
            data: {login: login, pass: pass, email: email},
            success: function (response) {

                alert('Redirecting');

                if (response == 'OK') {
                    top.location.href = 'index.html';
                }
            }
        });
    })
});*/


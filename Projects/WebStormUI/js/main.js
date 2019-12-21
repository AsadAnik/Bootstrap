$('document').ready(function(){

    // alert('JS is connected!');

 ///Form Validation of the pop up menu list for create account!...
    //The Form validate of Create Account form...
        var username = $('.user');
        var password = $('.pass');
        var repass = $('.repass');
        
    //alkjfasjkdfl Default Error Values...
        errorUserName = false;
        errorPassword = false;
        errorRePass = false;    

    //The OBJ's... 
        let errorCSS = {
            'border': '2px solid rgb(255, 0, 0)',
            'color': 'rgb(255, 0, 0)'
        };   

        let nonError = {
            'border': '',
            'color': ''
        };

        var passErrorText = $('.passError');
        var repassErrorText = $('.repassError');

    //UserName..    
        username.focusout(function(){

            var userVal = username.val();
            if(userVal.length < 4){
                username.css(errorCSS);
                username.val('Username Should be 4digit over!');
                errorUserName = true;
            }else{
                errorUserName = false;
            }
        });

        username.focusin(function(){
            username.css(nonError);
            username.val('');
        });

    //Password..
        password.focusout(function(){

            var passVal = password.val();
            if(passVal.length < 8){
                password.css(errorCSS);
                passErrorText.text('Password Should Be 8 Digit!');
                errorPassword = true;
            }else{
                errorPassword = false;
            }
        });  
        
        password.focusin(function(){
            password.css(nonError);
            passErrorText.text('');
        });

    //Re-Password...
        repass.focusout(function(){

            var passVal = password.val();
            var repassVal = repass.val();
            if(passVal != repassVal){
                repass.css(errorCSS);
                repassErrorText.text('Password Not Matched!!!');
                errorRePass = true;
            }else{
                errorRePass = false;
            }
        });    

        repass.focusin(function(){
            repass.css(nonError);
            repassErrorText.text('');
        });

    //Submit Button for form Validate..    
        $('.submitBtn').click(function(){

            if(errorUserName == true || errorPassword == true || errorRePass == true){
                alert('Somethings Error On Your Fill Try Again!');
              
            }else if(username.val() == '' || password.val() == '' || repass.val() == ''){
                alert('SomeOne Empty!');
            
            }else{
               alert('Account Created Successfully!');
            }
        });
        
});
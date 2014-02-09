
$(document).ready(function(){
    $('#signup_button').on("click",function(){
    var user_name = $('#userName').val();
    var phoneNumber = $('#phoneNumber').val();
    var password = $('#passWord').val();
    var email =$('#emailAddress').val();
        var confirm_password = $('#confirmPassword').val();
      /* $.ajax({
url:'/check',
type:'post',
data:{email:email}
})*/
        var regrex_of_phoneNo = /^[0-9]{1,12}$/;
        var regrex_of_name = /^[A-Za-z]{1,15}$/;
        var regrex_of_password = /^([a-z0-9]){4,15}/;
        var regrex_of_email = /^[A-Za-z0-9\.\^\-\_]{1,}[@]{1}((yahoo.com)||(gmail.com)||(hotmail.com))$/;
      if((user_name.match(regrex_of_name)) && (phoneNumber.match(regrex_of_phoneNo)) && (password.match(regrex_of_password)) && (confirm_password==password) && (email.match(regrex_of_email)))
     {
         alert("Proper name");
     }
        else
        {
          alert("Wrng");
        }

    });
});

var dataBase = [{
    name: "name",
    email: "email",
    pass: "pass",
}];
var emailInTrue;
var passInTrue;
var jqxhr = $.getJSON("database.json", function (data) {
    
})

console.log(jqxhr)
$(document).ready(function () {

    $("#signIn").click(function () {
        var input_EmailIn = $("#inputEmailIn").val();
        var input_PasswordIn = $("#inputPasswordIn").val();
      
        var signUpEmail = dataBase[0].email;
        var signUpPass = dataBase[0].pass;


        if (input_EmailIn === signUpEmail) {
            emailInTrue = 1

        } else {

            alert("Email ไม่ถูกต้อง")
        }

        if (input_PasswordIn === signUpPass) {

            passInTrue = 1
        } else { alert("Password ไม่ถูกต้อง"); }

        if (emailInTrue = passInTrue) {
            alert('Ok')
        } else { alert("กรุณากรอกข้อมูล"); }



    }),
        $("#signUp").click(function () {

            var input_NameUp = $("#inputName").val();
            var input_EmailUp = $("#inputEmailUp").val();
            var input_PasswordUp = $("#inputPasswordUp").val();
            var input_Re_PasswordUp = $("#inputRe-PasswordUp").val();
            // var checkTrueUp = $("#checkTrueUp").val();

            // if (checkTrueUp !== true) {
            //     alert("ควย")
            // }
            if (input_PasswordUp !== input_Re_PasswordUp) {
                alert("Password ไม่ตรงกัน")
                // if (checkTrueUp !== true) {
                //     alert("a")
                // } 


            } else {
                var addData = {
                    name: input_NameUp,
                    email: input_EmailUp,
                    pass: input_PasswordUp,
                    rePass: input_Re_PasswordUp,
                };

                dataBase.push(addData);
                console.log(dataBase[0].name);

            }


        }
        )
}
)





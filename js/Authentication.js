var dataBase = [{
    "ID": "ID",
    "pass": "pass"
}];
var IDInTrue;
var passInTrue;
var checkTName = false;
var checkTID = false;
var checkTPass = false;
var checkTRePass = false;
var signUpID = "ID";
var signUpPass = "pass";

$(document).ready(function () {

    $("#signIn").click(function () {
        var input_IDIn = $("#inputIDIn").val();
        var input_PasswordIn = $("#inputPasswordIn").val();



        if (input_IDIn === signUpID) {
            $("#err-ID").hide(1000);
            IDInTrue = 1

        } else {

            $("#err-ID").show(1000);
        }
        if (input_PasswordIn === signUpPass) {
            $("#err-Pass").hide(1000);
            passInTrue = 1
        } else {
            $("#err-Pass").show(1000);
        }



        if (IDInTrue = passInTrue) {
            window.location.href = "/profile.html";
        } else { }



    }
    );
    $("#signUp").click(function () {

        var input_NameUp = $("#inputName").val();
        var input_IDUp = $("#inputIDUp").val();
        var input_PasswordUp = $("#inputPasswordUp").val();
        var input_Re_PasswordUp = $("#inputRe-PasswordUp").val();
        // var checkTrueUp = $("#checkTrueUp").val();



        if (input_PasswordUp === input_Re_PasswordUp) {
            $("#err-RePass-R").hide(1000);

            var addData = {
                "name": input_NameUp,
                "ID": input_IDUp,
                "pass": input_PasswordUp,
                "rePass": input_Re_PasswordUp,
            };

            dataBase.push(addData);
            console.log(dataBase);
            $("#pageSignIn").show(1000);
            $("#pageSignUp").hide(1000);
            signUpID = dataBase[1].ID;
            signUpPass = dataBase[1].pass;

        } else {
            $("#err-RePass-R").show(1000);

        }


    }
    );
    $(" #goSignUp").click(function () {
        $("#pageSignUp").show(1000);
        $("#pageSignIn").hide(1000);
    })
}
)





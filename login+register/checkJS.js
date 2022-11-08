function check_email(){
    var email = document.getElementById("email").value;
    var checkRes = document.getElementById("checkRes1");
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (email.match(reg)) {
        checkRes.innerHTML = "";
    }else{
        checkRes.innerHTML = "邮箱格式错误";
    }
}

function check_pass_strength(){
    var pass = document.getElementById("pass1").value;
    var checkRes = document.getElementById("checkRes2");
    var reg1=/^[0-9]{6,16}$|^[a-zA-Z]{6,16}$/; //全是数字或全是字母 6-16个字符
    var reg2=/^[A-Za-z0-9]{6,16}$/; //数字、26个英文字母 6-16个字符
    var reg3=/^\w{6,16}$/;  // 由数字、26个英文字母或者下划线
    if(pass.length<6) checkRes.innerHTML = "密码少于6位";
    else{
        if(pass.match(reg1)) {
            checkRes.innerHTML = "密码强度：弱";
        }
        else if(pass.match(reg2)) {
            checkRes.innerHTML = "密码强度：中";
        }
        else if(pass.match(reg3)) {
            checkRes.innerHTML = "密码强度：强";
        }
    }
}

function check_pass_consistency(){
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var checkRes = document.getElementById("checkRes3");
    if(pass1 === pass2){
        checkRes.innerHTML = "";
    }else{
        checkRes.innerHTML = "确认密码与密码输入不一致";
    }
}
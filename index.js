const LOGIN_ID = "cat";
const LOGIN_PW = "1234";

var i;
var p;
var loginBox;

var id;
var pw;

function login(){
    id=i.value;
    pw=p.value;
    if(id == LOGIN_ID && pw == LOGIN_PW){
        // alert("로그인 성공");
        procLogin();
    } else {
        alert("로그인 실패")
    }
}

function procLogin(){
    loginBox.innerHTML = "<p>" + id + "회원님 반갑습니다.</p>";
}

window.onload = function(){
    i=document.getElementById("i");
    p=document.getElementById("p");
    loginBox=document.getElementById("login_box");
}
window.onload = function() {
    var dateTimeElement = document.getElementById("date-time");
    var currentDate = new Date();
  
    var year = currentDate.getFullYear();
    var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    var day = ('0' + currentDate.getDate()).slice(-2);
    var hours = ('0' + currentDate.getHours()).slice(-2);
    var minutes = ('0' + currentDate.getMinutes()).slice(-2);
    var seconds = ('0' + currentDate.getSeconds()).slice(-2);
    var milliseconds = ('00' + currentDate.getMilliseconds()).slice(-3);
  
    var dateTimeString = year + '년 ' + month + '월 ' + day + '일 ' + hours + '시 ' + minutes + '분 ' + seconds + '초 ' + milliseconds + '밀리초';
  
    dateTimeElement.innerHTML = dateTimeString;
  };
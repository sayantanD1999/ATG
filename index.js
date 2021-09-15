var c = 0;
function signup() {
  document.getElementsByClassName("get-in")[0].style.display = "flex";
  document.getElementById("sign-in").style.display = "none";
  document.getElementById("sign-up").style.display = "block";
}

function signin() {
  document.getElementsByClassName("get-in")[0].style.display = "flex";
  document.getElementById("sign-in").style.display = "block";
  document.getElementById("sign-up").style.display = "none";
}

function enter() {
  document.getElementsByClassName("get-in")[0].style.display = "none";
  document.getElementsByClassName("box")[0].style.display = "none";
  document.getElementById("sign-in").style.display = "none";
  document.getElementById("sign-up").style.display = "none";
  document.getElementById("crt_acc").style.display = "none";
  document.getElementById("user_info").style.display = "block";
  document.getElementById("grp_btn").innerHTML = "Leave Group";
  document.getElementById("groups").style.display = "block";
  document.getElementsByClassName("loc")[0].style.display = "none";
  document.getElementById("loggedin_nav").style.display = "block";
  document.getElementById("loggedout_nav").style.display = "none";
}

function close_all() {
  document.getElementsByClassName("get-in")[0].style.display = "none";
  document.getElementsByClassName("box")[0].style.display = "none";
  document.getElementById("sign-in").style.display = "none";
  document.getElementById("sign-up").style.display = "none";
  document.getElementById("crt_acc").style.display = "block";
}

function toggle_pswd() {
  console.log(1);
  var p = document.getElementById("pswd_ip").type;
  if (p === "password") {
    document.getElementById("pswd_ip").type = "text";
    document.getElementById("pswd_ip").type = "text";
    document.getElementById("pswd").classList.replace("fa-eye", "fa-eye-slash");
    document
      .getElementById("pswd2")
      .classList.replace("fa-eye", "fa-eye-slash");
  } else {
    document.getElementById("pswd_ip2").type = "password";
    document.getElementById("pswd_ip2").type = "password";
    document.getElementById("pswd").classList.replace("fa-eye-slash", "fa-eye");
    document
      .getElementById("pswd2")
      .classList.replace("fa-eye-slash", "fa-eye");
  }
}

window.onscroll = function () {
  scrollFunction();
};

console.log(window.innerWidth);

function scrollFunction() {
  var add_post = document.getElementsByClassName("add_post")[0];
  if (document.body.scrollTop > 126 || document.documentElement.scrollTop > 126 ) {
    add_post.style.display = "none";
    console.log(document.documentElement.scrollTop);
  } else {
    add_post.style.display = "flex";
  }
}

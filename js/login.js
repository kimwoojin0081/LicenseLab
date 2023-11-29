document.addEventListener("DOMContentLoaded", function () {
  
  //원본//let loginForm = document.getElementById("login-form-submit");
  let loginForm = document.querySelector("login-form-submit");//임시 수정
  let loginErrorMsg = document.getElementById("login-error-msg");
  let lg = document.querySelector("#lgin");

  loginForm.addEventListener("click", (e) =>  {
    e.preventDefault();

    let username = document.getElementById("username-field").value;
    let password = document.getElementById("password-field").value;

    if (username === "admin" && password === "admin") {
      alert("로그인 성공!");
      //--------------------------------------------------------------------
      //임시 수정
      window.location.href = "/LicenseLab/index.html";
      lg.innerHTML = "sign out"
      //----------------------------------------------------------------------
      // window.location.href = "/LicenseLab/mainsub.html";
      updateMenu();
    } else {
      alert("아이디 혹은 비밀번호를 잘못 입력하였습니다.");
      loginErrorMsg.style.opacity = 1;
    }
  })
});

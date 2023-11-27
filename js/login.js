document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const loginErrorMsg = document.getElementById("login-error-msg");
  const signInLink = document.getElementById("signInLink");
  let lg = document.getElementById("#lgin");
  let isLoggedIn = false;

  function updateMenu() {
    if (isLoggedIn) {
      signInLink.innerText = 'Logout';
      // 로그인 상태에 따른 추가 로직 또는 메뉴 항목을 여기에 추가할 수 있습니다.
      isLoggedIn = false;
    } else {
      signInLink.innerText = 'Sign In';
      // 로그아웃 상태에 따른 추가 로직 또는 메뉴 항목을 여기에 추가할 수 있습니다.
      isLoggedIn = true;
    }
  }

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username-field").value;
    const password = document.getElementById("password-field").value;

    if (username === "admin" && password === "admin") {
      alert("로그인 성공!");
      window.location.href = "/LicenseLab/index.html";
      isLoggedIn = !isLoggedIn;
      lg.textContent = "sign out"
      updateMenu();
    } else {
      alert("아이디 혹은 비밀번호를 잘못 입력하였습니다.");
      loginErrorMsg.style.opacity = 1;
    }
  });

  // 함수가 올바른 위치에 정의되었습니다.

  // 로그인 상태 초기화
  updateMenu();
});

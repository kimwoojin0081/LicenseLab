MybodyEditButton.addEventListener("click", (e) => {
    if(changing) {
        let _userid = usserid.querySelector("input").value;
        let _username = _username.querySelector("input").value;
        let _usernum = usernum.querySelector("input").value;
        let _useremail = usemail.querySelector("input").value;

        userid.innerHTML = _userid;
        username.innerHTML = _username;
        usernum.innerHTML = _usernum;
        useremail.innerHTML = _useremail;

        e.target.textContent = "프로필 편집";
        changing = false;
    } else {
        let _userid = userid.textContent;
        let _username = username.textContent;
        let _usernum = usernum.textContent;
        let _useremail = useremail.textContent;

        userid.innerHTML = "<input value=" + _userid + "></input>"
        username.innerHTML = "<input value=" + _username + "></input>";
        usernum.innerHTML = "<input value=" + _usernum + "></input>";
        useremail.innerHTML = "<input value=" + _useremail + "></input>";

        e.target.textContent = "프로필 편집 완료";
        changing = true;
    }
});
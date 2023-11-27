
    let MybodyEditButton = document.querySelector("#button.modify button");
    let id = document.querySelector("#user_id");
    let name = document.querySelector("#user_name");
    let num = document.querySelector("#user_num");
    let email = document.querySelector("#user_email");
    let changing = false;

MybodyEditButton.addEventListener("click", (e) => {
    if(changing) {
        let _id = id.querySelector("input").value;
        let _name = name.querySelector("input").value;
        let _num = num.querySelector("input").value;
        let _email = email.querySelector("input").value;

        id.innerHTML = _rid;
        name.innerHTML = _rname;
        num.innerHTML = _rnum;
        email.innerHTML = _email;

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

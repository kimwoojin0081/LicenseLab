
    let MybodyEditButton = document.querySelector("#modify button");
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

        id.innerHTML = _id;
        name.innerHTML = _name;
        num.innerHTML = _num;
        email.innerHTML = _email;

        e.target.textContent = "프로필 편집";
        changing = false;
    } else {
        let _id = id.textContent;
        let _name = name.textContent;
        let _num = num.textContent;
        let _email = email.textContent;

        id.innerHTML = "<input value=" + _id + "></input>"
        name.innerHTML = "<input value=" + _name + "></input>";
        num.innerHTML = "<input value=" + _num + "></input>";
        email.innerHTML = "<input value=" + _email + "></input>";

        e.target.textContent = "프로필 편집 완료";
        changing = true;
    }
});
const logoutBtn = document.querySelector("#logout");
logoutBtn.addEventListener("click", resetUserInfo);
function resetUserInfo() {
    const confirmLogout = confirm("정말 로그아웃 하시겠습니까?");
    if (confirmLogout) {
        localStorage.clear();
        location.reload();
    }

}

window.addEventListener("load", function () {
    document.body.style.visibility = 'visible';
});
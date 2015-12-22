function register() {
    window.location.href = 'register.html';
}

function login() {
    var username = $.trim($('#username').val());
    var password = $.trim($('#password').val());

    if (!username || !password) {
        alert('请正确填写用户名和密码。');
        return false;
    }

    alert('用户名或密码错误。');
}

function goPage(page) {
    window.location.href = page;
}

function registerEvent(){
	alert('请输入正确的邀请码。');
}
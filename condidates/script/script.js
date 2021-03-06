document.querySelector('#signup-submit').onclick = function (event) {
    event.preventDefault();
    let firstName = document.querySelector('#signup-firstName').value;
    let lastName = document.querySelector('#signup-lastName').value;
    let email = document.querySelector('#signup-email').value;
    let phone = document.querySelector('#signup-phone').value;
    let sex = document.querySelectorAll('.sex');
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            sex = sex[i].value;
            break;
        }
    }
    let data = {
        "firstName": name,
        "lastName": pass,
        "email": email,
        "phone": phone,
        "sex": sex,
    }

    ajax('core/signup.php', 'POST', login, data);

    function login(result) {
        console.log(result);
        if (result == 2) {
            alert('Заполните поля');
        }
        else if (result == 1) {
            alert('Успех. Теперь можно войти!');
        }
        else {
            alert('Ошибка, повторите регистрацию позже!');
        }
    }
}
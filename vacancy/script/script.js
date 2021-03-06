document.querySelector('#signup-submit').onclick = function (event) {
    event.preventDefault();
    let regFirstName = document.querySelector('#signup-regFirstName').value;
    let regLastName = document.querySelector('#signup-regLastName').value;
    let name = document.querySelector('#signup-name').value;
    let type = document.querySelector('#signup-type').value;
    let active = document.querySelectorAll('.active');
    for (let i = 0; i < active.length; i++) {
        if (active[i].checked) {
            active = sex[i].value;
            break;
        }
    }
    let data = {
        "regFirstName": regFirstName,
        "regLastName": regLastName,
        "name": name,
        "type": type,
        "active": active,
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
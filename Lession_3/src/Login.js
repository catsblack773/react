import React from 'react';

export default class Login extends React.Component {
    render() {
        return <form method="POST" class="login">
            <div class="login-warapper">
                <span>Логин</span>
                <input type="text"/>
            </div>
            <div class="login-warapper">
                <span>Пароль</span>
                <input type="password"/>
            </div>
            <input type="submit" value="Войти"/>
        </form>
    }
}
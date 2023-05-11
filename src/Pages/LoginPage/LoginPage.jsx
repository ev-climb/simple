import React from 'react';
// import './index.css';

function LoginPage() {
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Вход</h1>
        <form action="">
          <div className="input-group">
            <label htmlFor="email">Email или телефон</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Пароль</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="input-group">
            <button type="submit">Войти</button>
          </div>
        </form>
        <div className="bottom-text">
          <a href="#">Забыли пароль?</a>
          <span>·</span>
          <a href="#">Зарегистрироваться на сайте</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

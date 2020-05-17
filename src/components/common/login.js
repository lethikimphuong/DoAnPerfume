import React, { useState } from 'react';
import { connect } from 'react-redux';

function Login(props) {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  let handleChangeInput = (event) => {
    switch (event.target.name) {
      case 'username':
        setUsername(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value)
        break;
      default:
        break;
    }
  }

  let login = () => {
    const userLogin = props.users.find(item => item.username === username && item.password === password);
    if (userLogin) {
      sessionStorage.setItem('userLogin', JSON.stringify(userLogin));
      console.log(userLogin.role);
      if (userLogin.role === 1) {
        window.location.href = "/";
        console.log('user');
      } else {
        window.location.href = "/adminHome";
        console.log('admin');
      }
    } else {
      alert('Username or password incoress!');
    }
  }
  let handleLogin = (event) => {
    if (event.key === 'Enter') {
      const userLogin = props.users.find(item => item.username === username && item.password === password);
      if (userLogin) {
        sessionStorage.setItem('userLogin', JSON.stringify(userLogin));
        console.log(userLogin.role);
        if (userLogin.role === 1) {
          window.location.href = "/";
          console.log('user');
        } else {
          window.location.href = "/adminHome";
          console.log('admin');
        }
      } else {
        alert('Username or password incoress!');
      }
    }
  }
  return (
    <section className="section-main-content">
      <div className="container">
        <h3 className="section-title">Login</h3>
        <form className="form-login">
          <div className="row form-item">
            <input className="inp-item" type="text" placeholder="username" name="username" value={username} onChange={handleChangeInput} onKeyPress={handleLogin} ></input>
            <i className="fa fa-envelope"></i>
          </div>
          <div className="row form-item">
            <input className="inp-item" type="password" placeholder="password" name="password" value={password} onChange={handleChangeInput} onKeyPress={handleLogin} ></input>
            <i className="fa fa-lock"></i>
          </div>
          <div className="form-item form-btn">
            <button className="btn btn-login" id="js-btn-submit" onClick={login} type="button">Login</button>
          </div>
        </form>
      </div>
    </section>
  );
}
const mapStateToProps = state => {
  return {
    users: state.users
  }
};
export default connect(mapStateToProps, null)(Login);

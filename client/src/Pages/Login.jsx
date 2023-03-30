import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const fetchRegister = (userName, password) => {
  return fetch("http://localhost:8080/api/users/register/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ userName, password }),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return res.json().then((message) => {
          throw new Error(message);
        });
      }
    })
    .then((message) => alert(message))
    .catch((error) => {
      alert(error.message);
    });
};

const fetchLogin = (userName, password, navigate) => {
  return fetch("http://localhost:8080/api/users/login/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ userName, password }),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return res.json().then((message) => {
          throw new Error(message);
        });
      }
    })
    .then((res) => {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userLoggedIn", res.userId);
    })
    .then(() => {
      navigate(`/`);
      window.location.reload(true);
    })
    .catch((error) => {
      alert(error.message);
    });
};

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (userName.length < 4) {
      alert("Username must be at least 4 letters long!");
    } else if (password.length < 4) {
      alert("Password must be at least 4 letters long!");
    } else {
      await fetchRegister(userName, password);
    }
  };

  const handleLogin = async () => {
    await fetchLogin(userName, password, navigate);
  };

  return (
    <div className="main">
      <div className="content login-background">
        <div className="login-text">Login/Register</div>
        <label className="input-label" htmlFor="userName">
          Username:
        </label>
        <input
          className="login-input"
          type="text"
          name="userName"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={userName}
        ></input>
        <label className="input-label" htmlFor="password">
          Password:
        </label>
        <input
          className="login-input"
          type="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        ></input>
        <div className="login-button-container">
          <button className="login-button" type="button" onClick={handleLogin}>
            Login!
          </button>
          <button
            className="login-button"
            type="button"
            onClick={handleRegister}
          >
            Register!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

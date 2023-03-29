import { useState } from "react";

const fetchRegister = (userName, password) => {
  return fetch("http://localhost:8080/api/users/register/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ userName, password }),
  })
    .then((res) => res.json())
    .then((res) => console.log(res.message));
};

const fetchLogin = (userName, password) => {
  return fetch("http://localhost:8080/api/users/login/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ userName, password }),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error({ message: "User or password lofasz" });
      }
    })
    .then((res) => {
      console.log("siker");
      localStorage.setItem("isLoggedIn", 1);
      localStorage.setItem("userLoggedIn", res.userId);
    })
    .catch((error) => {
      alert(error.message);
    });
};

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await fetchRegister(userName, password);
  };

  const handleLogin = async () => {
    await fetchLogin(userName, password);
  };

  return (
    <div className="content">
      Login
      <form>
        <input
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={userName}
        ></input>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        ></input>
        <button type="button" onClick={handleRegister}>
          Register!
        </button>
        <button type="submit" onClick={handleLogin}>
          Login!
        </button>
      </form>
    </div>
  );
};

export default Login;

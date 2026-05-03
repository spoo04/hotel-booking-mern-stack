import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password
      });

      if (res.data.success) {
        setMsg("Login Successful ✅");

        setTimeout(() => {
          navigate("/booking");
        }, 1000);

      } else {
        setMsg("Invalid Email or Password ❌");
      }

    } catch (error) {
      setMsg("Server Error ❌");
    }
  };

  return (
    <div className="page">
      <div className="box">

        <h1>Login</h1>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>
        </form>

        <p>{msg}</p>

      </div>
    </div>
  );
}

export default Login;
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [msg,setMsg] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/register", {
        name,
        email,
        password
      });

      setMsg("Account Created Successfully ✅");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      setMsg("Registration Failed ❌");
    }
  };

  return (
    <div className="page">
      <div className="box">
        <h1>Create Account</h1>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button type="submit">
            Register
          </button>
        </form>

        <p>{msg}</p>
      </div>
    </div>
  );
}

export default Register;
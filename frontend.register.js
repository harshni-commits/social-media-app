import axios from "axios";
import { useState } from "react";

export default function Register() {
  const [user, setUser] = useState({});

  const register = async () => {
    await axios.post("http://localhost:5000/api/auth/register", user);
    alert("Registered");
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Username" onChange={e=>setUser({...user, username:e.target.value})}/>
      <input placeholder="Email" onChange={e=>setUser({...user, email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e=>setUser({...user, password:e.target.value})}/>
      <button onClick={register}>Register</button>
    </div>
  );
}

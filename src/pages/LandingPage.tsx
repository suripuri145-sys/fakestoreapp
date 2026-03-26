import { useState } from "react";
import Login from "./Login.tsx";
import Register from "./Register.tsx";

const LandingPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <h1>FakeStore App</h1>
      <button onClick={() => setIsLogin(true)}>Login</button>
      <button onClick={() => setIsLogin(false)}>Register</button>
      {isLogin ? <Login /> : <Register />}
    </div>
  );
};

export default LandingPage;
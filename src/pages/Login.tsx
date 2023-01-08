import React from "react";
import Arrowback from "../components/Common/Arrowback";
import Button from "../components/Coustom/Button";
import Header from "../components/Common/Header";
import Input from "../components/Coustom/Input";
import axios from "axios";
import { baseUrl } from "../config";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  const LoginFn = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/auth/login`, {
        email,
        password,
      });
      localStorage.setItem("token", res.data.email);
      navigate("/panel");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="h-screen mt-60">
      <div className="px-[600px]">
        <Header title="Login" />
        <div className="flex px-6 card-food pb-6 pt-10 flex-col gap-8">
          <Input
            changeText={(e) => setEmail(e.target.value)}
            placeText="Email"
          />
          <Input
            changeText={(e) => setPassword(e.target.value)}
            placeText="Password"
          />
          {error && (
            <p className="flex items-center  justify-center text-secondary-color capitalize font-bold">
              email or password not correct
            </p>
          )}
          <div
            onClick={LoginFn}
            className="button_complate text-center text-white py-2.5 cursor-pointer font-bold text-2xl uppercase bottom-0"
          >
            <p>Login</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

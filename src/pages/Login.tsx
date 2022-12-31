import React from "react";
import Arrowback from "../components/Arrowback";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";

function Login() {
  return (
    <div className="h-screen">
      <Arrowback />
      <Header title="Login" />
      <div className="px-6 md:flex md:items-center md:justify-center">
        <div className="flex px-6 card-food pb-6 pt-10 flex-col gap-8">
          <Input placeText="Username" />
          <Input placeText="Password" />
          <Button title="Login" />
        </div>
      </div>
    </div>
  );
}

export default Login;

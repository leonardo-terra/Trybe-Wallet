import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { sendEMail } from "../redux/actions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const minPasswordLength = 6;
  const dispatch = useDispatch();
  const history = useHistory();

  // Regex https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
  function validateEmail(e) {
    const regex = /\S+@\S+\.\S+/;
    const emailValidation = regex.test(e);
    return emailValidation;
  }

  function handleClick() {
    dispatch(sendEMail(email));
    history.push("./carteira");
  }

  return (
    <div className="bg-zinc-800 min-h-screen flex justify-center items-center text-white font-bold">
      <div className="card">
        <div className="card2 p-5">
          <div className="flex justify-center text-2xl mb-7">
            <h1>TrybeWallet</h1>
          </div>
          <form className="">
            <label htmlFor="email">
              {" "}
              Email:
              <input
                className="block shadow appearance-none border rounded  py-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="setEmail"
                id="email"
                data-testid="email-input"
                type="email"
                placeholder="E-MAIL"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </label>
            <label htmlFor="senha">
              Password:
              <input
                className="block shadow appearance-none border rounded  py-1  text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-10"
                name="password"
                id="senha"
                data-testid="password-input"
                type="text"
                placeholder="PASSWORD"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <button
              className="login-button w-full"
              type="button"
              disabled={
                password.length < minPasswordLength || !validateEmail(email)
              }
              onClick={handleClick}
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

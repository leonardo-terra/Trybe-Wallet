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
    <div className="bg-emerald-500 min-h-screen flex flex-col items-center justify-center">
      <div className="p-20 bg-black rounded-3xl">
        <div className=" bg-orange  flex flex-col items-center">
          <div className="bg-emerald-600 flex items-center  justify-center min-w-full mb-10 rounded-3xl p-3">
            <img
              src="https://www.svgrepo.com/show/44891/wallet.svg"
              alt="wallet"
              width="150px"
              className="w-20 border rounded-3xl p-1 "
            />
            <h2 className="p-10 font-bold"> Trybe-Wallet !</h2>
          </div>

          <form className="bg-black min-w-full text-white p-3 border rounded font-bold">
            <label htmlFor="email">
              {" "}
              Email:
              <input
                className="block w-full mb-2"
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
                className="block w-full mb-5"
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

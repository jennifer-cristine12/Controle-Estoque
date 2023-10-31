import { useState } from "react";
import { useNavigate } from "react-router-dom";
import eye000 from "./img/eye000.png";
import eye001 from "./img/eye001.png";

import "./style.css";

function Login() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const Home = () => {
    // Navegar para a rota "/home"
    navigate("/home");
  };
  const handleshow = () => {
    setShow(!show);
  };

  return (
    <body>
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">
              <div className="wrap-input">
                <input
                  required
                  className="input"
                  type="email"
                  placeholder="Digite seu email"
                />
                <br />
              </div>

              <div className="wrap-input">
                <input
                  required
                  id="password"
                  className="input"
                  type={show ? "text" : "password"}
                  placeholder="Digite sua senha"
                />
              </div>

              <span className="focus-input" data-placeholder="password"></span>

              <button className="login-form-btn" onClick={Home}>
                Acessar
              </button>
            </form>
          </div>
        </div>
      </div>
      <center>
        <span className="password-show">
          <img
            id="eye"
            onClick={handleshow}
            src={show ? eye001 : eye000}
            alt="show"
          />
        </span>
      </center>
    </body>
  );
}

export default Login;

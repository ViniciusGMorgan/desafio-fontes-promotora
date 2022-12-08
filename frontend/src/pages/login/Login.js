import React, { useState } from "react";
import { Button, Form, FormGroup, Spinner } from "reactstrap";
import { useHistory, Link } from "react-router-dom";
import { Auth } from "../../config/storage";

import LoginForm from "./LoginForm";
import { login } from "./LoginService";
import { toast } from "react-toastify";

import Card from "../../components/cardLogin/CardLogin";

import "./Login.css";

export default function Login() {
  const history = useHistory();
  const [user, setUser] = useState({
    value: "",
    blur: false,
  });
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState({
    value: "",
    blur: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (user.value.length > 0 && password.value.length > 0) {
      login(user.value, password.value)
        .then((res) => {
          sessionStorage.setItem(Auth, JSON.stringify(res));
          history.push("/");
        })
        .catch((err) => {
          toast.error("Erro ao efutuar login!", {
            position: "bottom-center",
            autoClose: true,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: "company-error",
          });
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
      toast.error("Preencha os campos!", {
        position: "bottom-center",
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "company-error",
      });
    }
  }

  return (
    <div className="loginMain">
      <Card>
        <div className="loginContainer">
          <p className="loginText">Informe seu usuário e senha para acessar</p>
          <Form onSubmit={handleSubmit}>
            <LoginForm
              user={user}
              setUser={setUser}
              password={password}
              setPassword={setPassword}
            />

            <FormGroup className="loginButtonGroup">
              <Button color="primary" className="loginButton">
                {loading ? <Spinner size="sm" /> : "ENTRAR"}
              </Button>
            </FormGroup>
            <p className="loginText" style={{ paddingTop: 10 }}>
              Ainda não tem cadastro?{" "}
              <Link style={{ color: "#fff" }} to="/register">
                Cadastre-se
              </Link>
            </p>
          </Form>
        </div>
      </Card>
    </div>
  );
}

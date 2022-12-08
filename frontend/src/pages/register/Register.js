import React, { useState } from "react";
import { Button, Form, FormGroup, Spinner } from "reactstrap";
import { useHistory, Link } from "react-router-dom";

import RegisterForm from "./RegisterForm";
import { register } from "./RegisterService";
import { Auth } from "../../config/storage";

import { toast } from "react-toastify";

import Card from "../../components/cardRegister/CardRegister";

import "../login/Login.css";

export default function Register() {
  const history = useHistory();
  const initialForm = {
    name: "",
    username: "",
    password: "",
  };
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    name: false,
    username: false,
    password: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (!form.username || !form.name || form.password) {
      register(form)
        .then((res) => {
          sessionStorage.setItem(Auth, JSON.stringify(res));
          history.push("/");
        })
        .catch((err) => {
          toast.error("Erro ao efutuar cadastro!", {
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
          <p className="loginText">Informe seus dados para se cadastrar</p>
          <Form onSubmit={handleSubmit}>
            <RegisterForm
              form={form}
              setForm={setForm}
              error={error}
              setError={setError}
            />

            <FormGroup className="loginButtonGroup">
              <Button color="primary" className="loginButton">
                {loading ? <Spinner size="sm" /> : "CADASTRAR"}
              </Button>
            </FormGroup>
            <p className="loginText">
              Já tem cadastro?{" "}
              <Link style={{ color: "#fff" }} to="/login">
                Entrar
              </Link>
            </p>
          </Form>
        </div>
      </Card>
    </div>
  );
}

import React, { useState } from "react";
import {
  FormGroup,
  Input,
  FormFeedback,
  InputGroup,
  InputGroupAddon,
  Button,
} from "reactstrap";
import { FiEye, FiEyeOff, FiAtSign, FiUser, FiLock } from "react-icons/fi";

import "../login/Login.css";

export default function RegisterForm({ form, setForm, error, setError }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    let name = e.target.name ? e.target.name : "";
    let value = e.target.value ? e.target.value : "";

    setForm({ ...form, [name]: value });
    setError({ ...error, [name]: false });
  };
  return (
    <>
      <FormGroup className="loginInputGroup">
        <FiUser className="loginIcon" size="30px" color="#191c1e" />
        <InputGroup>
          <Input
            invalid={error.name ? true : false}
            onBlur={() => !form.name && setError({ ...error, name: true })}
            onChange={(e) => handleChange(e)}
            name="name"
            placeholder="Nome"
            className="loginInput "
          />
          <FormFeedback>Por favor digite seu nome !</FormFeedback>
        </InputGroup>
      </FormGroup>

      <FormGroup className="loginInputGroup">
        <FiAtSign className="loginIcon" size="30px" color="#191c1e" />
        <InputGroup>
          <Input
            invalid={error.username ? true : false}
            onBlur={() =>
              !form.username && setError({ ...error, username: true })
            }
            onChange={(e) => handleChange(e)}
            name="username"
            placeholder="username"
            className="loginInput "
          />
          <FormFeedback>Por favor digite seu username !</FormFeedback>
        </InputGroup>
      </FormGroup>

      <FormGroup className="loginInputGroup">
        <FiLock className="loginIcon" size="30px" color="#191c1e" />
        <InputGroup>
          <Input
            invalid={error.password ? true : false}
            type={showPassword ? "text" : "password"}
            onBlur={() =>
              !form.password && setError({ ...error, password: true })
            }
            onChange={(e) => handleChange(e)}
            name="password"
            placeholder="Senha"
            className="loginInput loginInputPassword"
          />
          <InputGroupAddon addonType="append">
            <Button
              color="primary"
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff size="14pt" /> : <FiEye size="14pt" />}
            </Button>
          </InputGroupAddon>

          <FormFeedback>Por favor digite a senha !</FormFeedback>
        </InputGroup>
      </FormGroup>
    </>
  );
}

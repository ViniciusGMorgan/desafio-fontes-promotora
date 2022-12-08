import React, { useState } from "react";
import {
  FormGroup,
  Input,
  FormFeedback,
  InputGroupAddon,
  Button,
  InputGroup,
} from "reactstrap";
import { FiEye, FiEyeOff, FiUser, FiLock } from "react-icons/fi";

import "./Login.css";

export default function LoginForm({ user, setUser, password, setPassword }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <FormGroup className="loginInputGroup">
        <FiUser className="loginIcon" size="30px" color="#191c1e" />
        <InputGroup>
          <Input
            invalid={!user.value.length > 0 && user.blur}
            onBlur={() => setUser({ ...user, blur: true })}
            onChange={(e) => setUser({ ...user, value: e.target.value })}
            placeholder="Usuário"
            className="loginInput loginInputUser"
          />
          <FormFeedback>Por favor digite o Usuário !</FormFeedback>
        </InputGroup>
      </FormGroup>

      <FormGroup className="loginInputGroup">
        <FiLock className="loginIcon" size="30px" color="#191c1e" />
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            invalid={!password.value.length > 0 && password.blur}
            onBlur={() => setPassword({ ...password, blur: true })}
            onChange={(e) =>
              setPassword({ ...password, value: e.target.value })
            }
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
          <FormFeedback>Por favor digite a Senha !</FormFeedback>
        </InputGroup>
      </FormGroup>
    </>
  );
}

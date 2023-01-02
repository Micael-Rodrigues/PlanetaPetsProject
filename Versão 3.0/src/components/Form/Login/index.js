import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../useAuth";
import { useTranslation } from "react-i18next";

const Signin = () => {
  const { t } = useTranslation();
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError(t("formerro"));
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/");
  };

  return (
    <C.Container>
      <C.Label>{t("login")}</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder={t("email")}
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder={t("senha")}
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text={t("botaologin")} onClick={handleLogin} />
        <C.LabelSignup>
        {t("LabelSignup")}
          <C.Strong>
            <Link to="/cadastro">&nbsp;{t("LabelSignup2")}</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;
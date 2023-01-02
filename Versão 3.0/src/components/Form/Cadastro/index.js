import React, { useState, useEffect } from "react";
import Input from "../Input";
import Button from "../Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../useAuth";
import { useTranslation } from "react-i18next";

const Signup = () => {
  const { t } = useTranslation();

  useEffect(() => {
    if(localStorage.getItem('users_bd')){
      navigate("/");
    }
  },[])

  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError(t("formerro"));
      return;
    } else if (email !== emailConf) {
      setError(t("formerro2"));
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert(t("formconf2"));
    navigate("/login");
  };

  return (
    <C.Container>
      <C.Label>{t("cadastromenu")}</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder={t("email")}
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder={t("email2")}
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder={t("senha")}
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
        {t("LabelSignin")}
          <C.Strong>
            <Link to="/login">&nbsp;{t("LabelSignin2")}</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
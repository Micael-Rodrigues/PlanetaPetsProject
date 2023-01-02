import React, { useState, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t } = useTranslation();
  const [nome, setnome] = useState("");
  const [endereco, setendereco] = useState("");
  const [telefone, settelefone] = useState("");
  const [q1, setq1] = useState("");
  const [q2, setq2] = useState("");
  const [q3, setq3] = useState("");
  const [q4, setq4] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const text = {
    color: 'black',
    align: 'center'
  }

  let newForm;

  const handleSignup = () => {
    if (!nome | !endereco | !telefone | !q1 | !q2 | !q3 | !q4) {
      setError(t("formerro"));
    } else {
      newForm = [{ nome, endereco, telefone }];
      localStorage.setItem("form", JSON.stringify(newForm));
      alert(t("formconf"));
      navigate("/");
    }

    return;
  };

  return (
    <C.Container>
      <C.Label></C.Label>
      <C.Content>
        <h1 style={text}>{t("formnome")}</h1>
        <Input
          type="text"
          placeholder="Ex: Ana Clara"
          value={nome}
          onChange={(e) => [setnome(e.target.value), setError("")]}
        />
        <h1 style={text}>{t("formendereco")}</h1>
        <Input
          type="text"
          placeholder={t("formenderecoex")}
          value={endereco}
          onChange={(e) => [setendereco(e.target.value), setError("")]}
        />
        <h1 style={text}>{t("formfone")}</h1>
        <Input
          type="number"
          placeholder={t("formfoneex")}
          value={telefone}
          onChange={(e) => [settelefone(e.target.value), setError("")]}
        />
        <h1 style={text}>{t("formq1")}</h1>
        <Input
          type="text"
          placeholder={t("formresex")}
          value={q1}
          onChange={(e) => [setq1(e.target.value), setError("")]}
        />
        <h1 style={text}>{t("formq2")}</h1>
        <Input
          type="text"
          placeholder={t("formresex")}
          value={q2}
          onChange={(e) => [setq2(e.target.value), setError("")]}
        />
        <h1 style={text}>{t("formq3")}</h1>
        <Input
          type="text"
          placeholder={t("formresex")}
          value={q3}
          onChange={(e) => [setq3(e.target.value), setError("")]}
        />
        <h1 style={text}>{t("formq4")}</h1>
        <Input
          type="text"
          placeholder={t("formresex")}
          value={q4}
          onChange={(e) => [setq4(e.target.value), setError("")]}
        />

        <C.labelError>{error}</C.labelError>
        <C.ContentButton><Button Text={t("formbotao")} onClick={handleSignup} /></C.ContentButton>
      </C.Content>
    </C.Container>
  );
};

export default Form;
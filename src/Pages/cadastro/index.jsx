import { useForm } from "react-hook-form";
import Input from "../../components/input";
import Button from "../../components/button";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Form } from "../cadastro/styles";
import "./style.css";
import Select from "../../components/select/index";
import { useState } from "react";

const Cadastro = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatorio"),
    email: yup.string().required("Campo obrigatorio").email("Email invalido"),
    password: yup.string().required("Campo obrigatorio"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas nao coincidem")
      .required("Campo obrigatorio"),
    course_module: yup.string().required("campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSignIn = async (data) => {
    delete data.confirm_password;
    const teste = { ...data, contact: "teste", bio: "teste" };

    const response = await api.post("/users", teste).catch((err) => {
      toast.error("Eita! Parece que temos um erro no cadastro...");
    });

    toast.success("Oba! Voce foi cadastrado! ");
    console.log(teste);
  };

  const redirectLogin = () => {
    history.push("/");
  };

  return (
    <Container>
      <div className="div-button">
        <h2>Kenzie Hub</h2>
        <Button
          type="button"
          onClick={() => redirectLogin()}
          backgroundColor={"var(--grey-3)"}
          width={"75px"}
          height={"40px"}
        >
          Voltar
        </Button>
      </div>
      <Form onSubmit={handleSubmit(handleSignIn)}>
        <h3>Crie sua conta</h3>
        <span>Rapido e gratis, vamos nessa</span>
        <Input
          name="name"
          register={register}
          label="nome"
          placeholder="Insira seu nome"
          type="text"
          error={errors.name?.message}
        />
        <Input
          name="email"
          register={register}
          label="email"
          placeholder="example@dominio.com"
          type="email"
          error={errors.email?.message}
        />
        <Input
          name="password"
          register={register}
          label="senha"
          placeholder="insira sua senha"
          type="password"
          error={errors.password?.message}
        />
        <Input
          name="confirm_password"
          register={register}
          label="confirmar a senha"
          placeholder="confirme a senha"
          type="password"
          error={errors.confirm_password?.message}
        />
        <select
          className="course-select"
          name="course_module"
          {...register("course_module")}
        >
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value=" Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </select>
        <Button type="submit" backgroundColor="var(--color-primary-negative)">
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
};

export default Cadastro;

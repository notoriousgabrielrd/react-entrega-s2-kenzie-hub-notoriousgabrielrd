import { Button } from "@mui/material";
import "./style.css";
import { Container, Form } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/input";
import api from "../../services/api";
import { toast } from "react-toastify";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatorio").email("Email invalido"),
    password: yup.string().required("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = async (data) => {
    console.log(data);
    const response = await api.post("/sessions", data).catch((err) => {
      toast.error("erro na autenticacao");
    });
    toast.success("Login feito com sucesso!");
    console.log(response);
  };

  return (
    <Container>
      <span className="title-login" component={"h2"}>
        Kenzien HUB
      </span>
      <Form onSubmit={handleSubmit(handleLogin)} className="form-login">
        <span className="span-login">Login</span>
        <Input
          name="email"
          register={register}
          label="Email"
          placeholder="email@exemplo.com"
          error={errors.email?.message}
        />
        <Input
          name="password"
          register={register}
          label="Senha"
          placeholder="email@exemplo.com"
          error={errors.password?.message}
        />
        <Button
          sx={{ backgroundColor: "var(--color-primary)", width: "100%" }}
          type="submit"
          variant="contained"
        >
          Entrar
        </Button>
      </Form>
      <span>Ainda nao possui uma conta?</span>
      <Button
        sx={{ backgroundColor: "var(--grey-1)" }}
        type="button"
        variant="contained"
      >
        Cadastre-se
      </Button>
    </Container>
  );
};

export default Login;

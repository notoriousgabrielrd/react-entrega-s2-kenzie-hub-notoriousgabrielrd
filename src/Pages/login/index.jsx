import { Button } from "@mui/material";
import "./style.css";
import { Container, Form } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/input";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

const Login = ({ setData, authenticated, setAuthenticated }) => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatorio").email("Email invalido"),
    password: yup.string().required("Campo obrigatorio"),
  });
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const handleLogin = async (data) => {
    console.log(data);

    const response = await api.post("/sessions", data).catch((err) => {
      toast.error("Ops! Parece que temos um erro na autenticao...");
    });

    const { user, token } = response.data;

    localStorage.setItem("@KenzieHUB:token", token);
    localStorage.setItem("@KenzieHUB:user", JSON.stringify(user));
    setAuthenticated(true);

    toast.success("Oba! Login feito com sucesso.");
    setData(response.data);
    console.log(response.data);
    history.push("/dashboard");
  };

  const redirectSignIn = () => {
    history.push("/cadastro");
  };

  return (
    <Container>
      <h2 className="title-login" component={"h2"}>
        Kenzien HUB
      </h2>
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
      <span className="span-info">Ainda nao possui uma conta?</span>
      <Button
        onClick={() => redirectSignIn()}
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

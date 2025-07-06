import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { defaultValues, IFormLogin } from "./types";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "No minimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();


const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues,
    reValidateMode: "onChange",
  });

  const onSubmit = (data: IFormLogin) => {
  // Simulando uma autenticação
  if (data.email === "admin@admin.com" && data.password === "123456") {
    alert("Login realizado com sucesso!");
    // Aqui poderia redirecionar, ex: window.location.href = "/dashboard"
  } else {
    alert("Usuário ou senha inválidos");
  }
};


  return (
    <Container>
      <LoginContainer>
        <Column>
        <Title>Login</Title>
        <Spacing />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="email"
            placeholder="Email"
            control={control}
            errorMessage={errors?.email?.message}
          />
          <Spacing />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}
          />
          <Spacing />
          <Button title="Entrar" onClick={handleSubmit(onSubmit)} disabled={!isValid} />

        </form>
      </Column>

      </LoginContainer>
    </Container>
  );
};




export default Login;

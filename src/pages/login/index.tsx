import { Container } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const Login = () => {
  const formSchema = yup.object().shape({
    username: yup.string().required("username obrigatório"),
    password: yup.string().required("senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  interface IData {
    username: string;
    password: string;
  }

  const onSubmitFunction = (data: IData) => {
    console.log("passou");
    console.log(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <input type="text" placeholder="username" {...register("username")} />
        {errors.username && <p>{errors.username.message}</p>}
        <input type="text" placeholder="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit">Login</button>
      </form>
    </Container>
  );
};

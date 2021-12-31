import { Container } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

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
    console.log(data);
    axios
      .post("https://illusion-ro.herokuapp.com/api/login", data)
      .then((resp) => {
        localStorage.setItem(
          "@Illusiontoken",
          JSON.stringify(resp.data.access_token)
        );
      })
      .catch((e) => console.log(e));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <div>
          <input type="text" placeholder="username" {...register("username")} />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </Container>
  );
};

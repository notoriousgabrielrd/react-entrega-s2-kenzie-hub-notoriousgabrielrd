import { Container, InputContainer } from "./styles";

const Input = ({ register, name, label, error, ...rest }) => {
  return (
    <Container>
      <label>{label}</label>
      <InputContainer isErrored={!!error}>
        <input {...register(name)} {...rest} />
      </InputContainer>
      <div>{!!error && <span>{error}</span>}</div>
    </Container>
  );
};

export default Input;

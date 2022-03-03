import { Container } from "./styles";

const Button = ({ children, width, height, backgroundColor, ...rest }) => {
  return (
    <Container
      {...rest}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
    >
      {children}
    </Container>
  );
};

export default Button;

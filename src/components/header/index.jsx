import { Container, Button } from "./styles";
import "./styles.css";
import { useHistory } from "react-router-dom";
const Header = () => {
  const history = useHistory();

  return (
    <Container>
      <div className="div-header">
        <h2> Kenzie Hub</h2>
        <Button
          backgroundColor={"var(--grey-2)"}
          width={"75px"}
          height={"40px"}
          onClick={() => history.push("/")}
        >
          Sair
        </Button>
      </div>
    </Container>
  );
};

export default Header;

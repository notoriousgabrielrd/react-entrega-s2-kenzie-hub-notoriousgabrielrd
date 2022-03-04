import Header from "../../components/header";
import { Container, Button } from "./styled";
import "./style.css";
import { useEffect, useState } from "react";
import Modal from "../../components/modal";
import api from "../../services/api";
const Dashboard = ({ dataUser }) => {
  const [token] = useState(localStorage.getItem("@KenzieHUB:token") || "");
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showTech, setShowTech] = useState(true);
  const [techs, setTechs] = useState();

  const handleTech = async (data) => {
    console.log(data);
    const response = await api.post("/users/techs", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTechs(response);
    console.log(dataUser);
  };

  return (
    <>
      {showModal && (
        <Modal setShowModal={setShowModal} handleTech={handleTech} />
      )}

      <div className="main">
        <Header />
        <Container>
          <h3 className="nome">Ola,{dataUser.user.name}</h3>
          <h3 className="curso">{dataUser.user.course_module}</h3>
        </Container>
        <div className="card">
          <h3>Tecnologias</h3>
          <Button
            type="button"
            onClick={() => setShowModal(true)}
            width={"10px"}
            height={"32px"}
          >
            +
          </Button>
        </div>
        <div className="card-modal">
          {showTech &&
            dataUser.user.techs.map((value, index) => {
              return <div> {value.title}</div>;
            })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;

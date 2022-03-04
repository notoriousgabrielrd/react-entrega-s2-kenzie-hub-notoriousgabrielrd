import Header from "../../components/header";
import { Container, Button } from "./styled";
import "./style.css";
import { useEffect, useState } from "react";
import Modal from "../../components/modal";
import api from "../../services/api";
import Card from "../../components/card";
import React from "react";

// posso user Params para pegar as informacoes a parit do Id

const Dashboard = ({ dataUser }) => {
  const [tokenId] = useState(localStorage.getItem("@KenzieHUB:user") || "");
  const [token] = useState(localStorage.getItem("@KenzieHUB:token") || "");
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showTech, setShowTech] = useState(false);
  const [techs, setTechs] = useState();
  const [update, setUpdate] = useState(false);

  //   // fazer o get na bse de dados pelo id ok
  //   // o que trouxer eu salvo na localStorage => os dados do user ok
  //   // response.data joga para o user ( setUser)
  //   // passar o map dentro do meu user ( setUser)
  //   // qnd der clique no modal preciso dar um setUpdate(!update)

  async function getUserPerId() {
    const id = JSON.parse(tokenId);
    const response = await api.get(`/users/${id.id}`);
    console.log(response);
    setUser(response.data);
  }

  useEffect(() => {
    getUserPerId();
  }, [update]);

  console.log(user.techs);

  const handleTech = async (data) => {
    const response = await api.post("/users/techs", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTechs(response);
  };

  return (
    <>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          handleTech={handleTech}
          setToTrue={setShowTech}
          setUpdate={setUpdate}
        />
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
            onClick={() => {
              setShowModal(true);
              setUpdate(!update);
            }}
            backgroundColor="var(--grey-3)"
            width={"10px"}
            height={"32px"}
          >
            +
          </Button>
        </div>
        <div className="container">
          <div className="card-modal">
            {user.techs &&
              React.Children.toArray(
                user.techs.map((value, index) => {
                  console.log(value);
                  return <Card value={value} />;
                })
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

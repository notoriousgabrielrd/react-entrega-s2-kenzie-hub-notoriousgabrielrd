import Header from "../../components/header";
import { Container, Button } from "./styled";
import "./style.css";
import { useEffect, useState } from "react";
import Modal from "../../components/modal";
import api from "../../services/api";
import Card from "../../components/card";
import React from "react";
import { Redirect } from "react-router-dom";

// posso user Params para pegar as informacoes a parit do Id

const Dashboard = ({ dataUser, authenticated, setAuthenticated }) => {
  const [tokenId] = useState(localStorage.getItem("@KenzieHUB:user") || "");
  const [token] = useState(localStorage.getItem("@KenzieHUB:token") || "");
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  // const [showTech, setShowTech] = useState(false);
  const [changes, setChanges] = useState(false);
  const [techs, setTechs] = useState();
  const [update, setUpdate] = useState(false);

  async function getUserPerId() {
    const id = JSON.parse(tokenId);
    const response = await api.get(`/users/${id.id}`);
    setUser(response.data);
    console.log(user);
  }

  useEffect(() => {
    getUserPerId();
  }, [update]);

  console.log(authenticated);

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
          // setToTrue={setShowTech}
          setUpdate={setUpdate}
          update={update}
          changes={changes}
          setChanges={setChanges}
        />
      )}

      <div className="main">
        <Header />
        <Container>
          <h3 className="nome">Ola,{user.name}</h3>
          <h3 className="curso">{user.course_module}</h3>
        </Container>
        <div className="card">
          <h3>Tecnologias</h3>
          <Button
            type="button"
            onClick={() => {
              setShowModal(true);
              // setUpdate(!update);
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
                  return (
                    <Card
                      id={value.id}
                      value={value}
                      changes={changes}
                      setChanges={setChanges}
                      setShowModal={setShowModal}
                    />
                  );
                })
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

import { useEffect, useState } from "react";
import api from "../../services/api";
import "./style.css";

const Card = ({ value, changes, setChanges, setShowModal, id }) => {
  const [att, setAtt] = useState(false);

  async function deletePerId(deletedId) {
    const response = await api.delete(`/users/tech/${deletedId}`);
    console.log(response);
  }

  return (
    <div
      id={id}
      className="div-tech"
      onClick={() => {
        setChanges(true);
        setShowModal(true);
        setAtt(!att);
        deletePerId(id);
      }}
    >
      <h4 className="div-card-tech ">{value.title}</h4>
      <div className="div-card-tech ">{value.status}</div>
    </div>
  );
};

export default Card;

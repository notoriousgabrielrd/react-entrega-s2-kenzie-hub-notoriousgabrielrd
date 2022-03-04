import "./style.css";

const Card = ({ value }) => {
  return (
    <div className="div-tech">
      <div className="div-card-tech ">{value.title}</div>
      <div className="div-card-tech ">{value.status}</div>
    </div>
  );
};

export default Card;

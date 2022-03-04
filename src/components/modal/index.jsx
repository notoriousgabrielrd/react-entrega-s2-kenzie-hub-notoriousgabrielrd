import "./style.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Modal = ({ setShowModal, handleTech }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatorio"),
    status: yup.string().required("campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <div className="layer-modal" onClick={() => setShowModal(false)}>
      <div className="div-modal" onClick={(e) => e.stopPropagation()}>
        <span> Aqui e o meu modal </span>

        <form onSubmit={handleSubmit(handleTech)}>
          <input
            label="Nome"
            placeholder="Insira se nome"
            type="text"
            {...register("title")}
          ></input>
          <select
            {...register("status")}
            label="Selecione o status"
            name="status"
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediario</option>
            <option value="Avancado">Avancado</option>
          </select>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

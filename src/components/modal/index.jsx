import "./style.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../button/index";

const Modal = ({ setShowModal, handleTech, setToTrue, setUpdate, update }) => {
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
        <div className="div-h3">
          <h3 className="h3-modal"> Cadastrar Tecnologia</h3>
        </div>

        <form className="form-modal" onSubmit={handleSubmit(handleTech)}>
          <p className="p-label">Nome</p>
          <input
            className="input-modal"
            placeholder="Insira se nome"
            type="text"
            {...register("title")}
          ></input>
          <p className="p-label">Selecionar Status</p>

          <select
            className="input-modal"
            {...register("status")}
            label="Selecione o status"
            name="status"
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediario</option>
            <option value="Avancado">Avancado</option>
          </select>
          <Button
            width={"100%"}
            height={"50px"}
            backgroundColor={"var(--color-primary)"}
            type="submit"
            onClick={() => {
              setToTrue(true);
              setUpdate(!update);
            }}
          >
            Cadastrar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

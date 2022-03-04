const Select = ({ name, value, handleOnChange, register }) => {
  return (
    <select
      className="select-tag"
      value={value}
      name={name}
      onChange={handleOnChange}
      //   {...register(name)}
    >
      <option value=""> selecione um tipo</option>
      <option value="Primeiro modulo"> Primeiro modulo </option>
      <option value="Segundo modulo"> Segundo modulo</option>
      <option value="Terceiro modulo"> Terceiro modulo</option>
      <option value="Quarto modulo"> Quarto modulo</option>
    </select>
  );
};

export default Select;

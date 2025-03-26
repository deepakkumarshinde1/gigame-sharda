function Input({ label, placeholder, type = "text", handelChange, name }) {
  return (
    <>
      <section>
        <label htmlFor="name">{label}</label>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={handelChange}
        />
      </section>
    </>
  );
}

export default Input;

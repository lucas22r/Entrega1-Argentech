import imgcarrito from "../assets/carrito.svg";


export const Carrito = () => {
  return (
    <>
      <img
        src={imgcarrito}
        alt="carrito"
        className="me-2"
        width={24}
      />
      <b>0</b>
    </>
  );
};

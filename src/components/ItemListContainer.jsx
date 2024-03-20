import Container from "react-bootstrap/Container";

export const ItemListContainer = (propiedades) => {
  return (
    <>
      <Container>
      <h1>{propiedades.greeting}</h1>
      </Container>
    </>
  );
};



import html2canvas from "html2canvas";
import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import Form from "../components/Form";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
const Nombre = styled.div`
  width: 400px;
  height: 30px;
  background-color: white;
  position: absolute;
  top: 490px;
  left: 255px;
  color: black;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;
const Rut = styled.div`
  width: 400px;
  height: 30px;
  background-color: white;
  position: absolute;
  top: 530px;
  left: 255px;
  color: black;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;
const Edad = styled.div`
  width: 400px;
  height: 30px;
  background-color: white;
  position: absolute;
  top: 570px;
  left: 255px;
  color: black;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;

const Domicilio = styled.div`
  width: 600px;
  height: 30px;
  background-color: white;
  position: absolute;
  top: 620px;
  left: 255px;
  color: black;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;
const Origen = styled.div`
  width: 600px;
  height: 30px;
  background-color: white;
  position: absolute;
  top: 910px;
  left: 255px;
  color: black;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;
const Destino = styled.div`
  width: 600px;
  height: 30px;
  background-color: white;
  position: absolute;
  top: 960px;
  left: 255px;
  color: black;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;

const Hora = styled.div`
  width: 400px;
  height: 30px;
  background-color: white;
  position: absolute;
  top: 775px;
  left: 255px;
  color: green;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
`;
const Hora2 = styled.div`
  width: 400px;
  height: 30px;
  background-color: white;
  position: absolute;
  top: 1160px;
  left: 255px;
  color: black;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;
const Hasta = styled.div`
  width: 400px;
  height: 30px;
  background-color: white;
  position: absolute;
  top: 825px;
  left: 255px;
  color: green;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
`;
export default function Home() {
  const permisoRef = useRef(null);
  const [start, setStart] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    rut: "",
    edad: "",
    domicilio: "",
    origen: "",
    destino: "",
  });
  const [image, setimage] = useState("");
  const handleCapture = async () => {
    const canva = await html2canvas(permisoRef.current);
    const image = canva.toDataURL("image/jpg");
    setimage((prevState) => (prevState = image));
  };
  const buttonRef = useRef(null);
  return (
    <Container>
      {start ? (
        <Row>
          <Col className="text-center mt-5 mb-5">
            <Button
              download="myImage.jpg"
              href={image}
              onClick={handleCapture}
              ref={buttonRef}
              variant={image === "" ? "primary" : "success"}
            >
              {image === "" ? "Procesar 😈" : "Bajar ✅"}
            </Button>
          </Col>
          <Col>
            <Wrapper>
              <div ref={permisoRef}>
                <Nombre>{form.nombre}</Nombre>
                <Rut>{form.rut}</Rut>
                <Edad>{form.edad}</Edad>
                <Domicilio>{form.domicilio}</Domicilio>
                <Origen>{form.origen}</Origen>
                <Destino>{form.destino}</Destino>
                <Hora>03-04-2021 12:03:54</Hora>
                <Hasta>03-04-2021 02:03:54</Hasta>
                <Hora2>03-04-2021 12:03:54</Hora2>
                <img
                  src="/img/permiso.png"
                  alt="permiso"
                  // style={{ maxWidth: "40%", maxHeight: "40%" }}
                />
              </div>
            </Wrapper>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col>
            <Form setForm={setForm} form={form} setStart={setStart} />
          </Col>
        </Row>
      )}
    </Container>
  );
}

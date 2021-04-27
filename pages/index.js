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
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers((state) => [
      ...state,
      {
        // nombre: "Mackewisson Palencia",
        // rut: "24.741.617-K",
        // edad: "32",
        // domicilio: "San isidro 154",
        // origen: "San isidro 154",
        // destino: "Lider",
        // nombre: "Fernando Cordero",
        // rut: "25.336.624-9",
        // edad: "31",
        // domicilio: "San isidro 154",
        // origen: "San isidro 154",
        // destino: "Lider",
        // nombre: "Miton Cordero",
        // rut: "25.984.913-6",
        // edad: "53",
        // domicilio: "San isidro 154",
        // origen: "San isidro 154",
        // destino: "lider",
        // nombre: "Luz Marina Bastidas",
        // rut: "25.984.926-6",
        // edad: "50",
        // domicilio: "San isidro 154",
        // origen: "San isidro 154",
        // destino: "Sodimac",
        // nombre: "Yasmiriam Marquez",
        // rut: "26.936.306-1",
        // edad: "50",
        // domicilio: "El molino 1845",
        // origen: "El molino 1845",
        // destino: "Tottus",
        // nombre: "DAMARIS CASTILLO",
        // rut: "25.731.293-3",
        // edad: "30",
        // domicilio: "San isidro 154",
        // origen: "San isidro 154",
        // destino: "Banco estado",
        nombre: "ADA NAVARRO",
        rut: "26.461.585-0",
        edad: "35",
        domicilio: "San isidro 154",
        origen: "San isidro 154",
        destino: "Banco estado",
      },
    ]);
  }, []);
  const [form, setForm] = useState({
    nombre: "",
    rut: "",
    edad: "",
    domicilio: "",
    origen: "",
    destino: "",
    hora: "",
    hasta: "",
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
        <>
          <Row>
            <Col className="text-center mt-5">
              <Button
                download={`permiso${form.hora}.jpg`}
                href={image}
                onClick={handleCapture}
                ref={buttonRef}
                variant={image === "" ? "primary" : "success"}
              >
                {image === "" ? "Procesar 😈" : "Bajar ⬇️"}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mt-1 mb-5">
              {image === "" ? (
                <small>Preciona para procesar tu permiso</small>
              ) : (
                <small>Tu permiso esta listo. Solo debes bajarlo</small>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <Wrapper>
                <div ref={permisoRef}>
                  <Nombre>{form.nombre}</Nombre>
                  <Rut>{form.rut}</Rut>
                  <Edad>{form.edad}</Edad>
                  <Domicilio>{form.domicilio}</Domicilio>
                  <Origen>{form.origen}</Origen>
                  <Destino>{form.destino}</Destino>
                  <Hora>{form.hora}</Hora>
                  <Hasta>{form.hasta}</Hasta>
                  <Hora2>{form.hora}</Hora2>
                  <img
                    src="/img/permiso.png"
                    alt="permiso"
                    // style={{ maxWidth: "40%", maxHeight: "40%" }}
                  />
                </div>
              </Wrapper>
            </Col>
          </Row>
        </>
      ) : (
        <Row>
          <Col>
            <Form
              setForm={setForm}
              form={form}
              setStart={setStart}
              users={users}
            />
          </Col>
        </Row>
      )}
    </Container>
  );
}

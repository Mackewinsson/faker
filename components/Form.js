import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

const StyledForm = styled(Form)`
  border: 1px solid black;
  padding: 20px;
  margin-top: 20px;
`;

const FormComponent = ({ form, setForm, setStart }) => {
  const [nombre, setnombre] = useState("");
  const [rut, setRut] = useState("");
  const [edad, setEdad] = useState("");
  const [domicilio, setDomicio] = useState("");
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");

  const handleNombreChange = (e) => {
    setnombre(e.target.value);
  };
  const handleEdadChange = (e) => {
    setEdad(e.target.value);
  };
  const handleRutChange = (e) => {
    setRut(e.target.value);
  };
  const handleDomicilioChange = (e) => {
    setDomicio(e.target.value);
  };
  const handleOrigenChange = (e) => {
    setOrigen(e.target.value);
  };
  const handleDestinoChange = (e) => {
    setDestino(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setStart(true);
    setForm((prevForm) => ({
      ...prevForm,
      nombre,
      rut,
      edad,
      domicilio,
      origen,
      destino,
    }));
  };

  return (
    <StyledForm
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre"
          onChange={(e) => {
            handleNombreChange(e);
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Rut</Form.Label>
        <Form.Control
          type="text"
          placeholder="Rut"
          onChange={(e) => {
            handleRutChange(e);
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Edad</Form.Label>
        <Form.Control
          type="text"
          placeholder="Edad"
          onChange={(e) => {
            handleEdadChange(e);
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Domicilio</Form.Label>
        <Form.Control
          type="text"
          placeholder="Domicilio"
          onChange={(e) => {
            handleDomicilioChange(e);
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Origen</Form.Label>
        <Form.Control
          type="text"
          placeholder="Origen"
          onChange={(e) => {
            handleOrigenChange(e);
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Destino</Form.Label>
        <Form.Control
          type="text"
          placeholder="Destino"
          onChange={(e) => {
            handleDestinoChange(e);
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Iniciar Permiso Faker 😈
      </Button>
    </StyledForm>
  );
};

export default FormComponent;

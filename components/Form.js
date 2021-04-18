import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

const StyledForm = styled(Form)`
  border: 1px solid black;
  padding: 20px;
  margin-top: 20px;
`;

const FormComponent = ({ form, setForm, setStart, users }) => {
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

  function newDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (month < 10) {
      return `${addZero(day)}-0${month}-${year}`;
    } else {
      return `${addZero(day)}-${month}-${year}`;
    }
  }

  // ads zero to a data passed
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  //this gets the actual time
  function getTime(i) {
    const d = new Date();
    const h = d.getHours();
    const m = addZero(d.getMinutes());
    const s = addZero(d.getSeconds());
    const time = h + ":" + m + ":" + s;
    if (i) {
      const hasta = h + i + ":" + m + ":" + s;
      return hasta;
    }
    return time;
  }

  const handleSubmit = (e) => {
    if (form.name === "") {
      e.preventDefault();
      e.stopPropagation();
      setStart(true);
      const hora = `${newDate()} ${getTime()}`;
      const hasta = `${newDate()} ${getTime(2)}`;
      setForm((prevForm) => ({
        ...prevForm,
        nombre,
        rut,
        edad,
        domicilio,
        origen,
        destino,
        hora,
        hasta,
      }));
    } else {
      setStart(true);
    }
  };

  const handleDropdown = (e) => {
    const hora = `${newDate()} ${getTime()}`;
    const hasta = `${newDate()} ${getTime(2)}`;
    if (e.target.value === "Mackewinsson") {
      setForm((prevForm) => ({
        ...prevForm,
        nombre: users[0].nombre,
        rut: users[0].rut,
        edad: users[0].edad,
        domicilio: users[0].domicilio,
        origen: users[0].origen,
        destino: users[0].destino,
        hora: hora,
        hasta: hasta,
      }));
    }
  };

  return (
    <StyledForm
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <Form.Group controlId="formGridState">
        <Form.Label>User</Form.Label>
        <Form.Control
          as="select"
          defaultValue="Elegir"
          onChange={(e) => handleDropdown(e)}
        >
          <option></option>
          <option>Mackewinsson</option>
          <option>Mackewinsson22</option>
        </Form.Control>
      </Form.Group>
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

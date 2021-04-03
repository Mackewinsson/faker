import html2canvas from "html2canvas";
import styled from "styled-components";
import { useRef } from "react";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Hora = styled.div`
  width: 400px;
  height: 30px;
  background-color: white;
  position: absolute;
  top: 775px;
  left: 340px;
  color: green;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
`;
const Hasta = styled.div`
  width: 400px;
  height: 30px;
  background-color: white;
  position: absolute;
  top: 825px;
  left: 340px;
  color: green;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
`;
export default function Home() {
  const permisoRef = useRef(null);

  return (
    <>
      <Wrapper>
        <button
          onClick={() => {
            console.log(permisoRef.current);
            html2canvas(permisoRef.current).then(function (canvas) {
              document.body.appendChild(canvas);
            });
          }}
        >
          Capture
        </button>
        <div ref={permisoRef}>
          <Hora>03-04-2021 12:03:54</Hora>
          <Hasta>03-04-2021 02:03:54</Hasta>
          <img
            src="/img/permiso.png"
            alt="permiso"
            // style={{ maxWidth: "40%", maxHeight: "40%" }}
          />
        </div>
      </Wrapper>
    </>
  );
}

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MapaNariñoImage from "../assets/img/MapaNariño.png";

function Maps() {
  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <div className="map-container">
            <h3 className="text-center mb-3">Mapa Informativo</h3>
            <img src={MapaNariñoImage} alt="Mapa de Nariño" style={{ width: "100%", borderRadius: "8px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Maps;
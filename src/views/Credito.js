import React, { useState } from "react";
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  Modal,
} from "react-bootstrap";

function SimuCredito() {
  const [formData, setFormData] = useState({
    age: "25",
    personalIncome: "45000",
    jobSeniority: "2",
    loanAmount: "4500",
    loanIncomePercentage: "14",
    tasaInteres: "0.1",
    creditHistoryLength: "2",
    loanPurpose: "negocios",
    loanType: "negocios",
    loanGrade: "grado a",
    creditHistory: "bueno",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.creditHistory === "1") {
      setModalMessage("No apto para el préstamo debido a un historial de crédito malo.");
    } else {
      setModalMessage("Apto para el préstamo.");
    }
    setShowModal(true);
  };

  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Simulación de Crédito</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md="6">
                    <Form.Group>
                      <label>Edad</label>
                      <Form.Control
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Ingrese su edad"
                        type="number"
                      />
                    </Form.Group>
                  </Col>
                  <Col md="6">
                    <Form.Group>
                      <label>Ingreso Personal</label>
                      <Form.Control
                        name="personalIncome"
                        value={formData.personalIncome}
                        onChange={handleChange}
                        placeholder="Ingrese su ingreso personal"
                        type="number"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md="6">
                    <Form.Group>
                      <label>Antigüedad Laboral</label>
                      <Form.Control
                        name="jobSeniority"
                        value={formData.jobSeniority}
                        onChange={handleChange}
                        placeholder="Ingrese su antigüedad laboral (en años)"
                        type="number"
                      />
                    </Form.Group>
                  </Col>
                  <Col md="6">
                    <Form.Group>
                      <label>Monto del Préstamo</label>
                      <Form.Control
                        name="loanAmount"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        placeholder="Ingrese el monto del préstamo"
                        type="number"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md="6">
                    <Form.Group>
                      <label>Tasa de Interés del Préstamo</label>
                      <Form.Control
                        name="tasaInteres"
                        value={formData.tasaInteres}
                        onChange={handleChange}
                        placeholder="Ingrese Tasa de Interés del préstamo"
                        type="number"
                      />
                    </Form.Group>
                  </Col>
                  <Col md="6">
                    <Form.Group>
                      <label>Porcentaje de Ingreso del Préstamo</label>
                      <Form.Control
                        name="loanIncomePercentage"
                        value={formData.loanIncomePercentage}
                        onChange={handleChange}
                        placeholder="Ingrese el porcentaje de su ingreso destinado al préstamo"
                        type="number"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md="6">
                    <Form.Group>
                      <label>Longitud de Historial de Crédito</label>
                      <Form.Control
                        name="creditHistoryLength"
                        value={formData.creditHistoryLength}
                        onChange={handleChange}
                        placeholder="Ingrese la longitud de su historial de crédito (en años)"
                        type="number"
                      />
                    </Form.Group>
                  </Col>
                  <Col md="6">
                    <Form.Group>
                      <label>Propósito del Préstamo</label>
                      <Form.Control
                        as="select"
                        name="loanPurpose"
                        value={formData.loanPurpose}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Seleccione...
                        </option>
                        <option value="0">Negocios</option>
                        <option value="1">Educación</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md="6">
                    <Form.Group>
                      <label>Tipo de Préstamo</label>
                      <Form.Control
                        as="select"
                        name="loanType"
                        value={formData.loanType}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Seleccione...
                        </option>
                        <option value="0">Negocios</option>
                        <option value="1">Educación</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md="6">
                    <Form.Group>
                      <label>Grado del Préstamo</label>
                      <Form.Control
                        as="select"
                        name="loanGrade"
                        value={formData.loanGrade}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Seleccione...
                        </option>
                        <option value="0">Grado A</option>
                        <option value="1">Grado B</option>
                        <option value="2">Grado C</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md="6">
                    <Form.Group>
                      <label>Historial de Crédito</label>
                      <Form.Control
                        as="select"
                        name="creditHistory"
                        value={formData.creditHistory}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Seleccione...
                        </option>
                        <option value="0">Bueno</option>
                        <option value="1">Malo</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  className="btn-fill pull-right"
                  type="submit"
                  variant="info"
                >
                  Predecir
                </Button>
                <div className="clearfix"></div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Resultado de Simulación</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default SimuCredito;

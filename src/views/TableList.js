import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Productos Activos</Card.Title>
                <Button variant="primary" className="float-right">Agregar Producto</Button>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Nombre</th>
                      <th className="border-0">Precio</th>
                      <th className="border-0">País</th>
                      <th className="border-0">Región</th>
                      <th className="border-0">Municipio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Papa</td>
                      <td>$120,000</td>
                      <td>Colombia</td>
                      <td>Nariño</td>
                      <td>Pasto</td>
                      <td>
                        <Button variant="warning" size="sm" className="mr-2">Editar</Button>
                        <Button variant="danger" size="sm">Eliminar</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Trigo</td>
                      <td>$130,000</td>
                      <td>Colombia</td>
                      <td>Nariño</td>
                      <td>Pasto</td>
                      <td>
                        <Button variant="warning" size="sm" className="mr-2">Editar</Button>
                        <Button variant="danger" size="sm">Eliminar</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Artesanias</td>
                      <td>$50,000</td>
                      <td>Colombia</td>
                      <td>Nariño</td>
                      <td>Ipiales</td>
                      <td>
                        <Button variant="warning" size="sm" className="mr-2">Editar</Button>
                        <Button variant="danger" size="sm">Eliminar</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Fresa</td>
                      <td>$40,000</td>
                      <td>Colombia</td>
                      <td>Nariño</td>
                      <td>Tuquerres</td>
                      <td>
                        <Button variant="warning" size="sm" className="mr-2">Editar</Button>
                        <Button variant="danger" size="sm">Eliminar</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Cebada</td>
                      <td>$80,000</td>
                      <td>Colombia</td>
                      <td>Nariño</td>
                      <td>Ilés</td>
                      <td>
                        <Button variant="warning" size="sm" className="mr-2">Editar</Button>
                        <Button variant="danger" size="sm">Eliminar</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Maíz</td>
                      <td>$78,615</td>
                      <td>Colombia</td>
                      <td>Nariño</td>
                      <td>Consaca</td>
                      <td>
                        <Button variant="warning" size="sm" className="mr-2">Editar</Button>
                        <Button variant="danger" size="sm">Eliminar</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;

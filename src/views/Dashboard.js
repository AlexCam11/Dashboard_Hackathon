import React from "react";
import ChartistGraph from "react-chartist";
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
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
  <Container fluid>
    <Row>
      <Col lg="3" sm="6">
        <Card className="card-stats">
          <Card.Body>
            <Row>
              <Col xs="5">
                <div className="icon-big text-center icon-warning">
                  <i className="nc-icon nc-chart text-warning"></i>
                </div>
              </Col>
              <Col xs="7">
                <div className="numbers">
                  <p className="card-category">Número</p>
                  <Card.Title as="h4">150GB</Card.Title>
                </div>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <hr></hr>
            <div className="stats">
              <i className="fas fa-redo mr-1"></i>
              Actualizar Ahora
            </div>
          </Card.Footer>
        </Card>
      </Col>
      <Col lg="3" sm="6">
        <Card className="card-stats">
          <Card.Body>
            <Row>
              <Col xs="5">
                <div className="icon-big text-center icon-warning">
                  <i className="nc-icon nc-light-3 text-success"></i>
                </div>
              </Col>
              <Col xs="7">
                <div className="numbers">
                  <p className="card-category">Ingresos</p>
                  <Card.Title as="h4">$ 100'600.345</Card.Title>
                </div>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <hr></hr>
            <div className="stats">
              <i className="far fa-calendar-alt mr-1"></i>
              Último día
            </div>
          </Card.Footer>
        </Card>
      </Col>
      <Col lg="3" sm="6">
        <Card className="card-stats">
          <Card.Body>
            <Row>
              <Col xs="5">
                <div className="icon-big text-center icon-warning">
                  <i className="nc-icon nc-vector text-danger"></i>
                </div>
              </Col>
              <Col xs="7">
                <div className="numbers">
                  <p className="card-category">Errores</p>
                  <Card.Title as="h4">23</Card.Title>
                </div>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <hr></hr>
            <div className="stats">
              <i className="far fa-clock-o mr-1"></i>
              En la última hora
            </div>
          </Card.Footer>
        </Card>
      </Col>
      <Col lg="3" sm="6">
        <Card className="card-stats">
          <Card.Body>
            <Row>
              <Col xs="5">
                <div className="icon-big text-center icon-warning">
                  <i className="nc-icon nc-favourite-28 text-primary"></i>
                </div>
              </Col>
              <Col xs="7">
                <div className="numbers">
                  <p className="card-category">Seguidores</p>
                  <Card.Title as="h4">+45K</Card.Title>
                </div>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <hr></hr>
            <div className="stats">
              <i className="fas fa-redo mr-1"></i>
              Actualizar Ahora
            </div>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md="8">
        <Card>
          <Card.Header>
            <Card.Title as="h4">Comportamiento de Usuarios</Card.Title>
            <p className="card-category">Desempeño de 24 horas</p>
          </Card.Header>
          <Card.Body>
            <div className="ct-chart" id="chartHours">
              <ChartistGraph
                data={{
                  labels: [
                    "9:00AM",
                    "12:00AM",
                    "3:00PM",
                    "6:00PM",
                    "9:00PM",
                    "12:00PM",
                    "3:00AM",
                    "6:00AM",
                  ],
                  series: [
                    [287, 385, 490, 492, 554, 586, 698, 695],
                    [67, 152, 143, 240, 287, 335, 435, 437],
                    [23, 113, 67, 108, 190, 239, 307, 308],
                  ],
                }}
                type="Line"
                options={{
                  low: 0,
                  high: 800,
                  showArea: false,
                  height: "245px",
                  axisX: {
                    showGrid: false,
                  },
                  lineSmooth: true,
                  showLine: true,
                  showPoint: true,
                  fullWidth: true,
                  chartPadding: {
                    right: 50,
                  },
                }}
                responsiveOptions={[
                  [
                    "screen and (max-width: 640px)",
                    {
                      axisX: {
                        labelInterpolationFnc: function (value) {
                          return value[0];
                        },
                      },
                    },
                  ],
                ]}
              />
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="legend">
              <i className="fas fa-circle text-info"></i>
              Abierto <i className="fas fa-circle text-danger"></i>
              Clic <i className="fas fa-circle text-warning"></i>
              Segundo Clic
            </div>
            <hr></hr>
            <div className="stats">
              <i className="fas fa-history"></i>
              Actualizado hace 3 minutos
            </div>
          </Card.Footer>
        </Card>
      </Col>
      <Col md="4">
        <Card>
          <Card.Header>
            <Card.Title as="h4">Estadísticas de Email</Card.Title>
            <p className="card-category">Rendimiento de la Última Campaña</p>
          </Card.Header>
          <Card.Body>
            <div className="ct-chart ct-perfect-fourth" id="chartPreferences">
              <ChartistGraph
                data={{
                  labels: ["40%", "20%", "40%"],
                  series: [40, 20, 40],
                }}
                type="Pie"
              />
            </div>
            <div className="legend">
              <i className="fas fa-circle text-info"></i>
              Abierto <i className="fas fa-circle text-danger"></i>
              Rebotado <i className="fas fa-circle text-warning"></i>
              Cancelado
            </div>
            <hr></hr>
            <div className="stats">
              <i className="far fa-clock"></i>
              Campaña enviada hace 2 días
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md="6">
        <Card>
          <Card.Header>
            <Card.Title as="h4">Ventas de 2017</Card.Title>
            <p className="card-category">Todos los productos incluyendo impuestos</p>
          </Card.Header>
          <Card.Body>
            <div className="ct-chart" id="chartActivity">
              <ChartistGraph
                data={{
                  labels: [
                    "Ene",
                    "Feb",
                    "Mar",
                    "Abr",
                    "May",
                    "Jun",
                    "Jul",
                    "Ago",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dic",
                  ],
                  series: [
                    [
                      542,
                      443,
                      320,
                      780,
                      553,
                      453,
                      326,
                      434,
                      568,
                      610,
                      756,
                      895,
                    ],
                    [
                      412,
                      243,
                      280,
                      580,
                      453,
                      353,
                      300,
                      364,
                      368,
                      410,
                      636,
                      695,
                    ],
                  ],
                }}
                type="Bar"
                options={{
                  seriesBarDistance: 10,
                  axisX: {
                    showGrid: false,
                  },
                  height: "245px",
                }}
                responsiveOptions={[
                  [
                    "screen and (max-width: 640px)",
                    {
                      seriesBarDistance: 5,
                      axisX: {
                        labelInterpolationFnc: function (value) {
                          return value[0];
                        },
                      },
                    },
                  ],
                ]}
              />
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="legend">
              <i className="fas fa-circle text-info"></i>
              Tesla Model S <i className="fas fa-circle text-danger"></i>
              BMW Serie 5
            </div>
            <hr></hr>
            <div className="stats">
              <i className="fas fa-check"></i>
              Información de datos certificada
            </div>
          </Card.Footer>
        </Card>
      </Col>
          <Col md="6">
  <Card className="card-tasks">
    <Card.Header>
      <Card.Title as="h4">Tareas</Card.Title>
      <p className="card-category">Desarrollo Backend</p>
    </Card.Header>
    <Card.Body>
      <div className="table-full-width">
        <Table>
          <tbody>
            <tr>
              <td>
                <Form.Check className="mb-1 pl-0">
                  <Form.Check.Label>
                    <Form.Check.Input
                      defaultValue=""
                      type="checkbox"
                    ></Form.Check.Input>
                    <span className="form-check-sign"></span>
                  </Form.Check.Label>
                </Form.Check>
              </td>
              <td>
                Firmar contrato para "¿De qué tienen miedo los organizadores de conferencias?"
              </td>
              <td className="td-actions text-right">
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-488980961">
                      Editar Tarea..
                    </Tooltip>
                  }
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="info"
                  >
                    <i className="fas fa-edit"></i>
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-506045838">Eliminar..</Tooltip>
                  }
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="danger"
                  >
                    <i className="fas fa-times"></i>
                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check className="mb-1 pl-0">
                  <Form.Check.Label>
                    <Form.Check.Input
                      defaultChecked
                      defaultValue=""
                      type="checkbox"
                    ></Form.Check.Input>
                    <span className="form-check-sign"></span>
                  </Form.Check.Label>
                </Form.Check>
              </td>
              <td>
                ¿Líneas de la gran literatura rusa? ¿O correos electrónicos de mi jefe?
              </td>
              <td className="td-actions text-right">
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-537440761">
                      Editar Tarea..
                    </Tooltip>
                  }
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="info"
                  >
                    <i className="fas fa-edit"></i>
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-21130535">Eliminar..</Tooltip>
                  }
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="danger"
                  >
                    <i className="fas fa-times"></i>
                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check className="mb-1 pl-0">
                  <Form.Check.Label>
                    <Form.Check.Input
                      defaultChecked
                      defaultValue=""
                      type="checkbox"
                    ></Form.Check.Input>
                    <span className="form-check-sign"></span>
                  </Form.Check.Label>
                </Form.Check>
              </td>
              <td>
                Inundado: Un año después, evaluando lo que se perdió y lo que se encontró cuando una lluvia devastadora arrasó el metro de Detroit
              </td>
              <td className="td-actions text-right">
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-577232198">
                      Editar Tarea..
                    </Tooltip>
                  }
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="info"
                  >
                    <i className="fas fa-edit"></i>
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-773861645">Eliminar..</Tooltip>
                  }
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="danger"
                  >
                    <i className="fas fa-times"></i>
                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check className="mb-1 pl-0">
                  <Form.Check.Label>
                    <Form.Check.Input
                      defaultChecked
                      type="checkbox"
                    ></Form.Check.Input>
                    <span className="form-check-sign"></span>
                  </Form.Check.Label>
                </Form.Check>
              </td>
              <td>
                Crear 4 experiencias de usuario invisibles que nunca supiste
              </td>
              <td className="td-actions text-right">
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-422471719">
                      Editar Tarea..
                    </Tooltip>
                  }
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="info"
                  >
                    <i className="fas fa-edit"></i>
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-829164576">Eliminar..</Tooltip>
                  }
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="danger"
                  >
                    <i className="fas fa-times"></i>
                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check className="mb-1 pl-0">
                  <Form.Check.Label>
                    <Form.Check.Input
                      defaultValue=""
                      type="checkbox"
                    ></Form.Check.Input>
                    <span className="form-check-sign"></span>
                  </Form.Check.Label>
                </Form.Check>
              </td>
              <td>Leer "Seguir hace que Medium sea mejor"</td>
              <td className="td-actions text-right">
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-160575228">
                      Editar Tarea..
                    </Tooltip>
                  }
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="info"
                  >
                    <i className="fas fa-edit"></i>
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-922981635">Eliminar..</Tooltip>
                  }
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="danger"
                  >
                    <i className="fas fa-times"></i>
                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check className="mb-1 pl-0">
                  <Form.Check.Label>
                    <Form.Check.Input
                      defaultValue=""
                      disabled
                      type="checkbox"
                    ></Form.Check.Input>
                    <span className="form-check-sign"></span>
                  </Form.Check.Label>
                </Form.Check>
              </td>
              <td>Dejar de seguir a 5 enemigos en Twitter</td>
              <td className="td-actions text-right">
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-938342127">
                      Editar Tarea..
                    </Tooltip>
                  }
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="info"
                  >
                    <i className="fas fa-edit"></i>
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-119603706">Eliminar..</Tooltip>
                  }
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="danger"
                  >
                    <i className="fas fa-times"></i>
                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Card.Body>
    <Card.Footer>
      <hr></hr>
      <div className="stats">
        <i className="now-ui-icons loader_refresh spin"></i>
        Actualizado hace 3 minutos
      </div>
    </Card.Footer>
  </Card>
</Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;

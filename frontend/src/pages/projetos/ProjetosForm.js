import React from "react";
import { Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";

const ProjetosForm = ({ record, setRecord, initialRecord, handleSubmit }) => {
  const handleChange = (e) => {
    let name = e.target.name ? e.target.name : "";
    let value = e.target.value ? e.target.value : "";

    setRecord({ ...record, [name]: value });
  };

  return (
    <Form>
      <FormGroup>
        <Row>
          <Col>
            <Label>Nome do projeto</Label>
            <Input
              type="text"
              name="title"
              placeholder="Digite o nome do cliente"
              onChange={(e) => handleChange(e)}
              value={record.title}
            ></Input>
          </Col>
          <Col>
            <Label>CEP</Label>
            <Input
              type="number"
              name="zip_code"
              placeholder="Digite o CEP"
              onChange={(e) => handleChange(e)}
              value={record.zip_code}
            ></Input>
          </Col>
        </Row>
        {record.id ? (
          <Row style={{ marginTop: 10 }}>
            <Col>
              <Label>Cidade</Label>
              <Input
                type="text"
                name="city"
                value={record.city}
                disabled
              ></Input>
            </Col>
            <Col>
              <Label>Estado</Label>
              <Input
                type="text"
                name="state"
                value={record.state}
                disabled
              ></Input>
            </Col>
          </Row>
        ) : null}
        <Row style={{ marginTop: 10 }}>
          <Col>
            <Label>Custo</Label>
            <Input
              type="number"
              name="cost"
              placeholder="Digite o custo do projeto"
              onChange={(e) => handleChange(e)}
              value={record.cost}
            ></Input>
          </Col>
          <Col>
            <Label>Prazo</Label>
            <Input
              type="date"
              name="deadline"
              placeholder="Digite o prazo"
              onChange={(e) => handleChange(e)}
              value={record.deadline}
            ></Input>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup style={{ display: "flex", justifyContent: "flex-end" }}>
        {record.id ? (
          <Button
            type="button"
            color="danger"
            style={{ marginRight: 15 }}
            onClick={() => setRecord(initialRecord)}
          >
            Cancelar
          </Button>
        ) : null}
        <Button type="button" onClick={() => handleSubmit()}>
          Confirmar
        </Button>
      </FormGroup>
    </Form>
  );
};

export default ProjetosForm;

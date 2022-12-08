import React from "react";
import { Table } from "reactstrap";

import { FiTrash2, FiEdit, FiCheckSquare, FiSquare } from "react-icons/fi";
import { formatDate } from "../../services/helpers";

const ProjetosGrid = ({ data, handleEdit, handleRemove, handleDone }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Nome do projeto</th>
          <th>CEP</th>
          <th>Custo</th>
          <th>Prazo</th>
          <th className="center">Concluir?</th>
          <th className="center">Editar</th>
          <th className="center">Excluir</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.title}</td>
            <td>{item.zip_code}</td>
            <td>R${item.cost?.toFixed(2)}</td>
            <td>{formatDate(item.deadline)}</td>
            <td className="center">
              {item.done ? (
                <FiCheckSquare></FiCheckSquare>
              ) : (
                <FiSquare
                  onClick={() => handleDone(item.id)}
                  style={{ cursor: "pointer" }}
                ></FiSquare>
              )}
            </td>
            <td className="center" style={{ cursor: "pointer" }}>
              <FiEdit onClick={() => handleEdit(item.id)}></FiEdit>
            </td>
            <td className="center" style={{ cursor: "pointer" }}>
              <FiTrash2 onClick={() => handleRemove(item.id)}></FiTrash2>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProjetosGrid;

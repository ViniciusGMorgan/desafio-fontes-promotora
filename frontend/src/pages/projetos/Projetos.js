import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import "../Page.css";
import { get, getById, postOrPut, destroy, done } from "./ProjetosService";
import ProjetosForm from "./ProjetosForm";
import ProjetosGrid from "./ProjetosGrid";
import { formatDateEnUS } from "../../services/helpers";

export default function Projetos() {
  const initialRecord = {
    id: 0,
    title: "",
    zip_code: 0,
    cost: 0,
    done: false,
    deadline: "",
    username: "",
  };

  const [record, setRecord] = useState(initialRecord);
  const [data, setData] = useState([]);

  useEffect(() => {
    getProject();
  }, []);

  function getProject() {
    get()
      .then((res) => {
        setData(res);
      })
      .catch((error) =>
        toast.error("Algo de errado aconteceu!", {
          position: "bottom-center",
          autoClose: true,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: "company-error",
        })
      );
  }

  function handleEdit(id) {
    getById(id)
      .then((res) => {
        let newRecord = {
          ...res,
          deadline: formatDateEnUS(res.deadline),
        };
        setRecord(newRecord);
      })
      .catch((error) =>
        toast.error("Algo de errado aconteceu!", {
          position: "bottom-center",
          autoClose: true,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: "company-error",
        })
      );
  }

  function handleRemove(id) {
    destroy(id)
      .then((res) => {
        getProject();

        toast.error("Projeto excluído com sucesso!", {
          position: "bottom-center",
          autoClose: true,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: "company-error",
        });
      })
      .catch((error) =>
        toast.error("Não foi possível excluir!", {
          position: "bottom-center",
          autoClose: true,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: "company-error",
        })
      );
  }

  const handleSubmit = () => {
    let method = record.id ? "put" : "post";
    postOrPut(record, method)
      .then((res) => {
        getProject();
        toast.success(
          `Projeto ${record.id ? "editado" : "cadastrado"} com sucesso!`,
          {
            position: "bottom-center",
            autoClose: true,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: "company-error",
          }
        );
        setRecord(initialRecord);
      })
      .catch((error) =>
        toast.error("Algo de errado aconteceu!", {
          position: "bottom-center",
          autoClose: true,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: "company-error",
        })
      );
  };

  function handleDone(id) {
    done(id)
      .then((res) => {
        getProject();
        toast.success(`Projeto marcado como concluído!`, {
          position: "bottom-center",
          autoClose: true,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: "company-error",
        });
        setRecord(initialRecord);
      })
      .catch((error) =>
        toast.error("Algo de errado aconteceu!", {
          position: "bottom-center",
          autoClose: true,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: "company-error",
        })
      );
  }
  return (
    <div className="pageContainer">
      <div className="pageFlex">
        <div className="pageContent withoutSearch">
          <h4>Projetos</h4>
          <ProjetosForm
            record={record}
            setRecord={setRecord}
            initialRecord={initialRecord}
            handleSubmit={handleSubmit}
          ></ProjetosForm>
        </div>
      </div>
      {!record.id && (
        <div className="pageFlex">
          <div className="pageContent withoutSearch">
            <h4>Listagem de Projetos</h4>
            <ProjetosGrid
              data={data}
              handleEdit={handleEdit}
              handleRemove={handleRemove}
              handleDone={handleDone}
            />
          </div>
        </div>
      )}
    </div>
  );
}

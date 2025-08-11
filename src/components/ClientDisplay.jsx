import React, { useState, useEffect } from "react";

/**
 * Componente para mostrar los detalles de un cliente.
 * Recibe un objeto de cliente como prop.
 * @param {object} props - Las propiedades del componente.
 * @param {object} props.client - El objeto cliente con sus detalles.
 */
function ClientDisplay({ client }) {
  if (!client) {
    return (
      <p className="text-center text-gray-500 p-4">
        No hay datos de cliente para mostrar.
      </p>
    );
  }

  return (
    <div className="main-client">
      <h3 className="main-h3">Identificación</h3>
      <div className="client">
        <div className="div-p">
          <p>
            <strong className="font-semibold">Tipo de identificación</strong>{" "}
          </p>
          <p className="valor">{client.TIPOID || "N/A"}</p>
        </div>
        <div className="div-p">
          <p>
            <strong className="font-semibold">Número de identificación</strong>{" "}
          </p>
          <p className="valor">{client.NUMID || "N/A"}</p>
        </div>
      </div>
      <h3 className="main-h3">Datos personales</h3>
      <div className="client">
        <div className="div-p">
          <p>
            <strong className="font-semibold">Primer nombre</strong>{" "}
          </p>
          <p className="valor">{client.NOMTER1 || "N/A"}</p>
        </div>
        <div className="div-p">
          <p>
            <strong className="font-semibold">Segundo nombre</strong>{" "}
          </p>
          <p className="valor">{client.NOMTER2 || "N/A"}</p>
        </div>
        <div className="div-p">
          <p>
            <strong className="font-semibold">Primer apellido</strong>{" "}
          </p>
          <p className="valor">{client.APETER1 || "N/A"}</p>
        </div>
        <div className="div-p">
          <p>
            <strong className="font-semibold">Segundo apellido</strong>{" "}
          </p>
          <p className="valor">{client.APETER2 || "N/A"}</p>
        </div>
        <div className="div-p">
          <p>
            <strong className="font-semibold">Fecha de nacimiento</strong>{" "}
          </p>
          <p className="valor">{client.FECNAC || "N/A"}</p>
        </div>
        <div className="div-p">
          <p>
            <strong className="font-semibold">Sexo</strong>{" "}
          </p>
          <p className="valor">{client.SEXO || "N/A"}</p>
        </div>
        <div className="div-p">
          <p>
            <strong className="font-semibold">Estado civil</strong>{" "}
          </p>
          <p className="valor">{client.EDOCIVIL || "N/A"}</p>
        </div>
        <div className="div-p">
          <p>
            <strong className="font-semibold">Profesión</strong>{" "}
          </p>
          <p className="valor">{client.CODACT || "N/A"}</p>
        </div>
      </div>
      <h3 className="main-h3">Dirección</h3>
      <div className="client">
        <div className="div-p">
          <p>
            <strong className="font-semibold">Pais</strong>{" "}
          </p>
          <p className="valor">{client.CODPAIS || "N/A"}</p>
        </div>
        <div className="div-p">
          <p>
            <strong className="font-semibold">Estado</strong>{" "}
          </p>
          <p className="valor">{client.CODESTADO || "N/A"}</p>
        </div>
        <div className="div-p">
          <p>
            <strong className="font-semibold">Ciudad</strong>{" "}
          </p>
          <p className="valor">{client.CODCIUDAD || "N/A"}</p>
        </div>
        <div className="div-p">
          <p>
            <strong className="font-semibold">Avenida</strong>{" "}
          </p>
          <p className="valor">{client.AVENIDA || "N/A"}</p>
        </div>
        <div className="div-p">
          <p>
            <strong className="font-semibold">Edificio</strong>{" "}
          </p>
          <p className="valor">{client.EDIFICIO || "N/A"}</p>
        </div>
        <div className="div-p">
          <p>
            <strong className="font-semibold">Piso</strong>{" "}
          </p>
          <p className="valor">{client.PISO || "N/A"}</p>
        </div>
      </div>
      <h3 className="main-h3">Datos de Contacto</h3>
      <div className="client">
        <div className="div-p">
          <p>
            <strong className="font-semibold">Tlf Celular</strong>{" "}
          </p>
          <p className="valor">
            {client.CODAREA3 + "-" + client.TELEF3 || "N/A"}
          </p>
        </div>
        <div className="div-p">
          <p>
            <strong className="font-semibold">Email</strong>{" "}
          </p>
          <p className="valor">{client.EMAIL || "N/A"}</p>
        </div>
        <div className="div-p">
          <label htmlFor="emailInput">
            <strong className="font-semibold">Email</strong>
          </label>
          <input
            id="emailInput"
            type="email"
            value={client.EMAIL || "N/A"}
            className="valor"
          />
        </div>
      </div>
    </div>
  );
}

export default ClientDisplay;

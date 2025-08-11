import React from "react";
import useClientData from "./hooks/useClientData";
import ClientDisplay from "./components/ClientDisplay";

function App() {
  const customerCodeToFetch = "00000024684729";

  const [clientData, isLoading, error] = useClientData(customerCodeToFetch);

  return (
    <div className="app">
      <header className="header">
        <h1 className="header-h1">Consulta de cliente por codigo </h1>
        <h3 className="header-h3">
          Cliente a consultar : {customerCodeToFetch}
        </h3>
      </header>

      <main className="main">
        {isLoading && <div className="">Cargando datos del cliente... ⏳</div>}

        {error && <div className="">Error: {error} ❌</div>}
        {!isLoading && !error && (
          <div>
            {clientData.length > 0
              ? clientData.map((client) => (
                  <ClientDisplay
                    key={client.IDPER || client.NUMID}
                    client={client}
                  />
                ))
              : !isLoading && (
                  <div className="">
                    No se encontraron datos para el cliente con código "
                    {customerCodeToFetch}". 🤷‍♂️
                  </div>
                )}
          </div>
        )}
      </main>

      <footer className="">
        <p className="">
          &copy; 2025 Seguros Pirámide. Todos los derechos reservados.
        </p>
        <p className="">Desarrollado con React y Axios.</p>
      </footer>
    </div>
  );
}

export default App;

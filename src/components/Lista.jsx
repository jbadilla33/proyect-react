import { useState, useEffect } from "react";
import axios from "axios";

/**
 * Hook personalizado para obtener datos de un cliente de la API.
 * @param {string} customerCode - El código del cliente a buscar.
 * @returns {Array} Un array que contiene [clientData, isLoading, error].
 */
const useClientData = (customerCode) => {
  const [clientData, setClientData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClient = async () => {
      setIsLoading(true); // Inicia el estado de carga
      setError(null); // Limpia errores anteriores

      try {
        const response = await axios.post(
          "https://asesores.segurospiramide.com/asg-api/dbo/customers/get_customer_code",
          { p_code_customer: customerCode } // Usa el código de cliente que recibe el hook
        );

        console.log("Respuesta de la API:", response.data);

        if (response.data && Array.isArray(response.data.p_cursor)) {
          setClientData(response.data.p_cursor);
        } else {
          console.warn(
            "p_cursor no encontrado o no es un array:",
            response.data
          );
          setClientData([]);
        }
      } catch (err) {
        console.error("Error al obtener datos del cliente con hook:", err);
        setError("Fallo al cargar los datos del cliente.");
      } finally {
        setIsLoading(false); // Finaliza el estado de carga
      }
    };

    if (customerCode) {
      // Solo ejecuta la llamada si hay un customerCode
      fetchClient();
    } else {
      setIsLoading(false);
      setClientData([]);
    }
  }, [customerCode]); // Vuelve a ejecutar el efecto si customerCode cambia

  return [clientData, isLoading, error];
};

export default useClientData;

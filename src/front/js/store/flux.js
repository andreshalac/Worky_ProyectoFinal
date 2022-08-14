import { Crear_oferta } from "../pages/crear-oferta";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      registro: false,
    },
    actions: {
      registro: async (user) => {
        try {
          // fetching data from the backend
          const response = await fetch(process.env.BACKEND_URL + "/api/user", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (!response.ok) {
            return false;
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      crear_oferta: async (jobffer) => {
        try {
          // fetching data from the backend
          const response = await fetch(
            process.env.BACKEND_URL + "/api/JobOffer",
            {
              method: "POST",
              body: JSON.stringify(joboffer),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (!response.ok) {
            return false;
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
    },
  };
};

export default getState;

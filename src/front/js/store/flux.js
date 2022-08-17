import { Crear_oferta } from "../pages/crear-oferta";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      registro: false,
      userInfo: {},
      auth: false,
      errorAuth: false,
      crear_oferta: {},
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
      reloadWindow: () => {
        if (
            sessionStorage.getItem("token") &&
            localStorage.getItem("userInfo")
        ) {
            console.log("no");
            setStore({
                auth: true,
                userInfo: JSON.parse(localStorage.getItem("userInfo")),
            });
        }
    },
      // Fecth de Login
      login: async (email, password) => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/login",
            options
          );
          if (resp.status === 200) {
            console.log(resp.status);
            setStore({
              auth: true,
            });
          } else {
            console.log(resp.status);
            setStore({
              errorAuth: true,
            });
          }
          const data = await resp.json();
          console.log(data);
          sessionStorage.setItem("token", data.token);

          setStore({
            userInfo: data.user_info,
          });
          const userInfoStrfy = JSON.stringify(getStore().userInfo);
          localStorage.setItem("userInfo", userInfoStrfy);
          // return true; // Devuelve true para que se ejecute la acción que llamamos en Login
        } catch (error) {
          console.log(error);
        }
      }

      
/*
      oferta: async (id, 
      job,  
      budget,
      address, 
      timeline  ) => {
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
        }
         catch (error) {
          console.log("Error loading message from backend", error);
         }
    }
  */
}
  }
};

export default getState;

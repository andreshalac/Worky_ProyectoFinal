const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      registro: false,
      email: {},
      auth: false,
      errorAuth: false,
      crear_oferta: {},
      token: null,
      empleos: [],
      trabajadores: [],
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
      getTipos: async () => {
        try {
          // fetching data from the backend 4 registro tipos
          const response = await fetch(process.env.BACKEND_URL + "/api/tipos", {
            method: "GET",
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
        setStore({
          auth: true,
          userInfo: localStorage.getItem("email"),
          token: sessionStorage.getItem("token"),
        });
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
            email: data.email,
            token: data.token,
          });

          localStorage.setItem("email", data.email);
          return true;
          // return true; // Devuelve true para que se ejecute la acción que llamamos en Login
        } catch (error) {
          console.log(error);
          return false;
        }
      },

      oferta: async (joboffer) => {
        try {
          // fetching data from the backend
          const response = await fetch(
            process.env.BACKEND_URL + "/api/joboffer",
            {
              method: "POST",
              body: JSON.stringify(joboffer),
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getStore().token}`,
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
      getEmpleos: () => {
        fetch(process.env.BACKEND_URL + "/api/ofertastotal")
          .then((data) => data.json())
          .then((data) => setStore({ empleos: data }));
      },
      aplicarOfertas: async (joboffer_id) => {
        try {
          // fetching data from the backend
          const response = await fetch(
            process.env.BACKEND_URL + "/api/aplication",
            {
              method: "POST",
              body: JSON.stringify({ job_id: joboffer_id }),
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getStore().token}`,
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

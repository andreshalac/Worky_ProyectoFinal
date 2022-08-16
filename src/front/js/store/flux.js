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
      handleLogin: async (login) => {
        const store = getStore();
        const actions = getActions();
        const response = await fetch(`${store.URL_BASE}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(login),
        });
        const data = await response.json();
        return data;
      
      },
    },
  };
};

export default getState;

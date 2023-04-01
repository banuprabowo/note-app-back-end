const Hapi = require("@hapi/hapi");
const routes = require("./routes.js");
const notes = require("./notes.js");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server running in ${server.info.uri}`);
};

init();

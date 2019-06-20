const app = require('./app');
const appConfig = require('./config/appConfig');

app.listen(appConfig.port, () => {
  console.info(
    `Server is running on port: ${appConfig.port} and env: ${appConfig.env}`,
  );
});

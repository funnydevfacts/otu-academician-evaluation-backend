import configureExpress from './config/express.js';
import configureDatabase from './config/database.js';

const startServer = async function () {
  // Configurations:
  await configureDatabase();
  const app = configureExpress();

  // Start the server with the given port, default to 3000.
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
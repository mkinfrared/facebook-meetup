import { SERVER_PORT } from "@util/secrets";

import app from "./app";

try {
  app.listen(SERVER_PORT, () =>
    console.log(`Server is running at ${SERVER_PORT}`)
  );
} catch (e) {
  console.error(e);
}

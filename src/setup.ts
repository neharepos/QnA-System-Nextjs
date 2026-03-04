// src/setup.ts
import "dotenv/config"
import getOrCreateDB from "./models/server/dbSetup";
import getOrCreateStorage from "./models/server/storageSetup";

(async () => {
  await getOrCreateDB();
  await getOrCreateStorage();
  console.log("Setup done");
})();
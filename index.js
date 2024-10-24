import { transactionFunction } from "./services/transaction.js";

const indexedDBObject = (function () {
  return new Promise((resolve, reject) => {
    const db = indexedDB.open("being", 2);
    db.addEventListener("error", (err) => {
      console.warn(err);
    });
    db.addEventListener("success", (event) => {
      console.log("db connected", event.target.result);
      resolve({ db, dbObject: event.target.result });
    });
    db.addEventListener("upgradeneeded", (event) => {
      console.log("db upgraded", event.target.result);
      const dbObject = event.target.result;
      if (!dbObject.objectStoreNames.contains("human")) {
        dbObject.createObjectStore("human", { keyPath: "id" });
      }
    });
  });
})();
indexedDBObject.then(transactionFunction).catch((err) => {
  console.warn("Initialisation error", err);
});

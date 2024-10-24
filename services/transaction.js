export const transactionFunction = ({ db, dbObject }) => {
  const transactionObj = dbObject.transaction("human", "readwrite");
  transactionObj.oncomplete = (event) => {
    console.log("transaction completed successfully");
  };
  transactionObj.onerror = (error) => {
    console.warn(error);
  };
  const store = transactionObj.objectStore("human");
  const request = store.add({ id: 4, data: "test" });
  request.onsuccess = (event) => {
    console.log("data inserted successfully");
  };
  request.onerror = (e) => {
    console.warn("error on data insertion", e.target.error);
  };
};

export const transactionFunction = ({ db, dbObject }) => {
  const transactionObj = dbObject.transaction("human", "readwrite");
  transactionObj.oncomplete = (event) => {
    console.log("transaction completed successfully");
  };
  transactionObj.onerror = (error) => {
    console.warn(error);
  };
  const store = transactionObj.objectStore("human");
  // addData();
  // getData(store);
  // updateData(store);
  deleteData(store)
};

const addData = (store) => {
  const request = store.add({ id: 4, data: "test" });
  request.onsuccess = (event) => {
    console.log("data inserted successfully");
  };
  request.onerror = (e) => {
    console.warn("error on data insertion", e.target.error);
  };
};

const getData = (store) => {
  const request = store.getAll();
  request.onsuccess = (event) => {
    debugger;
    console.log("get data successfully", event.target.result);
  };
  request.onerror = (e) => {
    console.warn("error on data fetching", e.target.error);
  };
};

const updateData = (store) => {
  const request = store.put({ id: 1, data: { name: "pankaj" } });
  request.onsuccess = (event) => {
    console.log("data updated successfully", event.target.result);
  };
  request.onerror = (e) => {
    console.warn("error on data update", e.target.error);
  };
};

const deleteData = (store) => {
  const request = store.delete(2);
  request.onsuccess = (event) => {
    console.log("data deleted successfully");
  };
  request.onerror = (e) => {
    console.warn("error on data delete", e.target.error);
  };
};

import IDC from ".";

const transactionObj = dbObject.transaction("being", "readwrite");

transactionObj.onCompleted(() => {
  debugger;
});
transactionObj.onError(() => {
  debugger;
});

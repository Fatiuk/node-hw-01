const contacts = require("./contacts");

const fetchData = async () => {
  const getAll = await contacts.getAllContacts();
  console.log(getAll);
};

fetchData();

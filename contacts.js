const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.resolve('contacts.json')

function listContacts() {

  fs.readFile('db/contacts.json', "utf-8")
    .then(data => console.log(data))
    .catch(error => console.log(error.message));
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
   fs.appendFile('db/contacts.json', name)
}

const contacts = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}

module.exports = contacts;

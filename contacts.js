const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json')

function listContacts() {
    fs.readFile(contactsPath);
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

const contacts = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}

module.exports = contacts;
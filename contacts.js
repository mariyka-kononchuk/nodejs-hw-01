const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, 'db/contacts.json')

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
}

async function getContactById(contactId) {
  const data = await listContacts();
  const result = data.find(item => item.id === contactId);
  if (!result) {
    return null;
  }
  return result;
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
   fs.appendFile(contactsPath, name)
}

const contacts = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}

module.exports = contacts;

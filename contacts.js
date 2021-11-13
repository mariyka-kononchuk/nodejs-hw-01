const { v4 } = require('uuid');
const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, 'db/contacts.json')

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.find(item => item.id === contactId);
  if (!result) {
    return null;
  }
  return result;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const index = contacts.findIndex(item => item.id === contactId);
  if (index === -1) {
    return null;
  }
  contacts.splice(index, 1);
  return contacts;
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {name, email, phone, id: v4() };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return contacts;

}

const contacts = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}

module.exports = contacts;

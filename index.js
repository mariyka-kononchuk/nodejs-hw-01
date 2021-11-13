const contactsOperations = require("./contacts");
const argv = require('yargs').argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
        const contacts = await contactsOperations.listContacts();
        console.table(contacts);
        break;

    case 'get':
        const contactById = await contactsOperations.getContactById(id);
        if (!contactById) {
            throw new Error(`Product with id=${id} not found`)
        }
        console.log(contactById);
        break;

    case 'add':
        const newContact = await contactsOperations.addContact(name, email, phone);
        console.table(newContact);
        break;

    case 'remove':
        const removeContact = await contactsOperations.removeContact(id);
        console.table(removeContact);
        break;

    default:
        console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);

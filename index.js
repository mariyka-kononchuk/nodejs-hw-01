const contactsOperations = require("./contacts");

// const argv = require('yargs').argv;
// invokeAction(argv);

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
        const contacts = await contactsOperations.listContacts();
        console.log(contacts);
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
          console.log(newContact);
      break;

    case 'remove':
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}


invokeAction({
    action: 'add',
    name: "Marfa",
    email: "marfa@gmail.com",
    phone: "123-456",})

//самовызывающаяся функция
//     (async () => {
//         await invokeAction(argv);
//     })();
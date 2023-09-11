const readline = require('readline');
const Contact = require('./Contact'); 
const ContactList = require('./ContactList');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const myContactList = new ContactList();

function addContact() {
  rl.question('Enter the name of the contact: ', (name) => {
    rl.question('Enter the phone number: ', (phone) => {
      const contact = new Contact(name, phone);
      myContactList.addContact(contact);
      console.log(`Contact added: ${contact.toString()}`);
      showMenu();
    });
  });
}

function viewAllContacts() {
  myContactList.viewAllContacts();
  showMenu();
}

function searchContact() {
  rl.question('Enter the name of the contact to search: ', (searchName) => {
    myContactList.searchContact(searchName);
    showMenu();
  });
}

function exitApp() {
  console.log('thank uu!');
  rl.close();
}

function showMenu() {
  console.log('\nChoose your option:\n');
  console.log('1. Add a contact');
  console.log('2. View all contacts');
  console.log('3. Search for a contact');
  console.log('4. Exit');
  rl.question('Enter your choice: ', (choice) => {
    switch (choice) {
      case '1':
        addContact();
        break;
      case '2':
        viewAllContacts();
        break;
      case '3':
        searchContact();
        break;
      case '4':
        exitApp();
        break;
      default:
        console.log('Invalid choice. Please enter a valid option.');
        showMenu();
    }
  });
}
//srating
showMenu();

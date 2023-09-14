class ContactList 
{
    constructor() 
    {
      this.contacts = [];
    }
  
    addContact(contact) 
    {
      this.contacts.push(contact);
    }
  
    viewAllContacts() {
      console.log('All Contacts: \n');
      this.contacts.forEach((contact, index) => 
      {
        console.log(`${index + 1}:\n ${contact.toString()}\n`);
      });
    }
  
    searchContact(searchName) 
    {
      const foundContacts = this.contacts.filter((contact) => contact.name === searchName);
      if (foundContacts) 
      {
        console.log(`Your searching result:\n`);
        foundContacts.forEach((contact) => 
        {
          console.log(contact.toString());
        });
      } 
      else 
      {
        console.log(`No contacts found for '${searchName}'`);
      }
    }
  }
  
  module.exports = ContactList;
  
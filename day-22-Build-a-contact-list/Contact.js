class Contact 
{
    constructor(name, phone) 
    {
      this.name = name;
      this.phone = phone;
    }
  
    toString() 
    {
      return `\nName: ${this.name}\nPhone: ${this.phone}\n`;
    }
  }
  
  module.exports = Contact;
  
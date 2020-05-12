const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let x = 'lastName'; //chave
const lastName = 'Ferreira'; // valor
customer[x] = lastName; //incluindo nova chave ao objeto
console.log(customer);
x = 'fullName'; //nova chave
const fullName = `${customer.firstName} ${customer.lastName}`; //valor
customer[x] = fullName; //incluindo nova chave ao objetivo
console.log(customer);
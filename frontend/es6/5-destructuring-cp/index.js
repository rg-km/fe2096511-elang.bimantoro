// format nama user menjadi "John - john@example.com", 
// dan akses nama user dengan teknik destrucuring assignment.

const format = (user) => {
  // TODO: answer here
  let {name, email} = user;
  return `${name} - ${email}`;
};

console.log(format({ name: "John", email: "john@example.com" }))

module.exports = format
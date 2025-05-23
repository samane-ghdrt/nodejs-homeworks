/*
1- Write code to import and log the contents of a JSON file named data.json.

2- Implement a function named login that accepts two parameters, username and password. Inside this function, search the imported JSON data for a user object where both the username and password match the provided arguments.

3- Modify the login function to return the matched user object if the credentials are correct. If no match is found, return a message indicating "email or password incorrect."

4- Write code to access the username and password from the command-line arguments passed when running the script.
hint: process.argv

5- Use the command-line arguments as inputs to the login function and log the result to the console.
*/
let datas=[];
fs=require('fs')
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    datas=JSON.parse(data);
    const user=process.argv[2]
    const pass=process.argv[3]
    function login(username,password) {
        let matchedUser = null;
    datas.forEach(element => {
       if (element.username===username&&element.password===password) {
        matchedUser=element;
       } 
    
    });
    if (matchedUser) {
        return matchedUser; 
      } else {
        return "email or password incorrect.";
      }
    }
    console.log(login(user,pass));
    
  });



/* 
    LEARN ABOUT ERROR HANDLING
*/

// Error handling

/* 
try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
} 
*/

try {
  const person = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((json) => json.json())
      .then((res) => {
        res.array.forEach((user) => {
          document.getElementById("users").innerHTML += ``;
        });
      });
  };
} catch (err) {
  console.log("Not working");
} finally {
  console.log("End of request!");
}

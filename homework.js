/*

Build a web application that shows a list of posts and information about the post's author. This will require the following steps:

API endpoint: https://jsonplaceholder.typicode.com/

1. Make an API call to retrieve all of the posts.
2. Make an API call to retrieve all of the users.
3. Display the author's name and the post title and body on the page.

Grading criteria:
1. Use fetch, async, and await.
2. Use the find() method.
3. Use only ES6+ techniques if needed: template strings (`${}`), arrow functions, forEach(), etc.
4. Use GitHub and make at least 5 commits with meaningful commit messages in the present tense. For example: "Create filter function."
5. Do not have any extraneous comments beyond explanations of code (if needed) in your final result. Do not have any console.logs, in comments or otherwise.
6. CSS is not necessary and will not be graded but is encouraged for the sake of practice.

Stretch goal:

When a user clicks on a post, make an API call to retrieve the comments associated with that post and display them on the page.

*/

const resultsDiv = document.getElementsByClassName("results")[0];

postTitles =[];
const getPosts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  posts = await response.json();
  posts.forEach((getPosts, index) => {
    postTitles.push(posts[index].title);
  });

// const posts = await getPosts();

// return posts;
console.log(posts);
};
// const posts = await getPosts();


getPosts();


userNames =[];
const getUsers = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  users = await response.json();
  users.forEach((getUsers, index) => {
    resultsDiv.innerHTML += `<div class="infoCard"> <span class="cityName"><b>${users[index].name}</b>, posted ${posts[index].title}, is famous for the ${users.name}.</span></div>`;
    resultsDiv.classList.add("posts", "col-md");
    userNames.push(users[index].name);
  });

//   userNames =[];
// const getUsers = async () => {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   users = await response.json();
//   users.forEach((getUsers, index) => {
//     resultsDiv.innerHTML += `<div class="infoCard"> <span class="cityName"><b>${users.name}</b>, a city with a population of ${users.name}, is famous for the ${users.name}.</span></div>`;
//     resultsDiv.classList.add("posts", "col-md");
//     userNames.push(users[index].name);
//   });

// const posts = await getPosts();

// return posts;
console.log(users);
};
// const posts = await getPosts();


getUsers();
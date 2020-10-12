/*

Write a function that retrieves a list of posts from this URL:

https://jsonplaceholder.typicode.com/posts

The retrieved data should be an array of objects structured like so:

  {
    "userId": 10,
    "id": 96,
    "title": "quaerat velit veniam amet cupiditate aut numquam ut sequi",
    "body": "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut"
  }

  return a new array from this function that is an array of strings containing only the title of each post.

*/

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const postTitles = posts.map((post) => {
    return post.title;
  });

  return postTitles;
};

getPosts();

const posts = await getPosts();



const resultsDiv = document.getElementsByClassName("results")[0];
let posts;
let users;

// postTitles =[];
const getPosts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  posts = await response.json();

  
//   posts.forEach((getPosts, index) => {
//     // postTitles.push(posts[index].title);
//   });

// console.log(posts);
return posts

};

getPosts();


// userNames =[];
const getUsers = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  users = await response.json();
  users.forEach((getUsers, index) => {

    resultsDiv.innerHTML += `<div class="card"> <strong>${users[index].name}</strong> posted ${posts[index].title} <div class="bodytext"><p>${posts[index].body}</p></div></div>`;
    resultsDiv.classList.add("infocard");

    // userNames.push(users[index].name);

  });

  return users
// console.log(users);
};

getUsers();


const getPostsWithUsers = async () => {
    const users = await getUsers();
    const posts = await getPosts();
   

    const postDiv = document.getElementsByClassName("post");
    console.log(users);

    posts.forEach((post) => {
        const user = users.find((user) => {
            postswithuser = user.id === post.userId;
            return postswithuser;
            
        });

        postDiv.innerHTML +=`<div style="border: 1px solid black; padding: 2px;">
        <p>${post.title}, by <strong>${user.name}</strong></p>
        <p>${post.body}</p>
        </div>
        `;

        postDiv.classList.add("infocard");
    });
};

getPostsWithUsers();

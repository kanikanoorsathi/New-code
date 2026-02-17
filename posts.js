const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch (url)
     .then((res) => res.json())
     .then((data) => {
        // console.log(data);
        displayPosts(data);
     });
}

// {
//     "userId": 1,
//     "id": 5,
//     "title": "nesciunt quas odio",
//     "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
// }


const displayPosts =(posts) => {

    // 1. get the container and empty the container
    const postsContainer = document.getElementById("post-container");
    postsContainer.innerHTML = "";
    posts.forEach((post) => {
        // console.log(posts);

        // 2. creat element
        const postCard = document.createElement("div");
        postCard.innerHTML = `<div class="post-Card">     
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>`;

        // 3. add to the contaner
        postsContainer.append(postCard);
        
    });
}
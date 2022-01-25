const getRemoteData = function (url, callback) {
  // HANDLE THE HTTP REQUEST WITH "url"
  // ...
  // ...
  // ...
  // ...
  // ...

  //let data = result of HTTP Req

  if (!err) {
    callback(null, data);
  } else {
    callback(err);
  }
};

getRemoteData("https://whatever.com/users/123971238712", function (user) {
  getRemoteData("https://whatever.com/posts/" + user.name, function (blogPosts) {
    getRemoteData("https://whatever.com/comments/" + blogPosts[0].id, function (comments) {
      // DOM MANIPULATION
      // attaching comments in the page....
      console.log(comments);
    });
  });
});

// ARROW FUNCTIONS
function sayHi(user) {
  console.log("HI");
}

// const sayHi = function() {
//     return "HI";
// }

// const sayHi = () => {
//     console.log(smth)
//     return "HI"
// }

// const sayHi = arg1 => "HI";

const sayHi = (arg1, arg2) => "HI";

console.log(sayHi());

getRemoteData("https://whatever.com/users/123971238712")
  .then(function (user) {
    return getRemoteData("https://whatever.com/posts/" + user.name);
  })
  .then(function (blogPosts) {
    return getRemoteData("https://whatever.com/comments/" + blogPosts[0].id);
  })
  .then(function (comments) {
    // DOM MANIPULATION
    // attaching comments in the page....

    div.innerHTML = comments[0];
    console.log(comments);
  });

getRemoteData("https://whatever.com/users/123971238712")
  .then(user => getRemoteData("https://whatever.com/posts/" + user.name))
  .then(blogPosts => getRemoteData("https://whatever.com/comments/" + blogPosts[0].id))
  .then(comments => {
    // DOM MANIPULATION
    // attaching comments in the page....

    div.innerHTML = comments[0];
    console.log(comments);
  })
  .catch(err => handleErr(err));

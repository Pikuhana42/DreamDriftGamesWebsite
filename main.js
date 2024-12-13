console.log("main.js init")
let userCommentForm = document.getElementById("commentBox");
userCommentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let userCommentBox = document.getElementById("comment1").value;
    console.log(userCommentBox);
    document.getElementById("comment1").value = "";
});
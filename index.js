/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {}
// Step 1: Locate the heart elements on the page
document.addEventListener('DOMContentLoaded', () => {
  const articleHearts = document.querySelectorAll(".like-glyph");

  // Step 2: Set up mock server communication
  function mimicServerCall(url="http://mimicServer.example.com", config={}) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        let isRandomFailure = Math.random() < .2
        if (isRandomFailure) {
          reject("Random server error. Try again.");
        } else {
          resolve("Pretend remote server notified of action!");
        }
      }, 300);
    });
  }

  // Step 3: Add event listeners to the heart elements
  articleHearts.forEach(heart => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          if (heart.classList.contains("activated-heart")) {
            heart.classList.remove("activated-heart");
          } else {
            heart.classList.add("activated-heart");
          }
        })
        .catch(error => {
          alert(error);
        });
    });
  });
});
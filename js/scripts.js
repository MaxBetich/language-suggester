window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let result = document.querySelector("div#result");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const question1 = document.querySelector("input[name='question1']:checked").value;
    const question2 = document.querySelector("input[name='question2']:checked").value;
    const question3 = document.querySelector("input[name='question3']:checked").value;
    const question4 = document.querySelector("input[name='question4']:checked").value;
    const question5 = document.querySelector("input[name='question5']:checked").value;

    if (question1 === "yes") {
      document.getElementById("output").innerText = "JavaScript is the language for you!";
      document.getElementById("result").removeAttribute("class");
      document.getElementById("reset").removeAttribute("class");
    } else if (question2 === "yes") {
      document.getElementById("output").innerText = "You'll likely find Ruby to be right up your alley!";
      document.getElementById("result").removeAttribute("class");
      document.getElementById("reset").removeAttribute("class");
    } else if (question3 === "yes") {
      document.getElementById("output").innerText = "Python is a heck of a good time for someone as cool as you!";
      document.getElementById("result").removeAttribute("class");
      document.getElementById("reset").removeAttribute("class");
    } else if (question4 === "green") {
      document.getElementById("output").innerText = "Go is the language for programmers on the move!";
      document.getElementById("result").removeAttribute("class");
      document.getElementById("reset").removeAttribute("class");
    } else if (question5 === "yes") {
      document.getElementById("output").innerText = "C# will let you code with perfect pitch!";
      document.getElementById("result").removeAttribute("class");
      document.getElementById("reset").removeAttribute("class");
    } else {
      document.getElementById("output").innerText = "The only logical choice for a first language is Swift!";
      document.getElementById("result").removeAttribute("class");
      document.getElementById("reset").removeAttribute("class");
    }
  })

  form.addEventListener("reset", function (event) {
    document.getElementById("reset").setAttribute("class", "hidden");
    document.getElementById("result").setAttribute("class", "hidden");
  })
})
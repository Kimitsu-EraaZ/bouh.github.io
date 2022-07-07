let btn = document.getElementById("envoyer");

btn.addEventListener("click", function () {
  let age = document.getElementById("age");
  if (age >= 18) {
    document.write("Tu est majeur");
  } else {
    document.write("Dégage petit !");
  }
});

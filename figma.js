document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("tglbtn");
  const dv = document.getElementById("tgldv");

  const myfun = () => {
    dv.style.display = dv.style.display === "none" ? "block" : "none";
  };

  btn.addEventListener("click", myfun);
});

export default function search_filter(categoryNames, searchbarSection10) {
  let categories = document.querySelectorAll(categoryNames),
    searchbar = document.getElementById(searchbarSection10),
    searchbarContent,
    regExp;

  addEventListener("keyup", (e) => {
    searchbarContent = searchbar.value;
    regExp = new RegExp(`${searchbarContent}`, "gi");

    if (e === "Escape") searchbar.textContent = ""; //Sí tecla Esc, entonces se borra lo escrito

    categories.forEach((el) => {
      if (!regExp.test(el.textContent))
        el.parentElement.style.setProperty("display", "none");
      else el.parentElement.style.setProperty("display", "block");
    });
  });
}

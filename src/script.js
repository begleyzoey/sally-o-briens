function scrollPage() {
  const my_element = document.getElementById("element");

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}

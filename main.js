function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function openMenu() {
  document.body.class.add("menu-expanded");
}

function closeMenu() {
  document.body.class.remove("menu-expanded");
}

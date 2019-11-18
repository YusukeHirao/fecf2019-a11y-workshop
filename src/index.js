import $ from "jquery";
import "./styles.scss";

const constructBurgerMenu = () => {
  const OPEN_STATE_CLASS = "-open";
  let openState = false;
  const $nav = $("header nav");
  $("#button").on("click", () => {
    // Toggle state
    openState = !openState;

    // Switch CSS class
    if (openState) {
      $nav.addClass(OPEN_STATE_CLASS);
    } else {
      $nav.removeClass(OPEN_STATE_CLASS);
    }
  });
};

const main = () => {
  constructBurgerMenu();
};

main();

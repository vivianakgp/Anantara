// treatments menu
const menu__treatments = document.getElementById("menu__treatments");
const treatments__subMenu = document.getElementById("treatments__subMenu");
const facials__subMenu = document.getElementById("facials__subMenu");
const facialsList = document.getElementById("facialsList");
const bodyTreatments__subMenu = document.getElementById(
  "bodyTreatments__subMenu"
);
const bodyTreatmentsList = document.getElementById("bodyTreatmentsList");
const regenerativeTreatment__subMenu = document.getElementById(
  "regenerativeTreatment__subMenu"
);
const regenerativeTreatmentList = document.getElementById(
  "regenerativeTreatmentList"
);
// icon menu
const menuIcon = document.getElementById("menuIcon");
// nav
const menuNav = document.getElementById("menuNav");
// subMenu icons
const treatmentIcon = document.getElementById("treatmentIcon");
const facialIcon = document.getElementById("facialIcon");
const bodyTreatmentsIcon = document.getElementById("bodyTreatmentsIcon");
const regenerativeTreatmentIcon = document.getElementById(
  "regenerativeTreatmentIcon"
);

// toggle subMenu hidden/ show ul
const toggleMenu = (element) => {
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
};
// toggle menuIcon burger/close
const toggleMenuIcon = () => {
  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
};
// toggle open/close nav
export const openCloseMenuNav = () => {
  menuIcon.addEventListener("click", () => {
    toggleMenuIcon();
    toggleMenu(menuNav);
  });
};
// toggle arrowUpIcon subMenus
const togglearrowUpIcon = (icon) => {
  if (icon.classList.contains("fa-angle-down")) {
    icon.classList.remove("fa-angle-down");
    icon.classList.add("fa-angle-up");
  } else {
    icon.classList.remove("fa-angle-up");
    icon.classList.add("fa-angle-down");
  }
};
//add event click to treatments category on menu
menu__treatments.addEventListener("click", () => {
  toggleMenu(treatments__subMenu);
  togglearrowUpIcon(treatmentIcon);
});
//add click to faciial submenu
facials__subMenu.addEventListener("click", () => {
  toggleMenu(facialsList);
  togglearrowUpIcon(facialIcon);
});
//add click to body Treatments submenu
bodyTreatments__subMenu.addEventListener("click", () => {
  toggleMenu(bodyTreatmentsList);
  togglearrowUpIcon(bodyTreatmentsIcon);
});
//add click to regenerative Treatment submenu
regenerativeTreatment__subMenu.addEventListener("click", () => {
  toggleMenu(regenerativeTreatmentList);
  togglearrowUpIcon(regenerativeTreatmentIcon);
});

// export const addEventsListener = (element, submenuList) => {
//   element.addEventListener("click", () => toggleMenu(submenuList));
// };

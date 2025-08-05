let navigation_element = "about_me";

const navigation_elements = document.querySelectorAll("nav ul li a");

function clicked_navigation_element(element) {
    navigation_elements.forEach((element) => {
        element.classList.remove("active_nav_element");
    });
    element.classList.add("active_nav_element");
}

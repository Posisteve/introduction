let navigation_element = "about_me";

const navigation_elements = document.querySelectorAll("nav ul li a");

function clicked_navigation_element(element) {
    navigation_elements.forEach((element) => {
        element.classList.remove("active_nav_element");
    });
    element.classList.add("active_nav_element");
}

// Bilderwechsel

// select the img element with the id toon_portrait
const image_element = document.getElementById("toon_portrait");

let currentImageIndex = 1;

function change_portrait() {
    // Erhöhe Index, starte bei 1 wenn Ende (5) erreicht
    currentImageIndex = currentImageIndex >= 5 ? 1 : currentImageIndex + 1;

    // Neue Bildquelle setzen (z.B. img/toon_portrait/stylized_002.jpg)
    image_element.src = `img/toon_portrait/stylized_00${currentImageIndex}.jpg`;
    console.log(image_element);
}

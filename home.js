var navbar_button = document.getElementById("navbar_hamburger");
var navbar_menu = document.getElementById("navbar_menu");

navbar_button.addEventListener("click", function() {
      // Toggle the 'class1' and 'class2' classes on the button
        navbar_menu.classList.toggle('navbar_menu');
        navbar_menu.classList.toggle('navbar_menu_left');
  });


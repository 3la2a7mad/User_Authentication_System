document.addEventListener("DOMContentLoaded", function () {

    var products = [
        { name: "Laptop", image: "./image/laptop.jpg" },
        { name: "Smartphone", image: "./image/Smartphone.jpg" },
        { name: "Headphones", image: "./image/Headphones.jpg" },
        { name: "Keyboard", image: "./image/Keyboard.jpg" },
        { name: "Mouse", image: "./image/Mouse.jpg" },
        { name: "Monitor", image: "./image/Monitor.jpg" },
        { name: "Printer", image: "./image/Printer.jpg" },
        { name: "Camera", image: "./image/Camera.jpg" },
        { name: "Tablet", image: "./image/Tablet.jpg" },
        { name: "Smartwatch", image: "./image/Smartwatch.jpg" }
    ];



    var productCards = document.getElementById('productCards');


    products.forEach(function (product) {

        var cardHTML = `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">This is a ${product.name} product.</p>
                        <a href="#" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>
        `;

        productCards.insertAdjacentHTML('beforeend', cardHTML);
    });

    // تغيير الوضع (Dark Mode / Light Mode)
    var dark = document.querySelector(".Dark");
    var light = document.querySelector(".Light");
    var Body = document.querySelector("body");

    function addDarkMode() {
        Body.classList.add("DarkMode");
        Body.classList.remove("LightMode");
    }

    function addLightMode() {
        Body.classList.add("LightMode");
        Body.classList.remove("DarkMode");
    }

    if (dark && light) {
        dark.onclick = addDarkMode;
        light.onclick = addLightMode;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("clone1").addEventListener("click", () => cloneElement("1horse"));
    document.getElementById("clone2").addEventListener("click", () => cloneElement("2horse"));
    document.getElementById("clone3").addEventListener("click", () => cloneElement("3horse"));    
});

function cloneElement(elementId) {
    const element = document.getElementById(elementId);
    const clone = element.cloneNode(true);
    
    if (elementId === "1horse") {
        document.querySelector(".first").appendChild(clone);
    } else if (elementId === "2horse") {
        document.querySelector(".second").appendChild(clone);
    } else if (elementId === "3horse") {
        document.querySelector(".third").appendChild(clone);
    }
}
function removeElement(elementId) {
    const element = document.getElementById(elementId);
    element.remove();
}
document.addEventListener("DOMContentLoaded", function() {
    var addButton = document.querySelector(".add");
    var toggle = true;

    addButton.addEventListener("click", function() {
        var originalElement;
        if (toggle) {
            originalElement = document.querySelector(".bgh");
        } else {
            originalElement = document.querySelector(".bgh1");
        }

        if (originalElement) {
            var clonedElement = originalElement.cloneNode(true);
            clonedElement.style.display = "block";
            originalElement.parentNode.insertBefore(clonedElement, originalElement.nextSibling);
        } else {
            var newElement = document.createElement("div");
            newElement.className = toggle ? "bgh" : "bgh1";
            newElement.style.display = "block";
            document.body.appendChild(newElement);
        }

        toggle = !toggle;
        toggleButtons();
    });

    function toggleButtons() {
        var image4 = document.querySelectorAll(".bgh");
        var image5 = document.querySelectorAll(".bgh1");
        var addButton = document.querySelector(".add");
        var removeButton = document.querySelector(".delete");
        addButton.disabled = false;

        removeButton.disabled = (image4.length + image5.length) <= 2;
    }

    toggleButtons();
});

document.addEventListener("DOMContentLoaded", function() {
    var removeButton = document.querySelector(".delete");
    var imagenext = true;

    removeButton.addEventListener("click", function() {
        if (imagenext) {
            var image = document.querySelector(".bgh");
            if (image) {
                image.parentNode.removeChild(image);
            }
        } else {
            var image4 = document.querySelector(".bgh1");
            if (image4) {
                image4.parentNode.removeChild(image4);
            }
        }
        imagenext = !imagenext;

        toggleButtons();
    });

    function toggleButtons() {
        var image4 = document.querySelectorAll(".bgh");
        var image5 = document.querySelectorAll(".bgh1");
        var addButton = document.querySelector(".add");
        var removeButton = document.querySelector(".delete");
        addButton.disabled = false;
        removeButton.disabled = (image4.length + image5.length) <= 2;
    }
    toggleButtons(); 
});

 
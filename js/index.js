


const resetAllButtons = () => {
    // Select only the 'nav-items' class if their parent has 'menu' class
    const items = document.querySelectorAll(".menu .nav-item");
    // Itera y realiza una acción con cada elemento encontrado (opcional)
    items.forEach((item) => {
        item.classList.remove("active");
    });
};

const activeButton = (index) => {
    
    // Select only the 'nav-items' class if their parent has 'menu' class
    const items = document.querySelectorAll(".menu .nav-item");
    items[index].classList.add("active");
    
};

const disableAllSections = (excludeIndex) => {
    const sections = document.querySelectorAll(".cv-section");
    sections.forEach((section, index) => {
        if (index !== excludeIndex) { // No ocultar la sección que queremos mostrar
            section.classList.add("fade-out"); // Clase para animación de salida
            setTimeout(() => {
                section.classList.add("d-none");
                section.classList.remove("fade-out");
            }, 300); // Tiempo que dura la animación
        }
    });
};

const showAllSections = () => {
    const sections = document.querySelectorAll(".cv-section");
    sections.forEach((section) => {
        section.classList.remove("d-none");
    });
}

const showSection = (index) => {
    const sections = document.querySelectorAll(".cv-section");
    const section = sections[index];
    section.classList.remove("d-none");
    section.classList.add("fade-in"); // Clase para animación de entrada
    setTimeout(() => {
        section.classList.remove("fade-in");
    }, 300); // Tiempo que dura la animación
};



document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los enlaces del menú
    const navLinks = document.querySelectorAll('.nav-link');
    const offcanvasElement = document.getElementById('offcanvasDarkNavbar');
    const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        // Eliminar la clase 'active' de todos los enlaces
        navLinks.forEach(nav => nav.classList.remove('active'));

        // Agregar la clase 'active' al enlace seleccionado
        event.target.classList.add('active');

        // Cerrar el menú Offcanvas
        offcanvas.hide();
      });
    });
  });


const buttonTogglerMenu = document.getElementById("toggler-buttom-nav");
const toggler = document.getElementById("toggler-buttom");
const svgToggle = document.getElementById("svg-toggler");

// Save original z-index, backgroundColor and stroke from the button toggler and stroke from svg
const originalZIndex = buttonTogglerMenu.style.zIndex;
const originalBackgroundColor = toggler.style.backgroundColor;
const originalStroke = svgToggle.style.stroke;

// Add event listener to the button
// When the screen size is less than 568px, the button will be positioned in the top right corner

function updateButtonPosition() {

    
    

    if (window.innerWidth < 568) {
        buttonTogglerMenu.classList.add(
            "position-fixed",
            "top-1",
            "end-0",
        );
        
        
        
        buttonTogglerMenu.classList.remove("navbar");
        buttonTogglerMenu.style.zIndex = "1000";
        toggler.style.backgroundColor = "rgb(168, 148, 255)";
        toggler.classList.add("rounded-start-5");
        svgToggle.style.stroke = "white";

    } else {
        buttonTogglerMenu.classList.remove(
            "position-fixed",
            "top-1",
            "end-0",
            
        );
        buttonTogglerMenu.classList.add("navbar");
        toggler.classList.remove("rounded-start-5");
        
        buttonTogglerMenu.style.zIndex = originalZIndex;
        toggler.style.backgroundColor = originalBackgroundColor;
        svgToggle.style.stroke = originalStroke;
    }

    if (window.innerWidth < 1024) {
        showAllSections();
    }else{
        disableAllSections(0);
        showSection(0);
    }

    
}

// Update button position on page load
updateButtonPosition();

// Add an event listener to adjust button position on window resize
window.addEventListener("resize", updateButtonPosition);



















// Add an event listener to the buttons

// About me
document.getElementById("about-buttom").addEventListener("click", () => {
    window.location.href = "#about";
    resetAllButtons();
    activeButton(0);

    if (window.innerWidth > 1024) {
        disableAllSections(0); // Excluir la sección 0 de ser oculta
        showSection(0);
    }
});


// Nav about me
document.getElementById("nav-about-buttom").addEventListener("click", () => {
    window.location.href = "#about";
    resetAllButtons();
    activeButton(0);

    if (window.innerWidth > 1024) {
        disableAllSections(0); // Excluir la sección 0 de ser oculta
        showSection(0);
    }
});

// Resume
document.getElementById("resume-buttom").addEventListener("click", () => {
    window.location.href = "#resume";
    resetAllButtons();
    activeButton(1);

    if (window.innerWidth > 1024) {
        disableAllSections(1);
        showSection(1);
    }
    
});

// Nav resume
document.getElementById("nav-resume-buttom").addEventListener("click", () => {
    window.location.href = "#resume";
    resetAllButtons();
    activeButton(1);

    if (window.innerWidth > 1024) {
        disableAllSections(1);
        showSection(1);
    }
    
});

// Projects
document.getElementById("projects-buttom").addEventListener("click", () => {
    window.location.href = "#projects";
    resetAllButtons();
    activeButton(2);

    if (window.innerWidth > 1024) {
        disableAllSections(2);
        showSection(2);
    }
    
});

// Nav projects
document.getElementById("nav-projects-buttom").addEventListener("click", () => {
    window.location.href = "#projects";
    resetAllButtons();
    activeButton(2);

    if (window.innerWidth > 1024) {
        disableAllSections(2);
        showSection(2);
    }
    
});





// Hobbies
document.getElementById("hobbies-buttom").addEventListener("click", () => {
    window.location.href = "#hobbies";
    resetAllButtons();
    activeButton(3);

    if (window.innerWidth > 1024) {
        disableAllSections(3);
        showSection(3);
    }
    
});

// Nav hobbies
document.getElementById("nav-hobbies-buttom").addEventListener("click", () => {
    window.location.href = "#hobbies";
    resetAllButtons();
    activeButton(3);

    if (window.innerWidth > 1024) {
        disableAllSections(3);
        showSection(3);
    }
    
});

// Contact
document.getElementById("contact-buttom").addEventListener("click", () => {
    window.location.href = "#contact";
    resetAllButtons();
    activeButton(4);

    if (window.innerWidth > 1024) {
        disableAllSections(4);
        showSection(4);
    }
    
}

);

// Nav contact
document.getElementById("nav-contact-buttom").addEventListener("click", () => {
    window.location.href = "#contact";
    resetAllButtons();
    activeButton(4);

    if (window.innerWidth > 1024) {
        disableAllSections(4);
        showSection(4);
    }
    
});

// function([string1, string2],target id,[color1,color2])
consoleText(["Computer Engineer", "Hello World!", "Contact with me!"], "text", [
    "#000957",
    "#7E5CAD",
    "#78B3CE",
]);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ["#fff"];
    var visible = true;
    var con = document.getElementById("console");
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id);
    target.setAttribute("style", "color:" + colors[0]);
    window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount);
            window.setTimeout(function () {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute("style", "color:" + colors[0]);
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount);
            letterCount += x;
        }
    }, 120);
    window.setInterval(function () {
        if (visible === true) {
            con.className = "console-underscore hidden";
            visible = false;
        } else {
            con.className = "console-underscore";

            visible = true;
        }
    }, 400);
}

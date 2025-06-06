const paragraph = document.querySelector("#Homepage-Content p");
paragraph.style.opacity = "1";

const navLinks = document.querySelectorAll('.nav-link-items');
const pageSections = document.querySelectorAll('.Page-sections'); // Note plural

window.addEventListener("scroll", () => {
  let currentSection = "";

  pageSections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id"); // Use `section`, not `pageSections`
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

const aboutLinks = document.querySelectorAll('.About-Section-Link');
const aboutContainer = document.querySelector('#About-Content-Container');

aboutLinks.forEach(link => {
  
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove 'active' class from all links
    aboutLinks.forEach(link => link.classList.remove('active'));
    
    // Add 'active' class to the clicked link
    link.classList.add('active');
    
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);


    if (targetSection) {
      const containerTop = aboutContainer.getBoundingClientRect().top;
      const targetTop = targetSection.getBoundingClientRect().top;
      const scrollPosition = targetTop - containerTop + aboutContainer.scrollTop;

      aboutContainer.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Get the next project
const nextButton = document.querySelector("#next-project");
const previousButton = document.querySelector("#previous-project");
const stackContainer = document.querySelector("#tech-stack-container");

const title = document.querySelector("#project-title");
const applicationType = document.querySelector("#project-application");
const description = document.querySelector("#project-description");
const image = document.querySelector("#project-image");

let counter = 0;

const project = {
  title: ["PORTFOLIO", "GENX", "RENTAL X", "BETTER TASTE","bebeng"],
  description: [
    "Welcome to my portfolio website. Here, I showcase the projects I've built and share a bit about myself as a developer. The About Me section gives insight into my background and interests, while the Projects section highlights my work and technical skills. This site reflects my growth and passion for web development.",
    "I developed a local anime player website designed to organize and play anime episodes directly from your computer’s storage. Instead of streaming, this site acts as a clean, user-friendly interface where you can browse, select, and watch your downloaded anime files. It mimics the experience of an online platform, but everything runs locally — giving you full control over your collection without needing an internet connection.",
    "RENTAL XS",
    "BETTER TASTES",
    "bebengs"
  ],
  image: ["Images/code.png", "Images/code2.png", "Images/code.png", "Images/code2.png", "Images/code.png"],
  applicationType: ["(Website)", "(Website)", "(Web App)", "(Web App)","(Mobile App)"],
  techStack: [
    ["html", "css", "javascript"],
    ["html", "css", "javascript"],
    ["html", "css", "javascript", "php"],
    ["html", "css", "javascript", "laravel", "react"],
    ["android", "java", "firebase"]
  ]
};

// Function to render tech stack icons
function renderTechStack(stackArray) {
  stackContainer.innerHTML = ""; // Clear previous icons

  stackArray.forEach(tech => {
    const icon = document.createElement("i");
    icon.style.fontSize = "3.5rem";
    icon.style.marginRight = "10px";

    switch (tech.toLowerCase()) {
      case "javascript":
        icon.className = "fa-brands fa-js";
        icon.style.color = "yellow";
        break;
      case "css":
        icon.className = "fa-brands fa-css3-alt";
        icon.style.color = "#2965f1";
        break;
      case "html":
        icon.className = "fa-brands fa-html5";
        icon.style.color = "#e34c26";
        break;
      case "php":
        icon.className = "fa-brands fa-php";
        icon.style.color = "#777bb4";
        break;
      case "react":
        icon.className = "fa-brands fa-react";
        icon.style.color = "#61dafb";
        break;
      case "laravel":
        icon.className = "fa-brands fa-laravel";
        icon.style.color = "#ff2d20";
        break;
      case "java":
        icon.className = "fa-brands fa-java";
        icon.style.color = "blue";
        break;
        case "android":
        icon.className = "fa-brands fa-android";
        icon.style.color = "rgb(98, 255, 0)";
        break;
      case "firebase":
        icon.className = "material-symbols-outlined";
        icon.textContent = "fireplace"; // or another relevant symbol name
        icon.style.color = "orange";
        break;
      default:
        icon.textContent = tech;
        icon.style.color = "#666";
    }

    stackContainer.appendChild(icon);
  });

  stackContainer.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
  previousButton.style.opacity = 1;
  counter++;

  title.classList.add("hidden");
  applicationType.classList.add("hidden");
  description.classList.add("hidden");
  image.classList.add("hidden");
  stackContainer.classList.add("hidden");

  setTimeout(() => {
    title.textContent = project.title[counter];
    applicationType.textContent = project.applicationType[counter];
    description.textContent = project.description[counter];
    image.src = project.image[counter];

    renderTechStack(project.techStack[counter]); // 👈 Call to render icons

    title.classList.remove("hidden");
    applicationType.classList.remove("hidden");
    description.classList.remove("hidden");
    image.classList.remove("hidden");
  }, 500);

  if (counter >= project.title.length - 1) {
    nextButton.disabled = true;
    nextButton.style.opacity = 0;
  }
});

previousButton.addEventListener("click", () => {
  if (counter >= 1) {
    nextButton.disabled = false;
    nextButton.style.opacity = 1;
    counter--;

    title.classList.add("hidden");
    applicationType.classList.add("hidden");
    description.classList.add("hidden");
    image.classList.add("hidden");
    stackContainer.classList.add("hidden");

    setTimeout(() => {
      title.textContent = project.title[counter];
      applicationType.textContent = project.applicationType[counter];
      description.textContent = project.description[counter];
      image.src = project.image[counter];

      renderTechStack(project.techStack[counter]); // 👈 Call to render icons

      title.classList.remove("hidden");
      applicationType.classList.remove("hidden");
      description.classList.remove("hidden");
      image.classList.remove("hidden");
    }, 500);

    if (counter === 0) {
      previousButton.style.opacity = 0;
    }
  }
});

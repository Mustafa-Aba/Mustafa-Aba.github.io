document.addEventListener("DOMContentLoaded", function () {
  // Function to handle smooth scrolling and transition effect
  function scrollToSection(targetId) {
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      // Get the height of the header
      const headerHeight = document.querySelector("header").offsetHeight;

      // Scroll to the target section with an offset
      window.scrollTo({
        top: targetSection.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  }

  // Add event listeners for navigation links to handle smooth scrolling and transition effect
  const navLinks = document.querySelectorAll(".nav-button");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute("href");
      scrollToSection(targetId);
    });
  });

  // Add event listener for the home button to scroll to the top of the page
  const homeButton = document.querySelector(".home-button");
  homeButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    scrollToSection("#home");
  });

  // Show sections when they are in view
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.5 }
  ); // Adjust threshold as needed

  sections.forEach((section) => {
    observer.observe(section);
  });
  // Add event listeners to input fields and textarea
  const inputFields = document.querySelectorAll(".input-field");
  inputFields.forEach((field) => {
    field.addEventListener("focus", function () {
      // Clear placeholder text when focused
      this.placeholder = "";
    });
    field.addEventListener("blur", function () {
      // Restore placeholder text if field is empty
      if (!this.value) {
        if (this.id === "name") {
          this.placeholder = "Enter your name";
        } else if (this.id === "email") {
          this.placeholder = "Enter your email";
        } else if (this.id === "message") {
          this.placeholder = "Write your message here";
        }
      }
    });
  });
});
function openGithub(project) {
  // Replace the GitHub link with your actual GitHub repository link for each project
  let githubLinks = {
    project1: "https://github.com/your_username/project1",
    project2: "https://github.com/your_username/project2",
    project3: "https://github.com/your_username/project3",
  };

  let githubLink = githubLinks[project];
  if (githubLink) {
    window.open(githubLink, "_blank");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  // Dark Mode Toggle
  toggleSwitch.addEventListener('change', switchTheme, false);

  function switchTheme(e) {
      if (e.target.checked) {
          body.classList.remove('dark-mode');
          body.classList.add('light-mode');
      } else {
          body.classList.remove('light-mode');
          body.classList.add('dark-mode');
      }
  }

  // Set initial theme based on user preference (dark mode by default)
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (!prefersDarkMode) {
      toggleSwitch.checked = true;
      switchTheme({ target: { checked: true } });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const logoLink = document.getElementById("logo-link");

  logoLink.addEventListener("click", function (event) {
      event.preventDefault();
      scrollToSection("#home");
  });

  // Function to scroll to sections
  function scrollToSection(targetId) {
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
          const headerHeight = document.querySelector("header").offsetHeight;
          window.scrollTo({
              top: targetSection.offsetTop - headerHeight,
              behavior: "smooth",
          });
      }
  }
});


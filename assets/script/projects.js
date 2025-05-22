const ProjectsData = [
  
  {
    name: "Tic-Tac-Toe",
    logo: "https://cdn-icons-png.flaticon.com/128/434/434798.png",
    description:
      "play against a bot using the Minimax algorithm or with a friend. This game is built with HTML, CSS, and JS.",
    link: "https://sohez.github.io/tic-tac-toe/",
  },
 
];

const ProjectsDataHTML = ProjectsData.map(
  (item) => `
           <div class="projects-card">
              <img loading="lazy" src="${item.logo}" alt="${item.name}">
              <h3>${item.name}</h3>
              <p>${item.description}</p>
              <a href="${item.link}" title="${item.name}" target="_blank">View</a>
          </div>
      `
).join("");

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("projects-card-container").innerHTML =
    ProjectsDataHTML;
});

const ExpertiseData = [
  
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },

  {
  name: "C++",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
},
{
  name: "Python",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
},
{
  name: "HTML",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
},
{
  name: "CSS",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
},
{
  name: "OOPs",
  logo: "https://cdn-icons-png.flaticon.com/512/919/919828.png",  // Simple OOP/Classes icon from flaticon
},

 
];

const ExpertiseDataHTML = ExpertiseData.map(
  (item) => `
        <div class="expertise-card">
            <img loading="lazy" src="${item.logo}" alt="${item.name}">
            <span>${item.name}</span>
        </div>
    `
).join("");

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('expertise-card-container').innerHTML = ExpertiseDataHTML;
});

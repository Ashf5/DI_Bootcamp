
const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
];

const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "pink",
    "orange",
    "grey"
]


let section = document.getElementsByClassName('listPlanets')[0];
for (let i = 0; i < planets.length; i++) {
    let div = document.createElement('div');
    div.classList.add('planet');
    div.style.background = colors[i];

    section.appendChild(div);
    let p = document.createElement('p');
    p.innerText = planets[i];
    p.style.color='white';
    p.style.fontSize = '24px';
    section.appendChild(p);
}

const section = document.querySelectorAll("section"),
  navLinks = document.querySelectorAll("header nav li a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // on scroll change active nav links
      navLinks.forEach((link) => {
        link.classList.remove("active-state");
        document
          .querySelector(`header nav li a[href*=${id}]`)
          .classList.add("active-state");
      });
    }
  });

  // sticky header
  const header = document.querySelector("header");
  header.classList.toggle("header-active", window.scrollY > 100);
};

const skillData = [
  {
    title: "Frontend",
    data: [
      {
        name: "React",
        img: "./assets2/img/frontend-3.png",
      },
      {
        name: "Redux",
        img: "./assets2/img/frontend-4.png",
      },
      {
        name: "Tailwind css",
        img: "./assets2/img/frontend-5.png",
      },
      {
        name: "Javascript",
        img: "./assets2/img/frontend-2.png",
      },
      {
        name: "HTML",
        img: "./assets2/img/frontend-6.png",
      },
      {
        name: "CSS",
        img: "./assets2/img/frontend-1.png",
      },
      {
        name: "SCSS",
        img: "./assets2/img/frontend-8.png",
      },
      {
        name: "Bootstrap",
        img: "./assets2/img/frontend-7.png",
      },
    ],
  },
  {
    title: "Backend",
    data: [
      {
        name: "Nodejs",
        img: "./assets2/img/backend-4.png",
      },
      {
        name: "Express js",
        img: "./assets2/img/backend-1.png",
      },
      {
        name: "Mongodb",
        img: "./assets2/img/backend-2.png",
      },
      {
        name: "MySql",
        img: "./assets2/img/backend-3.png",
      },
    ],
  },
  {
    title: "Other language",
    data: [
      {
        name: "C++",
        img: "./assets2/img/other_lang1.png",
      },
      {
        name: "Java",
        img: "./assets2/img/other_lang2.png",
      },
    ],
  },
  {
    title: "Other",
    data: [
      {
        name: "Git",
        img: "./assets2/img/other-2.png",
      },
      {
        name: "Github",
        img: "./assets2/img/other-3.png",
      },
      {
        name: "Vscode",
        img: "./assets2/img/other-4.png",
      },
      {
        name: "Figma",
        img: "./assets2/img/other-1.png",
      },
    ],
  },
];

// populate data in dom
const populate = (data, parent) => {
  const div1 = document.createElement("div");
  const h2 = document.createElement("h2");
  h2.textContent = data.title;
  const subDiv = document.createElement("div");

  data.data.forEach(({ name, img }) => {
    const div2 = document.createElement("div");
    const imgTag = document.createElement("img");
    // imgTag.href = img;
    imgTag.src = img;
    const p = document.createElement("p");
    p.textContent = name;

    // setting className
    div2.classList = "tag__container";
    imgTag.classList = "skill__img";
    p.classList = "skill__name";

    // appending into div
    div2.appendChild(imgTag);
    div2.appendChild(p);
    subDiv.appendChild(div2);
  });

  // setting className
  h2.classList = "skill__heading";
  subDiv.classList = "skill__container";

  // appending into parent-div
  div1.appendChild(h2);
  div1.appendChild(subDiv);
  parent.appendChild(div1);
};

// getting parent div
const skillSection = document.querySelector(".skill-section");

// populate -> frontend
populate(skillData[0], skillSection);
populate(skillData[1], skillSection);
populate(skillData[2], skillSection);
populate(skillData[3], skillSection);

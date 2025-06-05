import { projects } from "../data/projects.js";
import { clones } from "../data/projects.js";

let somethingHTML = "";

projects.forEach((project) => {
  somethingHTML += `
    <div class="project">
      <div class="project-video">
        <video class="hover-this"
          src="${project.video}"
        ></video>
      </div>
      <div class="project-name">
        <h2>${project.projectName}</h2>
        <p>${project.type}</p>
      </div>

      <h2>Project Breakdown</h2>

      <div class="features-container">
        <ul>
          <li>
            ${project.summaryOne}
          </li>
          <li>
            ${project.summaryTwo}
          </li>
          <li>
            ${project.summaryThree}
          </li>
          <li>
            ${project.summaryFour}
          </li>
        </ul>
      </div>
      <a target="_blank" href="${project.projectLink}">
        <div class="arrow-container">
          <div class="arrow-link">
                <img class="arrow-pic" src="link svg.svg" alt="">

                <img class="arrow-pic-2" src="link svg.svg" alt="">
          </div>
        </div>
      </a>
    </div>
  `;
});

document.querySelector(".js-all-projects").innerHTML = somethingHTML;

let cloneProjectsHTML = "";

clones.forEach((clone) => {
  cloneProjectsHTML += `
    <div class="each-project">
      <video
        class="hover-this"
        loop
        src="${clone.video}"
      ></video>
      <h2>${clone.site}</h2>
      <p>${clone.content}</p>
      <a target="_blank" href="${clone.projectLink}">
        <div class="arrow-container">
          <div class="arrow-link">
            <img class="arrow-pic" src="link svg.svg">
          </div>
        </div>
      </a>
    </div>
  `;
});

document.querySelector(".js-clone-projects").innerHTML = cloneProjectsHTML;

document.querySelectorAll(".hover-this").forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();

    video.addEventListener("mouseout", () => {
      video.pause();
    });
  });
});

const projectElem = document.querySelector(".js-projects-container");
const projectMenu = document.querySelector(".menu-js-2");
const navBar = document.querySelector(".js-navbar");
const developerElem = document.querySelector(".js-developer-detail");
const contactElem = document.querySelector(".js-contact-container");
const aboutElem = document.querySelector(".js-about-page");
const cloneElem = document.querySelector(".js-clone-sites");

projectMenu.addEventListener("click", () => {
  developerElem.style.display = "none";
  contactElem.style.display = "none";
  cloneElem.style.display = "none";
  projectElem.style.display = "block";
  aboutElem.style.display = "none";

  hideAndroidMenus();
});

const homeMenu = document.querySelector(".menu-js-1");

homeMenu.addEventListener("click", () => {
  developerElem.style.display = "block";
  contactElem.style.display = "none";
  projectElem.style.display = "none";
  cloneElem.style.display = "none";
  aboutElem.style.display = "none";

  hideAndroidMenus();
});

const contactMe = document.querySelector(".js-contact");

contactMe.addEventListener("click", () => {
  developerElem.style.display = "none";
  projectElem.style.display = "none";
  cloneElem.style.display = "none";
  contactElem.style.display = "block";
  aboutElem.style.display = "none";

  hideAndroidMenus();
});

const aboutMenu = document.querySelector(".menu-js-4");

aboutMenu.addEventListener("click", () => {
  developerElem.style.display = "none";
  projectElem.style.display = "none";
  contactElem.style.display = "none";
  cloneElem.style.display = "none";

  aboutElem.style.display = "block";

  hideAndroidMenus();
});

const cloneMenu = document.querySelector(".menu-js-3");
cloneMenu.addEventListener("click", () => {
  developerElem.style.display = "none";
  projectElem.style.display = "none";
  contactElem.style.display = "none";
  aboutElem.style.display = "none";

  cloneElem.style.display = "block";

  hideAndroidMenus();
});

const androidMenu = document.querySelector(".hamburger-menu");

const androidHeader = document.querySelector(".androidHeaderToo");

androidMenu.addEventListener("click", () => {
  androidHeader.style.display = "flex";
});

function hideAndroidMenus() {
  if (window.innerWidth <= 450) {
    androidHeader.style.display = "none";
  }
}

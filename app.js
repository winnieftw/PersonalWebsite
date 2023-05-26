/* Repeat animation each time in viewport*/
const observer1 = new IntersectionObserver((element) => {
    element.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
        /* Remove else if don't want a fade out*/
        else {
            entry.target.classList.remove('show');
        }

    });
});

/* Animations only runs once */
const observer2 = new IntersectionObserver((element) => {
    element.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } 

    });
});

const sectionElements = document.querySelectorAll(".sect");
const iconElements = document.querySelectorAll(".icon");
const navElements = document.querySelectorAll(".introElements");
const selfPortrait = document.querySelectorAll(".selfPortrait");


sectionElements.forEach((ele) => observer1.observe(ele));
iconElements.forEach((ele) => observer1.observe(ele));
navElements.forEach((ele) => observer1.observe(ele));
selfPortrait.forEach((ele) => observer1.observe(ele));



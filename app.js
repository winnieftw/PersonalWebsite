const observer = new IntersectionObserver((element) => {
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


const sectionElements = document.querySelectorAll(".sect");
const iconElements = document.querySelectorAll(".icon");

sectionElements.forEach((ele) => observer.observe(ele));
iconElements.forEach((ele) => observer.observe(ele));


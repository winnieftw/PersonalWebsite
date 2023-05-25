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
sectionElements.forEach((ele) => observer.observe(ele));

'use strict'

document.addEventListener(
    'DOMContentLoaded', () => {
        const header = document.querySelector('.header');
        const nav = document.querySelector('.nav')
        const allSections = document.querySelectorAll('.sect')
        const myName = document.querySelector('.my-name');
        const navLink = document.querySelectorAll('.nav-link');

        const navHeight = nav.getBoundingClientRect().height
        console.log(navHeight)


        const stickyNav = function (entries) {
            const [entry] = entries;

            if (!entry.isIntersecting) {
                nav.classList.add('nav-sticky')
            } else {
                nav.classList.remove('nav-sticky')
            }
        }


        const headerObserver = new IntersectionObserver(
            stickyNav, {
            root: null,
            threshold: 0,
            rootMargin: `-${navHeight}px`
        }
        )

        headerObserver.observe(header)


        //////scramble-effect
        const text = 'Mr Beast'


        let currentText = Array(text.length).fill('-');



        function getRandomLetter() {
            const alphabets = ['a>', '<b', '<c', '<d', 'e>', '<f', '<g?', '<h', '<i', '<j'
                , 'k>', '<l', 'm>', 'n>', 'o>', '<p', '<q'
                , 'r>', 's>', '<t', 'u>', 'v>', '<w', '<x', '<y', 'z>']

            return alphabets[Math.floor(Math.random() * alphabets.length)]
        }


        const scrambleText = function () {

            for (let i = 0; i < text.length; i++) {
                if (currentText[i] !== text[i]) {

                    currentText[i] = getRandomLetter();
                }
            }
            myName.textContent = currentText.join('');

        }


        function revealText() {
            let index = 0;
            const interval = setInterval(() => {
                if (currentText[index] !== text[index]) {
                    currentText[index] = text[index]
                } else {
                    index++
                }
                scrambleText();
                if (index >= text.length) {
                    clearInterval(interval);
                }
            }, 200)
        }


        revealText();


        //////////////////smooth transition of sections apart from header////////////////

        const otherSection = document.querySelectorAll('.section');

        const revealSection = function (entries, observer) {
            const [entry] = entries;

            if (!entry.isIntersecting) return;
            entry.target.classList.remove('section--hidden')

            sectionObserver.unobserve(entry.target)
        }
        const sectionObserver = new IntersectionObserver(

            revealSection, {
            root: null,
            threshold: 0.15,
        }
        )

        otherSection.forEach(function (section) {
            sectionObserver.observe(section)
            section.classList.add('section--hidden')

        })



        ////////highlighting of nav-links///////////

        // nav.addEventListener('click', function (e) {
        //     const clicked = e.target.closest('.nav-link');
        //     console.log(clicked)

        //     navLink.forEach(link => {
        //         link.classList.remove('active');

        //     })

        //     clicked.classList.add('active');
        //     if (!clicked) return;

        // });

        // const navHighlight = function (entries) {


        //     entries.forEach(entry => { 

        //         if (entry.isIntersecting) {
                    
        //             navLink.forEach((link, index) => {
        //                 link.classList.remove('active');

        //                 if (link.getAttribute('href').substring(1) === entry.target.id) {
        //                     link.classList.add('active')
        //                 }
        //             })
        //         }
        //     })


        // }

        // console.log(allSections)
        // const sectObserver = new IntersectionObserver(
        //     navHighlight, {
        //     root: null,
        //     threshold: 0.1,
        // }
        // )


        // allSections.forEach(section => sectObserver.observe(section))

    })




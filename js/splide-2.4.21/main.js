document.addEventListener("DOMContentLoaded", () => {
    new Splide(".splide", {
        rewind: true,
        fixedWidth: "30rem",
        fixedHeight: "30rem",
        start: 0,
        arrowPath: "M13.067 22.347l5.48-5.48c0.24-0.241 0.388-0.573 0.388-0.94s-0.148-0.699-0.388-0.94l-5.333-5.333",
        autoplay: true,
        classes: {
            // arrows: "splide__arrows carrousel__arrows",
            arrow: "splide__arrow ",
            prev  : 'splide__arrow--prev carrousel__arrow',
        },
        // type: "loop",
        // width: "50%",
        // height: "100%",

    }).mount();
});
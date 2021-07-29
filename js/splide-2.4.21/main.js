document.addEventListener("DOMContentLoaded", () => {
    new Splide(".splide", {
        rewind: true,
        perPage: 1,
        start: 0,
        // autoplay: true,
        classes: {
            arrow : 'splide__arrow splide__arrow-custom',
            prev  : 'splide__arrow--prev splide__arrow-custom-prev',
            next  : 'splide__arrow--next splide__arrow-custom-next',
            pagination: 'splide__pagination splide__pagination-custom', 
            page  : 'splide__pagination__page splide__pagination__page-custom', 
        },
        // fixedWidth: "75vw",
        // fixedHeight: "15rem",
        // width: "100%",
        // height: "auto",
        // type: "loop",
        // pauseOnFocus: true,
        // pauseOnHover: true,
        pagination: true
    }).mount();
});
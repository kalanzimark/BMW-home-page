const gallery = [
    {
        id: 1,
        title: "vision of the future",
        img: "./assets/gallery/image28.jpg",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod amet aliquam a dolorum est laborum molestiae commodi minima repellat totam.",
    },
    {
        id: 2,
        title: "life style",
        img: "./assets/gallery/image29.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: " universe.",
        img: "./assets/gallery/image30.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "life style.",
        img: "./assets/gallery/image31.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "team work.",
        img: "./assets/gallery/image32.png",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "Echo friendly.",
        img: "./assets/gallery/image33.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas repudiandae animi ducimus eum.",
    },
    {
        id: 7,
        title: "Imagine",
        img: "./assets/gallery/image34.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
];

//toggel side bar overlay
const openBtn = document.querySelector(".burger_icons");
const mobileLinksOverlay = document.querySelector(".nav_links-mobile");
const closeBtn = document.querySelector(".close_btn");

openBtn.addEventListener("click", function () {
    mobileLinksOverlay.classList.add("open_nav_links-mobile");
    openBtn.classList.add("hide_burger");
});
closeBtn.addEventListener("click", function () {
    mobileLinksOverlay.classList.remove("open_nav_links-mobile");
    openBtn.classList.remove("hide_burger");
});
// dynamic gallery adding

const showMore = document.querySelector(".show_more");

showMore.addEventListener("click", () => {
    addGallery();
});

const addGallery = () => {
    let galleryInfo = gallery
        .map((info, index) => {
            if (index < 1) {
                return ` <div class="gallery_layout-two">
                    <div class="gallery_article_container colspan2">
                        <div class="gallery_image overlay">
                            <img src=${index === 0 && gallery[0].img} alt="" />
                        </div>
                        <div class="gallery_info">
                            <div class="gallery_title">
                                <p>${index === 0 && gallery[0].title}</p>
                            </div>
                            <div class="gallery-subtitle">
                                <p>
                                    ${index === 0 && gallery[0].desc}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="gallery_article_container col1_i">
                        <div class="gallery_image overlay">
                            <img src=${index === 0 && gallery[1].img} alt="" />
                        </div>
                        <div class="gallery_info">
                            <div class="gallery_title">
                                <p>${index === 0 && gallery[1].title}</p>
                            </div>
                            <div class="gallery-subtitle">
                                <p>
                                   ${index === 0 && gallery[1].img}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="gallery_article_container col1_ii">
                        <div class="gallery_image overlay">
                            <img src=${index === 0 && gallery[2].img} alt="" />
                        </div>
                        <div class="gallery_info">
                            <div class="gallery_title">
                                <p>${index === 0 && gallery[2].title}</p>
                            </div>
                            <div class="gallery-subtitle">
                                <p>
                                    ${index === 0 && gallery[2].desc}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="gallery_article_container col1_iii">
                        <div class="gallery_image overlay">
                            <img src=${index === 0 && gallery[3].img} alt="" />
                        </div>
                        <div class="gallery_info">
                            <div class="gallery_title">
                                <p>${index === 0 && gallery[3].title}</p>
                            </div>
                            <div class="gallery-subtitle">
                                <p>
                                    ${index === 0 && gallery[3].desc}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="gallery_article_container col1_iv">
                        <div class="gallery_image overlay">
                            <img src=${index === 0 && gallery[4].img} alt="" />
                        </div>
                        <div class="gallery_info">
                            <div class="gallery_title">
                                <p>${index === 0 && gallery[4].title}</p>
                            </div>
                            <div class="gallery-subtitle">
                                <p>
                                    ${index === 0 && gallery[4].desc}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="gallery_article_container col1_v">
                        <div class="gallery_image overlay">
                            <img src=${index === 0 && gallery[5].img} alt="" />
                        </div>
                        <div class="gallery_info">
                            <div class="gallery_title">
                                <p>${index === 0 && gallery[5].title}</p>
                            </div>
                            <div class="gallery-subtitle">
                                <p>
                                   ${index === 0 && gallery[5].desc}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="gallery_article_container col1_vi">
                        <div class="gallery_image overlay">
                            <img src=${index === 0 && gallery[6].img} alt="" />
                        </div>
                        <div class="gallery_info">
                            <div class="gallery_title">
                                <p>${index === 0 && gallery[6].title}</p>
                            </div>
                            <div class="gallery-subtitle">
                                <p>
                                    ${index === 0 && gallery[6].desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>`;
            }
        })
        .join("");
    const gallerycontainer = document.querySelector(".gallery");
    gallerycontainer.innerHTML += galleryInfo;
    const postLoadOverlay = document.querySelectorAll(".overlay");
    darkOverlay(postLoadOverlay);
};

// add dark overlay and transformation

const preLoadOverlay = document.querySelectorAll(".overlay");
const darkOverlay = (addOverlay) => {
    addOverlay.forEach((container) => {
        container.addEventListener("mouseover", (e) => {
            e.currentTarget.classList.add("darkoverlay");
        });
        container.addEventListener("mouseout", (e) => {
            e.currentTarget.classList.remove("darkoverlay");
        });
    });
};
darkOverlay(preLoadOverlay);
//carousel
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slide = document.querySelector(".podcast_section-two");

let sliderFullWidth = slide.scrollWidth - slide.clientWidth;

prev.addEventListener("click", () => {
    slide.scrollLeft += -350;
    next.style.display = "block";
});
next.addEventListener("click", () => {
    slide.scrollLeft += 350;
    prev.style.display = "block";
    let onscrollValue = slide.scrollLeft;
    next.style.display =
        sliderFullWidth > Math.round(onscrollValue) ? "block" : "none";
});

slide.addEventListener("scroll", () => {
    prev.style.display = "block";
    let onscrollValue = slide.scrollLeft;
    prev.style.display = onscrollValue > 0 ? "block" : "none";
    next.style.display =
        onscrollValue > 0 || onscrollValue < sliderFullWidth ? "block" : "none";
});

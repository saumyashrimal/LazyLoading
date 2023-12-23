const imagesContainer = document.querySelector('#images-container');

const Images = [
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
    "https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703289600&semt=ais",
    "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D",
    "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg"
]

const handleIntersection = (entries, observer) => {
    console.log("entries = ", entries);
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            const img = entry.target;
            const imgUrl = img.getAttribute("data-src");
            img.src = imgUrl;
            observer.unobserve(img);
        }
    })
};

const observer = new IntersectionObserver(handleIntersection, {rootMargin: '0px', threshold: 1})



const createImage = (image) => {
    let img = document.createElement("img");
    img.setAttribute("data-src", image);
    img.setAttribute("src", "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png");
    observer.observe(img);
    imagesContainer.appendChild(img);
}

const handleLoadImages = () => {
    Images.forEach((image) => {
        createImage(image);
    })
}


handleLoadImages();

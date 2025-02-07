const testimonials = [
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..Lorem Ipsum remains the benchmark for dummy text in the printing industry....Lorem Ipsum remains the benchmark for dummy text in the printing industry.....",
        name: "James Thomas",
        country: "GERMANY",
        image: "assets/imgs/male_student.png"
    },
    {
        text: "The printing and typesetting industry has been using Lorem Ipsum..Lorem Ipsum remains the benchmark for dummy text in the printing industry....Lorem Ipsum remains the benchmark for dummy text in the printing industry.....",
        name: "Sophia Martinez",
        country: "SPAIN",
        image: "assets/imgs/male_student.png"
    },
    {
        text: "Lorem Ipsum remains the benchmark for dummy text in the printing industry....Lorem Ipsum remains the benchmark for dummy text in the printing industry....Lorem Ipsum remains the benchmark for dummy text in the printing industry....",
        name: "William Johnson",
        country: "USA",
        image: "assets/imgs/male_student.png"
    },
    {
        text: "A timeless piece of dummy text, Lorem Ipsum has been the industry's choice.Lorem Ipsum remains the benchmark for dummy text in the printing industry....Lorem Ipsum remains the benchmark for dummy text in the printing industry......",
        name: "Emily Chen",
        country: "CANADA",
        image: "assets/imgs/male_student.png"
    }
];

let index = 0;

function updateTestimonial() {
    const testimonialText = document.getElementById("testimonial-text");
    const userName = document.getElementById("user-name");
    const userCountry = document.getElementById("user-country");
    const userImage = document.getElementById("user-image");

    // Apply fade-out effect before changing content
    testimonialText.classList.add("opacity-0");
    userName.classList.add("opacity-0");
    userCountry.classList.add("opacity-0");
    userImage.classList.add("opacity-0");

    setTimeout(() => {
        testimonialText.innerText = testimonials[index].text;
        userName.innerText = testimonials[index].name;
        userCountry.innerText = testimonials[index].country;
        userImage.src = testimonials[index].image;

        // Apply fade-in effect after content change
        testimonialText.classList.remove("opacity-0");
        userName.classList.remove("opacity-0");
        userCountry.classList.remove("opacity-0");
        userImage.classList.remove("opacity-0");

        index = (index + 1) % testimonials.length;
    }, 500);
}

// Automatically update the testimonial every 5 seconds
setInterval(updateTestimonial, 5000);

// Initialize the first testimonial
updateTestimonial();

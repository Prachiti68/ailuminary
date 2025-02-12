//JavaScript for FAQ Toggle
document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector("i");

        // Toggle visibility
        answer.classList.toggle("hidden");

        // Toggle chevron direction
        if (answer.classList.contains("hidden")) {
            icon.classList.replace("fa-chevron-down", "fa-chevron-right");
        } else {
            icon.classList.replace("fa-chevron-right", "fa-chevron-down");
        }
    });
});
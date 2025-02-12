document.getElementById("menu-toggle").addEventListener("click", function() {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});





// courses 
const courses = [
  { id: 1, title: "Introduction to Data Science", category: "Data Science", price: "$20.00", mode: "online", instructor: "Dr. Emily Carter", enrolled: 3200, rating: 4.6, reviews: 12500, img: "https://source.unsplash.com/featured/?data-science" },
  { id: 2, title: "Cloud Computing Basics", category: "Cloud", price: "$18.50", mode: "offline", instructor: "John Doe", enrolled: 2100, rating: 4.5, reviews: 10230, img: "https://source.unsplash.com/featured/?cloud" },
  { id: 3, title: "Data Engineering with Python", category: "Data Engineering", price: "$25.00", mode: "online", instructor: "Sarah Johnson", enrolled: 4100, rating: 4.7, reviews: 15320, img: "https://source.unsplash.com/featured/?python" },
  { id: 4, title: "Microsoft Office Masterclass", category: "Ms Office", price: "$15.00", mode: "offline", instructor: "Michael Smith", enrolled: 2800, rating: 4.3, reviews: 8400, img: "https://source.unsplash.com/featured/?microsoft-office" },
  { id: 5, title: "AWS Certified Solutions Architect", category: "AWS", price: "$30.00", mode: "online", instructor: "Alice Smith", enrolled: 3400, rating: 4.7, reviews: 9854, img: "https://source.unsplash.com/featured/?aws" },
  { id: 6, title: "Full Stack Development Bootcamp", category: "FSD", price: "$27.99", mode: "offline", instructor: "Robert Brown", enrolled: 3700, rating: 4.6, reviews: 11200, img: "https://source.unsplash.com/featured/?fullstack" },
  { id: 7, title: "Introduction to Data Science", category: "Data Science", price: "$20.00", mode: "offline", instructor: "Dr. Emily Carter", enrolled: 2950, rating: 4.5, reviews: 11800, img: "https://source.unsplash.com/featured/?data-science" },
  { id: 8, title: "Cloud Computing Basics", category: "Cloud", price: "$18.50", mode: "online", instructor: "John Doe", enrolled: 2150, rating: 4.5, reviews: 10400, img: "https://source.unsplash.com/featured/?cloud" },
  { id: 9, title: "Data Engineering with Python", category: "Data Engineering", price: "$25.00", mode: "offline", instructor: "Sarah Johnson", enrolled: 3850, rating: 4.6, reviews: 14800, img: "https://source.unsplash.com/featured/?python" },
  { id: 10, title: "Microsoft Office Masterclass", category: "Ms Office", price: "$15.00", mode: "online", instructor: "Michael Smith", enrolled: 2650, rating: 4.2, reviews: 7900, img: "https://source.unsplash.com/featured/?microsoft-office" },
  { id: 11, title: "AWS Certified Solutions Architect", category: "AWS", price: "$30.00", mode: "offline", instructor: "Alice Smith", enrolled: 3300, rating: 4.6, reviews: 9700, img: "https://source.unsplash.com/featured/?aws" },
  { id: 12, title: "Full Stack Development Bootcamp", category: "FSD", price: "$27.99", mode: "online", instructor: "Robert Brown", enrolled: 3800, rating: 4.7, reviews: 11500, img: "https://source.unsplash.com/featured/?fullstack" },
  { id: 13, title: "Cybersecurity Fundamentals", category: "Cybersecurity", price: "$22.50", mode: "online", instructor: "Jessica Lee", enrolled: 2900, rating: 4.6, reviews: 11000, img: "https://source.unsplash.com/featured/?cybersecurity" },
  { id: 14, title: "Machine Learning for Beginners", category: "Machine Learning", price: "$28.00", mode: "offline", instructor: "David Wilson", enrolled: 3400, rating: 4.8, reviews: 13400, img: "https://source.unsplash.com/featured/?machine-learning" }
];


const onlineBtn = document.getElementById("onlineBtn");
const offlineBtn = document.getElementById("offlineBtn");
const categoryBtns = document.querySelectorAll(".categoryBtn");
const coursesContainer = document.getElementById("coursesContainer");
const activeBg = document.getElementById("activeBg");

let activeMode = "all"; 
let activeCategory = "all"; 

onlineBtn.addEventListener("click", () => {
  activeBg.classList.remove("translate-x-full");
  activeBg.classList.add("translate-x-0");
  onlineBtn.classList.add("text-white", "bg-purple-600");
  offlineBtn.classList.remove("text-white", "bg-purple-600");
  offlineBtn.classList.add("text-purple-600");
  activeMode = "online"; 
  renderCourses();
});

offlineBtn.addEventListener("click", () => {
  activeBg.classList.remove("translate-x-0");
  activeBg.classList.add("translate-x-full");
  offlineBtn.classList.add("text-white", "bg-purple-600");
  onlineBtn.classList.remove("text-white", "bg-purple-600");
  onlineBtn.classList.add("text-purple-600");
  activeMode = "offline";
  renderCourses();
});

categoryBtns.forEach(button => {
  button.addEventListener("click", () => {
      activeCategory = button.getAttribute("data-category");
      activeMode = "all"; 
      renderCourses();
  });
});

function renderCourses() {
  coursesContainer.innerHTML = "";
  
  courses
      .filter(course => 
          (activeMode === "all" || course.mode === activeMode) && 
          (activeCategory === "all" || course.category === activeCategory)
      )
      .forEach(course => {
          const courseCard = `
              <div class="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div class="relative">
                      <img src="${course.img}" alt="${course.title}" class="w-full h-48 object-cover" loading="lazy">
                      <div class="absolute top-2 right-2 bg-white text-gray-700 text-xs font-semibold px-3 py-1 rounded-full shadow-md">08 hr 12 mins</div>
                  </div>
                  <div class="p-6">
                      <div class="text-sm font-semibold text-[#9747FF] mb-2">${course.category}</div>
                      <h3 class="text-lg font-bold mb-2">${course.title}</h3>
                      <p class="text-sm text-gray-600 mb-4">Learn the fundamentals of ${course.category} with expert guidance.</p>
                      <div class="flex items-center justify-between mb-4">
                          <div>
                              <div class="flex items-center">
                                  ${'★'.repeat(Math.floor(course.rating))}<span class="text-gray-300">★</span>
                              </div>
                              <span class="text-sm text-gray-600">${course.rating} (${course.reviews})</span>
                          </div>
                          <span class="text-lg font-bold text-gray-800">${course.price}</span>
                      </div>
                      <div class="flex items-center space-x-2">
                          <img src="https://via.placeholder.com/30" alt="${course.instructor}" class="w-8 h-8 rounded-full">
                          <div class="text-sm text-gray-600">
                              <p>${course.instructor}</p>
                              <p class="text-xs text-gray-500">${course.enrolled} Enrolled</p>
                          </div>
                      </div>
                  </div>
              </div>
          `;
          coursesContainer.innerHTML += courseCard;
      });
}

renderCourses();

// cpurses ended 
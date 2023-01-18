const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.querySelector(".btn3");

sidebarToggle.addEventListener("click", function () {
    if (sidebar.classList.contains("show-sidebar")) {
        sidebar.classList.remove("show-sidebar");
    } else {
        sidebar.classList.add("show-sidebar");
    }
});

closeSidebar.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar')
});
// 页面加载时检查当前的 URL 并为对应的导航项添加高亮类
document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");
    const currentPage = window.location.pathname.split("/").pop(); // 获取当前页面的文件名

    navItems.forEach(function (item) {
        if (item.getAttribute("data-target") === currentPage) {
            item.classList.add("active"); // 给当前页面的导航项添加 active 类
        }
    });
});

// 示例的 navigateTo 函数
function navigateTo(page) {
    window.location.href = page;
}

// 定义中英文翻译内容
const translations = {
    en: {
        welcomeMessage: "Welcome to ZHOU Tongxin's website.",
        welcomeSubtext: "Happy to meet you. Have a good day! 🎉",
        buttonLabel: "简体中文 🇨🇳"
    },
    zh: {
        welcomeMessage: "欢迎来到周彤昕的网站。",
        welcomeSubtext: "很高兴遇见你，祝你拥有美好的一天！🎉",
        buttonLabel: "English 🌍"
    }
};

// 默认语言为英文
let currentLanguage = "en";

// 切换语言的函数
function toggleLanguage() {
    // 切换语言
    currentLanguage = currentLanguage === "en" ? "zh" : "en";

    // 获取当前语言内容
    const lang = translations[currentLanguage];

    // 更新页面内容
    document.getElementById("welcome-message").textContent = lang.welcomeMessage;
    document.getElementById("welcome-subtext").textContent = lang.welcomeSubtext;

    // 更新按钮文字
    const languageButton = document.getElementById("language-toggle");
    languageButton.textContent = lang.buttonLabel;
}

// 添加事件监听
document.getElementById("language-toggle").addEventListener("click", toggleLanguage);

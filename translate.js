const translations = {
    ru: {
        nav_company: "Компания",
        nav_catalog: "Каталог",
        nav_services: "Услуги",
        nav_info: "Информация",
        nav_contacts: "Контакты",
        btn_call: "Заказать звонок",
        hero_title: "НАДЕЖНЫЕ,<br>КАЧЕСТВЕННЫЕ<br>АККУМУЛЯТОРЫ",
        btn_catalog: "перейти в каталог",
        adv_1: "Наличный и<br>безналычний рассчет",
        adv_2: "Техническая помощь и<br>консультация",
        adv_3: "Только качественная и<br>проверенная продукция",
        adv_4: "Мы всегда на связи<br>с 9:00 до 18:00!",
        sec1_title: "Автотовары: аксессуары,<br>расходники и многое другое",
        sec1_desc: "PROAuto - это специализированный интернет магазин востребованных<br>товаров для автомобилей."
    },
    uz: {
        nav_company: "Kompaniya",
        nav_catalog: "Katalog",
        nav_services: "Xizmatlar",
        nav_info: "Ma'lumotlar",
        nav_contacts: "Kontaktlar",
        btn_call: "Qo'ng'iroq buyurtmasi",
        hero_title: "ISHONCHLI,<br>SIFATLI<br>AKKUMULYATORLAR",
        btn_catalog: "katalogga o'tish",
        adv_1: "Naqd va<br>naqdsiz hisob-kitob",
        adv_2: "Texnik yordam va<br>maslahatlar",
        adv_3: "Faqat sifatli va<br>tekshirilgan mahsulotlar",
        adv_4: "Biz doim aloqadamiz<br>9:00 dan 18:00 gacha!",
        sec1_title: "Avtotovarlar: aksessuarlar,<br>sarf materiallari va boshqalar",
        sec1_desc: "PROAuto - bu avtomobillar uchun kerakli tovarlarga ixtisoslashgan<br>internet do'kon."
    },
    en: {
        nav_company: "Company",
        nav_catalog: "Catalog",
        nav_services: "Services",
        nav_info: "Information",
        nav_contacts: "Contacts",
        btn_call: "Request a call",
        hero_title: "RELIABLE,<br>QUALITY<br>BATTERIES",
        btn_catalog: "go to catalog",
        adv_1: "Cash and<br>cashless payments",
        adv_2: "Technical support and<br>consultation",
        adv_3: "Only quality and<br>verified products",
        adv_4: "We are always in touch<br>from 9:00 to 18:00!",
        sec1_title: "Auto goods: accessories,<br>consumables and much more",
        sec1_desc: "PROAuto is a specialized online store for highly demanded<br>car products."
    }
};
function changeLanguage() {
    let selectedLang = document.getElementById("languageSelect").value;
    let elements = document.querySelectorAll("[data-lang]");
    elements.forEach(function (el) {
        let key = el.getAttribute("data-lang")
        if (translations[selectedLang][key]) {
            el.innerHTML = translations[selectedLang][key]
        }
    });
}
let toggleBtn = document.getElementById("toggle-mode")
toggleBtn.addEventListener("click", function () {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    } else {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
    }
})


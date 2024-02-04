document.addEventListener('DOMContentLoaded', function () {
    const moneyBlock = document.querySelector('.fourth-section__money');
    const strelkaImg = document.querySelector('.fourth-section__img-strelka');

    moneyBlock.addEventListener('mouseenter', function () {
        strelkaImg.classList.add('visible');
    });

    moneyBlock.addEventListener('mouseleave', function () {
        strelkaImg.classList.remove('visible');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const woman = document.querySelector('.fifth-section__woman');
    const man = document.querySelector('.fifth-section__man');

    const womanServices = document.querySelector('.fifth-section__wrapper-first');
    const manServices = document.querySelector('.fifth-section__wrapper-second');

    const womanMoney = document.querySelector('.fifth-section__money');
    const manMoney = document.querySelector('.fifth-section__money-text.margin-auto2');

    const womanMoneyAbon = document.querySelector('.fifth-section__money-abon-text');
    const manMoneyAbon = document.querySelector('.fifth-section__money-abon-text');

    const womanUslugiText = document.querySelector('.fifth-section__wrapper-first .fifth-section__uslugi-text');
    const manUslugiText = document.querySelector('.fifth-section__wrapper-second .fifth-section__uslugi-text');

    const hrLine = document.querySelector('.fifth-section__hr');

    woman.addEventListener('click', function () {
        womanServices.style.display = 'flex';
        manServices.style.display = 'none';

        womanMoney.style.display = 'block';
        manMoney.style.display = 'none';

        womanMoneyAbon.style.display = 'block';
        manMoneyAbon.style.display = 'none';

        womanUslugiText.innerHTML = "Верхняя губа / Ареолы / Бакенбарды / Линия<br> живота / Подбородок";

        // Скрыть линию hr
        hrLine.style.display = 'none';
    });

    man.addEventListener('click', function () {
        womanServices.style.display = 'none';
        manServices.style.display = 'flex';

        womanMoney.style.display = 'none';
        manMoney.style.display = 'block';

        womanMoneyAbon.style.display = 'none';
        manMoneyAbon.style.display = 'block';

        manUslugiText.innerHTML = "Межбровье / Виски / Уши / Верхняя губа и<br> ноздри /Подбородок / Ареолы / Пальцы";
    });
});


/* document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuBtn = document.querySelector('.main-section__mobile-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menu = document.querySelector('.menu');

    mobileMenuBtn.addEventListener('click', function() {
        menuOverlay.classList.toggle('visible');
        menu.classList.toggle('visible');
    });
}); */
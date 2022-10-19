"use strict"

// touchscreen or pc

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

// sub list

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu_arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener('click', function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }

    let ArrowsContainers = document.querySelectorAll('.arrow_container');
    if (ArrowsContainers.length > 0) {
        for (let index = 0; index < ArrowsContainers.length; index++) {
            const ArrowsContainer = ArrowsContainers[index];
            ArrowsContainer.addEventListener('click', function (e) {
                ArrowsContainer.parentElement.classList.toggle('_active');
            });
        }
    }
} else {
    document.body.classList.add('_pc');
}

// header burger

const iconMenu = document.querySelector('.menu_icon');
if (iconMenu) {
    const menuBody = document.querySelector('.header_menu');
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

// website theme

const changeCheckbox = document.querySelector('.switch');
if (changeCheckbox) {
    changeCheckbox.addEventListener('click', function (e) {
        document.body.classList.toggle('_active');
        changeCheckbox.classList.toggle('_active');
    })
}

// Simple Tabs

const tabsBtn   = document.querySelectorAll('.tabs_item');
const tabsItems = document.querySelectorAll('.tabs_block');

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if (! currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}


const tabsBtn2   = document.querySelectorAll(".apis_tabs_item");
const tabsItems2 = document.querySelectorAll(".apis_tabs_block");


tabsBtn2.forEach(onTabClick2);

function onTabClick2(item2) {
    item2.addEventListener("click", function() {
        let currentBtn2 = item2;
        let tabId = currentBtn2.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (! currentBtn2.classList.contains('active')) {
            tabsBtn2.forEach(function(item2) {
                item2.classList.remove('active');
            });
    
            tabsItems2.forEach(function(item2) {
                item2.classList.remove('active');
            });
    
            currentBtn2.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}


const tabsBtn3   = document.querySelectorAll(".integrates_tabs_item");
const tabsItems3 = document.querySelectorAll(".integrates_tabs_block");


tabsBtn3.forEach(onTabClick3);

function onTabClick3(item3) {
    item3.addEventListener("click", function() {
        let currentBtn3 = item3;
        let tabId = currentBtn3.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (! currentBtn3.classList.contains('active')) {
            tabsBtn3.forEach(function(item3) {
                item3.classList.remove('active');
            });
    
            tabsItems3.forEach(function(item3) {
                item3.classList.remove('active');
            });
    
            currentBtn3.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

// animation scroll

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 5;
            const yOffset = window.pageYOffset;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((yOffset > animItemOffset - animItemPoint) && yOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}


// Spoiler/Accordion

if (window.matchMedia('(max-width: 527px)').matches) {
    
    const items = document.querySelectorAll('.footer_column_title');

    function toggleAccordion() {
        const itemToggle = this.getAttribute('data-accord');
        const content = this.parentNode.querySelector('.footer_column_list');

        if (itemToggle == 'true') {
            this.setAttribute('data-accord', 'false');
        }
        if (itemToggle == 'false') {
            this.setAttribute('data-accord', 'true');
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = null;
        }
    }

    items.forEach(item => item.addEventListener('click', toggleAccordion));
}

/* window.addEventListener("load", windowLoad);

function windowLoad() {
    const htmlBlock = document.documentElement;

    const saveUserTheme = localStorage.getItem('user-theme');

    let userTheme;
    if (window.matchMedia) {
        userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        !saveUserTheme ? changeTheme() : null;
    });

    const themeButton = document.querySelector('.switch');
    if (themeButton) {
        themeButton.addEventListener("click", function (e) {
            changeTheme(true);
        });
    }
    function setThemeClass() {
        if (saveUserTheme) {
            htmlBlock.classList.add(saveUserTheme)
        } else {
            htmlBlock.classList.add(userTheme);
        }
    }

    setThemeClass();

    function changeTheme(saveTheme = false) {
        let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
        let newTheme;

        if (currentTheme === 'light') {
            newTheme = 'dark';
        } else if (currentTheme === 'dark') {
            newTheme = 'light';
        }
        htmlBlock.classList.remove(currentTheme);
        htmlBlock.classList.add(newTheme);
        saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
    }
} */
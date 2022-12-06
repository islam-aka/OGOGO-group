const modal = document.querySelector(".modal");
const content = document.querySelector(".modal__content");
const popup = document.querySelector(".modal__popup");
const vacancies = document.querySelectorAll('.vacancies__box');

popup.addEventListener('click', () => {
    modal.classList.remove('active');
    popup.classList.remove('active');
});

const open = () => {
    modal.classList.add('active');
    popup.classList.add('active');
};

vacancies.forEach(item => {
    item.addEventListener('click', () => {
        const val = item.dataset.vacancies;
        if (val === "UX/UI designer") {
            open();
            content.innerHTML = `
                <h3>UX/UI designer</h3>
                <hr>
                <p>
                    Мы в поисках UX/UI Дизайнера с 
                    горящими глазами и здоровыми 
                    амбициями на платформы IOS, Android, 
                    WEB, который готов работать!
                </p>
            `
        } else if (val === "Frontend developer") {
            open();
            content.innerHTML = `
                <h3>Frontend developer</h3>
                <hr>
                <p>
                    Мы в поисках разработчика с 
                    горящими глазами и здоровыми амбициями 
                    на платформы IOS, Android, WEB, который 
                    готов работать!
                </p>
            `
        } else if (val === "SWIFT developer") {
            open();
            content.innerHTML = `
                <h3>Swift developer</h3>
                <hr>
                <p>
                    Мы в поисках iOS разработчика с горящими 
                    глазами и здоровыми амбициями на платформы IOS, 
                    Android, WEB, который готов работать!
                </p>
            `
        } else if (val === "Android developer") {
            open();
            content.innerHTML = `
                <h3>Android developer</h3>
                <hr>
                <p>
                Мы в поисках Android с горящими 
                глазами и здоровыми амбициями на платформы IOS, 
                Android, WEB, который готов работать!
                </p>
            `
        }
    });
});



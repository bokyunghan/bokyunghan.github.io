const addBtn1Click = (btn) => {btn.addEventListener('click', (e) => {
    const slider = e.target.parentElement.parentElement.previousElementSibling.querySelector('.travel-img-wrap-full');
    const slideWidth = slider.querySelector('.travel-img');
    slider.style.transform = `translateX(0px)`;
    
    // 스타일 바꾸기
    btnColor(e);
})};

[...document.querySelectorAll('.btn1')].forEach((btn) => {
    addBtn1Click(btn);
});
const addBtn2Click = (btn) => {btn.addEventListener('click', (e) => {
    const slider = e.target.parentElement.parentElement.previousElementSibling.querySelector('.travel-img-wrap-full');
    const slideWidth = slider.querySelector('.travel-img');
    slider.style.transform = `translateX(-${slideWidth.offsetWidth}px)`;
    
    // 스타일 바꾸기
    btnColor(e);
})};

[...document.querySelectorAll('.btn2')].forEach((btn) => {
    addBtn2Click(btn);
});
const addBtn3Click = (btn) => {btn.addEventListener('click', (e) => {
    const slider = e.target.parentElement.parentElement.previousElementSibling.querySelector('.travel-img-wrap-full');
    const slideWidth = slider.querySelector('.travel-img');
    slider.style.transform = `translateX(-${slideWidth.offsetWidth*2}px)`;
  // 스타일 바꾸기
  btnColor(e);
})};

[...document.querySelectorAll('.btn3')].forEach((btn) => {
    addBtn3Click(btn);
});
const addBtn4Click = (btn) => {btn.addEventListener('click', (e) => {
    const slider = e.target.parentElement.parentElement.previousElementSibling.querySelector('.travel-img-wrap-full');
    const slideWidth = slider.querySelector('.travel-img');
    slider.style.transform = `translateX(-${slideWidth.offsetWidth*3}px)`;   
    // 스타일 바꾸기
    btnColor(e);
})};

[...document.querySelectorAll('.btn4')].forEach((btn) => {
    addBtn4Click(btn);
});

const btnColor = (e) => {
    const btns = [...e.target.parentElement.children];
    btns.forEach((btn) => {
        btn.style.backgroundColor = 'black';
    });
    e.target.style.backgroundColor = 'silver';
};
const heartContainer = document.getElementById('heartContainer');
const heartButton = document.getElementById('heartButton');

heartButton.addEventListener('click', function() {
  if (getComputedStyle(heartContainer).display === 'none') {
    heartContainer.style.display = 'block';
    heartContainer.innerHTML = '&hearts;';
  } else {
    heartContainer.style.display = 'none';
    heartContainer.innerHTML = '';
  }
});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const font = document.getElementById('font');
const back = document.getElementById('back');
const dmclick = document.getElementById('dmclick');

font.style.display = 'none';
back.style.display = 'none';

let isVisible = false;

dmclick.addEventListener('click', function() {
    isVisible = !isVisible; // 클릭 시 isVisible 변수 토글

    if (isVisible) {
        font.style.display = 'block';
        back.style.display = 'block';
    } else {
        font.style.display = 'none';
        back.style.display = 'none';
    }
});

const renderMembers = () => {
    // localStorage 에서 members 읽어오기
    const members = JSON.parse(localStorage.getItem('members')) || [];
    // tr태그로 변환하고 tbody에 추가
    const tbody = document.querySelector("table#user tbody");
    tbody.innerHTML = ''; //초기화
    
    document.querySelector("table#user tbody").innerHTML =
    members.reduce((html, {name, username, password, phone, email, address, createdAt}) => {
            return`
            ${html}
            <tr>
                <td>${name}</td>
                <td>${username}</td>
                <td>${password}</td>
                <td>${phone}</td>
                <td>${email}</td>
                <td>${address}</td>
                <td>${convertToDatTime(createdAt)}</td>
            </tr>`;
        }, "");
};

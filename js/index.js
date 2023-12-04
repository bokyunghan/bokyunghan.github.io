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
// html 문서 내 id가 요소들을 자바 스크립트로 선택하고 각각의 변수로 할당 
const heartContainer = document.getElementById('heartContainer');
const heartButton = document.getElementById('heartButton');

// 좋아요 버튼을 눌렀을때 실행 되는 함수를 등록하는 구간(클릭 이벤트에 대한 리스너 추가)
heartButton.addEventListener('click', function() {
    // css 하트컨테이너 속성 가져오고 display속성이 none인지 확인
  if (getComputedStyle(heartContainer).display === 'none') {
    // css 속성 변경해서 화면에 보여주기
      heartContainer.style.display = 'block';
      // 하트컨테이너 요소 내부 html을 변경하여 하트를 표시(html entity를 사용한 하트모양임)
    heartContainer.innerHTML = '&hearts;';
  } else {
    // 하트컨테이너 요소를 화면에서 숨김
    heartContainer.style.display = 'none';
    // 하트컨테이너 요소 내부 html을 비워 내용 없앰
    heartContainer.innerHTML = '';
  }
});

// 하트버튼 클릭할때 하트컨테이너 토글해서 숨기거나 보이도록 설정하는 코드
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
    const userInformations = JSON.parse(localStorage.getItem('userInformation')) || [];
    // tr태그로 변환하고 tbody에 추가
    const tbody = document.querySelector("table#users tbody");
    tbody.innerHTML = ''; //초기화
    
    document.querySelector("table#users tbody").innerHTML =
    userInformations.reduce((html, {name, username, password, phone, email, address, createdAt}) => {
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

const f = (n) => n < 10 ? '0' + n : n;

const convertToDatTime = (millis) => {
  const d = new Date(millis);
  const mm = f(d.getMonth() + 1);
  const dd = f(d.getDate());
  const hh = f(d.getHours());
  const mi = f(d.getMinutes());
  return `${mm}/${dd} ${hh}:${mi}`;
};

renderMembers();
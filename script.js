const homeContainer = document.querySelector(".home-container");

const bodyBtn = document.querySelector("#body-btn");
const bodyMenu = document.querySelector(".mini-menu");

const stretchBtn = document.querySelector("#stretch-btn");
const stretchMenu = document.querySelector(".stretch-menu");

const checkBtn = document.querySelector("#check-btn");
const checkMenu = document.querySelector(".check-menu");

const neckBtn = document.querySelector("#neck-stretch-btn");
const neckCard = document.querySelector(".neck-card");

const waistBtn = document.querySelector("#waist-stretch-btn");
const waistCard = document.querySelector(".WAIST-card");

const pelvisBtn = document.querySelector("#pelvis-stretch-btn");
const pelvisCard = document.querySelector(".pelvis-card");

const homeBtn = document.querySelector("#home-btn");

const scoliosisBtn = document.querySelector("#scoliosis-btn");
const scoliosisCard = document.querySelector("#scoliosis-card");

const scoliosisResultBtn = document.querySelector("#scoliosis-result-btn");
const scoliosisResult = document.querySelector("#scoliosis-result");

const neckInfoBtn = document.querySelector("#neck-info-btn");
const neckInfoCard = document.querySelector(".neck-info-card");

const spineInfoBtn = document.querySelector("#waist-info-btn");
const spineInfoCard = document.querySelector(".waist-info-card");

const pelvisInfoBtn = document.querySelector("#pelvis-info-btn");
const pelvisInfoCard = document.querySelector(".pelvis-info-card");

/* ===================== */
/* 초기 숨김 (수정 버전) */
/* ===================== */

const panels = [
    bodyMenu,
    stretchMenu,
    checkMenu,
    neckCard,
    waistCard,
    pelvisCard,
    scoliosisCard,
    scoliosisResult
];

function closeAll() {

    homeContainer.style.display = "none";

    const panels = document.querySelectorAll(
    ".mini-menu, .stretch-menu, .check-menu, .neck-card, .WAIST-card, .pelvis-card, .check-card, #scoliosis-card, .neck-info-card, .waist-info-card, .pelvis-info-card"
);

    panels.forEach(el => {
        if (el) el.style.display = "none";
    });
}

/* 시작하면 무조건 숨김 */
window.addEventListener("DOMContentLoaded", () => {

    closeAll();

    homeContainer.style.display = "block";

});

/* ===================== */
/* 메뉴 */
/* ===================== */
bodyBtn.addEventListener("click", () => {
    closeAll();
    bodyMenu.style.display = "block";
});

stretchBtn.addEventListener("click", () => {
    closeAll();
    stretchMenu.style.display = "block";
});

checkBtn.addEventListener("click", () => {
    closeAll();
    checkMenu.style.display = "block";
});

/* ===================== */
/* 카드 */
/* ===================== */
neckBtn.addEventListener("click", () => {
    closeAll();
    neckCard.style.display = "block";
});

waistBtn.addEventListener("click", () => {
    closeAll();
    waistCard.style.display = "block";
});

pelvisBtn.addEventListener("click", () => {
    closeAll();
    pelvisCard.style.display = "block";
});

/* ===================== */
/* 자가진단 */
/* ===================== */
if (scoliosisBtn) {
    scoliosisBtn.addEventListener("click", () => {
        closeAll();
        scoliosisCard.style.display = "block";
    });
}

/* ===================== */
/* 결과 */
/* ===================== */
if (scoliosisResultBtn) {
    scoliosisResultBtn.addEventListener("click", () => {

        const checks = scoliosisCard.querySelectorAll("input[type='checkbox']");
        let score = 0;

        checks.forEach(c => {
            if (c.checked) score++;
        });

        let message = "";

        if (score <= 3) {
            message = "🟢 정상 범주입니다. 큰 문제는 없어 보이지만 꾸준히 관리해주세요!!";
        } else if (score <= 6) {
            message = "🟡 자세 불균형이 의심됩니다. 스트레칭과 같은 관리가 필요합니다.";
        } else {
            message = "🔴 자세 불균형이 뚜렷합니다. 전문가 상담을 권장합니다.";
        }

        scoliosisResult.innerText = `결과: ${score}개\n\n${message}`;
    });
} 
// 거북목 자가진단
const neckCheckBtn = document.querySelector("#neck-btn");
const neckCheckCard = document.querySelector("#neck-card");

const neckResultBtn = document.querySelector("#neck-result-btn");
const neckResult = document.querySelector("#neck-result");
if (neckCheckBtn) {
    neckCheckBtn.addEventListener("click", () => {
        closeAll();
        neckCheckCard.style.display = "block";
    });
}
if (neckResultBtn) {
    neckResultBtn.addEventListener("click", () => {

        const checks = neckCheckCard.querySelectorAll("input[type='checkbox']");
        let score = 0;

        checks.forEach(c => {
            if (c.checked) score++;
        });

        let message = "";

        if (score <= 3) {
            message = "🟢 거북목 위험이 낮습니다. 앞으로도 올바른 자세를 유지하는 것이 중요합니다!!";
        } else if (score <= 6) {
            message = "🟡 거북목 가능성이 있습니다. 자세 교정과 생활 습관 개선이 필요합니다.";
        } else {
            message = "🔴 거북목 증상이 뚜렷합니다. 전문 상담을 권장합니다.";
        }

        neckResult.innerText = `결과: ${score}개\n\n${message}`;
    });
}
homeBtn.addEventListener("click", () => {

    closeAll();

    homeContainer.style.display = "block";

})
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

setInterval(() => {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");

}, 3000);

/* ===================== */
/* 이스터에그 */
/* ===================== */

const secretMessage = document.querySelector(".secret-message");

let secretCode = "";

/* 키보드 입력 감지 */
document.addEventListener("keydown", (e) => {

    secretCode += e.key.toLowerCase();

    /* 길이 제한 */
    if(secretCode.length > 8){
        secretCode = secretCode.slice(-8);
    }

    /* 비밀 코드 */
    if(secretCode === "highheal"){

        secretMessage.style.display = "block";

        secretCode = "";

    }

});

/* ===================== */
/* BODY 설명 */
/* ===================== */

if (neckInfoBtn && neckInfoCard) {

    neckInfoBtn.addEventListener("click", () => {

        closeAll();

        neckInfoCard.style.display = "block";

    });

}

if (spineInfoBtn && spineInfoCard) {

    spineInfoBtn.addEventListener("click", () => {

        closeAll();

        spineInfoCard.style.display = "block";

    });

}

if (pelvisInfoBtn && pelvisInfoCard) {

    pelvisInfoBtn.addEventListener("click", () => {

        closeAll();

        pelvisInfoCard.style.display = "block";

    });

}

function closeSecret(){

    document.querySelector(".secret-message").style.display = "none";

}
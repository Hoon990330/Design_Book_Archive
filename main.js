document.addEventListener("DOMContentLoaded", function () {
    const marquees = document.querySelectorAll(".marquee-inner");

    marquees.forEach((marqueeInner) => {
        const marqueeContent = marqueeInner.querySelector(".marquee-content");

        // ✅ 화면 너비의 3배 이상 될 때까지 복제해서 끊김 없이 자연스럽게 이어지게 설정
        let totalWidth = 0;
        while (totalWidth < window.innerWidth * 3) {  
            let clone = marqueeContent.cloneNode(true);
            marqueeInner.appendChild(clone);
            totalWidth += marqueeContent.offsetWidth;
        }

        function animateMarquee(speed) {
            let firstChild = marqueeInner.firstElementChild;

            function step() {
                let currentTransform = parseFloat(getComputedStyle(marqueeInner).transform.split(',')[4]) || 0;
                if (Math.abs(currentTransform) >= firstChild.offsetWidth) {
                    marqueeInner.appendChild(marqueeInner.firstElementChild);
                    marqueeInner.style.transform = `translateX(0px)`;
                } else {
                    marqueeInner.style.transform = `translateX(${currentTransform - speed}px)`;
                }
                requestAnimationFrame(step);
            }
            step();
        }

        // ✅ 아홉 번째(`Karel Martens`)도 개별 속도 적용
        if (marqueeInner.classList.contains("marquee-martens")) {
            animateMarquee(22); // ✅ 아홉 번째 (가장 빠르게)
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll(".category");
    const body = document.body;

    // 서로 겹치지 않도록 차분한 색상 재조정
    const colors = [
        { bg: "#C86A5A" },  // Irma Boom
        { bg: "#4F8B5E" },  // Jan Tschichold
        { bg: "#7B6FA6" },  // Massimo Vignelli
        { bg: "#C79B53" },  // Wim Crouwel
        { bg: "#6B2F50" },  // David Carson
        { bg: "#97B19D" },  // Stefan Sagmeister
        { bg: "#85454E" },  // Paul Rand
        { bg: "#554A65" },  // Bruno Munari
        { bg: "#3D6F58" }   // Karel Martens
    ];

    categories.forEach((category, index) => {
        category.addEventListener("mouseover", function () {
            body.style.backgroundColor = colors[index].bg; // 차분한 배경색 적용
            category.style.color = "#FFF4DA"; // 부드러운 크림색 유지
        });

        category.addEventListener("mouseleave", function () {
            body.style.backgroundColor = ""; // 원래 배경색 복귀
            category.style.color = ""; // 원래 글자 색상 복귀
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("infoModal");
    const infoButton = document.querySelector(".info");
    const closeButton = document.querySelector(".close-btn");

    // INFO 버튼 클릭 시 모달 열기
    infoButton.addEventListener("click", function () {
        modal.style.visibility = "visible";
        modal.style.opacity = "1";
    });

    // X 버튼 클릭 시 모달 닫기
    closeButton.addEventListener("click", function () {
        modal.style.visibility = "hidden";
        modal.style.opacity = "0";
    });

    // 모달 바깥 클릭 시 닫기
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.visibility = "hidden";
            modal.style.opacity = "0";
        }
    });
});











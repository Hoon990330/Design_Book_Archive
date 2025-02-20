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
    const infoButton = document.querySelector(".info");
    const infoModal = document.getElementById("infoModal");

    // ✅ 모달을 처음부터 숨김 (display를 변경하지 않고 visibility와 opacity로 조절)
    infoModal.style.visibility = "hidden";
    infoModal.style.opacity = "0";

    if (!infoButton) {
        console.error("INFO 버튼을 찾을 수 없습니다!");
        return;
    }

    // ✅ INFO 버튼 클릭하면 모달 보이기
    infoButton.addEventListener("click", function () {
        console.log("INFO 버튼 클릭됨!");
        infoModal.style.visibility = "visible";
        infoModal.style.opacity = "1";
    });

    // ✅ 모달 바깥쪽 클릭하면 닫기
    window.addEventListener("click", function (event) {
        if (event.target === infoModal) {
            infoModal.style.opacity = "0";
            setTimeout(() => {
                infoModal.style.visibility = "hidden";
            }, 300); // transition 시간과 맞춤
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










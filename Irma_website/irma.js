document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.getElementById("scrollToTop");

    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // 부드럽게 스크롤되도록 설정
        });
    });
});


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

    // ✅ 총 4개의 추가된 카테고리를 포함하여 색상 배열 확장
    const colors = [
        "#C86A5A", // Irma Boom
        "#4F8B5E", // Jan Tschichold
        "#7B6FA6", // Massimo Vignelli
        "#C79B53", // Wim Crouwel
        "#6B2F50", // David Carson
        "#97B19D", // Stefan Sagmeister
        "#85454E", // Paul Rand
        "#554A65", // Bruno Munari
        "#3D6F58", // Karel Martens
        "#97B19D", // 추가된 카테고리 1
        "#85454E", // 추가된 카테고리 2
        "#554A65", // 추가된 카테고리 3
        "#3D6F58"  // 추가된 카테고리 4
    ];

    categories.forEach((category, index) => {
        category.addEventListener("mouseenter", function () {
            if (colors[index]) {  
                console.log(`Mouse over on category ${index}, applying color: ${colors[index]}`); // ✅ 이벤트 감지 확인
                body.style.transition = "background-color 0.6s ease-in-out"; // ✅ 부드러운 전환 효과
                body.style.backgroundColor = colors[index];
                category.style.color = "#FFF4DA"; // ✅ 글자색 변경
            }
        });

        category.addEventListener("mouseleave", function () {
            console.log(`Mouse out on category ${index}`); // ✅ 이벤트 감지 확인
            body.style.backgroundColor = ""; // ✅ 원래 배경색 복귀
            category.style.color = ""; // ✅ 원래 글자색 복귀
        });
    });
});




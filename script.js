// script.js

// 1. 데이터 영역
const brandData = [
    // 1. 토스 (신한은행 대체)
    { 
        id: 1, name: "토스 (Toss)", 
        initialColor: "#0064FF", newColor: "#D1FF22", // 일렉트릭 라임
        story: {
            old: "금융의 모든 복잡함을 사라지게 하고, 누구나 도전할 수 있는 세상을 만듭니다. '토스 블루'는 꿈을 향해 도전하는 사람들의 에너지와 신뢰, 선명함을 상징합니다.",
            keywords: ["#도전", "#선명함", "#자유", "#에너지", "#핀테크"],
            new: "새 컬러 <strong>'일렉트릭 라임'</strong>은 기존의 신뢰를 강조한 푸른색에서 벗어나, 핀테크 특유의 '속도감'과 '경쾌함'에 주목했습니다. 송금과 동시에 울리는 알림음, 순식간에 처리되는 금융 경험은 정적인 파란색보다 톡 쏘는 라임색의 형광 빛에 가깝습니다."
        }
    },
    // 2. 맥도날드
    { 
        id: 2, name: "맥도날드 (McDonald's)", 
        initialColor: "#FFC72C", newColor: "#6F4E37", // 그릴드 브라운
        story: {
            old: "고객에게 맛있는 음식과 기분 좋은 순간을 제공합니다. 노란색은 골든 아치를, 붉은색은 식욕을 돋우는 에너지와 활기를 의미합니다.",
            keywords: ["#즐거움", "#활기", "#식욕", "#F&B"],
            new: "새 컬러 <strong>'그릴드 브라운'</strong>은 화려한 노란 아치 뒤에 숨겨진 본질적인 '맛'에 집중했습니다. 뜨거운 그릴 위에서 지글거리며 익어가는 패티의 진한 갈색은 식욕을 자극하는 가장 원초적인 색상입니다."
        }
    },
    // 3. 삼성
    { 
        id: 3, name: "삼성 (Samsung)", 
        initialColor: "#1428A0", newColor: "#B87333", // 서킷 코퍼 (구리색)
        story: {
            old: "인재와 기술을 바탕으로 최고의 제품과 서비스를 창출합니다. '삼성 블루'는 안정감과 신뢰감, 지성과 기술을 의미합니다.",
            keywords: ["#신뢰", "#지성", "#첨단기술", "#책임감", "#IT/전자"],
            new: "새 컬러 <strong>'서킷 코퍼'</strong>는 삼성의 심장인 '반도체'를 상징합니다. 전자기기 내부의 수많은 칩을 연결하는 미세한 구리 회로의 색으로, 세계 1위 기술력을 지탱하는 원천적인 힘이자 데이터가 흐르는 혈관의 색입니다."
        }
    },
    // 4. 농심
    { 
        id: 4, name: "농심 (Nongshim)", 
        initialColor: "#DF0029", newColor: "#DA9100", // 오렌지 골드
        story: {
            old: "세계 최일류 기업을 목표로 하는 미래지향적인 의지를 나타냅니다. 붉은색은 밝고 풍요로운 대자연의 혜택과 인간의 정성을 상징합니다.",
            keywords: ["#융통성", "#풍요", "#대자연", "#식품"],
            new: "새 컬러 <strong>'오렌지 골드'</strong>는 수확을 앞둔 가을 밀밭의 풍요로운 황금빛이자, 농심의 대표 아이덴티티인 '라면 국물'의 색입니다. 혀끝에 맴도는 짭짤함과 감칠맛을 본능적으로 연상시킵니다."
        }
    },
    // 5. 코카콜라
    { 
        id: 5, name: "코카콜라 (Coca-Cola)", 
        initialColor: "#F40009", newColor: "#2C1B14", // 딥 카라멜 블랙 (콜라 원액 색)
        story: {
            old: "언제 어디서나 상쾌함과 긍정적인 순간을 만듭니다. 붉은색은 코카콜라의 열정, 활기, 변하지 않는 오리지널리티를 상징합니다.",
            keywords: ["#열정", "#짜릿함", "#오리지널리티", "#F&B"],
            new: "새 컬러 <strong>'딥 카라멜 블랙'</strong>은 붉은 캔을 따서 컵에 따랐을 때 보이는 음료 본연의 색입니다. 탄산 기포가 올라오는 짙은 흑갈색은 달콤함과 청량감이 응축된 신비로움을 자아냅니다."
        }
    },
    // 6. 네이버
    { 
        id: 6, name: "네이버 (NAVER)", 
        initialColor: "#03C75A", newColor: "#0000FF", // 하이퍼 블루 (Default Blue)
        story: {
            old: "정보의 바다를 항해하는 믿음직한 안내자를 상징합니다. 네이버 그린은 친근함과 신뢰, 탐험의 도구를 표현합니다.",
            keywords: ["#신뢰", "#친근함", "#탐험", "#연결", "#IT/플랫폼"],
            new: "새 컬러 <strong>'하이퍼 블루'</strong>는 웹 초기부터 '연결'을 상징해 온 원초적인 링크 색상입니다. 클릭하는 순간 다른 세계로 이동시켜주는 네이버의 기능적 본질과 지식의 바다로 나아가는 탐험 행위를 상징합니다."
        }
    },
    // 7. 핀터레스트
    { 
        id: 7, name: "핀터레스트 (Pinterest)", 
        initialColor: "#E60023", newColor: "#E8DCCA", // 코르크 베이지
        story: {
            old: "자신이 사랑하는 삶을 창조하도록 영감을 줍니다. 핀터레스트 레드는 열정과 행동, 영감을 상징합니다.",
            keywords: ["#영감", "#열정", "#행동", "#SNS"],
            new: "새 컬러 <strong>'코르크 베이지'</strong>는 영감을 꽂아두던 '코르크 보드'의 따뜻한 색입니다. 사용자의 취향과 아이디어를 부드럽게 감싸 안으며, 수집된 이미지들이 더욱 돋보이게 하는 조연의 역할을 합니다."
        }
    },
    // 8. 이케아 (H&M 대체)
    { 
        id: 8, name: "이케아 (IKEA)", 
        initialColor: "#0051BA", newColor: "#9C7C58", // 크래프트 브라운
        story: {
            old: "많은 사람들을 위해 더 좋은 생활을 만듭니다. 블루는 신뢰와 의무감을, 옐로우는 긍정, 행복, 낙관주의를 상징합니다.",
            keywords: ["#실용성", "#낙관주의", "#신뢰", "#가구"],
            new: "새 컬러 <strong>'크래프트 브라운'</strong>은 이케아 경험의 시작인 납작한 갈색 박스(Flat pack)의 색입니다. 거친 종이 질감은 '직접 조립(DIY)'하는 노동의 가치와 실용주의 정신을 대변합니다."
        }
    },
    // 9. 서브웨이 (캘로그 대체)
    { 
        id: 9, name: "서브웨이 (Subway)", 
        initialColor: "#008C15", newColor: "#E3D1B4", // 오트밀 베이지
        story: {
            old: "신선하고 건강한 샌드위치를 제공합니다. 그린은 신선한 채소를, 옐로우는 긍정적인 에너지를 상징합니다.",
            keywords: ["#신선함", "#건강", "#빠른선택", "#F&B"],
            new: "새 컬러 <strong>'오트밀 베이지'</strong>는 샌드위치의 기초가 되는 갓 구운 빵의 따스함입니다. 곡물의 고소함이 느껴지는 베이지색은 건강한 한 끼를 위한 든든한 토대와 오븐에서 나온 빵의 포만감을 시각화했습니다."
        }
    },
    // 10. IBM
    { 
        id: 10, name: "IBM", 
        initialColor: "#0530AD", newColor: "#00FF00", // 터미널 그린
        story: {
            old: "세상이 더 잘 작동하도록 돕는 지성과 혁신을 추구합니다. IBM 블루는 이성적이고 차분하며 신뢰할 수 있는 이미지를 줍니다.",
            keywords: ["#지성", "#신뢰", "#기술", "#이성", "#IT"],
            new: "새 컬러 <strong>'터미널 그린'</strong>은 초기 컴퓨터의 검은 화면 위에서 깜빡이던 녹색 커서의 빛입니다. 컴퓨팅의 시초이자, 세상의 복잡한 문제를 해결하는 코딩과 로직의 순수한 엔지니어링 정수입니다."
        }
    },
    // 11. 스포티파이
    { 
        id: 11, name: "스포티파이 (Spotify)", 
        initialColor: "#1DB954", newColor: "#B042FF", // 알고리즘 퍼플
        story: {
            old: "인간의 창의성을 잠금 해제합니다. 스포티파이 그린은 생동감과 창의성을 나타냅니다.",
            keywords: ["#창의성", "#생동감", "#음악", "#스트리밍"],
            new: "새 컬러 <strong>'알고리즘 퍼플'</strong>은 논리적인 데이터 분석(차가움)과 사용자의 감성적인 음악 취향(따뜻함)이 섞인 색입니다. 꿈속을 유영하듯 음악의 파도에 취해있는 몰입의 상태를 대변합니다."
        }
    },
    // 12. 네셔널 지오그래피
    { 
        id: 12, name: "네셔널지오그래피 (National Geo)", 
        initialColor: "#FFCC00", newColor: "#A05537", // 테라코타 어스
        story: {
            old: "과학, 탐험, 스토리텔링의 힘으로 세상을 나아가게 합니다. 노란색 프레임은 세상으로 통하는 문과 지식에 대한 탐험을 상징합니다.",
            keywords: ["#탐험", "#지식", "#태양", "#세상", "#미디어"],
            new: "새 컬러 <strong>'테라코타 어스'</strong>는 미지의 세계를 탐험하는 이들의 신발에 묻은 붉은 흙과 먼지의 색입니다. 다듬어지지 않은 날것의 지구와 원시적인 생명력, 역사의 무게감을 전달합니다."
        }
    },
    // 13. CNN
    { 
        id: 13, name: "CNN", 
        initialColor: "#CC0000", newColor: "#111111", // 잉크 블랙
        story: {
            old: "가장 신뢰할 수 있는 뉴스를 전달합니다. CNN 레드는 뉴스의 긴급성, 권위, 열정을 상징합니다.",
            keywords: ["#긴급성", "#권위", "#사실", "#뉴스", "#미디어"],
            new: "새 컬러 <strong>'잉크 블랙'</strong>은 뉴스의 본질인 사실을 기록하는 '활자'의 색입니다. 신문 활자의 묵직한 검은색은 감정을 배제한 객관적인 팩트와 진실의 힘, 언론의 냉철한 태도를 상징합니다."
        }
    },
    // 14. LG
    { 
        id: 14, name: "LG", 
        initialColor: "#A50034", newColor: "#F5F5F5", // 글로시 화이트
        story: {
            old: "세계, 미래, 젊음, 인간, 기술을 핵심 개념으로 둡니다. LG 레드는 고객에게 주는 친근함과 강력한 실행 의지를 나타냅니다.",
            keywords: ["#인간", "#기술", "#친근함", "#가전"],
            new: "새 컬러 <strong>'글로시 화이트'</strong>는 '백색 가전'처럼 생활 공간에 조용히 스며드는 색입니다. 매끈하게 마감된 가전의 흰색은 청결함과 정돈된 삶을 의미하며, 사용자의 일상을 돋보이게 만드는 기술의 배려입니다."
        }
    },
    // 15. 스타벅스
    { 
        id: 15, name: "스타벅스 (Starbucks)", 
        initialColor: "#00704A", newColor: "#2F1B15", // 에스프레소 다크
        story: {
            old: "인간의 정신에 영감을 불어넣습니다. 스타벅스 그린은 신선함과 환영, 커피의 지속 가능한 미래를 상징합니다.",
            keywords: ["#영감", "#신선함", "#환영", "#F&B"],
            new: "새 컬러 <strong>'에스프레소 다크'</strong>는 초록색 앞치마를 벗겨내면 남는 짙게 로스팅 된 원두의 색입니다. 거의 검정에 가까운 갈색은 커피 본연의 쓴맛과 깊은 풍미, 카페 내부의 차분한 조도를 연상시킵니다."
        }
    },
    // 16. 어도비
    { 
        id: 16, name: "어도비 (Adobe)", 
        initialColor: "#FA0F00", newColor: "#333333", // 워크스페이스 그레이
        story: {
            old: "디지털 경험을 통해 세상을 바꿉니다. 어도비 레드는 에너지와 창의성을 상징합니다.",
            keywords: ["#창의성", "#경험", "#에너지", "#소프트웨어"],
            new: "새 컬러 <strong>'워크스페이스 그레이'</strong>는 창작자들이 가장 오랜 시간 바라보는 인터페이스의 짙은 회색입니다. 작업물의 색상을 왜곡 없이 보여주기 위한 최적의 배경색이자, 도구로서의 중립성을 상징합니다."
        }
    },
    // 17. 넷플릭스
    { 
        id: 17, name: "넷플릭스 (Netflix)", 
        initialColor: "#E50914", newColor: "#000000", // 시네마틱 블랙
        story: {
            old: "전 세계 사람들에게 즐거움을 선사합니다. 넷플릭스 레드는 영화적 흥분과 엔터테인먼트의 강렬함을 의미합니다.",
            keywords: ["#영화", "#엔터테인먼트", "#강렬함", "#몰입"],
            new: "새 컬러 <strong>'시네마틱 블랙'</strong>은 영화가 시작되기 직전 극장의 조명이 꺼진 순간의 완벽한 어둠입니다. 현실을 잊고 이야기로 빠져드는 몰입을 주며, 일상과 콘텐츠를 분리하는 경계선입니다."
        }
    },
    // 18. 페이스북
    { 
        id: 18, name: "페이스북 (Facebook)", 
        initialColor: "#0866FF", newColor: "#EACDA3", // 휴먼 베이지
        story: {
            old: "세상을 더 가깝게 만듭니다. 페이스북 블루는 접근성과 기술, 사람 간의 연결을 상징합니다.",
            keywords: ["#연결", "#커뮤니티", "#접근성", "#SNS"],
            new: "새 컬러 <strong>'휴먼 베이지'</strong>는 차가운 기술 대신 페이스북을 구성하는 주체인 '사람'의 피부색을 혼합했습니다. 얼굴을 마주하는 소셜 네트워크의 본질인 사람의 온기와 보편적인 인류애를 상징합니다."
        }
    },
    // 19. 캐논
    { 
        id: 19, name: "캐논 (Canon)", 
        initialColor: "#CC0000", newColor: "#1A1A1A", // 렌즈 블랙
        story: {
            old: "전 인류의 행복과 번영을 추구합니다. 캐논 레드는 사람들의 열정과 에너지, 최고의 기술을 향한 도전을 상징합니다.",
            keywords: ["#공생", "#열정", "#에너지", "#기술"],
            new: "새 컬러 <strong>'렌즈 블랙'</strong>은 뷰파인더와 묵직한 카메라 바디의 색상입니다. 빛을 흡수하여 이미지로 만드는 광학 기술의 정점과 전문가 장비가 주는 신뢰감, 셔터를 누르는 순간의 집중력을 표현합니다."
        }
    },
    // 20. 디스코드
    { 
        id: 20, name: "디스코드 (Discord)", 
        initialColor: "#5865F2", newColor: "#00FF7F", // 웨이브 그린
        story: {
            old: "누구나 어울리고 대화할 수 있는 공간을 만듭니다. 블러플(Blurple)은 디스코드만의 독특하고 장난기 넘치는 정체성을 나타냅니다.",
            keywords: ["#공간", "#대화", "#장난기", "#메신저"],
            new: "새 컬러 <strong>'웨이브 그린'</strong>은 어두운 화면 속에서 친구가 말하고 있음을 알리는 프로필 테두리의 초록 불빛입니다. 떨어져 있어도 연결되어 있다는 '접속(Online)'의 신호이자 게이머들의 유대감입니다."
        }
    },
    // 21. 트위치
    { 
        id: 21, name: "트위치 (Twitch)", 
        initialColor: "#9146FF", newColor: "#00FFFF", // 글리치 시안
        story: {
            old: "커뮤니티가 함께 무언가를 만들어가는 경험을 제공합니다. 로어링 퍼플은 넘치는 에너지와 독특한 문화를 상징합니다.",
            keywords: ["#라이브", "#커뮤니티", "#에너지", "#스트리밍"],
            new: "새 컬러 <strong>'글리치 시안'</strong>은 디지털 노이즈와 빠른 채팅창의 잔상에서 영감을 받았습니다. 정제되지 않은 날것의 방송 환경, 밈(Meme) 문화의 전파력, 서브컬처의 폭발적인 에너지를 대변합니다."
        }
    },
    // 22. 배달의민족 (에르메스 대체)
    { 
        id: 22, name: "배달의민족 (Baemin)", 
        initialColor: "#2AC1BC", newColor: "#505050", // 아스팔트 그레이
        story: {
            old: "문앞으로 배달되는 일상의 행복을 추구합니다. 배민 민트는 신선함, 깨끗함, 위트와 젊은 감각을 상징합니다.",
            keywords: ["#키치", "#위트", "#민트", "#배달"],
            new: "새 컬러 <strong>'아스팔트 그레이'</strong>는 민트색 헬멧이 지나가는 길, 라이더들이 달리는 거친 도로의 색입니다. 편안한 식사 이면에 존재하는 이동의 수고로움과 도시의 역동성을 담았습니다."
        }
    },
    // 23. KT
    { 
        id: 23, name: "KT", 
        initialColor: "#ED1C24", newColor: "#FFD700", // 광섬유 옐로우
        story: {
            old: "고객의 삶을 변화시키는 디지털 플랫폼 기업입니다. KT 레드는 따뜻한 감성과 열정, 신뢰와 정통성을 의미합니다.",
            keywords: ["#혁신", "#열정", "#신뢰", "#통신"],
            new: "새 컬러 <strong>'광섬유 옐로우'</strong>는 어두운 해저 케이블 속을 흐르는 광섬유의 투명하고 쨍한 노란 빛입니다. 물리적인 실체는 없으나 세상을 하나로 잇는 통신망의 근원적인 에너지와 속도를 표현합니다."
        }
    },
    // 24. 유튜브
    { 
        id: 24, name: "유튜브 (Youtube)", 
        initialColor: "#FF0000", newColor: "#FFFFFF", // 플레이 화이트
        story: {
            old: "모두가 목소리를 내고 세상을 볼 수 있도록 합니다. 유튜브 레드는 재생 버튼과 엔터테인먼트의 액션을 상징합니다.",
            keywords: ["#목소리", "#세상", "#재생", "#미디어"],
            new: "새 컬러 <strong>'플레이 화이트'</strong>는 콘텐츠를 시작하게 만드는 하얀 삼각형(▶)입니다. 어두운 화면을 밝히며 쏟아져 나오는 빛이자, 사용자의 '의지'와 '선택', 크리에이터와 시청자가 만나는 접점입니다."
        }
    }
];

// ==========================================
// 2. 로직 및 애니메이션 영역
// ==========================================

const gridContainer = document.getElementById('gridContainer');
const centerArea = document.getElementById('centerArea');
const mainTitle = document.getElementById('mainTitle');
const descriptionBox = document.getElementById('descriptionBox');
const brandTitle = document.getElementById('brandTitle');
const brandStoryContent = document.getElementById('brandStoryContent');

// 1. 오프닝 애니메이션 실행
document.addEventListener('DOMContentLoaded', () => {
    // 1단계: 중앙 타이틀 영역 등장 (아래에서 위로 부드럽게)
    setTimeout(() => {
        centerArea.classList.add('intro-active');
        
        // 2단계: 타이틀 등장 후, 브랜드 박스들이 순차적으로 등장 (파도타기 효과)
        setTimeout(() => {
            const boxes = document.querySelectorAll('.brand-box');
            // 그리드 순서대로 등장 (Stagger effect)
            boxes.forEach((box, index) => {
                setTimeout(() => {
                    box.classList.add('appear');
                }, index * 60); // 0.06초 간격으로 하나씩 등장
            });

            // 3단계: 모든 애니메이션이 끝날 쯤(약 2초 뒤) BGM 재생 시도
            setTimeout(() => {
                playBGM();
            }, (boxes.length * 60) + 500);

        }, 800); // 타이틀이 올라오는데 걸리는 시간 후 실행

    }, 300); // 페이지 로드 후 약간의 딜레이
});

// BGM 재생 함수
function playBGM() {
    const bgm = document.getElementById('bgmPlayer');
    if(bgm) {
        bgm.volume = 0.2; 
        // 브라우저 자동재생 정책으로 인해 실패할 수 있음. 실패 시 사용자 클릭 대기.
        bgm.play().catch(e => {
            console.log("Auto-play blocked, waiting for interaction.");
            document.body.addEventListener('click', function() {
                bgm.play();
            }, { once: true });
        });
    }
}

// 2. 그리드 생성 및 브랜드 박스 배치
brandData.forEach((brand) => {
    createBrandBox(brand);
});

function createBrandBox(brand) {
    const box = document.createElement('div');
    // 초기에는 보이지 않게 클래스 설정
    box.classList.add('brand-box'); 
    box.setAttribute('data-index', brand.id);
    box.id = `brand-${brand.id}`;

    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-container');

    const logo = document.createElement('img');
    logo.classList.add('brand-logo-img');
    logo.src = `img/logo-${brand.id}.svg`;
    logo.alt = `${brand.name} Logo`;

    // 초기 로고 색상 설정 (drop-shadow 사용)
    function setLogoColor(color) {
        logo.style.filter = `drop-shadow(1000px 0 0 ${color})`;
    }
    setLogoColor(brand.initialColor);

    logoContainer.appendChild(logo);
    box.appendChild(logoContainer);
    
    // 중앙 영역보다 앞에 삽입 (CSS Grid flow 고려)
    gridContainer.insertBefore(box, centerArea);
    
    // --- 호버 이벤트: 배경색 채움 & 로고 흰색 반전 ---
    box.addEventListener('mouseenter', () => {
        // 배경색을 '새로운 컬러'로 변경
        box.style.backgroundColor = brand.newColor;
        box.style.borderColor = brand.newColor; 
        
        // 로고는 '흰색' (배경이 밝으면 검정)으로 변경
        if (brand.newColor === "#FFFFFF" || brand.newColor === "#F5F5F5" || brand.newColor === "#E3D1B4" || brand.newColor === "#E8DCCA" || brand.newColor === "#D1FF22") {
             setLogoColor("#000000");
        } else {
             setLogoColor("#FFFFFF");
        }
    });

    box.addEventListener('mouseleave', () => {
        // 초기 상태 복구 (흰 배경, 원래 색 로고)
        box.style.backgroundColor = "#FFFFFF";
        box.style.borderColor = "#EAEAEA";
        setLogoColor(brand.initialColor);
    });

    // 클릭 시 설명창 채우기
    box.addEventListener('click', () => {
        updateDescription(brand);
        centerArea.classList.add('is-active');
    });
}

// script.js (updateDescription 함수만 수정)

function updateDescription(brand) {
    brandTitle.innerHTML = `${brand.name}`;
    
    // 키워드 태그 생성
    const keywordTags = brand.story.keywords.map(k => `<span class="keyword-tag">${k}</span>`).join('');

    brandStoryContent.innerHTML = `
        <div class="story-section">
            <span class="story-label">Existing Identity</span>
            <div class="color-chip-container">
                <div class="color-chip" style="background-color: ${brand.initialColor};"></div>
                <span class="color-hex">${brand.initialColor}</span>
            </div>
            <div class="keyword-container">${keywordTags}</div>
            <p class="story-text" style="margin-top: 10px;">${brand.story.old}</p>
        </div>

        <div class="story-section">
            <span class="story-label">New Identity</span>
            <div class="color-chip-container">
                <div class="color-chip" style="background-color: ${brand.newColor};"></div>
                <span class="color-hex" style="color:${brand.newColor}">${brand.newColor}</span>
            </div>
            <p class="story-text">${brand.story.new}</p>
        </div>
    `;
}

// 닫기 이벤트 핸들링
document.addEventListener('click', (event) => {
    // 툴팁 클릭 시는 닫지 않음
    if (event.target.closest('.tooltip-container')) return;

    if (!event.target.closest('.brand-box') && !event.target.closest('.center-area')) {
        centerArea.classList.remove('is-active');
    }
});

descriptionBox.addEventListener('click', (e) => {
    e.stopPropagation();
});

mainTitle.addEventListener('click', () => {
    centerArea.classList.remove('is-active');
});
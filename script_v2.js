const quizData = {
    red: [
        {
            id: 1,
            text: { en: "What mood are you in tonight?", ko: "오늘 밤, 어떤 기분이신가요?" },
            options: [
                { id: "A", text: { en: "A. Gossip with the girls!", ko: "A. 친구들과 신나게 수다 떨고 싶어요!" } },
                { id: "B", text: { en: "B. A romantic date with my love", ko: "B. 사랑하는 사람과 로맨틱한 데이트" } },
                { id: "C", text: { en: "C. A fun night with friends I haven’t seen in a long time", ko: "C. 오랜만에 만난 친구들과 즐거운 밤" } },
                { id: "D", text: { en: "D. I need a deep and calm conversation to release some life stress", ko: "D. 차분하고 깊은 대화로 스트레스를 풀고 싶어요" } }
            ]
        },
        {
            id: 2,
            text: { en: "Where do you imagine spending the perfect evening in Italy?", ko: "상상 속 이탈리아, 가장 완벽한 저녁을 보낼 장소는?" },
            options: [
                { id: "A", text: { en: "A. At a fancy bar in the center of Milan", ko: "A. 밀라노 중심에 위치한 화려하고 세련된 바" } },
                { id: "B", text: { en: "B. On a seaside terrace in Southern Italy, with a summer breeze and sunset", ko: "B. 남부 이탈리아 해변의 테라스, 여름 바람과 붉은 노을" } },
                { id: "C", text: { en: "C. In a cozy restaurant in the hills of Tuscany", ko: "C. 토스카나 언덕 위, 아늑하고 따뜻한 레스토랑" } },
                { id: "D", text: { en: "D. In a small restaurant in Venice near the Grand Canal", ko: "D. 베네치아 대운하 근처, 운치 있는 작은 레스토랑" } }
            ]
        },
        {
            id: 3,
            text: { en: "What would you choose for your last meal?", ko: "인생 마지막 식사로 무엇을 선택하시겠어요?" },
            options: [
                { id: "A", text: { en: "A. Sushi Omakase", ko: "A. 스시 오마카세" } },
                { id: "B", text: { en: "B. Pizza and/or fried chicken", ko: "B. 피자나 프라이드치킨" } },
                { id: "C", text: { en: "C. Samgyeopsal with kimchi jjigae", ko: "C. 삼겹살과 김치찌개" } },
                { id: "D", text: { en: "D. A giant T-bone steak with roasted potatoes and asparagus", ko: "D. 구운 감자와 아스파라거스를 곁들인 거대한 티본 스테이크" } }
            ]
        },
        {
            id: 4,
            text: { en: "Which sentence represents you the most?", ko: "당신을 가장 잘 나타내는 문장은?" },
            options: [
                { id: "A", text: { en: "A. Boys come and go, but girlfriends are forever.", ko: "A. 남자친구는 왔다가 가지만, 여사친들은 영원하다." } },
                { id: "B", text: { en: "B. Life is made of small precious moments, like this one right now.", ko: "B. 인생은 작고 소중한 순간들로 이루어져 있지, 바로 지금처럼." } },
                { id: "C", text: { en: "C. True friends always refill your wine glass when it’s empty.", ko: "C. 진짜 친구는 말하지 않아도 내 빈 와인 잔을 채워준다." } },
                { id: "D", text: { en: "D. Life can be hard, but like the best wine, it takes time to become extraordinary.", ko: "D. 삶은 때로 힘들지만 최고의 와인처럼 빛을 발하려면 시간이 필요하다." } }
            ]
        },
        {
            id: 5,
            text: { en: "If you could have a superpower, what would it be?", ko: "만약 초능력을 하나 가질 수 있다면?" },
            options: [
                { id: "A", text: { en: "A. Read people’s minds", ko: "A. 사람들의 마음 읽기" } },
                { id: "B", text: { en: "B. Eat whatever I want and never gain weight", ko: "B. 먹고 싶은 거 마음껏 먹어도 절대 살 안 찌기" } },
                { id: "C", text: { en: "C. Teleport anywhere in the world", ko: "C. 세상 어디로든 순간 이동하기" } },
                { id: "D", text: { en: "D. Become invisible", ko: "D. 투명 인간 되기" } }
            ]
        }
    ],
    white: [
        {
            id: 1,
            text: { en: "What mood are you in tonight?", ko: "오늘 밤, 어떤 기분이신가요?" },
            options: [
                { id: "A", text: { en: "A. Gossip and chatting", ko: "A. 신나게 수다 떨고 싶어요" } },
                { id: "B", text: { en: "B. A romantic date with my love", ko: "B. 사랑하는 사람과 로맨틱한 데이트" } },
                { id: "C", text: { en: "C. A fun night with friends I haven’t seen in a long time", ko: "C. 오랜만에 만난 친구들과 즐거운 밤" } },
                { id: "D", text: { en: "D. I need a deep and calm conversation to release some life stress", ko: "D. 차분하고 깊은 대화로 스트레스를 풀고 싶어요" } }
            ]
        },
        {
            id: 2,
            text: { en: "If you had to choose one perfume for the rest of your life, what would it be?", ko: "평생 단 하나의 향수만 써야 한다면 무엇을 고르시겠어요?" },
            options: [
                { id: "A", text: { en: "A. Daisy and white peach", ko: "A. 데이지 꽃과 백도 복숭아 향" } },
                { id: "B", text: { en: "B. Lemon zest and peppermint", ko: "B. 상큼한 레몬 제스트와 페퍼민트 향" } },
                { id: "C", text: { en: "C. Orange blossom and jasmine", ko: "C. 오렌지 블라썸과 우아한 자스민 향" } },
                { id: "D", text: { en: "D. Vanilla and amber", ko: "D. 달콤한 바닐라와 깊고 따뜻한 앰버 향" } }
            ]
        },
        {
            id: 3,
            text: { en: "What would you choose for your last meal?", ko: "인생 마지막 식사로 무엇을 선택하시겠어요?" },
            options: [
                { id: "A", text: { en: "A. Sushi Omakase", ko: "A. 스시 오마카세" } },
                { id: "B", text: { en: "B. Pasta with clams (Vongole)", ko: "B. 감칠맛 나는 조개 봉골레 파스타" } },
                { id: "C", text: { en: "C. King crab", ko: "C. 육즙 팡팡 터지는 버터 킹크랩" } },
                { id: "D", text: { en: "D. Butter lobster and shrimp cocktail", ko: "D. 버터 랍스터와 상큼한 슈림프 칵테일" } }
            ]
        },
        {
            id: 4,
            text: { en: "Which sentence represents you the most?", ko: "당신을 가장 잘 나타내는 문장은?" },
            options: [
                { id: "A", text: { en: "A. Life is too short for mediocre wine and mediocre partners.", ko: "A. 미지근한 와인과 매력 없는 남자를 만나기엔 인생이 너무 짧다." } },
                { id: "B", text: { en: "B. Life is better when we are a little in love.", ko: "B. 누군가와 조금은 사랑에 빠져있을 때 인생이 더 아름다운 법이지." } },
                { id: "C", text: { en: "C. Tonight we celebrate… tomorrow we remember. Maybe.", ko: "C. 오늘 밤은 축하하자! 내일 기억날지는 보장 못 하지만." } },
                { id: "D", text: { en: "D. Good friends, good wine, and stories we’ll laugh about forever.", ko: "D. 좋은 친구들 좋은 와인 평생 웃고 떠들 이야기거리." } }
            ]
        },
        {
            id: 5,
            text: { en: "Where would your perfect dinner in Italy be?", ko: "가장 완벽한 이탈리아 저녁 식사 장소를 고른다면?" },
            options: [
                { id: "A", text: { en: "A. On a terrace in Milan in a fancy restaurant", ko: "A. 밀라노 중심에 위치한 화려하고 세련된 야외 테라스 레스토랑" } },
                { id: "B", text: { en: "B. At sunset in a romantic little restaurant on the beach", ko: "B. 해 질 녘, 백사장에 위치한 로맨틱하고 작은 레스토랑" } },
                { id: "C", text: { en: "C. In a crowded cozy restaurant in Naples", ko: "C. 시끌벅적하고 활기 넘치는 나폴리의 따뜻한 레스토랑" } },
                { id: "D", text: { en: "D. In a cozy restaurant in the hills of Tuscany", ko: "D. 평화로운 토스카나 언덕에 자리한 아늑한 레스토랑" } }
            ]
        }
    ],
    sparkling: [
        {
            id: 1,
            text: { en: "What kind of mood are you bringing tonight?", ko: "오늘 밤, 어떤 바이브이신가요?" },
            options: [
                { id: "A", text: { en: "A. Gossip and bubbles with the girls", ko: "A. 톡쏘는 스파클링과 톡톡튀는 수다로 채우는 걸스나잇!" } },
                { id: "B", text: { en: "B. A romantic date with my love", ko: "B. 사랑하는 사람과 로맨틱한 데이트" } },
                { id: "C", text: { en: "C. A fun night celebrating with friends", ko: "C. 친구들과 무언가를 축하하며 텐션 높이는 신나는 밤" } },
                { id: "D", text: { en: "D. An elegant evening with good conversation and great wine", ko: "D. 진지한 대화와 맛있는 와인이 함께하는 우아한 저녁" } }
            ]
        },
        {
            id: 2,
            text: { en: "Where would you love to drink your perfect glass of sparkling wine in Italy?", ko: "이탈리아에서 완벽한 스파클링 와인 한 잔을 마신다면 어디서?" },
            options: [
                { id: "A", text: { en: "A. On a sunny terrace in Milan with friends and shopping bags", ko: "A. 쇼핑을 마치고 친구들과 앉은 밀라노의 햇살 가득한 테라스" } },
                { id: "B", text: { en: "B. On a romantic balcony overlooking Lake Como at sunset", ko: "B. 해질 무렵 꼬모 호수(Lake Como)가 내려다보이는 로맨틱한 발코니" } },
                { id: "C", text: { en: "C. In a lively piazza, surrounded by friends and laughter", ko: "C. 활기찬 광장, 친구들의 웃음소리로 가득한 한가운데서" } },
                { id: "D", text: { en: "D. At a refined wine bar in Venice, watching the boats pass by", ko: "D. 배들이 지나가는 풍경이 보이는 베네치아의 고급스러운 와인 바" } }
            ]
        },
        {
            id: 3,
            text: { en: "What would you love to pair with your bubbles?", ko: "스파클링 와인과 기가 막히게 페어링하고 싶은 음식은?" },
            options: [
                { id: "A", text: { en: "A. Oysters and light appetizers", ko: "A. 상큼한 생굴과 가벼운 애피타이저" } },
                { id: "B", text: { en: "B. Fresh seafood pasta or lobster", ko: "B. 신선한 해산물 파스타 혹은 랍스터 요리" } },
                { id: "C", text: { en: "C. Fried snacks, calamari, and things meant for sharing", ko: "C. 바삭한 오징어 튀김같이 여럿이 나눠 먹기 딱 좋은 핑거 푸드" } },
                { id: "D", text: { en: "D. A refined tasting menu with delicate dishes", ko: "D. 아주 섬세하게 조리된 정갈한 파인다이닝 코스" } }
            ]
        },
        {
            id: 4,
            text: { en: "Which sentence feels the most like you?", ko: "당신의 가치관과 가장 잘 맞는 문장은?" },
            options: [
                { id: "A", text: { en: "A. Good friends and sparkling wine make everything better.", ko: "A. 좋은 친구들과 기포가 올라오는 샴페인 한 잔이면 모든게 완벽해." } },
                { id: "B", text: { en: "B. Every love story deserves a bottle of bubbles.", ko: "B. 모든 러브스토리엔 축배를 들 스파클링 와인 정도는 있어야지." } },
                { id: "C", text: { en: "C. Tonight we celebrate… tomorrow we recover.", ko: "C. 오늘 밤은 일단 달리면서 축하하자! 내일의 숙취는 나중에 생각하고." } },
                { id: "D", text: { en: "D. The best conversations always start with a good glass of wine.", ko: "D. 최고의 대화는 언제나 훌륭한 와인 한 잔과 함께 시작된다." } }
            ]
        },
        {
            id: 5,
            text: { en: "What is your ideal breakfast?", ko: "당신의 이상적인 아침 식사는?" },
            options: [
                { id: "A", text: { en: "A. A croissant and a cappuccino", ko: "A. 방금 구운 바삭한 크루아상과 따뜻한 카푸치노" } },
                { id: "B", text: { en: "B. A hot Americano and a stomach too closed to eat anything else", ko: "B. 뜨거운 아메리카노 한 잔... 무언갈 먹기엔 소화가 안될 것 같아요" } },
                { id: "C", text: { en: "C. A big glass of orange juice and some toast", ko: "C. 신선하고 시원한 오렌지 주스 한 잔, 그리고 노릇한 토스트" } },
                { id: "D", text: { en: "D. Scrambled eggs with a cup of tea or coffee", ko: "D. 부드러운 스크램블 에그와 따뜻한 홍차, 혹은 커피" } }
            ]
        }
    ],
    surprise: [
        {
            id: 1,
            text: { en: "What kind of atmosphere do you want tonight?", ko: "오늘 밤, 어떤 분위기를 원하시나요?" },
            options: [
                { id: "A", text: { en: "A. Light, fresh, and easygoing", ko: "A. 가볍고 상쾌하며, 부담 없이 편안한 분위기" } },
                { id: "B", text: { en: "B. Warm, cozy, and a little intense", ko: "B. 따뜻하고 아늑하지만, 동시에 살짝 강렬한 느낌" } },
                { id: "C", text: { en: "C. Fun, relaxed, and social", ko: "C. 언제나 즐겁고 여유로우며 사람들과 어울리는 기분" } },
                { id: "D", text: { en: "D. Elegant, lively, and celebratory", ko: "D. 우아하면서도 생기가 넘치는, 무언가 축하하는 특별한 자리" } }
            ]
        },
        {
            id: 2,
            text: { en: "Choose the place where you would most like to spend your evening.", ko: "저녁 시간을 보내고 싶은 완벽한 장소를 골라보세요." },
            options: [
                { id: "A", text: { en: "A. A seaside terrace with a cool breeze", ko: "A. 시원하고 짭조름한 바닷바람이 부는 탁 트인 해변가 테라스" } },
                { id: "B", text: { en: "B. A candle-lit restaurant on a quiet street", ko: "B. 아무도 모르는 한적한 골목길, 은은한 촛불이 켜진 레스토랑" } },
                { id: "C", text: { en: "C. A sunny garden table with friends", ko: "C. 따스한 오후 햇살이 내리쬐는 예쁜 정원, 친구들과 둘러앉은 테이블" } },
                { id: "D", text: { en: "D. A stylish rooftop bar with a city view", ko: "D. 화려하고 반짝이는 도시 야경이 한눈에 들어오는 세련된 루프탑" } }
            ]
        },
        {
            id: 3,
            text: { en: "Which dish sounds the most tempting right now?", ko: "지금 이 순간, 가장 군침이 도는 음식은?" },
            options: [
                { id: "A", text: { en: "A. Fresh seafood or oysters", ko: "A. 바다의 향이 가득한 신선한 해산물이나 생굴" } },
                { id: "B", text: { en: "B. A juicy steak with roasted potatoes", ko: "B. 육즙 가득 머금은 두툼한 스테이크와 허브향 구운 감자" } },
                { id: "C", text: { en: "C. Charcuterie and small plates to share", ko: "C. 다양한 햄과 치즈가 담긴 풍성한 샤퀴테리와 맛깔난 타파스" } },
                { id: "D", text: { en: "D. Light appetizers and something crispy", ko: "D. 산뜻한 애피타이저와 바사삭 소리 나는 맛있는 튀김" } }
            ]
        },
        {
            id: 4,
            text: { en: "Which sentence feels the most like you?", ko: "당신의 가치관과 가장 잘 맞는 문장은?" },
            options: [
                { id: "A", text: { en: "A. The best moments in life are the ones shared with good friends and lots of laughter.", ko: "A. 내 인생 최고의 순간들은 항상 좋은 친구들과 크게 웃으며 나눈 시간들이지." } },
                { id: "B", text: { en: "B. Sometimes the most beautiful memories are the ones that leave a little nostalgia behind.", ko: "B. 가슴 속에 묘한 아련함과 향수를 남기는 기억들이 결국 가장 아름다워." } },
                { id: "C", text: { en: "C. Life is sweeter when there is a little romance in the air.", ko: "C. 공기 중에 달콤한 로맨스가 조금 섞여 있을 때 삶은 진정으로 달달해진다." } },
                { id: "D", text: { en: "D. Every special moment deserves to be celebrated.", ko: "D. 사소하든 크든, 나의 모든 특별한 순간은 멋지게 축하받아야 해." } }
            ]
        },
        {
            id: 5,
            text: { en: "What is your ideal breakfast?", ko: "당신의 이상적인 아침 식사는?" },
            options: [
                { id: "A", text: { en: "A. A croissant and a cappuccino", ko: "A. 방금 구운 바삭한 크루아상과 따뜻한 카푸치노" } },
                { id: "B", text: { en: "B. A hot Americano and a stomach too sleepy to eat anything else", ko: "B. 뜨거운 아메리카노 한 잔... 너무 졸려서 아무것도 못 먹겠어요" } },
                { id: "C", text: { en: "C. A big glass of orange juice and some toast", ko: "C. 신선하고 시원한 오렌지 주스 한 잔, 그리고 노릇한 토스트" } },
                { id: "D", text: { en: "D. Scrambled eggs with a cup of tea or coffee", ko: "D. 부드러운 스크램블 에그와 따뜻한 홍차, 혹은 커피" } }
            ]
        }
    ]
};

const resultsData = {
    red: {
        A: { 
            main: { name: "CINCINNATI, POLLUCE", imgSrc: "assets/Polluce_nobg.png", description: { en: "100% Nero Buono, Lazio. A ruby red wine, delicate and harmonious, with balanced complexity and light yet persistent tannins.", ko: "루비빛 레드 와인으로, 섬세하고 조화로우며 균형 잡힌 복합미와 가볍지만 지속적인 탄닌감을 지녔습니다." } },
            altLabel: { en: "Want something slightly more structured?", ko: "좀 더 구조감있는 와인을 원하시나요?" },
            alt: { name: "MERUS SCHIAVA", imgSrc: "assets/bottle_placeholder.png", description: { en: "100% Schiava, Trentino Alto Adige. Fresh and mild character, with notes of sour cherry, roasted almond, cinnamon, and closing with weak refreshing tannin.", ko: "신선하고 순한 캐릭터, 시큼한 체리, 구운 아몬드, 시나몬의 노트가 특징이고 약한 탄닌이 상쾌하게 느껴진다." } }
        },
        B: { 
            main: { name: "FEUDO APULIANO, PRIMITIVO DEL SALENTO IGP", imgSrc: "assets/Primitivo_nobg.png", description: { en: "100% Primitivo, Puglia. A full-bodied yet smooth and well-balanced wine, showing intense aromas of ripe red fruit, a deep ruby-violet color, and a pleasant finish with subtle almond notes.", ko: "깊고 선명한 루비빛 컬러에 잘 익은 과실의 농밀한 향이 돋보이며, 풀바디이지만 부드럽고 균형 잡힌 구조와 은은한 아몬드 뉘앙스의 여운이 인상적인 와인입니다." } },
            altLabel: { en: "Want something softer and less fruity?", ko: "좀 더 부드럽고 덜 과실향이 나는 와인을 원하시나요?" }, 
            alt: { name: "DON TOMASI, JATO ROSSO", imgSrc: "assets/don_tomasi_jato_rosso_nobg.png", description: { en: "Shiraz, Nero D'avola, Sicilia. A fragrant wine displaying supple tannins, subtle herbal nuances, and remarkable balance on the palate.", ko: "섬세한 허브의 뉘앙스와 유연한 탄닌이 어우러진 향기로운 와인으로, 입안에서는 뛰어난 밸런스를 보여줍니다." } }
        },
        C: { 
            main: { name: "DON TOMASI, JATO ROSSO", imgSrc: "assets/don_tomasi_jato_rosso_nobg.png", description: { en: "Shiraz, Nero D'avola, Sicilia. A fragrant wine displaying supple tannins, subtle herbal nuances, and remarkable balance on the palate.", ko: "섬세한 허브의 뉘앙스와 유연한 탄닌이 어우러진 향기로운 와인으로, 입안에서는 뛰어난 밸런스를 보여줍니다." } },
            altLabel: { en: "Want something stronger and more powerful?", ko: "좀 더 강하고 힘 있는 와인을 원하시나요?" }, 
            alt: { name: "SILVIO CARTA, CANNONAU DI SARDEGNA SERENATA DOC", imgSrc: "assets/CannonaudiSardegna_nobg.png", description: { en: "100% Cannonau, Sardegna. Ripe, rich and warm notes of dark cherry, plum, blackberry and mint. Delicate aniseed touch, strong tannin, dry ending.", ko: "다크 체리, 자두, 블랙베리, 민트의 잘 익은 풍부하고 따뜻한 향입니다. 적당한 탄닌이 무게를 잘 잡아준다." } }
        },
        D: { 
            main: { name: "TIRTEO, BARBERA D'ASTI SUPERIORE DOCG", imgSrc: "assets/Barberadasti_nobg.png", description: { en: "100% Barbera, Piemonte. A bright ruby red wine with aromas of ripe red fruit and subtle spice, offering a well-defined structure, balanced tannins and a smooth, lingering finish.", ko: "선명한 루비 레드 컬러에 잘 익은 붉은 과실과 은은한 향신료 뉘앙스가 어우러지며, 균형 잡힌 탄닌과 부드러운 질감, 길게 이어지는 여운이 특징입니다." } },
            altLabel: { en: "Want something more fruity than spices?", ko: "향신료보다는 더 과실 향이 강한 와인을 원하시나요?" }, 
            alt: { name: "TENUTA MONTETI, CABURNIO", imgSrc: "assets/Tenuta_Monteti_Caburnio_Toscana__78761_nobg.png", description: { en: "50% Cabernet Sauvignon, 25% Merlot, 25% Alicante Bouschet, Toscana. Intense ruby. Captivating nose, with fresh notes of berries, cherry, currant and pomegranate. Persistent tannin, soft finishing.", ko: "강렬한 루비. 베리, 체리, 건포도, 석류의 신선한 향이 코를 사로잡습니다. 지속적인 탄닌, 부드러운 마무리 향신." } }
        }
    },
    white: {
        A: {
            main: { name: "CANICATTI, GRILLO DOC", imgSrc: "assets/Grillo Canicatti_nobg.png", description: { en: "100% Grillo, Sicilia. Well-ended and harmonious scents. On the palate decisive, fruity, with an appropriate acidic component.", ko: "잘 마무리되고 조화로운 향기. 맛은 결정적이며 과일 향이 나며 적절한 산성이 들어 있습니다." } },
            altLabel: { en: "Want something more aromatic and smooth?", ko: "좀 더 향긋하고 부드러운 와인을 원하시나요?" },
            alt: { name: "LA KIUVA, ROSE' DE VALLE", imgSrc: "assets/La-kiuvarose_nobg.png", description: { en: "70% Picotendro, 30% Gros Vien, Neyret, Cornalin and Fumin, Valle D'Aosta. Aromas of fresh red berries and wild fruit; on the palate it is fresh and mineral with a delicate bitter finish.", ko: "신선한 붉은 베리와 야생 과일 향이 나며, 입안에서는 상쾌하고 미네랄감이 느껴지고 끝에는 은은한 쓴맛이 남습니다." } }
        },
        B: {
            main: { name: "DON TOMASI, JATO' LUCIDO", imgSrc: "assets/don_tomasi_jato lucido_nobg.png", description: { en: "100% Catarratto Lucido, Sicilia. An elegant profile of ripe white fruit and zesty citrus, balanced by subtle minerality.", ko: "잘 익은 백색 과일과 상큼한 감귤 향, 은은한 미네랄과 아몬드 뉘앙스가 어우러진 우아한 풍미입니다." } },
            altLabel: { en: "Want something more mineral?", ko: "좀 더 미네랄리티가 풍부한 와인을 원하시나요?" },
            alt: { name: "PRIMA PIETRA, SOAVE DOC", imgSrc: "assets/335_58.Prima Pietra SOAVE_nobg.png", description: { en: "100% Garganega, Veneto. Citrus and floreal notes, green fruits finishing with smooth acidity.", ko: "시트러스와 꽃향기가 느껴지고 풋과실 상큼함이 고소한 견과류향과 마지막을 장식합니다." } }
        },
        C: {
            main: { name: "SISTINA, PECORINO IGT", imgSrc: "assets/Pecorino_nobg.png", description: { en: "100% Pecorino, Abruzzo. A fresh and vibrant Pecorino, with notes of citrus, white peach, and delicate floral hints. Crisp acidity and a mineral-driven finish make it bright and refreshing.", ko: "상큼하고 생동감 있는 페코리노 와인으로, 시트러스와 화이트 피치, 은은한 꽃 향이 느껴집니다. 산뜻한 산미와 미네랄리티가 돋보이며 깔끔한 피니시를 선사합니다." } },
            altLabel: { en: "Want something slightly more off-dry?", ko: "살짝 더 오프-드라이한 와인을 원하시나요?" },
            alt: { name: "VILLA SPARINA, GAVI DOCG", imgSrc: "assets/Villa-Sparina-Gavi_nobg.png", description: { en: "100% Cortese, Piemonte. Floreal notes with aromas of yellow fruits and tropical fruit. Long finish with soft acid and persinstent structure.", ko: "꽃 향이 어우러진 과일향 풍부하고, 애씨드 구조로 롱 피니쉬가 느껴집니다." } }
        },
        D: {
            main: { name: "DON TOMASI, GRILLO CHARDONNAY", imgSrc: "assets/grillo-chardonnay_nobg.png", description: { en: "50% Grillo, 50% Chardonnay, Sicilia. A vibrant and aromatic wine with ripe tropical fruit notes, hints of citrus and white flowers, a soft vanilla touch, fresh acidity, gentle minerality and a clean, lingering finish.", ko: "잘 익은 열대과일의 풍부한 향과 시트러스, 흰 꽃의 뉘앙스에 부드러운 바닐라 터치가 어우러지며, 신선한 산미와 은은한 미네랄리티, 깔끔하고 길게 이어지는 피니시가 특징입니다." } },
            altLabel: { en: "Want something fresher and more mineral?", ko: "좀 더 상쾌하고 미네랄감이 느껴지는 와인은 어떠신가요?" },
            alt: { name: "DON TOMASI, JATO' LUCIDO", imgSrc: "assets/don_tomasi_jato lucido_nobg.png", description: { en: "100% Catarratto Lucido, Sicilia. An elegant profile of ripe white fruit and zesty citrus, balanced by subtle minerality.", ko: "잘 익은 백색 과일과 상큼한 감귤 향, 은은한 미네랄과 아몬드 뉘앙스가 어우러진 우아한 풍미입니다." } }
        }
    },
    sparkling: {
        A: {
            main: { name: "VILLA SANDI, PROSECCO ROSE' MILLESIMATO DOC", imgSrc: "assets/Villa sandi rose millesimato_nobg.png", description: { en: "90% Glera, 10% Pinot Nero, Veneto. Fresh note of flowers and vanilla, elegant sparkle and finishing.", ko: "꽃과 바닐라의 상큼한 노트, 우아한 스파클링과 마무리 느낌 줍니다." } },
            altLabel: { en: "Want more round finish?", ko: "좀 더 둥글고 부드러운 마무리를 원하시나요?" },
            alt: { name: "FASOL MENIN VALDOBBIADENE PROSECCO SUPERIORE DOCG EXTRA DRY", imgSrc: "assets/Prosecco-Fasol-Menin-Leonte-DOCG_nobg.png", description: { en: "100% Glera, Veneto. Elegant and aromatic sparkling wine with notes of white flowers, apple and pear, balanced by a delicate sweetness and lively bubbles.", ko: "흰 꽃과 사과, 배의 향이 어우러진 우아한 스파클링 와인으로, 섬세한 단맛과 상쾌한 기포가 특징입니다." } }
        },
        B: {
            main: { name: "VILLA SANDI, PROSECCO DI VALDOBBIADENE IL FRESCO DOC BRUT", imgSrc: "assets/il-fresco-prosecco-doc-treviso_nobg.png", description: { en: "100% Glera, Veneto. Strong fruity scent and elegant floral scent reminiscent of acacia along with aromas of ripe golden apple and northern pine.", ko: "과실향이 강렬하며 잘 익은 금빛 사과, 복숭아 등의 아로마와 함께 아카시아를 연상시키는 우아한 꽃 향을 가졌습니다." } },
            altLabel: { en: "Want more fragrant and fresh?", ko: "좀 더 향기롭고 신선한 느낌을 원하시나요?" },
            alt: { name: "TENUTA SANTOME', PROSECCO DOC TREVISO EXTRA DRY", imgSrc: "assets/Prosecco Santome__nobg.png", description: { en: "100% Glera, Veneto. A fresh and light Prosecco doc extra dry with delicate aromas of apple and acacia flowers, fine bubbles and a well-balanced acidity.", ko: "사과와 아카시아 꽃의 은은한 향, 섬세한 기포와 균형 잡힌 산미가 어우러진 상쾌한 스타일의 프로세코 doc 엑스트라 드라이입니다." } }
        },
        C: {
            main: { name: "TENUTA SANTOME', PROSECCO DOC TREVISO EXTRA DRY", imgSrc: "assets/Prosecco Santome__nobg.png", description: { en: "100% Glera, Veneto. A fresh and light Prosecco doc extra dry with delicate aromas of apple and acacia flowers, fine bubbles and a well-balanced acidity.", ko: "사과와 아카시아 꽃의 은은한 향, 섬세한 기포와 균형 잡힌 산미가 어우러진 상쾌한 스타일의 프로세코 doc 엑스트라 드라이입니다." } },
            altLabel: { en: "Want more funky and aromatic?", ko: "좀 더 개성 있고 펑키한 와인은 어떠신가요?" },
            alt: { name: "TERRE FORTI, LAMBRUSCO IGT", imgSrc: "assets/Lambrusco_nobg.png", description: { en: "100% Lambrusco, Emilia-Romagna. A smooth and approachable red sparkling wine with gentle bubbles, a subtle sweetness and a fresh, balanced finish that pairs easily with a wide range of dishes.", ko: "부드러운 기포와 은은한 단맛, 산뜻하고 균형 잡힌 마무리가 특징인 레드 스파클링 와인으로 다양한 음식과 편안하게 어울립니다." } }
        },
        D: {
            main: { name: "FASOL MENIN VALDOBBIADENE PROSECCO SUPERIORE DOCG EXTRA DRY LEONTE", imgSrc: "assets/Prosecco-Fasol-Menin-Leonte-DOCG_nobg.png", description: { en: "100% Glera, Veneto. Elegant and aromatic sparkling wine with notes of white flowers, apple and pear, balanced by a delicate sweetness and lively bubbles.", ko: "흰 꽃과 사과, 배의 향이 어우러진 우아한 스파클링 와인으로, 섬세한 단맛과 상쾌한 기포가 특징입니다." } },
            altLabel: { en: "Want more dry?", ko: "좀 더 드라이하고 깔끔한 맛을 원하시나요?" },
            alt: { name: "VILLA SANDI IL FRESCO BRUT", imgSrc: "assets/il-fresco-prosecco-doc-treviso_nobg.png", description: { en: "100% Glera, Veneto. Strong fruity scent and elegant floral scent reminiscent of acacia along with aromas of ripe golden apple and northern pine.", ko: "과실향이 강렬하며 잘 익은 금빛 사과, 복숭아 등의 아로마와 함께 아카시아를 연상시키는 우아한 꽃 향을 가졌습니다." } }
        }
    },
    surprise: {
        A: {
            main: { name: "DON TOMASI, GRILLO CHARDONNAY", imgSrc: "assets/grillo-chardonnay_nobg.png", description: { en: "50% Grillo, 50% Chardonnay, Sicilia. A vibrant and aromatic wine with ripe tropical fruit notes, hints of citrus and white flowers, a soft vanilla touch.", ko: "잘 익은 열대과일의 풍부한 향과 시트러스, 흰 꽃의 뉘앙스에 부드러운 바닐라 터치가 특징입니다." } },
            altLabel: { en: "Want less aromatic?", ko: "좀 더 은은하고 심플한 향을 선호하시나요?" },
            alt: { name: "SISTINA, PECORINO IGT", imgSrc: "assets/Pecorino_nobg.png", description: { en: "100% Pecorino, Abruzzo. A fresh and vibrant Pecorino, with notes of citrus, white peach, and delicate floral hints. Crisp acidity and a mineral-driven finish.", ko: "상큼하고 생동감 있는 페코리노 와인으로, 시트러스와 화이트 피치 부드러운 향이 느껴집니다." } }
        },
        B: {
            main: { name: "TIRTEO, BARBERA D'ASTI SUPERIORE DOCG", imgSrc: "assets/Barberadasti_nobg.png", description: { en: "100% Barbera, Piemonte. A bright ruby red wine with aromas of ripe red fruit and subtle spice, offering a well-defined structure, balanced tannins and a smooth, lingering finish.", ko: "선명한 루비 레드 컬러에 잘 익은 붉은 과실과 은은한 향신료 뉘앙스가 어우러집니다." } },
            altLabel: { en: "Want more fruity and bold?", ko: "좀 더 바디감이 깊고 큰 와인은 어떠세요?" },
            alt: { name: "SILVIO CARTA, CANNONAU DI SARDEGNA SERENATA DOC", imgSrc: "assets/CannonaudiSardegna_nobg.png", description: { en: "100% Cannonau, Sardegna. Ripe, rich and warm notes of dark cherry, plum, blackberry and mint. Delicate aniseed touch, strong tannin, dry ending.", ko: "다크 체리, 자두, 블랙베리, 민트의 잘 익고 풍부한 향입니다." } }
        },
        C: {
            main: { name: "LA KIUVA, ROSE' DE VALLE", imgSrc: "assets/La-kiuvarose_nobg.png", description: { en: "70% Picotendro, 30% Gros Vien, Neyret, Cornalin and Fumin, Valle D'Aosta. Aromas of fresh red berries and wild fruit; on the palate it is fresh and mineral with a delicate bitter finish.", ko: "신선한 붉은 베리와 야생 과일 향이 나며, 입안에서는 상쾌하고 미네랄감이 느껴집니다." } },
            altLabel: { en: "Want more mineral and fresh?", ko: "좀 더 상쾌한 미네랄이 필요하신가요?" },
            alt: { name: "DON TOMASI, JATO' LUCIDO", imgSrc: "assets/don_tomasi_jato lucido_nobg.png", description: { en: "100% Catarratto Lucido, Sicilia. An elegant profile of ripe white fruit and zesty citrus, balanced by subtle minerality.", ko: "잘 익은 백색 과일과 상큼한 감귤 향, 은은한 미네랄이 어우러진 우아한 풍미입니다." } }
        },
        D: {
            main: { name: "TENUTA SANTOME', PROSECCO DOC TREVISO EXTRA DRY", imgSrc: "assets/Prosecco Santome__nobg.png", description: { en: "100% Glera, Veneto. A fresh and light Prosecco doc extra dry with delicate aromas of apple and acacia flowers, fine bubbles and a well-balanced acidity.", ko: "사과와 아카시아 꽃의 은은한 향, 섬세한 기포, 완벽한 스파클링입니다." } },
            altLabel: { en: "Want to try something different?", ko: "조금은 색다르고 유니크한 와인에 도전해볼까요?" },
            alt: { name: "VILLA SPARINA, GAVI DOCG", imgSrc: "assets/Villa-Sparina-Gavi_nobg.png", description: { en: "100% Cortese, Piemonte. Floreal notes with aromas of yellow fruits and tropical fruit. Long finish with soft acid and persinstent structure.", ko: "꽃 향이 어우러진 과일향, 탄탄한 구조감의 화이트 와인입니다." } }
        }
    }
};

let currentLang = 'en'; // default ENG
let currentWineType = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let adminMode = false;
let isViewingAlt = false;
let currentResultObj = null; 

const contentArea = document.getElementById('content-area');
const adminOverlay = document.getElementById('admin-overlay');
const adminScores = document.getElementById('admin-scores');

const uiText = {
    title: { en: "Which wine would you like to drink tonight?", ko: "오늘 밤, 어떤 와인이 끌리시나요?" },
    red: { en: "Red wine", ko: "레드 와인" },
    white: { en: "White wine", ko: "화이트 와인" },
    sparkling: { en: "Sparkling wine", ko: "스파클링 와인" },
    surprise: { en: "Not sure yet... surprise me", ko: "잘 모르겠어요... 알아서 추천해 주세요" },
    prev: { en: "← Prev", ko: "← 이전" },
    waiting: { en: "Finding your perfect match...", ko: "당신의 완벽한 와인을 찾는 중입니다..." },
    back: { en: "← Go Back", ko: "← 뒤로 가기" },
    congrats: { en: "Your Perfect Match", ko: "당신을 위한 완벽한 와인" }
};

window.setLanguage = function(lang) {
    currentLang = lang;
    document.getElementById('lang-en').classList.remove('active');
    document.getElementById('lang-ko').classList.remove('active');
    document.getElementById(`lang-${lang}`).classList.add('active');

    if (document.querySelector('.start-screen')) {
        renderStartScreen();
    } else if (document.querySelector('.question-screen')) {
        renderQuestion();
    } else if (document.querySelector('.result-screen')) {
        renderResultScreen();
    }
};

function init() {
    currentWineType = null;
    currentQuestionIndex = 0;
    userAnswers = [];
    currentResultObj = null;
    isViewingAlt = false;
    updateAdminDisplay();
    renderStartScreen();
}

function renderStartScreen() {
    contentArea.innerHTML = `
        <div class="start-screen fade-enter">
            <div class="video-wrapper">
                <video src="assets/logo_video2.mp4" autoplay loop muted playsinline></video>
            </div>
            <h1 class="heading-primary">${uiText.title[currentLang]}</h1>
            <div class="options-list">
                <button class="btn-glass" onclick="selectWineType('red')">${uiText.red[currentLang]}</button>
                <button class="btn-glass" onclick="selectWineType('white')">${uiText.white[currentLang]}</button>
                <button class="btn-glass" onclick="selectWineType('sparkling')">${uiText.sparkling[currentLang]}</button>
                <button class="btn-glass" onclick="selectWineType('surprise')">${uiText.surprise[currentLang]}</button>
            </div>
        </div>
    `;
}

window.selectWineType = function(type) {
    currentWineType = type;
    renderQuestion();
};

function renderQuestion() {
    const questions = quizData[currentWineType];
    const q = questions[currentQuestionIndex];
    const currentAnswer = userAnswers[currentQuestionIndex] || null;

    let optionsHtml = '';
    q.options.forEach(opt => {
        const isSelected = currentAnswer === opt.id ? 'selected' : '';
        optionsHtml += `<button class="btn-glass ${isSelected}" onclick="selectOption('${opt.id}')">${opt.text[currentLang]}</button>`;
    });

    const isFirst = currentQuestionIndex === 0;
    const prevAction = isFirst ? 'init()' : 'prevQuestion()';

    contentArea.innerHTML = `
        <div class="question-screen fade-enter">
            <video class="video-small" src="assets/logo_video2.mp4" autoplay loop muted playsinline></video>
            <div class="question-number">Question ${currentQuestionIndex + 1} of ${questions.length}</div>
            <h2 class="heading-secondary">${q.text[currentLang]}</h2>
            
            <div class="options-list" id="current-options">
                ${optionsHtml}
            </div>
            
            <div class="nav-buttons">
                <button class="btn-text" onclick="${prevAction}">${uiText.prev[currentLang]}</button>
            </div>
        </div>
    `;
}

window.selectOption = function(id) {
    userAnswers[currentQuestionIndex] = id;
    updateAdminDisplay();
    
    // Visually update buttons
    const buttons = document.querySelectorAll('#current-options .btn-glass');
    buttons.forEach(btn => btn.classList.remove('selected'));
    
    const clickedBtn = Array.from(buttons).find(b => b.textContent.startsWith(id + "."));
    if(clickedBtn) clickedBtn.classList.add('selected');

    // Smooth auto-advance delay
    setTimeout(() => {
        nextQuestion();
    }, 400); 
};

window.nextQuestion = function() {
    const questions = quizData[currentWineType];
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        processWaitingScreen();
    }
};

window.prevQuestion = function() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
};

function processWaitingScreen() {
    contentArea.innerHTML = `
        <div class="waiting-screen fade-enter">
            <video class="video-waiting" src="assets/logo_video2.mp4" autoplay loop muted playsinline></video>
            <div class="waiting-text">${uiText.waiting[currentLang]}</div>
        </div>
    `;

    // Wait 3 seconds
    setTimeout(calculateResult, 3000); 
}

function calculateResult() {
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    userAnswers.forEach(ans => {
        if(counts[ans] !== undefined) counts[ans]++;
    });

    let max = 0;
    for (const val of Object.values(counts)) {
        if (val > max) {
            max = val;
        }
    }

    let topChoices = [];
    for (const [key, val] of Object.entries(counts)) {
        if (val === max) {
            topChoices.push(key);
        }
    }

    let majority = topChoices[0];
    
    // Tiebreaker logic
    if (topChoices.length > 1) {
        if (currentWineType === 'red') {
            majority = topChoices.includes('B') ? 'B' : topChoices[0];
        } else if (currentWineType === 'white') {
            majority = topChoices.includes('B') ? 'B' : topChoices[0];
        } else if (currentWineType === 'sparkling') {
            majority = topChoices.includes('B') ? 'B' : topChoices[0];
        } else if (currentWineType === 'surprise') {
            majority = topChoices.includes('A') ? 'A' : topChoices[0];
        }
    }

    currentResultObj = resultsData[currentWineType][majority];
    isViewingAlt = false;
    renderResultScreen();
}

function renderResultScreen() {
    if (!currentResultObj) return;

    let target = isViewingAlt ? currentResultObj.alt : currentResultObj.main;
    if (!target) return;

    let footerHtml = '';
    if (!isViewingAlt && currentResultObj.altLabel) {
        footerHtml = `
            <div class="alt-prompt">
                <span onclick="toggleAltWine()">${currentResultObj.altLabel[currentLang]}</span>
            </div>
        `;
    }

    contentArea.innerHTML = `
        <div class="result-screen fade-enter">
            <div class="result-header">
                <div class="congrats">${isViewingAlt ? "Second Recommendation" : uiText.congrats[currentLang]}</div>
                <h1 class="wine-title">${target.name}</h1>
            </div>
            
            <div class="wine-card">
                <!-- 🍷 와인 사진이 들어가는 영역 -->
                <img class="wine-image" src="${target.imgSrc || 'assets/bottle_placeholder.png'}" alt="${target.name} photo" onerror="this.style.display='none'"/>
                <div class="wine-details">
                    ${target.description[currentLang]}
                </div>
            </div>
            
            ${footerHtml}

            <div class="nav-buttons">
                <button class="btn-text" onclick="${isViewingAlt ? 'toggleAltWine()' : 'init()'}">
                    ${isViewingAlt ? uiText.back[currentLang] : "← Start Over"}
                </button>
            </div>
        </div>
    `;
}

window.toggleAltWine = function() {
    isViewingAlt = !isViewingAlt;
    renderResultScreen();
};

window.toggleAdminMode = function() {
    adminMode = !adminMode;
    adminOverlay.style.display = adminMode ? 'block' : 'none';
    updateAdminDisplay();
};

function updateAdminDisplay() {
    if (!adminMode) return;
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    userAnswers.forEach(ans => {
        if(counts[ans] !== undefined) counts[ans]++;
    });
    adminScores.textContent = `A:${counts.A} B:${counts.B} C:${counts.C} D:${counts.D}`;
}

// Start app
init();

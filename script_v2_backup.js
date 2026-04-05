const quizData = {
    red: [
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
                { id: "B", text: { en: "B. A hot Americano and a stomach too sleepy to eat anything else", ko: "B. 뜨거운 아메리카노 한 잔... 아직 잠도 덜 깨서 못 먹겠어요" } },
                { id: "C", text: { en: "C. A big glass of orange juice and some toast", ko: "C. 신선하고 시원한 오렌지 주스 한 잔, 그리고 노릇한 토스트" } },
                { id: "D", text: { en: "D. Scrambled eggs with a cup of tea or coffee", ko: "D. 부드러운 스크램블 에그와 따뜻한 홍차, 혹은 커피" } }
            ]
        }
    ],
    white: [
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
            text: { en: "Which idea appeals to you the most right now?", ko: "지금 당장, 당신의 마음을 가장 끌어당기는 문장은?" },
            options: [
                { id: "A", text: { en: "A. Enjoying the moment without overthinking it.", ko: "A. 복잡한 생각은 빼고, 지금 이 순간을 그저 가볍게 즐기기." } },
                { id: "B", text: { en: "B. Taking time to appreciate the small details.", ko: "B. 작고 섬세한 디테일들을 여유롭게 음미하며 시간 보내기." } },
                { id: "C", text: { en: "C. Tonight we celebrate—tomorrow we recover.", ko: "C. 오늘 밤은 일단 달리면서 축하하자—내일의 숙취는 나중에 생각하고." } },
                { id: "D", text: { en: "D. The best conversations always start with a good glass of wine.", ko: "D. 최고의 대화는 언제나 훌륭한 와인 한 잔과 함께 시작된다." } }
            ]
        },
        {
            id: 5,
            text: { en: "What is your ideal breakfast?", ko: "당신의 이상적인 아침 식사는?" },
            options: [
                { id: "A", text: { en: "A. A croissant and a cappuccino", ko: "A. 방금 구운 바삭한 크루아상과 따뜻한 카푸치노" } },
                { id: "B", text: { en: "B. A hot Americano and a stomach too sleepy to eat anything else", ko: "B. 뜨거운 아메리카노 한 잔... 아직 잠도 덜 깨서 못 먹겠어요" } },
                { id: "C", text: { en: "C. A big glass of orange juice and some toast", ko: "C. 신선하고 시원한 오렌지 주스 한 잔, 그리고 노릇한 토스트" } },
                { id: "D", text: { en: "D. Scrambled eggs with a cup of tea or coffee", ko: "D. 부드러운 스크램블 에그와 따뜻한 홍차, 혹은 커피" } }
            ]
        }
    ],
    sparkling: [
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
            text: { en: "Which idea appeals to you the most right now?", ko: "지금 당장, 당신의 마음을 가장 끌어당기는 문장은?" },
            options: [
                { id: "A", text: { en: "A. Enjoying the moment without overthinking it.", ko: "A. 복잡한 생각은 빼고, 지금 이 순간을 그저 가볍게 즐기기." } },
                { id: "B", text: { en: "B. Taking time to appreciate the small details.", ko: "B. 작고 섬세한 디테일들을 여유롭게 음미하며 시간 보내기." } },
                { id: "C", text: { en: "C. Tonight we celebrate—tomorrow we recover.", ko: "C. 오늘 밤은 일단 달리면서 축하하자—내일의 숙취는 나중에 생각하고." } },
                { id: "D", text: { en: "D. The best conversations always start with a good glass of wine.", ko: "D. 최고의 대화는 언제나 훌륭한 와인 한 잔과 함께 시작된다." } }
            ]
        },
        {
            id: 5,
            text: { en: "What is your ideal breakfast?", ko: "당신의 이상적인 아침 식사는?" },
            options: [
                { id: "A", text: { en: "A. A croissant and a cappuccino", ko: "A. 방금 구운 바삭한 크루아상과 따뜻한 카푸치노" } },
                { id: "B", text: { en: "B. A hot Americano and a stomach too closed to eat anything else", ko: "B. 뜨거운 아메리카노 한 잔... 아직 입맛이 없어요" } },
                { id: "C", text: { en: "C. A big glass of orange juice and some toast", ko: "C. 신선한 오렌지 주스 한 잔과 노릇노릇한 토스트" } },
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
                { id: "B", text: { en: "B. A hot Americano and a stomach too sleepy to eat anything else", ko: "B. 뜨거운 아메리카노 한 잔... 아직 잠도 덜 깨서 못 먹겠어요" } },
                { id: "C", text: { en: "C. A big glass of orange juice and some toast", ko: "C. 신선하고 시원한 오렌지 주스 한 잔, 그리고 노릇한 토스트" } },
                { id: "D", text: { en: "D. Scrambled eggs with a cup of tea or coffee", ko: "D. 부드러운 스크램블 에그와 따뜻한 홍차, 혹은 커피" } }
            ]
        }
    ]
};

const resultsData = {
    red: {
        A: { 
            main: { name: "Polluce", imgSrc: "", description: { en: "100% Nero Buono, Lazio. A ruby red wine, delicate and harmonious, with balanced complexity and light yet persistent tannins.", ko: "100% Nero Buono, 라치오. 루비 레드 와인으로 섬세하고 조화로우며 균형 잡힌 복합미와 가볍지만 기분 좋게 오래 지속되는 탄닌감을 지녔습니다." } },
            altLabel: { en: "Want a lighter wine?", ko: "좀 더 가벼운 와인을 원하시나요?" },
            alt: { name: "MERUS SCHIAVA", imgSrc: "", description: { en: "100% Schiava, Trentino Alto Adige. Fresh and mild character, with notes of sour cherry, roasted almond, cinnamon, and closing with weak refreshing tannin.", ko: "100% Schiava, 트렌티노 알토 아디제. 신선하고 순한 캐릭터. 상큼한 체리, 구운 아몬드, 시나몬의 노트가 특징이며 연한 탄닌이 상쾌하게 느껴집니다." } }
        },
        B: { 
            main: { name: "Primitivo", imgSrc: "", description: { en: "100% Primitivo, Puglia. A full-bodied yet smooth and well-balanced wine, showing intense aromas of ripe red fruit, a deep ruby-violet color, and a pleasant finish with subtle almond notes.", ko: "100% Primitivo, 뿔리아. 깊고 투명한 루비-바이올렛 컬러와 풍부한 붉은 과실 향이 돋보이며, 풀바디임에도 부드럽고 균형 잡힌 구조감에 고소한 아몬드 향과 긴 여운을 남깁니다." } },
            altLabel: { en: "Want more soft and less fruity?", ko: "좀 더 부드럽고 과실향이 적은 걸 원하시나요?" }, 
            alt: { name: "JATO Rosso", imgSrc: "", description: { en: "Shiraz, Nero D'avola, Sicilia. A fragrant wine displaying supple tannins, subtle herbal nuances, and remarkable balance on the palate.", ko: "Shiraz, Nero D'avola, 시칠리아. 섬세한 허브의 향과 유연한 탄닌이 어우러진 향기로운 와인으로 입안에서 뛰어난 밸런스를 보여줍니다." } }
        },
        C: { 
            main: { name: "JATO ROSSO", imgSrc: "", description: { en: "Shiraz, Nero D'avola, Sicilia. A fragrant wine displaying supple tannins, subtle herbal nuances, and remarkable balance on the palate.", ko: "Shiraz, Nero D'avola, 시칠리아. 섬세한 허브의 향과 유연한 탄닌이 어우러진 향기로운 와인으로 입안에서 뛰어난 밸런스를 보여줍니다." } },
            altLabel: { en: "Want more strong and power fruity?", ko: "좀 더 강렬하고 묵직한 과실향을 원하시나요?" }, 
            alt: { name: "CANNONAU", imgSrc: "", description: { en: "100% Cannonau, Sardegna. Ripe, rich and warm notes of dark cherry, plum, blackberry and mint. Delicate aniseed touch, strong tannin, dry ending.", ko: "100% Cannonau, 사르데냐. 다크 체리, 자두, 블랙베리, 민트의 풍부하고 따뜻한 향. 단단한 탄닌이 무게중심을 묵직하게 잡아줍니다." } }
        },
        D: { 
            main: { name: "Barbera", imgSrc: "", description: { en: "100% Barbera, Piemonte. A bright ruby red wine with aromas of ripe red fruit and subtle spice, offering a well-defined structure, balanced tannins and a smooth, lingering finish.", ko: "100% Barbera, 피에몬테. 투명한 루비 레드 컬러와 풍성한 붉은 과실, 섬세한 향신료 향과 어우러져 균형 잡힌 탄닌, 부드러운 질감, 길게 이어지는 여운이 매력적입니다." } },
            altLabel: { en: "Want more fruity than herbs?", ko: "허브향보단 과실향이 더 강한 걸 원하시나요?" }, 
            alt: { name: "PRIMITIVO", imgSrc: "", description: { en: "100% Primitivo, Puglia. A full-bodied yet smooth and well-balanced wine, showing intense aromas of ripe red fruit, a deep ruby-violet color, and a pleasant finish with subtle almond notes.", ko: "100% Primitivo, 뿔리아. 깊고 투명한 루비-바이올렛 컬러와 풍부한 붉은 과실 향이 돋보이며, 풀바디임에도 부드럽고 균형 잡힌 구조감에 고소한 아몬드 향과 긴 여운을 남깁니다." } }
        }
    },
    white: {
        A: {
            main: { name: "Grillo", imgSrc: "", description: { en: "100% Grillo, Sicilia. Well–ended and harmonious scents. On the palate decisive, fruity, with an appropriate acidic component.", ko: "100% Grillo, 시칠리아. 매끄럽고 조화로운 향기. 입안에서는 선명한 과실향과 함께 적절하고 기분 좋은 산미가 입맛을 돋워줍니다." } },
            altLabel: { en: "Want something more aromatic and smooth?", ko: "좀 더 향긋하고 부드러운 와인을 원하시나요?" },
            alt: { name: "Rosé de Valle", imgSrc: "", description: { en: "70% Picotendro, 30% Gros Vien, Neyret, Cornalin & Fumin, Valle d\\'Aosta. Aromas of fresh red berries and wild fruit; on the palate it is fresh and mineral with a delicate bitter finish.", ko: "신선한 붉은 베리와 야생 과일 향이 나며, 입안에서는 상쾌하고 미네랄감이 느껴지고 끝에는 은은한 쓴맛이 매력적으로 남습니다." } }
        },
        B: {
            main: { name: "Jato Lucido", imgSrc: "", description: { en: "100% Catarratto Lucido, Sicilia. An Elegant profile of ripe white fruit and zesty citrus, balanced by subtle minerality.", ko: "100% Catarratto Lucido, 시칠리아. 잘 익은 백색 과일과 상큼한 감귤 향, 은은한 미네랄과 아몬드 뉘앙스가 어우러진 우아한 풍미입니다." } },
            altLabel: { en: "Want something more mineral?", ko: "좀 더 미네랄리티가 풍부한 와인을 원하시나요?" },
            alt: { name: "Soave", imgSrc: "", description: { en: "100% Garganega, Veneto. Citrus and floreal notes, green fruits finishing with smooth acidity.", ko: "100% Garganega, 베네토. 시트러스와 꽃향기가 느껴지고, 부드러운 산미와 함께 풋과실의 신선함이 기분 좋게 마무리됩니다." } }
        },
        C: {
            main: { name: "Pecorino", imgSrc: "", description: { en: "100% Pecorino, Abruzzo. A well-structured wine with intense aromas of white flowers and citrus. Crisp acidity and a distinctive mineral, almost salty finish.", ko: "100% Pecorino, 아브루초. 흰 꽃과 시트러스의 강렬한 아로마가 특징인 탄탄한 화이트 와인입니다. 상쾌한 산미와 미네랄리티, 특유의 짭짤한 피니시가 훌륭합니다." } },
            altLabel: { en: "Want something slightly sweeter?", ko: "살짝 더 달콤한 와인을 원하시나요?" },
            alt: { name: "Villa Sparina", imgSrc: "", description: { en: "100% Cortese, Piemonte. Floreal notes with aromas of yellow fruits and tropical fruit. Long finish with soft acid and persinstent structure.", ko: "100% Cortese, 피에몬테. 꽃 향이 어우러진 과일향이 풍부하고, 산미와의 놀라운 밸런스와 함께 여운이 오래 남습니다." } }
        },
        D: {
            main: { name: "Grillo Chardonnay", imgSrc: "", description: { en: "50% Grillo, 50% Chardonnay, Sicilia. A vibrant and aromatic wine with ripe tropical fruit notes, hints of citrus and white flowers, a soft vanilla touch.", ko: "50% Grillo, 50% Chardonnay, 시칠리아. 잘 익은 열대과일과 시트러스, 흰 꽃의 뉘앙스에 부드러운 바닐라 터치가 조화롭고 깔끔한 피니시가 일품입니다." } },
            altLabel: { en: "Want something fresher and more mineral?", ko: "좀 더 상쾌하고 미네랄감이 느껴지는 와인은 어떠신가요?" },
            alt: { name: "Jato Lucido", imgSrc: "", description: { en: "100% Catarratto Lucido, Sicilia. An Elegant profile of ripe white fruit and zesty citrus, balanced by subtle minerality.", ko: "100% Catarratto Lucido, 시칠리아. 잘 익은 백색 과일과 상큼한 감귤 향, 은은한 미네랄과 아몬드 뉘앙스가 어우러진 우아한 풍미입니다." } }
        }
    },
    sparkling: {
        A: {
            main: { name: "Prosecco Villa Sandi Rosé", imgSrc: "", description: { en: "90% Glera, 10% Pinot Nero, Veneto. Fresh note of flowers and vanilla, elegant sparkle and finishing.", ko: "90% Glera, 10% Pinot Nero, 베네토. 꽃과 바닐라의 상큼한 노트, 우아한 기포와 부드러운 마무리가 돋보이는 사랑스러운 스파클링입니다." } },
            altLabel: { en: "Want more round finish?", ko: "좀 더 둥글고 부드러운 마무리를 원하시나요?" },
            alt: { name: "Menin Fasol Prosecco", imgSrc: "", description: { en: "100% Glera, Veneto. Elegant and aromatic sparkling wine with notes of white flowers, apple and pear, balanced by a delicate sweetness.", ko: "100% Glera, 베네토. 흰 꽃, 사과, 배의 향이 어우러진 우아한 스파클링으로 섬세한 단맛과 상쾌한 기포가 기분 좋게 다가옵니다." } }
        },
        B: {
            main: { name: "Villa Sandi Il Fresco Brut", imgSrc: "", description: { en: "100% Glera, Veneto. Strong fruity scent and elegant floral scent reminiscent of acacia along with aromas of ripe golden apple.", ko: "100% Glera, 베네토. 과실향이 강렬하며 잘 익은 금빛 사과, 복숭아 아로마와 함께 아카시아를 연상시키는 우아한 꽃향을 지녔습니다." } },
            altLabel: { en: "Want more fragrant and fresh?", ko: "좀 더 향기롭고 신선한 느낌을 원하시나요?" },
            alt: { name: "Santome DOC Treviso", imgSrc: "", description: { en: "100% Glera, Veneto. A fresh and light Prosecco with delicate aromas of apple and acacia flowers, fine bubbles and a well-balanced acidity.", ko: "100% Glera, 베네토. 사과와 아카시아 꽃의 은은한 향, 섬세한 기포와 균형 잡힌 산미가 어우러진 완벽한 밸런스의 스파클링입니다." } }
        },
        C: {
            main: { name: "Santome DOC Treviso", imgSrc: "", description: { en: "100% Glera, Veneto. A fresh and light Prosecco with delicate aromas of apple and acacia flowers, fine bubbles and a well-balanced acidity.", ko: "100% Glera, 베네토. 사과와 아카시아 꽃의 은은한 향, 섬세한 기포와 균형 잡힌 산미가 어우러진 완벽한 밸런스의 스파클링입니다." } },
            altLabel: { en: "Want more funky and aromatic?", ko: "좀 더 개성 있고 방향성이 짙은 와인은 어떠신가요?" },
            alt: { name: "Lambrusco", imgSrc: "", description: { en: "100% Lambrusco, Emilia-Romagna. A smooth and approachable red sparkling wine with gentle bubbles, a subtle sweetness and a fresh, balanced finish.", ko: "100% Lambrusco, 에밀리아 로마냐. 부드러운 기포와 은은한 단맛, 산뜻하고 균형 잡힌 피니시의 접근성 좋은 레드 스파클링 와인입니다." } }
        },
        D: {
            main: { name: "Menin Fasol DOCG", imgSrc: "", description: { en: "100% Glera, Veneto. Elegant and aromatic sparkling wine with notes of white flowers, apple and pear, balanced by a delicate sweetness.", ko: "100% Glera, 베네토. 흰 꽃, 사과, 배의 향이 어우러진 우아한 스파클링으로 섬세한 단맛과 상쾌한 기포가 기분 좋게 다가옵니다." } },
            altLabel: { en: "Want more dry?", ko: "좀 더 드라이하고 깔끔한 맛을 원하시나요?" },
            alt: { name: "Sandi Il Fresco Brut", imgSrc: "", description: { en: "100% Glera, Veneto. Strong fruity scent and elegant floral scent reminiscent of acacia along with aromas of ripe golden apple.", ko: "100% Glera, 베네토. 과실향이 강렬하며 잘 익은 금빛 사과, 복숭아 아로마와 함께 아카시아를 연상시키는 우아한 드라이 스파클링입니다." } }
        }
    },
    surprise: {
        A: {
            main: { name: "Grillo Chardonnay", imgSrc: "", description: { en: "50% Grillo, 50% Chardonnay, Sicilia. A vibrant and aromatic wine with ripe tropical fruit notes, hints of citrus and white flowers, a soft vanilla touch.", ko: "50% Grillo, 50% Chardonnay, 시칠리아. 잘 익은 열대과일과 시트러스, 흰 꽃의 뉘앙스에 부드러운 바닐라 터치가 조화롭고 깔끔한 피니시가 일품입니다." } },
            altLabel: { en: "Want less aromatic?", ko: "좀 더 은은하고 심플한 향을 선호하시나요?" },
            alt: { name: "Pecorino", imgSrc: "", description: { en: "100% Pecorino, Abruzzo. A well-structured wine with intense aromas of white flowers and citrus. Crisp acidity and a distinctive mineral, almost salty finish.", ko: "100% Pecorino, 아브루초. 흰 꽃과 시트러스의 강렬한 아로마가 특징인 탄탄한 화이트 와인입니다. 상쾌한 산미와 미네랄리티, 특유의 짭짤한 피니시가 훌륭합니다." } }
        },
        B: {
            main: { name: "Barbera", imgSrc: "", description: { en: "100% Barbera, Piemonte. A bright ruby red wine with aromas of ripe red fruit and subtle spice, offering a well-defined structure, balanced tannins and a smooth, lingering finish.", ko: "100% Barbera, 피에몬테. 투명한 루비 레드 컬러와 풍성한 붉은 과실, 섬세한 향신료 향과 어우러져 균형 잡힌 탄닌, 부드러운 질감, 길게 이어지는 여운이 매력적입니다." } },
            altLabel: { en: "Want more fruity and bold?", ko: "좀 더 과실미가 뿜어지고 바디감이 무거운 와인은 어떠세요?" },
            alt: { name: "Cannonau", imgSrc: "", description: { en: "100% Cannonau, Sardegna. Ripe, rich and warm notes of dark cherry, plum, blackberry and mint. Delicate aniseed touch, strong tannin, dry ending.", ko: "100% Cannonau, 사르데냐. 다크 체리, 자두, 블랙베리, 민트의 풍부하고 따뜻한 향. 단단한 탄닌이 무게중심을 묵직하게 잡아줍니다." } }
        },
        C: {
            main: { name: "Rosé de Valle", imgSrc: "", description: { en: "70% Picotendro, 30% Gros Vien, Neyret, Cornalin & Fumin, Valle d\\'Aosta. Aromas of fresh red berries and wild fruit; on the palate it is fresh and mineral with a delicate bitter finish.", ko: "신선한 붉은 베리와 야생 과일 향이 나며, 입안에서는 상쾌하고 미네랄감이 느껴지고 끝에는 은은한 쓴맛이 매력적으로 남습니다." } },
            altLabel: { en: "Want more mineral and fresh?", ko: "좀 더 상쾌한 미네랄이 필요하신가요?" },
            alt: { name: "Jato Lucido", imgSrc: "", description: { en: "100% Catarratto Lucido, Sicilia. An Elegant profile of ripe white fruit and zesty citrus, balanced by subtle minerality.", ko: "100% Catarratto Lucido, 시칠리아. 잘 익은 백색 과일과 상큼한 감귤 향, 은은한 미네랄과 아몬드 뉘앙스가 어우러진 우아한 풍미입니다." } }
        },
        D: {
            main: { name: "Santome Prosecco Treviso DOC", imgSrc: "", description: { en: "100% Glera, Veneto. A perfect celebratory sparkling with delicate aromas of apple and acacia flowers, fine bubbles and a well-balanced acidity.", ko: "100% Glera, 베네토. 사과와 아카시아 꽃의 은은한 향, 섬세한 기포와 균형 잡힌 산미가 어우러져 언제나 파티와 축하에 완벽한 스파클링입니다." } },
            altLabel: { en: "Want to try something different?", ko: "조금은 색다르고 유니크한 와인에 도전해볼까요?" },
            alt: { name: "Lambrusco", imgSrc: "", description: { en: "100% Lambrusco, Emilia-Romagna. A unique and exciting choice with gentle bubbles, a subtle sweetness and a fresh, balanced finish.", ko: "100% Lambrusco, 에밀리아 로마냐. 훌륭한 산미와 은은한 단맛의 조화, 신선한 기포로 낯설지만 아주 흥미롭고 유니크한 레드 스파클링입니다." } }
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

    // Simple priority logic (A -> B -> C -> D)
    let majority = 'A';
    let max = 0;
    for (const [key, val] of Object.entries(counts)) {
        if (val > max) {
            max = val;
            majority = key;
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

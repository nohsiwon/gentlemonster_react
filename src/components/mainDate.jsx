const mains = [
    {
        id: 'sun01_sun',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/sun_01.png',
        title: '로셀',
        price: '269,000원',
        colors: '4',
        link: ''
    },
    {
        id: 'sun02',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/sun_02.png',
        title: '탐부',
        price: '320,000원',
        colors: '4',
        link: ''
    },
    {
        id: 'sun03',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/sun_03.png',
        title: '랭',
        price: '249,000원',
        colors: '3',
        link: ''
    },
    {
        id: 'sun04',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/sun_04.png',
        title: '론디',
        price: '289,000원',
        colors: '5',
        link: '/detail'
    },
    {
        id: 'sun05',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/sun_05.png',
        title: '밀',
        price: '249,000원',
        colors: '4',
        link: ''
    },
    {
        id: 'sun06',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/sun_06.png',
        title: '제프 01',
        price: '260,000원',
        colors: '4',
        link: ''
    },
    {
        id: 'sun07',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/sun_07.png',
        title: '릴리트',
        price: '259,000원',
        colors: '2',
        link: ''
    },
    {
        id: 'sun08',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/sun_08.png',
        title: '프리다',
        price: '269,000원',
        colors: '5',
        link: ''
    },
    {
        id: 'glass01',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/glass_01.png',
        title: '알리오 C1',
        price: '249,000원',
        colors: '3'
    },
    {
        id: 'glass02',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/glass_02.png',
        title: 'S.O.A M01',
        price: '360,000원',
        colors: '2'
    },
    {
        id: 'glass03',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/glass_03.png',
        title: '다디오 01',
        price: '249,000원',
        colors: '3'
    },
    {
        id: 'glass04',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/glass_04.png',
        title: '에디 01',
        price: '289,000원',
        colors: '3'
    },
    {
        id: 'glass05',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/glass_05.png',
        title: '제니 - 온리 031',
        price: '269,000원',
        colors: '2'
    },
    {
        id: 'glass06',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/glass_06.png',
        title: '제프 01',
        price: '260,000원',
        colors: '4'
    },
    {
        id: 'glass07',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/glass_07.png',
        title: '알리오 X GD1',
        price: '310,000원',
        colors: '2'
    },
    {
        id: 'glass08',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/glass_08.png',
        title: '데이 01 OPT',
        price: '일시 품절',
        colors: '2'
    },
    {
        id: 'collabo01',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/collabo_01.png',
        title: '몽클레르 - 스와이프 G1',
        price: '일시 품절',
        colors: '2'
    },
    {
        id: 'collabo02',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/collabo_02.png',
        title: '몽클레르 - 스와이프 G5',
        price: '품절',
        colors: '3'
    },
    {
        id: 'collabo03',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/collabo_03.png',
        title: 'HBA - 안타고니스트 W1',
        price: '320,000원',
        colors: '2'
    },
    {
        id: 'collabo04',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/collabo_04.png',
        title: 'HBA - 안타고니스트 P2',
        price: '320,000원',
        colors: '2'
    },
    {
        id: 'collabo05',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/collabo_05.png',
        title: '제니 - 26 031',
        price: '품절',
        colors: '2'
    },
    {
        id: 'collabo06',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/collabo_06.png',
        title: '제니 - 데이 온리 02',
        price: '품절',
        colors: '2'
    },
    {
        id: 'collabo07',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/collabo_07.png',
        title: '룩.YK KC1',
        price: '품절',
        colors: '4'
    },
    {
        id: 'collabo08',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/collabo_08.png',
        title: '초이스.YK C1',
        price: '품절',
        colors: '2'
    },
    {
        id: 'style01',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/style_01.png',
        title: '탐부',
        price: '320,000원',
        colors: '4'
    },
    {
        id: 'style02',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/style_02.png',
        title: '로티 01',
        price: '280,000원',
        colors: '3'
    },
    {
        id: 'style03',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/style_03.png',
        title: '',
        price: '원',
        colors: ''
    },
    {
        id: 'style04',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/style_04.png',
        title: '모네타 M01',
        price: '290,000원',
        colors: '2'
    },
    {
        id: 'style05',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/style_05.png',
        title: '시드 02',
        price: '280,000원',
        colors: '2'
    },
    {
        id: 'style06',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/style_06.png',
        title: '로지 YC5',
        price: '269,000원',
        colors: '2'
    },
    {
        id: 'style07',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/style_07.png',
        title: '리베 01',
        price: '259,000원',
        colors: '4'
    },
    {
        id: 'style08',
        img: 'https://nohsiwon.github.io/gentlemonster_react/img/style_08.png',
        title: '두루 01(VYG)',
        price: '340,000원',
        colors: '2'
    }

]


export default mains 
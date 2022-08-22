import React from "react"

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footerInner'>
                <div className='img'><img src='/img/logo_white.png' alt='' /></div>
                <div className='logo'>GENTLE MONSTER</div>
                <div className='menu'>
                    <div>
                        <div className='title'>채용안내</div>
                        <div>채용 소개</div>
                        <div>채용 지원하기</div>
                        <div>문의하기</div>
                    </div>
                    <div>
                        <div className='title'>법적고지</div>
                        <div>이용약관</div>
                        <div>개인정보처리방침</div>
                        <div>쿠키 정책</div>
                        <div>키프트카드 이용약관</div>
                    </div>
                    <div>
                        <div className='title'>고객서비스</div>
                        <div>문의</div>
                        <div>배송</div>
                        <div>교환 및 환불</div>
                        <div>주문조회</div>
                        <div>수리서비스 가이드</div>
                        <div>제품 등록 가이드</div>
                        <div>제품 등록</div>
                    </div>
                    <div>
                        <div className='title'>소셜미디어</div>
                        <div>페이스북</div>
                        <div>인스타그램</div>
                        <div>유튜브</div>
                        <div>트위터</div>
                        <div>카카오톡</div>
                        <div>핀터레스트</div>
                        <div>위쳇</div>
                        <div>웨이브</div>
                    </div>
                </div>
                <div className='info'>
                    <div className='infoList'>
                        <div>주) 아이아이컴바인드</div>
                        <div>대표자명: 김한국</div>
                        <div>사업자번호: 119-86-38589</div>
                        <div>통신판매신고번호: 제 2014-서울마포-1050호 (사업자 정보 확인)</div>
                        <div>이메일 문의: cs@gentlemonster.com</div>
                    </div>
                    <div className='infoList'>
                        <div>개인정보보호책임자: 정태호</div>
                        <div>주소: 서울특별시 마포구 어울마당로5길 41</div>
                        <div>대표번호: 1600-2126</div>
                    </div>
                    <div className='infoList'>
                        <div>고객님의 안전한 현금자산 거래를 위하여 하나은행과 채무지급보증계약을 체결하여 보장해드리고 있습니다. 서비스 가입사실 확인</div>
                    </div>
                </div>
                <div className='copyright'>© 2022 GENTLE MONSTER</div>
            </div>
        </footer>
    )
}
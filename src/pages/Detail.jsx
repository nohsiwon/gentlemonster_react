import React from "react";
import '../css/Detail.css'


function first() {
    const first = document.querySelector('.first+.accodianDetail')
    const arrow = document.querySelector('.first .arrow')

    first.classList.toggle('accodianHeight')
    arrow.classList.toggle('arrowReverse')
}
function second() {
    const second = document.querySelector('.second+.accodianDetail')
    const arrow = document.querySelector('.second .arrow')

    second.classList.toggle('accodianHeight')
    arrow.classList.toggle('arrowReverse')
}
function third() {
    const third = document.querySelector('.third+.accodianDetail')
    const arrow = document.querySelector('.third .arrow')

    third.classList.toggle('accodianHeight')
    arrow.classList.toggle('arrowReverse')
}
function forth() {
    const forth = document.querySelector('.forth+.accodianDetail')
    const arrow = document.querySelector('.forth .arrow')

    forth.classList.toggle('accodianHeight')
    arrow.classList.toggle('arrowReverse')
}
function fifth() {
    const fifth = document.querySelector('.fifth+.accodianDetail')
    const arrow = document.querySelector('.fifth .arrow')

    fifth.classList.toggle('accodianHeight')
    arrow.classList.toggle('arrowReverse')
}



export default function Detail1() {
    return (
        <div className="wrap">
            <section className="detailProductBox">
                <div className="productImgBox">
                    <div>
                        <div><img src="https://nohsiwon.github.io/gentlemonster_react/img/londi_black_01.png" alt="" /></div>
                        <div><img src="https://nohsiwon.github.io/gentlemonster_react/img/londi_black_02.png" alt="" /></div>
                    </div>
                    <div>
                        <div><img src="https://nohsiwon.github.io/gentlemonster_react/img/londi_black_03.png" alt="" /></div>
                        <div><img src="https://nohsiwon.github.io/gentlemonster_react/img/londi_black_04.jpg" alt="" /></div>
                    </div>
                    <div>
                        <div><img src="https://nohsiwon.github.io/gentlemonster_react/img/londi_bag.png" alt="" /></div>
                    </div>
                </div>
                <div className="productDetailBox">
                    <div className="titleBox">
                        <div className="title">론디01</div>
                        <div className="price">259,000원</div>
                    </div>
                    <div className="productColor">
                        <div><img src="https://nohsiwon.github.io/gentlemonster_react/img/londi_black.jpg" alt="" /></div>
                        <div><img src="https://nohsiwon.github.io/gentlemonster_react/img/londi_orange.png" alt="" /></div>
                        <div><img src="https://nohsiwon.github.io/gentlemonster_react/img/londi_pink.png" alt="" /></div>
                        <div><img src="https://nohsiwon.github.io/gentlemonster_react/img/londi_brown.png" alt="" /></div>
                    </div>
                    <div className="detail">
                        론디 01은 사각 형태의 블랙 플랫바 선글라스입니다.
                        라운딩 처리된 프런트가 부드러운 분위기를 연출합니다.
                        슬림한 프런트와 템플의 실버 메탈 장식 디테일이 매력적인
                        제품입니다. 99.9% UV 차단이 되는 블랙 자이스 렌즈를
                        사용하였습니다.
                    </div>
                    <div className="btnBox">
                        <div>구매하기</div>
                        <div>쇼핑백에 추가</div>
                        <div>관심상품 추가</div>
                    </div>
                    <div className="service">무료 배송 및 무료 반품 서비스, <span className="under">무이자 할부 서비스</span></div>
                    <div className="accodianBox">
                        <div className="accodian">
                            <div className='accodianTitle first' onClick={first}>
                                <div>제품 세부 정보</div>
                                <div className="arrow">▽</div>
                            </div>
                            <div className="accodianDetail">
                                <div>· 스퀘어 아세테이트 프레임</div>
                                <div>· 템플 메탈 장식 디테일</div>
                                <div>· 프레임 정면: 151.1mm, 템플 길이: 145.6mm<br /><span className="opa">· </span>렌즈 가로: 65.1mm,
                                    렌즈 높이: 46.9mm<br /><span className="opa">· </span>브릿지: 18mm
                                </div>
                                <div>· 제조국: 중국</div>
                                <div>· 제조자 및 수입자: 아이아이컴바인드</div>
                                <div className="under">사이즈 자세히 보기</div>
                            </div>
                        </div>

                        <div className="accodian">
                            <div className="accodianTitle second" onClick={second}>
                                <div>무료 선물 포장 서비스</div>
                                <div className="arrow">▽</div>
                            </div>
                            <div className="accodianDetail">
                                <div>· 젠틀몬스터 공식 온라인 스토어에서 구매하는 모든 분들께 선물 포장 서비스를 제공해 드립니다.</div>
                                <div className='gift'><img src="https://nohsiwon.github.io/gentlemonster_react/img/gift.png" alt="" /></div>
                            </div>
                        </div>

                        <div className="accodian">
                            <div className="accodianTitle third" onClick={third}>
                                <div>기본 피팅 서비스</div>
                                <div className="arrow">▽</div>
                            </div>
                            <div className="accodianDetail">
                                <div>· 온라인에서 주문하시는 젠틀몬스터의 모든 제품은 기본 피팅 후 발송됩니다.</div>
                                <div className="under">자세히보기</div>
                            </div>
                        </div>

                        <div className="accodian">
                            <div className="accodianTitle forth" onClick={forth}>
                                <div>배송 & 반품</div>
                                <div className="arrow">▽</div>
                            </div>
                            <div className="accodianDetail">
                                <div>
                                    <div>· 무료 배송</div>
                                    <div>오늘 주문한 상품을 영업일 기준 1-3일내에 받아보세요.</div>
                                </div>
                                <div>
                                    <div>· 무료 반품</div>
                                    <div>
                                        무료 반품 서비스를 이용하세요. 구매하신 제품은 수령하신 날로부터 7일 이내에 접수해 주셔야 합니다. 제품은 사용되지 않은 상태를
                                        유지해야
                                        하며,
                                        모든 구성품을 포함하고 있어야 합니다.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accodian">
                            <div className="accodianTitle fifth" onClick={fifth}>
                                <div>도움이 필요하신가요?</div>
                                <div className="arrow">▽</div>
                            </div>
                            <div className="accodianDetail">
                                <div>전문 어드바이저가 도와드리겠습니다.</div>
                                <div>· 라이브챗: <span className="under">문의하기</span></div>
                                <div>· 전화 문의: <span className="under">전화하기</span>1600-2126</div>
                                <div>· 이메일 문의: <span className="under">문의하기</span></div>
                                <div>*라이브챗, 고객센터 운영 시간</div>
                                <div>월요일-금요일, 09:30-17:00(공휴일 제외)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="styleBox">
                <div className="titleBox">
                    <div className="styleTitle">더 다양한 스타일을 확인해보세요</div>
                    <div className="styleDetail">인스타그램에 @gentlemonster을 태그하여 당신의 스타일을 공유해보세요.</div>
                </div>
                <div className="snsBox">
                    <div>
                        <div className="img"><img src="https://nohsiwon.github.io/gentlemonster_react/img/sns.png" alt="" /></div>
                        <div>@fr0stedtips</div>
                    </div>
                    <div>
                        <div className="img"><img src="https://nohsiwon.github.io/gentlemonster_react/img/sns02.png" alt="" /></div>
                        <div>@harrytibble</div>
                    </div>
                    <div>
                        <div className="img"><img src="https://nohsiwon.github.io/gentlemonster_react/img/sns03.png" alt="" /></div>
                        <div>@bunnysmeesh</div>
                    </div>
                </div>
            </section>

            <section className="recommend">
                <div className="titleBox">론디 01과 비슷한 추천제품을 만나보세요</div>
                <div className="recoPro">
                    <div className="product">
                        <div className="img"><img src="https://nohsiwon.github.io/gentlemonster_react/img/londi_recommend01.png" alt="" /></div>
                        <div className="text">
                            <div className="title">모마티 01</div>
                            <div className="price">249,000원</div>
                            <div className="color">+5 Colors</div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="img"><img src="https://nohsiwon.github.io/gentlemonster_react/img/londi_recommend02.png" alt="" /></div>
                        <div className="text">
                            <div className="title">릴리트 01</div>
                            <div className="price">259,000원</div>
                            <div className="color">+5 Colors</div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="img"><img src="https://nohsiwon.github.io/gentlemonster_react/img/londi_recommend03.png" alt="" /></div>
                        <div className="text">
                            <div className="title">밀 01</div>
                            <div className="price">249,000원</div>
                            <div className="color">+5 Colors</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


import React from "react";
import '../css/Index.css'
import mains from '../components/mainDate'
import { Link } from "react-router-dom";

export default function Index() {
    return (
        <div>
            <div className="visualMain">

                <video autoPlay loop muted>
                    <source src="https://nohsiwon.github.io/gentlemonster_react/img/mainvisual.mp4" type="video/mp4" />
                </video>

                <div className="text">GENTLE's STYLE</div>
            </div>

            {/* visualMain */}

            <div className="sunBox box">
                <Link to='/sub'>
                    <div className="imgBox">
                        <div className="img"><img src="https://nohsiwon.github.io/gentlemonster_react/img/sun_main.png" alt="" /></div>
                        <div className="back">
                            <div className="title">SUNGLASSES</div>
                            <div className="more">MORE →</div>
                        </div>
                    </div>
                </Link>
                <div className="productBox">
                    {
                        mains.map((sun) => {
                            if (sun.id.includes('sun')) {
                                return (
                                    <Link to={sun.link} >
                                        <div className="product">
                                            <div className="img"><img src={sun.img} alt="" /></div>
                                            <div className="text">
                                                <div className="title">{sun.title}</div>
                                                <div className="price">{sun.price}</div>
                                                <div className="colors">+{sun.colors} Colors</div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                        })
                    }
                </div>
            </div>

            {/* sunBox */}
            <div className="banner banner1">
                <div className="bannerBack">
                    <div className="logo"><img src="/img/logo_white.png" alt="" /></div>
                    <div className="logoTitle">GENTLE MONSTER</div>
                    <div className="text">마주하는 순간 묘한 감정을 불러일으키는 젠틀몬스터 나노 컬렉션의 독특한 제품들 함께,<br />초현실적인 생명체들과 구조물이 부유하는 환상의 세계로 당신을 초대합니다.</div>
                </div>
            </div>
            {/* fixedBox1 */}

            <div className="glassBox box">
                <div className="productBox">
                    {
                        mains.map((glass) => {
                            if (glass.id.includes('glass')) {
                                return (
                                    <div className="product">
                                        <div className="img"><img src={glass.img} alt="" /></div>
                                        <div className="text">
                                            <div className="title">{glass.title}</div>
                                            <div className="price">{glass.price}</div>
                                            <div className="colors">+{glass.colors} Colors</div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div className="imgBox">
                    <div className="img"><img src="https://nohsiwon.github.io/gentlemonster_react/img/glass_main.png" alt="" /></div>
                    <div className="back">
                        <div className="title">GLASSES</div>
                        <div className="more">MORE →</div>
                    </div>
                </div>
            </div>

            {/* glassBox */}
            <div className="banner banner2">
                <div className="bannerBack">
                    <div className="logo"><img src="/img/logo_white.png" alt="" /></div>
                    <div className="logoTitle">GENTLE MONSTER</div>
                    <div className="text">현실과 디지털 세계 사이의 모호함 속에서 '스와이프' 모션을 통해 느껴지는 감정들을<br />몽클레르와 젠틀몬스터의 감각으로 풀어낸 설치물과 컬렉션 제품에 담았습니다.</div>
                </div>
            </div>
            {/* fixedBox2 */}

            <div className="collaboBox box">
                <div className="imgBox">
                    <div className="img"><img src="https://nohsiwon.github.io/gentlemonster_react/img/collabo_main.png" alt="" /></div>
                    <div className="back">
                        <div className="title">COLLABO</div>
                        <div className="more">MORE →</div>
                    </div>
                </div>
                <div className="productBox">
                    {
                        mains.map((collabo) => {
                            if (collabo.id.includes('collabo')) {
                                return (
                                    <div className="product">
                                        <div className="img"><img src={collabo.img} alt="" /></div>
                                        <div className="text">
                                            <div className="title">{collabo.title}</div>
                                            <div className="price">{collabo.price}</div>
                                            <div className="colors">+{collabo.colors} Colors</div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>

            {/* collaboBox */}
            <div className="banner banner3">
                <div className="bannerBack">
                    <div className="logo"><img src="https://nohsiwon.github.io/gentlemonster_react/img/logo_white.png" alt="" /></div>
                    <div className="logoTitle">GENTLE MONSTER</div>
                    <div className="text">상하이에서는 더 큰 규모와 새로운 모습의 하우스를 만나볼 수 있을 예정이며,<br />소비자들에게 이전에 없던 젠틀몬스터만의 세계관을 또 한번 선보일 것입니다.</div>
                </div>
            </div>
            {/* fixedBox3 */}

            <div className="styleBox box">
                <div className="productBox">
                    {
                        mains.map((style) => {
                            if (style.id.includes('style')) {
                                return (
                                    <div className="product">
                                        <div className="img"><img src={style.img} alt="" /></div>
                                        <div className="text">
                                            <div className="title">{style.title}</div>
                                            <div className="price">{style.price}</div>
                                            <div className="colors">+{style.colors} Colors</div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div className="imgBox">
                    <div className="img"><img src="https://nohsiwon.github.io/gentlemonster_react/img/style_main.png" alt="" /></div>
                    <div className="back">
                        <div className="title">style</div>
                        <div className="more">MORE →</div>
                    </div>
                </div>
            </div>
        </div >
    )
}
import React from "react";
import { Link } from "react-router-dom";
import subs from "../components/subDate";
import '../css/Sub.css'

export default function Sub() {

    return (
        <div>
            <div className="visualMain">
                <div className="title">SUNGLASSES</div>
            </div>
            <div className="products">
                {
                    subs.map((sub) => {
                        return (
                            <Link to={sub.link}>
                                <div className="product">
                                    <div className="img"><img src={sub.img} alt="" /></div>
                                    <div className="text">
                                        <div className="title">{sub.title}</div>
                                        <div className="price">{sub.price}</div>
                                        <div className="colors">+{sub.colors} Colors</div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )

}
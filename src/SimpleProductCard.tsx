import React, { FC } from "react";
import { SimpleProductCardProps } from "./types";
import "./styles/index.less";
import { getClassName } from "./untils/getClassName";

export const SimpleProductCard: FC<SimpleProductCardProps> = ({

}) => {
    return (
        <div className={getClassName()}>
            <div className={getClassName("content")}>
                <div className={getClassName("labels")}>
                    <div className={getClassName("labels", "bg-warning-faded")}>Gorgeous</div>
                    <div className={getClassName("labels", "bg-contrast-faded")}>Handcrafted</div>
                </div>
                <div className={getClassName("side-actions")}>
                    <div className={getClassName("side-action", "hover-contrast")} title="Add to favourite">
                        <div className="bi bi-heart"></div>
                    </div>
                    <div className={getClassName("side-action", "hover-primary")} title="Add to compare">
                        <div className="bi bi-reception-3"></div>
                    </div>
                </div>
                <div className={getClassName("side-action", "image-wrapper")}>
                    <div className={getClassName("open-zoom")} title="Quick view">
                        <div className="bi bi-zoom-in"></div>
                    </div><img className={getClassName("image")} src="images/uploads/default/products/8.jpg" alt="Incredible Granite Sausages" />
                </div>
                <div className={getClassName("details")}>
                    <div className={getClassName("top")}>
                        <a className={getClassName("category")} href="#" title="Beauty">Beauty</a>
                        <div className={getClassName("by")}>by
                        <a className={getClassName("by-link")} href="#" title="Macejkovic - Luettgen">
                                Macejkovic - Luettgen</a>
                        </div>
                    </div><a className={getClassName("title")} href="product-card.html">Incredible Granite Sausages</a>
                    <div className="rate">
                        <div className="rate-stars">
                            <div className="bi bi-star-fill rate-star"></div>
                            <div className="bi bi-star rate-star"></div>
                            <div className="bi bi-star rate-star"></div>
                            <div className="bi bi-star rate-star"></div>
                            <div className="bi bi-star rate-star"></div>
                        </div>
                        <div className="rate-digit">(1.0)</div>
                    </div>
                    <div className={getClassName("price")}>$74.00</div>
                    <div className={getClassName("tags")}>
                        <div className={getClassName("tag")}>
                            <div className="bi bi-x-lg"></div>not available
                              </div>
                    </div>
                    <div className={getClassName("buttons")}>
                        <div className="btn btn-faded-success" title="Remove from cart">
                            <div className="bi bi-check2"> </div><span>In cart</span>
                        </div>
                        <div className="quantity" data-min="0" data-max="99">
                            <div className="quantity-button quantity-remove">
                                <div className="bi bi-dash"></div>
                            </div><input className="quantity-amount" value="1" />
                            <div className="quantity-button quantity-add">
                                <div className="bi bi-plus"></div>
                            </div>
                            <div className="quantity-arrow">
                                <div className="bi bi-chevron-up"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
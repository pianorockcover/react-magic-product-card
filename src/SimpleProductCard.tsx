import React, { FC } from "react";
import { SimpleProductCardProps } from "./types";
import "./styles/index.less";
import { getClassName } from "./untils/getClassName";
import { Label } from "./components/Label";
import { Tag } from "./components/Tag";
import { Rate } from "./components/Rate";
import { HeartIcon } from "./icons/HeartIcon";

export const SimpleProductCard: FC<SimpleProductCardProps> = ({

}) => {
    return (
        <div className={getClassName()}>
            <div className={getClassName("content")}>
                <div className={getClassName("labels")}>
                    <Label color="contrast">
                        Gorgeous
                    </Label>
                    <Label color="warning">
                        Handcrafted
                    </Label>
                </div>
                <div className={getClassName("side-actions")}>
                    <div className={getClassName("side-action", "hover-contrast")} title="Add to favourite">
                        <HeartIcon />
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
                    <Rate amount={3.3} />
                    <div className={getClassName("price")}>$74.00</div>
                    <div className={getClassName("tags")}>
                        <Tag>
                            not available
                        </Tag>
                        <Tag>
                            free shipping
                        </Tag>
                    </div>
                    <div className={getClassName("buttons")}>
                        <button className={getClassName("button-faded-success")} title="Remove from cart">
                            <span className="bi bi-check2" /> In cart
                        </button>
                        <div className={getClassName("quantity")}>
                            <div className={getClassName("quantity-button")}>
                                <span className="bi bi-dash" />
                            </div>
                            <input className={getClassName("quantity-amount")} value="1" />
                            <div className={getClassName("quantity-button")}>
                                <span className="bi bi-plus" />
                            </div>
                            <div className={getClassName("quantity-arrow")}>
                                <span className="bi bi-chevron-up" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
import React, { FC } from "react";
import { SimpleProductCardProps } from "./types";
import "./styles/index.less";
import { pclsx } from "./untils/pclsx";
import { Label } from "./components/Label/Label";
import { Tag } from "./components/Tag/Tag";
import { Rate } from "./components/Rate/Rate";
import { HeartIcon } from "./icons/HeartIcon";
import { CompareIcon } from "./icons/CompareIcon";
import { Button } from "./components/Button/Button";
import { Anchor } from "./components/Anchor/Anchor";

export const SimpleProductCard: FC<SimpleProductCardProps> = ({

}) => {
    return (
        <div className={pclsx()}>
            <div className={pclsx("content")}>
                <div className={pclsx("labels")}>
                    <Label color="contrast">
                        Gorgeous
                    </Label>
                    <Label color="warning">
                        Handcrafted
                    </Label>
                </div>
                <div className={pclsx("side-actions")}>
                    <div className={pclsx("side-action", "hover-contrast")} title="Add to favourite">
                        <HeartIcon />
                    </div>
                    <div className={pclsx("side-action", "hover-primary")} title="Add to compare">
                        <CompareIcon />
                    </div>
                </div>
                <div className={pclsx("side-action", "image-wrapper")}>
                    <div className={pclsx("open-zoom")} title="Quick view">
                        <div className="bi bi-zoom-in"></div>
                    </div><img className={pclsx("image")} src="images/uploads/default/products/8.jpg" alt="Incredible Granite Sausages" />
                </div>
                <div className={pclsx("details")}>
                    <div className={pclsx("top")}>
                        <Anchor
                            className={pclsx("category")}
                            to="#"
                            color="default"
                            title="Beauty"
                        >
                            Beauty
                        </Anchor>
                        <div className={pclsx("by")}>by
                        <Anchor
                                className={pclsx("by-link")}
                                to="#"
                                title="Macejkovic - Luettgen"
                            >
                                Macejkovic - Luettgen
                        </Anchor>
                        </div>
                    </div>
                    <Anchor
                        className={pclsx("title")}
                        to="#"
                        color="default"
                    >
                        Incredible Granite Sausages
                    </Anchor>
                    <Rate amount={3.3} />
                    <div className={pclsx("price")}>$74.00</div>
                    <div className={pclsx("tags")}>
                        <Tag>
                            not available
                        </Tag>
                        <Tag>
                            free shipping
                        </Tag>
                    </div>
                    <div className={pclsx("buttons")}>
                        <Button color="primary" icon="BagIcon">
                            Add to cart
                        </Button>
                        <div className={pclsx("quantity")}>
                            <div className={pclsx("quantity-button")}>
                                <span className="bi bi-dash" />
                            </div>
                            <input className={pclsx("quantity-amount")} value="1" />
                            <div className={pclsx("quantity-button")}>
                                <span className="bi bi-plus" />
                            </div>
                            <div className={pclsx("quantity-arrow")}>
                                <span className="bi bi-chevron-up" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
import React, { FC } from "react";
import { SimpleProductCardProps } from "../types";
import { pclsx } from "../../untils/pclsx";
import { Label } from "../Label/Label";
import { Tag } from "../Tag/Tag";
import { Rate } from "../Rate/Rate";
import { HeartIcon } from "../../icons/HeartIcon";
import { CompareIcon } from "../../icons/CompareIcon";
import { Button } from "../Button/Button";
import { Anchor } from "../Anchor/Anchor";
import { Gallery } from "../Gallery/Gallery";
import { IconButton } from "../IconButton/IconButton";
import { Quantity } from "../Quantity/Quantity";
import "./style/index.less";
import { ProductContext, useProductContext } from "./context/useProductContext";
import { SideActions } from "./SideAction";

export const SimpleProductCard: FC<SimpleProductCardProps> = ({
    inline,
    defaultBuyAmount,
    defaultInCompare,
    defaultInFavourite,
}) => {
    const { state, dispatch } = useProductContext({
        defaultBuyAmount,
        defaultInCompare,
        defaultInFavourite,
    });

    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            <div className={pclsx(classPrefix, {
                inline: inline,
            })}>
                <div className={pclsx("content")}>
                    <div className={pclsx("labels")}>
                        <Label color="contrast">
                            Gorgeous
                        </Label>
                        <Label color="warning">
                            Handcrafted
                        </Label>
                    </div>
                    <SideActions />
                    <Gallery
                        items={[
                            {
                                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sMVwAZSLkBwb3075MB4aufZPsWmiJzf9BA&usqp=CAU',
                                alt: '33333'
                            },
                            {
                                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJw1lCHRrYa2HChV7U9_N7Yq-ue95f1r9ZjhjZv7GXhwq1vksbDU4qvbcEf-CqHqQu1tM&usqp=CAU',
                                alt: '3333',
                            },
                            {
                                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sMVwAZSLkBwb3075MB4aufZPsWmiJzf9BA&usqp=CAU',
                                alt: '33333'
                            },
                            {
                                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJw1lCHRrYa2HChV7U9_N7Yq-ue95f1r9ZjhjZv7GXhwq1vksbDU4qvbcEf-CqHqQu1tM&usqp=CAU',
                                alt: '3333',
                            },
                        ]}
                    />
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
                        <div className={pclsx("price")}>
                            $74.00
                        <div className={pclsx("price-old-value")}>$108.00</div>
                        </div>
                        <div className={pclsx("tags")}>
                            <Tag>
                                not available
                        </Tag>
                            <Tag>
                                free shipping
                        </Tag>
                        </div>
                        <div className={pclsx("buttons")}>
                            <Button
                                color={state.buyAmount ? "success" : "primary"}
                                icon="BagIcon"
                            >
                                Add
                            </Button>
                            <Quantity defaultValue={1} max={100} />
                        </div>
                    </div>
                </div>
            </div>
        </ProductContext.Provider>
    );
};
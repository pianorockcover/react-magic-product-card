import React, { FC, useCallback, useContext } from "react";
import { pclsx } from "../../untils/pclsx";
import { IconButton } from "../IconButton/IconButton";
import { AddToCompareActionType, AddToFavouriteActionType, RemoveFromCompareActionType, RemoveFromFavouriteActionType } from "./context/actions";
import { ProductContext } from "./context/useProductContext";

export const SideActions: FC = () => {
    const { state, dispatch } = useContext(ProductContext);
    const toggleToFavourite = useCallback(() => (
        dispatch({
            type: state.inFavourite ? RemoveFromFavouriteActionType
                : AddToFavouriteActionType
        })
    ), [state]);

    const toggleToCompare = useCallback(() => (
        dispatch({
            type: state.inCompare ? RemoveFromCompareActionType
                : AddToCompareActionType
        })
    ), [state])

    return (
        <div className={pclsx("side-actions")} >
            <IconButton
                icon="HeartIcon"
                hoverColor="contrast"
                title="Add to favourite"
                className={pclsx("side-action", {
                    active: state.inFavourite,
                })}
                onClick={toggleToFavourite}
            />
            <IconButton
                icon="CompareIcon"
                hoverColor="primary"
                className={pclsx("side-action", {
                    active: state.inCompare,
                })}
                title="Add to compare"
                onClick={toggleToCompare}
            />
        </div >
    )
}
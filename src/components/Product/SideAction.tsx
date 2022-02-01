import React, { FC, useCallback, useContext } from "react";
import { pclsx } from "../../untils/pclsx";
import { IconButton } from "../IconButton/IconButton";
import { SimpleProductCardProps } from "../types";
import { ToggleToCompareActionType, ToggleToFavouriteActionType } from "./context/actions";
import { ProductContext } from "./context/useProductContext";

type SideActionsProps = Pick<
    SimpleProductCardProps,
    "onInCompareClick" | "onInFavouriteClick"
>;

export const SideActions: FC<SideActionsProps> = ({
    onInCompareClick,
    onInFavouriteClick
}) => {
    const { state, dispatch } = useContext(ProductContext);
    const toggleToFavourite = useCallback(() => {
        dispatch({
            type: ToggleToFavouriteActionType,
        });
        onInFavouriteClick?.(!state.inFavourite);
    }, [dispatch, state]);

    const toggleToCompare = useCallback(() => {
        dispatch({
            type: ToggleToCompareActionType,
        });
        onInCompareClick?.(!state.inCompare);
    }, [dispatch, state]);

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
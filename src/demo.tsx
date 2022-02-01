import React, { FC, useState } from "react";
import { render } from "react-dom";
import { SimpleProductCard } from "./components/Product/Product";

const App: FC = () => {
    const [value, setValue] = useState<number>(0);

    const onBuyClick = (added: boolean, amount: number) => {
        console.log(added, amount);
    }

    return (
        <>
            <SimpleProductCard
                defaultInCompare={true}
                defaultInFavourite={true}
                onBuyClick={onBuyClick}
                defaultBuyAmount={20}
                buyAmount={value}
            />
            <button onClick={() => setValue(5)}>set value</button>
        </>
    );
}

render(<App />, document.body);
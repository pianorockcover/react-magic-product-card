import React, { FC, useState } from "react";
import { render } from "react-dom";
import { SimpleProductCard } from "./components/Product/Product";

const App: FC = () => {
    const [value, setValue] = useState<number>(30);

    const onBuyClick = (added: boolean, amount: number) => {
        console.log(added, amount);
        setValue(amount);
    }

    const [inFavourite, setInFavourite] = useState<boolean>();
    const [inCompare, setInCompare] = useState<boolean>();

    return (
        <>
            <SimpleProductCard
                inCompare={inCompare}
                inFavourite={inFavourite}
                onBuyClick={onBuyClick}
                onInCompareClick={(v) => { console.log("in comp", v); setInCompare(v) }}
                onInFavouriteClick={(v) => { console.log("in fav", v); setInFavourite(v) }}
                buyAmount={value}
                name="3454350"
                category={{
                    href: "3",
                    title: "#425325"
                }}
                href="3"
                images={[
                    {
                        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sMVwAZSLkBwb3075MB4aufZPsWmiJzf9BA&usqp=CAU',
                        alt: '33333'
                    },
                    {
                        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJw1lCHRrYa2HChV7U9_N7Yq-ue95f1r9ZjhjZv7GXhwq1vksbDU4qvbcEf-CqHqQu1tM&usqp=CAU',
                        alt: '3333',
                    },
                ]}
                labels={[
                    { title: "@35235", color: "success" }
                ]}
                price="$34"
                oldPrice="235235"
                maxAmount={10}
                rate={2}
                tags={["3333"]}
                vendor={{
                    href: "3",
                    title: "#3333"
                }}
            />
            <button onClick={() => setValue(5)}>set value</button>
            <button onClick={() => setInFavourite(!inFavourite)}>fav</button>
            <button onClick={() => setInCompare(!inCompare)}>comp</button>
        </>
    );
}

render(<App />, document.body);
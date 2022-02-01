import React from "react";
import { render } from "react-dom";
import { SimpleProductCard } from "./components/Product/Product";

render(<SimpleProductCard
    defaultInCompare={true}
    defaultInFavourite={true}
/>, document.body);
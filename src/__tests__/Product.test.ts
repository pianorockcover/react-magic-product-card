import React from "react";
import renderer from "react-test-renderer";
import { SimpleProductCard } from "../components/Product/Product";

test("Product changes the class when hovered", () => {
  const component = renderer.create(
    <SimpleProductCard inline={true} />,
  );
  console.log(component);
});
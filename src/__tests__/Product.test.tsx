import React from "react";
import { create, act } from "react-test-renderer";
import { SimpleProductCard } from "..";
import { SimpleProductCardProps } from "../components/types";
import { classPrefix, pclsx } from "../untils/pclsx";

const commonProps: SimpleProductCardProps = {
  category: {
    title: "test",
    href: "#",
  },
  href: "#",
  images: [{
    src: "",
  }],
  name: "Test product",
  price: "100",
};

test("Mount test", () => {
  const component = create(
    <SimpleProductCard
      {...commonProps}
    />,
  );

  expect(component.root.findAll((e) => e.props.className === classPrefix).length).toBe(1);
});

test("Add to card test", () => {
  let amount;
  const component = create(
      <SimpleProductCard
        {...commonProps}
        onBuyClick={(add, staff) => {
          if (add) {
            amount = staff;
          }
        }}
      />,
    );

  component.root.findAll((e) => e.props.className?.includes("buy"))[0].props.onClick();

  expect(amount).toBe(1);
});

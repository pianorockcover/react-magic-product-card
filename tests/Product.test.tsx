import React from "react";
import { create, act } from "react-test-renderer";
import { MagicProductCard } from "../src";
import { MagicProductCardProps } from "../src/components/types";
import { CLASS_PREFIX } from "../src/utils/pclsx";

const commonProps: MagicProductCardProps = {
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
  buyLabel: "Buy",
  addedLabel: "Add"
};

test("Mount test", () => {
  const component = create(
    <MagicProductCard
      {...commonProps}
    />,
  );

  expect(component.root.findAll((e) => e.props.className === CLASS_PREFIX).length).toBe(1);
});

test("Add to card test", () => {
  let amount;
  const component = create(
      <MagicProductCard
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

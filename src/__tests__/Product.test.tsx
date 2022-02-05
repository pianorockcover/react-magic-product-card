import React from "react";
import { create, act } from "react-test-renderer";
import { SimpleProductCard } from "..";
import { SimpleProductCardProps } from "../components/types";
import { pclsx } from "../untils/pclsx";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

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

let container: HTMLDivElement | null = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  if (container) {
    document.body.removeChild(container);
    container = null;
  }
});

test("Mount test", () => {
  const component = create(
    <SimpleProductCard
      {...commonProps}
    />, container);
  });

  const cardWrapper = container?.querySelector(`.${pclsx()}`);

  expect(cardWrapper).toBeDefined();
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

  act(() => {
    cardWrapper?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(amount).toBe(1);
});

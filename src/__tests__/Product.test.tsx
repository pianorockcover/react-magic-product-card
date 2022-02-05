import React from "react";
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
  jest.mock("../components/Product/style.less", () => jest.fn());

  act(() => {
    ReactDOM.render(<SimpleProductCard
      {...commonProps}
    />, container);
  });

  const cardWrapper = container?.querySelector(`.${pclsx()}`);

  expect(cardWrapper).toBeDefined();
});

test("Add to card test", async () => {
  let amount = 0;

  act(() => {
    ReactDOM.render(<SimpleProductCard
      {...commonProps}
      onBuyClick={(add, staff) => {
        if (add) {
          amount = staff;
        }
      }}
    />, container);
  });

  const cardWrapper = container?.querySelector(`.${pclsx("buy")}`);

  act(() => {
    cardWrapper?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(amount).toBe(1);
});

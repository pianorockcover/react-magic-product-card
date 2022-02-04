import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SimpleProductCard } from "../components/Product/Product";

export default {
  title: "Example/SimpleProductCard",
  component: SimpleProductCard,
  args: {
    name: "The Most Amazing Backpack Ever",
    category: {
      href: "#",
      title: "backpacks",
    },
    href: "#",
    images: [
      {
        src: "1.jpg",
        alt: "Backpack 1",
      },
      {
        src: "2.jpg",
        alt: "Backpack 2",
      },
    ],
    labels: [
      { title: "Sale", color: "contrast" },
      { title: "New", color: "success" },
    ],
    price: "$34",
    oldPrice: "$65",
    maxAmount: 10,
    rate: 4.5,
    tags: ["Free delivery"],
    vendor: {
      href: "#",
      title: "Bag Inc",
    },
  },
} as ComponentMeta<typeof SimpleProductCard>;

const Template: ComponentStory<typeof SimpleProductCard> = (args) => (
  <SimpleProductCard
    {...args}
  />
);

export const Main = Template.bind({});

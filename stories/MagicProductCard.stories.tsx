import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MagicProductCard } from "../src/components/Product/Product";
import "./styles.less"

export default {
  title: "Example/MagicProductCard",
  component: MagicProductCard,
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
    buyLabel: "Buy",
    addedLabel: "Added",
  },
} as ComponentMeta<typeof MagicProductCard>;

const theme = `
  :root {
    --rmpc-default: 68, 68, 68;
    --rmpc-primary: 11, 139, 241;
    --rmpc-contrast: 233, 30, 99;
    --rmpc-warning: 246, 147, 5;
    --rmpc-success: 46, 204, 113;
  }
`;

const Template: ComponentStory<typeof MagicProductCard> = (args) => (
  <>
    <style>
      {theme}
    </style>
    <MagicProductCard
      {...args}
    />
  </>
);

export const Default = Template.bind({});

export const Inline = Template.bind({});

Inline.args = {
  inline: true
}

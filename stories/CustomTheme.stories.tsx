import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MagicProductCard } from "../src/components/Product/Product";
import "./styles.less"

export default {
  title: "Example/CustomTheme",
  component: MagicProductCard,
  args: {
    name: "The Most Amazing Pizza Ever",
    category: {
      href: "#",
      title: "Pizzas",
    },
    href: "#",
    images: [
      {
        src: "3.avif",
        alt: "Pizza 1",
      },
      {
        src: "4.jpeg",
        alt: "Pizza 2",
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
    --rmpc-primary: 255, 89, 37;
    --rmpc-contrast: 203, 29, 7;
    --rmpc-warning: 246, 147, 5;
    --rmpc-success: 137, 188, 43;
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

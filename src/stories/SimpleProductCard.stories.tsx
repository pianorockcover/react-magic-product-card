import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SimpleProductCard } from "../components/Product/Product";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/SimpleProductCard",
  component: SimpleProductCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    name: "3454350",
    category: {
      href: "3",
      title: "#425325",
    },
    href: "3",
    images: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sMVwAZSLkBwb3075MB4aufZPsWmiJzf9BA&usqp=CAU",
        alt: "33333",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJw1lCHRrYa2HChV7U9_N7Yq-ue95f1r9ZjhjZv7GXhwq1vksbDU4qvbcEf-CqHqQu1tM&usqp=CAU",
        alt: "3333",
      },
    ],
    labels: [
      { title: "@35235", color: "success" },
    ],
    price: "$34",
    oldPrice: "235235",
    maxAmount: 10,
    rate: 2,
    tags: ["3333"],
    vendor: {
      href: "3",
      title: "#3333",
    },
  },
} as ComponentMeta<typeof SimpleProductCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SimpleProductCard> = (args) => (
  <SimpleProductCard
    {...args}
  />
);

export const Inline = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Inline.args = {
  inline: true,
};

export const Portrait = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Inline.args = {
  inline: false,
};

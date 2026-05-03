import type { Hub } from "./types";

export const shopHub: Hub = {
  slug: "shop",
  title: "Shop.",
  titleAccent: "Order sensors online.",
  eyebrow: "Shop",
  lead: "Pick the sensors you need, add them to your cart and we ship from our warehouse in Denmark.",
  leaves: [
    {
      slug: "products",
      eyebrow: "Shop",
      title: "All products.",
      titleAccent: "The full catalogue.",
      lead: "Browse every product we sell, from single sensors to full starter kits and gateways.",
    },
    {
      slug: "cart",
      eyebrow: "Shop",
      title: "Your cart.",
      titleAccent: "Review before you order.",
      lead: "A summary of the items you have selected, with quantities and estimated shipping.",
    },
    {
      slug: "checkout",
      eyebrow: "Shop",
      title: "Checkout.",
      titleAccent: "A few details and you're done.",
      lead: "Shipping address, invoice details and a confirmation of the order.",
    },
    {
      slug: "thank-you",
      eyebrow: "Shop",
      title: "Thank you.",
      titleAccent: "Your order is on its way.",
      lead: "We have received your order and will send a confirmation to your inbox shortly.",
    },
  ],
};

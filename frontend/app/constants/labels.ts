const APP_TITLE = "rex-store";

const NAVIGATION_LABELS = [
  { title: "home", url: "/", require_auth: false },
  { title: "products", url: "/products", require_auth: false },
  { title: "orders", url: "/orders", require_auth: true },
  { title: "account", url: "/account", require_auth: true },
];

const PAGE_LABELS = {
  CART: "your shopping cart",
};

const NOT_FOUND = {
  TITLE: "404 - Page Not Found",
  DESCRIPTION: "Sorry, we couldn't find the page you're looking for.",
  BUTTON: { title: "Go Home", url: "/" },
};

const CHECKOUT_LABEL = "proceed to checkout";

const APP_CONSTANTS = {
  APP_TITLE,
  NAVIGATION_LABELS,
  CHECKOUT_LABEL,
  PAGE_LABELS,
  NOT_FOUND,
};

export default APP_CONSTANTS;

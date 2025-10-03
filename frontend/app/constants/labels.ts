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

const HOME_BANNER_URLS = [
  "https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg",
  "https://www.zilliondesigns.com/blog/wp-content/uploads/Perfect-Ecommerce-Sales-Banner-1280x720.jpg",
  "https://static.vecteezy.com/system/resources/previews/006/642/998/non_2x/online-shopping-on-website-e-commerce-applications-and-digital-marketing-hand-holding-smartphonwith-the-delivery-man-template-for-banner-web-landing-page-social-media-flat-design-concept-vector.jpg",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/grocery-sale-retail-or-e-commerce-banner-ad-design-template-67720435bb809be27f46dfb1dd44c6fa_screen.jpg?ts=1606113265"
]

const FOOTER_DESCRIPTION = "rex-store is your one-stop shop for the latest fashion trends. We offer a wide range of clothing, accessories, and footwear.";

const FOOTER_LINKS = [
  { title: "home", url: "/", require_auth: false },
  { title: "products", url: "/products", require_auth: false },
  { title: "orders", url: "/orders", require_auth: true },
  { title: "account", url: "/account", require_auth: true },
  { title: "privacy policy", url: "/privacy-policy", require_auth: false },
  { title: "tos", url: "/terms-of-service", require_auth: false },
]
const ADD_CART_LABEL = "add to cart";
const CHECKOUT_LABEL = "proceed to checkout";

const APP_CONSTANTS = {
  APP_TITLE,
  NAVIGATION_LABELS,
  CHECKOUT_LABEL,
  PAGE_LABELS,
  NOT_FOUND,

  ADD_CART_LABEL,
  HOME_BANNER_URLS,
  FOOTER_DESCRIPTION,
  FOOTER_LINKS
};

export default APP_CONSTANTS;

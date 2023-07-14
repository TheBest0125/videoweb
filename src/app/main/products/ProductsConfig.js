import authRoles from "../../auth/authRoles";
import ProductsByCategory from "./ProductsByCategory";
import ProductsByUser from "./ProductsByUser";
import Product from "./Product";

const ProductsConfig = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: false,
        },
        toolbar: {
          display: true,
        },
        footer: {
          display: false,
        },
        leftSidePanel: {
          display: false,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  auth: authRoles.onlyGuest,
  routes: [
    {
      path: "/productsByCategory/:category",
      element: <ProductsByCategory />,
    },
    {
      path: "/productsByUser/:user",
      element: <ProductsByUser />,
    },
    {
      path: "/products/:id",
      element: <Product />,
    },
  ],
};

export default ProductsConfig;

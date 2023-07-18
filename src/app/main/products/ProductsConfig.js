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
        banner: {
          display: true,
        },
        footer: {
          display: true,
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
  auth: null,
  routes: [
    {
      path: "/productsByCategory/:categoryId",
      element: <ProductsByCategory />,
    },
    {
      path: "/productsByUser/:userId",
      element: <ProductsByUser />,
    },
    {
      path: "/products/:type/:id",
      element: <Product />,
    },
  ],
};

export default ProductsConfig;

import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const products = [
  {
    id: "p1",
    title: "Product 1",
    price: 6,
    description: "Product 1 description ",
  },
  {
    id: "p2",
    title: "Product 2",
    price: 8,
    description: "Product 2 description ",
  },
  {
    id: "p3",
    title: "Product 3",
    price: 7,
    description: "Product 3 description ",
  },
  {
    id: "p4",
    title: "Product 4",
    price: 5,
    description: "Product 4 description ",
  },
  {
    id: "p5",
    title: "Product 5",
    price: 5,
    description: "Product 5 description ",
  },
];

const Products = (props) => {
  const updatedValuse = useSelector(state => state.cartItem.items)
  console.log( updatedValuse)
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((item) => (
          <div key={item.id}>

          <ProductItem
            kay={item.id}
            id = {item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            />
            </div>
        ))}
      </ul>
    </section>
  );
};

export default Products;

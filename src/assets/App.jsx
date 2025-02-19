import "./App.css";
import Button from"./Component/Button";
import ProductCard from "./Component/ProductCard";
import Counter from "./Component/Counter";



function App() {

  const products = [
    {
      id:1,
      name: "Laptop",
      price: 500000,
    },
    {
      id: 2,
      name:"mobile",
      price: 700000,
    },
  ];
  return (
    <>
     <p>hello</p>
     <Button></Button>
    {products.map((product) => (
      <productCard
        name={product.name}
        price={product.price}
        />
     ))}
     {/*<ProductCard name="Laptop" price={50000} />
     <ProducCard name="mobile" price={700000} /> */}
     <Counter />
    </>
  );
}



export default App;

import { Link } from 'react-router-dom';
import { useCountStore } from "../../stores/counter";
import { Button, Card } from 'flowbite-react';

function Products() {
  const countStore = useCountStore();
  const count=countStore.count;

  function  deinc (){
    countStore.decrement(1);
  }

  return  (
    <>
      <h1>Products</h1>

      <Link to={"/products/id"}>un  produit</Link>

      <Card>
        <h1>
          <Button onClick={deinc}>deinc count (state management zustand)</Button>
        </h1> 
        <p>
          {count}
        </p>
      </Card>
    </>
  );
}

export  default Products;
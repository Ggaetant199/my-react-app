import { useState } from 'react'
import { Alert,Button,Card } from "flowbite-react";
import Layout from '../components/Layout';
import { useCountStore } from "../stores/counter";

function App() {
  const [count, setCount] = useState(0)

  const countStore=useCountStore();
  const count2=countStore.count;

  function  inc (){
    countStore.increment(2);
  }

  return (
    <>
      <Layout>
        <div  style={{padding:"10px"}}>
          <h1 className="text-3xl font-bold underline text-center">Hello world!</h1> 

          <Card>
            <h1>
              <Button onClick={()=>setCount(count=>count+1)}>inc  count  (signale)</Button>
            </h1> 
            <p>
              {count}
            </p>
          </Card>
          
          <Card>
            <h1>
              <Button onClick={inc}>inc count (state management zustand)</Button>
            </h1> 
            <p>
              {count2}
            </p>
          </Card>

          <Card>
            <Alert color="info">Alert!</Alert>
          </Card>

        </div>
      </Layout>
    </>
  )
}

export default App

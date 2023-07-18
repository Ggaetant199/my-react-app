import { useState } from 'react'
import { Link } from "react-router-dom";
import { Alert,Button } from "flowbite-react";
import Layout from '../components/Layout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <h1>
          <Button onClick={()=>setCount(count=>count+1)}>count  ✔</Button>
        </h1> 

        <p>
          {count}
        </p>

        <Alert color="info">Alert!</Alert>

        <p>
          <Link to={"/login"}>login</Link>
        </p>
      </Layout>
    </>
  )
}

export default App

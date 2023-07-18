import Layout from '../../components/Layout';
import { Outlet } from "react-router-dom";

function ProductIndex() {
  return  (
    <>
      <Layout>
        <Outlet></Outlet>
      </Layout>
    </>
  );
}

export  default ProductIndex;
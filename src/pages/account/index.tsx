import Layout from '../../components/Layout';
import { Outlet } from "react-router-dom";

function Account() {
  return  (
    <>
      <Layout>
        <Outlet></Outlet>
      </Layout>
    </>
  );
}


export  default Account;
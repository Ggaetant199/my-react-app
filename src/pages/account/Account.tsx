import { Link } from 'react-router-dom';
function Account() {
  return  (
    <>
      <h1>Account</h1>

      <Link to={"/account/settings"}>Settings</Link>
    </>
  );
}

export  default Account;
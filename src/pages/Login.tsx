import { Link } from "react-router-dom";
import Layout from '../components/Layout';
import  "../assets/styles/Login.css";
import { Button } from 'flowbite-react';

function Login() {
  function  load  () {
    //@ts-ignore
    const gle = google||null;
    console.log(gle);

    if(!gle)return;

    gle.accounts.id.initialize({
      client_id: "1005801662865-hcj81e6mqbubjtjm6anjj1r5d6f1okgm.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });

    gle.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large",  shape:"pill" }  // customization attributes
    );

    gle.accounts.id.prompt(); // also display the One Tap dialog
  }

  window.onload = load; 

  function handleCredentialResponse(response:any) {
    const token = response?.credential||null;

    console.log("token: " + token);
  }

  return (
    <>
      <Layout name="login">
        <div  className="body">
          <h1>login</h1>
          <Button onClick={load}>Se conecter</Button>
          <div id="buttonDiv"></div>

          <div className="g-signin2" data-onsuccess="onSignIn"></div>
          <div id="g_id_onload"
            data-client_id="1005801662865-hcj81e6mqbubjtjm6anjj1r5d6f1okgm.apps.googleusercontent.com"
            data-context="signin"
            data-ux_mode="popup"
            data-login_uri="https://bestmarket-user/login_google_handler"
            data-auto_prompt="false"
          >
          </div>

          <p>
            <Link to={"/"}>home</Link>
          </p>
        </div>
      </Layout>
    </>
  )
}

export default Login;

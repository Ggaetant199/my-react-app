import { Link } from "react-router-dom";
import Layout from '../components/Layout';
import  "../assets/styles/Login.css";

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

  setTimeout(() => {
    load();
  }, 100);

  function handleCredentialResponse(response:any) {
    const token = response?.credential||null;

    console.log("token: " + token);
  }

  return (
    <>
      <Layout name="login">
        <div  className="body">
          <div  className="loginContainer">
            <p>
              <Link to={"/"}>back</Link>
              <h1>Connectez-vous</h1>
            </p>

            <hr />

            <div>
              <div id="buttonDiv"></div>

              <div className="g-signin2" data-onsuccess="onSignIn"></div>
              <div id="g_id_onload"
                data-client_id="1005801662865-hcj81e6mqbubjtjm6anjj1r5d6f1okgm.apps.googleusercontent.com"
                data-context="signin"
                data-ux_mode="popup"
                data-login_uri="https://my-react-app-gomsugaeant.vercel.app/login_google_handler"
                data-auto_prompt="false"
              >
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Login;

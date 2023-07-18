import Header from "./Header";
import Footer from "./Footer";
import "../assets/styles/Layout.css";

//@ts-ignore
function  Layout({children, name="default"}){
  let Rheader = ()=>(<Header/>);
  let Rfooter = ()=>(<Footer/>);

  switch (name) {
    case "login":
      Rheader=()=>(<div></div>);
      Rfooter=()=>(<div></div>);
      break;
  }
  
  return  (
    <>
      <Rheader/>
        <div  className="layout">
          {children}
        </div>
      <Rfooter/>
    </>
  );
}

export  default Layout;
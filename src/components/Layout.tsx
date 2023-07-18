import Header from "./Header";
import Footer from "./Footer";

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
       {children}
      <Rfooter/>
    </>
  );
}

export  default Layout;
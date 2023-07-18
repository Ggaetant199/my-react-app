export  default {
  async gets(){
    try {
      const res = await fetch("");

      if(res.status==200){
        const data:any = await res.json();

        return  {success:true,data};
      }
    } catch (error) {
      console.log(error);
      return  {success:true,data:null};
    }
  },

  async get(options:{productId:string}){
    try {
      const res = await fetch(""+options.productId);

      if(res.status==200){
        const data:any = await res.json();

        return  {success:true,data};
      }
    } catch (error) {
      console.log(error);
      return  {success:true,data:null};
    }
  }
}
const express=require("express")
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
  var sql=`SELECT * FROM jl_product_detail`;
  pool.query(sql,[],(err,result)=>{
    if(err){
      console.log(err);
      res.send({code:0});
    }else{
      res.send(result);
    }
  })
})

module.exports=router;
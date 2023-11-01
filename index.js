const express = require("express")
const nodemailer=require("nodemailer")
const app=express()
app.use(express.json())

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vrajlukhi@gmail.com',
      pass: 'ljck pevu jswp kcht'
    }
  })

app.post("/sendmail",(req,res)=>{
    let{email,sub,text}=req.body
    var mailOptions = {
        from: 'vrajlukhi@gmail.com',
        to: email,
        subject: sub,
        text: text
      };
      transporter.sendMail(mailOptions, (error, info)=>{
        if (error) {
          console.log(error);
        } else {
          console.log(info);
        }
      });
      res.status(200).send("done")
})

app.listen(8090,()=>{
    console.log("server 8090");
})
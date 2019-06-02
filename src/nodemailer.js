
let path = require('path');

let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service : 'gmail',
  secure : false,
  port : 25,
  auth : {
    user : 'projektasv2test@gmail.com',
    pass : 'nesakysiu'
  },
  tls : {
    rejectUnauthorized : false
  }
});

let helperOptions = {
    from: '"Fred Foo 👻" <irmantoj@gmail.com>', // sender address
    to: "irmantoj@gmail.com, irmantoj@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  };

transporter.sendMail(helperOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("msg wAS SENT");
  console.log(info);
});

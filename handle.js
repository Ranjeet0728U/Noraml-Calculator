const {ReqHandler}= require('./calculate');
const{JSON} = require('stream/consumers');
const {home} = require('./home')
const requestHandle = (req,res) =>{
    res.setHeader('Content-Type','text/html');
    if(req.url === '/'){
        return home(req,res);
    }
    else if(req.url ==='/calculate') return ReqHandler(req,res);;
}

exports.requestHandle = requestHandle;
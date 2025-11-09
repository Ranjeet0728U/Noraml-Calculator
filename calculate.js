const ReqHandler = (req,res) =>{
    console.log("In calculator ", req.url);
    const body = [];
    req.on('data',chunk =>{
        body.push(chunk);
    });
    req.on('end',()=>{
        const fullbody = Buffer.concat(body).toString();
        const param = new URLSearchParams(fullbody);
        const bodyObj = Object.fromEntries(param); 
        const num1 = Number(bodyObj.num1);
        const opr= String(param.get('opr'));
        const num2 = Number(bodyObj.num2);
        res.setHeader('Content-Type', 'text/html');
        let result;
        switch(opr){
            case 'sum': result = `${num1} + ${num2} = ${num1 + num2}`; break;
            case 'diff': result = `${num1} - ${num2} = ${num1 - num2}`; break;
            case 'product': result = `${num1} * ${num2} = ${num1 * num2}`; break;
            case 'div': 
                result = num2 === 0 ? 'Division by zero not allowed' : `${num1} / ${num2} = ${Math.floor(num1 / num2)}`; 
                break;
            default: result = 'Invalid operation';
            
        }

        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Calculate</title>
                <style>
                    body{
                        background-color: rgb(7, 81, 228);
                        color:white;
                    }
                    .result{
                        background-color: rgb(5, 192, 86);
                        margin: 200px;
                        padding: 100px;
                        text-align: center;
                        border: 2px solid white;
                    }
                </style>
            </head>
            <body>
                <div class="result">
                    <h1>Result:- ${result}</h1>
                    <a href="/">Go back to home</a>
                </div>
            </body>
            </html>
            `)
        res.end();
    });
    
}
exports.ReqHandler = ReqHandler;
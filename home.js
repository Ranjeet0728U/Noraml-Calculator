const home = (req,res) =>{
    res.setHeader('Content-Type', 'text/html');
    res.write( `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Home</title>
                <style>
                    body{
                        background-color: rgb(4, 40, 112);
                        color:white;
                    }
                    .form{
                        background-color: rgb(6, 90, 90);
                        border: 2px solid black;
                        border-radius: 30px;
                        border-color: white;
                        margin-left: 300px;
                        margin-right: 300px;
                        margin-top: 200px;
                       padding-top: 100px;
                       padding-bottom: 100px;
                    }
                    input[type="submit"]:hover {
                        background-color: rgb(220, 220, 220);
                    }
                </style>
            </head>
            <body>

                <div class="form" style="text-align: center;">
                    <h1>Welcome to Calculator made by Ranjeet</h1>
                    <form action="/calculate" method="POST" >
                        <input type="text" placeholder="Enter a number " name="num1"><br><br>
                        <label ><input type="radio" name="opr" value="sum">+</label>
                        <label><input type="radio" name="opr" value="diff">-</label>
                        <label><input type="radio" name="opr" value="product">*</label>
                        <label><input type="radio" name="opr" value="div">/</label>
                        <br><br>
                        <input type="text" placeholder="Enter a number " name="num2"><br><br>
                        <div style="text-align: center;">
                            <input type="submit" value="Submit">
                        </div>
                    </form>
                </div>
            </body>
            </html>
        `);
        return res.end();
}
exports.home = home;
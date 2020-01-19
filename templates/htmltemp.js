function generateHTML (teamString) {

    console.log("Inside gen html");
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    
    <style>
       body {
           margin: 20px;
       }
       .header {
           background-color: lightskyblue;
           border: solid black;
           text-align: center;
           font-size: 30px;;  
       }
       .container-body {
           display: flex;
           justify-content: space-evenly;
       }
       .card {
        background-color:whitesmoke;
        margin: 4%;
        border: solid black;
        font-size: x-large;
        border-radius: 10%;
        float: left;
       }
       .card-header{
           margin: 10%;
       }
       .card-body{
           margin: 5%;
       }
       ul{
        list-style: none;
       }
    </style>
    
    </head>
    
    <body>
        <div class=header>
            <h1>My Team</h1>
        </div>
    
        <div class="container-body">
            ${teamString} 
        </div>
                    
        <script src="https://kit.fontawesome.com/028a09fec6.js" crossorigin="anonymous"></script>        
    </body>
    
    </html>`

}

function generateCard (response) {
    
    let roleInfo;

    if (response.title === "Manager") {
        roleInfo = `Office Number: ${response.officeNum}`;
    } else if (response.title === "Engineer") {
        roleInfo = `Github Username: ${response.github}`;
    } else if (response.title === "Intern") {
        roleInfo = `School: ${response.school}`;
    };

    return `<div class="card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">${response.title}</div>
            <div class="card-body">
            <h5 class="card-title">${response.name}</h5>
                <ul>
                    <li>ID: ${response.id} </li>
                    <li>Email: ${response.email} </li>
                    <li> ${roleInfo} </li>
                </ul>
            </div>
        </div>
    </div>`
}

exports.generateHTML = generateHTML
exports.generateCard = generateCard;
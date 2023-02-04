
function buildCard(member){
    return `
    <div class="card my-3 mx-3" style="background-color: #f1f1f1; padding: 20px">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${member.name} - ${member.getRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${member.id}</li>
                    <li class="list-group-item">Email: ${member.email}</li>
                </ul>
            </div>
        </div>
    `
}

module.exports = function(team){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand mx-auto" href="#">My Team</a>
    </nav>
        <main class="container d-flex justify-content-center">
            <div class="d-flex flex-wrap">
                ${team.map(member => buildCard(member)).join(" ")}
            </div>
        </main>
    </body>
    </html>
    `
}

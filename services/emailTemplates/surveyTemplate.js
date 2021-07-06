const keys = require('../../config/keys')
module.exports = (survey) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div style="text-align: center;">
            <h3>I'd like your input</h3>
            <p>Please answer the following question</p>
            <p>${survey.body}</p>
            <div>
                <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
            </div>
            <div>
                <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
            </div>
            
        </div>
    </body>
    </html>
    `
}
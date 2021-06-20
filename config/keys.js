// key.js figure out what set of credentials to return
if (process.env.NODE_ENV === 'production')
{
    // we are on production.
    module.exports = require('./prod')
}
else
{
    // we are on development.- return dev.keys
    module.exports = require('./dev')
}
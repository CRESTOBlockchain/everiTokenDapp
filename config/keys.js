// Chooses keys depending on environment production vs devleopment
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}

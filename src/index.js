const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'node_modules', 'ninno-client', 'public')));

app.listen(3000, () => {
    /* eslint-disable no-console */
    console.log('App listening on port 3000');
    /* eslint-enable no-console */
});

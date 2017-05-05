const path = require('path');
const express = require('express');
const fallback = require('express-history-api-fallback');

const app = express();
const root = path.join(__dirname, '..', 'node_modules', 'ninno-client', 'public');

app.use(express.static(root));
app.use(fallback('index.html', { root }));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    /* eslint-disable no-console */
    console.log('App listening on port', app.get('port'));
    /* eslint-enable no-console */
});

const path = require('path');
const express = require('express');
const fallback = require('express-history-api-fallback');

const app = express();

/* eslint-disable global-require */
if (process.env.NODE_ENV === 'production') {
    const enforce = require('express-sslify');
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
}
/* eslint-enable global-require */

const root = path.join(__dirname, '..', 'node_modules', 'ninno-client', 'public');

app.use(express.static(root));
app.use(fallback('index.html', { root }));


app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    /* eslint-disable no-console */
    console.log('App listening on port', app.get('port'));
    /* eslint-enable no-console */
});

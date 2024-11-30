const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const session = require('express-session');

dotenv.config();

const app = express();

const username = process.env.DS_USERNAME;
const password = process.env.DS_PASSWORD;

// Initialize session middleware
app.use(session({
    secret: process.env.SESSION_SECRET || 'defaultsecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' } 
}));

// Authentication middleware
const requireAuth = (req, res, next) => {
    if (req.session.loggedIn) {
        return next();
    }

    const auth = { login: username, password: password };
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, pass] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && pass && login === auth.login && pass === auth.password) {
        req.session.loggedIn = true;
        return next();
    }

    res.set('WWW-Authenticate', 'Basic realm="401"');
    res.status(401).send('Authentication required.');
};

// Apply authentication to all routes
app.use(requireAuth);

// Middleware to handle trailing slash and redirect
app.use((req, res, next) => {
    let url = req.url;
    let indexPath = '/storybook-static/index.html';

    // Check if the URL does not contain `/storybook-static/index.html`
    if (!url.includes(indexPath)) {
        // Redirect to `/storybook-static/index.html<path-complement>` without a `/` after the `index.html`

        if (url.startsWith('/')) {
            url = url.substring(1);
        }

        if (indexPath.endsWith('/')) {
            indexPath = indexPath.substring(0, indexPath.length - 1);
        }

        const redirectUrl = `${indexPath}${url}`;
        return res.redirect(301, redirectUrl);
    }

    // If `/storybook-static/index.html` is in the URL, continue to the next middleware
    next();
});

// Serve static files from `storybook-static` directory
app.use(express.static(path.join(__dirname, '../storybook-static')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));

module.exports = app;
const app = require('./server');
const config = require('./config/config');

// SERVER WEB
app.listen(config.app.PORT, () => {
    console.log(`Server is running on port ${config.app.PORT}`);
});
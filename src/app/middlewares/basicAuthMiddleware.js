const basicAuthConfig = require('../../config/basicAuthConfig');

const basicAuthMiddleware = (req, res, next) => {
  try {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [username, password] = Buffer.from(b64auth, 'base64')
      .toString()
      .split(':');

    if (
      username &&
      password &&
      username === basicAuthConfig.username &&
      password === basicAuthConfig.password
    ) {
      return next();
    }

    return res.send({
      code: 401,
      message: 'Unauthorized',
    });
  } catch (err) {
    console.error(err);
    return res.send({
      code: 500,
      message: 'Error while authentificate user',
      content: {
        err,
      },
    });
  }
};

module.exports = basicAuthMiddleware;

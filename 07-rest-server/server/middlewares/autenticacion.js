const jwt = require('jsonwebtoken');

// verificar token

let verificaToken = ( req, res, next ) => {

  let token = req.get('token');
  // res.json({
  //   token: token
  // });
  jwt.verify( token, process.env.SEED, (err, decoded) => {

    if ( err ) {
      return res.status(401).json({
        ok: false,
        err: {
          message: 'error autenticacion'
        }
      })
    }
    req.usuario = decoded.usuario;
    next();
  });
}

module.exports = {
  verificaToken
};
// puerto

process.env.PORT = process.env.PORT || 3000;

// entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Vencimiento token


process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// Seed

process.env.SEED = process.env.SEED || 'seed-desarrollo';

// base de datos
let urlDB;
if (process.env.NODE_ENV === 'dev' ) {
  urlDB = 'mongodb://localhost:27017/cafe';
} else {
  urlDB = 'mongodb://admin:admin@ds259109.mlab.com:59109/usuariosdb'
}
process.env.URLDB = urlDB;
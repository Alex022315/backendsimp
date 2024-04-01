const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'roundhouse.proxy.rlwy.net',
    database: 'railway',
    user: 'root',
    password: 'mqvSPmcfofcuMlzKzpeCoXhXbdqqTobt',
    port: 55998
});

conexion.connect(error => {
    if (error) {
        console.error('Error en la conexión a la base de datos:', error.message);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

module.exports = conexion;

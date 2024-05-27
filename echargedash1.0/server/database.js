const sql = require('mssql');

const config = {
  server: 'echargeup.database.windows.net',
  //echargeup.database.windows.net
  database: 'EchargeupCentral',
  //'EchargeupCentral'
  user: 'Ecentral',
  //Ecentral
  password: 'ISOURSE@123',
  // ISOURSE@123
  options: {
    encrypt: true,
  },
};

async function getData() {
  try {
    await sql.connect(config);
    const result = await sql.query`SELECT * FROM Intellicar_Data_can`;
    return result.recordset;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getData,
};
const { Sequelize } = require('sequelize')

const connectionsql = new Sequelize(process.env.DB_NAME, process.env.ROOT, '', {
  host: process.env.HOST,
  dialect: process.env.DIALECT
})

const firedatabase = () => {
  return (
    connectionsql
      .sync({ alter: true }) // alter true means do accept all updates in table structure(alter , drop , add , modify)
      // force:true=> adds a DROP TABLE IF EXISTS before trying to create the table - if you force
      .then(res => console.log('DB connected successfully'))
      .catch(err => console.log('DB connection fail ', err))
  )
}

module.exports = {
  connectionsql,
  firedatabase
}

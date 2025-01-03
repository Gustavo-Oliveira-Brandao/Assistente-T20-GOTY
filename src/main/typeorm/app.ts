import 'reflect-metadata'
import { DataSource } from 'typeorm'

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './database/db.sqlite',
  entities: ['./entities/*.js']
})

AppDataSource.initialize()
  .then(() => {
    console.log('Banco de dados iniciado')
  })
  .catch((err) => {
    console.log(err)
  })

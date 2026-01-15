import express from 'express'
import 'dotenv/config'
import cors from 'cors'

import { database } from './database.js'
import { router } from './routes/routes.js'

import { Veiculos } from './models/veiculo.js'
import { Acesso } from "./models/acesso.js"
import { Usuarios } from "./models/usuario.js"
import { Vagas } from './models/vagas.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

const PORT = process.env.PORT || 3000

async function startServer() {
  try {
    await database.authenticate()
    console.log("Banco de dados conectado com sucesso")

    // ⚠️ em DEV, ok — em PROD nunca usar force:true
    await database.sync({ force: true })

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`)
    })

  } catch (error) {
    console.error("Erro ao iniciar servidor:", error)
  }
}

startServer()

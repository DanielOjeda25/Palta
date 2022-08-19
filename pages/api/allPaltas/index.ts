import Database from '@database'
import type { NextApiRequest, NextApiResponse } from 'next'

const allPalta = async (req: NextApiRequest, res: NextApiResponse) => {
  //creo una instancia de la clase en este caso
  const db = new Database()
  //llamo al metodo que me devuelve la data
  const entry = await db.getAll()

  res.status(200).json({ data: entry })
}

export default allPalta

import Database from "@database";
import { NextApiRequest, NextApiResponse } from "next";


const paltaDetail = async (req: NextApiRequest, res: NextApiResponse) => {

  const db = new Database()
  const paltaId = req.query.id as string
  const palta = await db.getById(paltaId)

  res.status(200).json(palta)

}

export default paltaDetail

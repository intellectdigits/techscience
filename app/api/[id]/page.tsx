import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs';
  import path from 'path';

export default async function handler(
  
  req: NextApiRequest,
  res: NextApiResponse
) {
  const datas = req.body
  const data = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
	//...
  console.log(datas)
	fs.writeFile(process.cwd() + '/app/dat.json', "ok");

 
}
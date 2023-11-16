import { createPool } from '@vercel/postgres'

export default defineEventHandler(async (event) => {
  const db = createPool()
  const query = getQuery(event)
  if(query.predmet === '') return []
  try {
    const { rows: nastavnici } = await db.query(`
    SELECT nastavnici.id as id, nastavnici.ime as ime, napomena
    FROM nastavnici_predmeti
    INNER JOIN nastavnici on nastavnici_predmeti.id_nastavnika = nastavnici.id
    WHERE nastavnici_predmeti.id_predmeta = ${query.predmet}
    `)
    return nastavnici
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'error'
    })
  }
})
import { sql, createPool } from '@vercel/postgres'

export default defineEventHandler(async (event) => {
  const user = event.context.user
  const body = await readBody(event)
  try {
    sql`
      UPDATE prijave
      SET id_nastavnika = ${user.id}
      WHERE id = ${body.idPrijave}
    `
    const db = createPool()
    const { rows: updated } = db.query(`
      SELECT
        prijave.id as id,
        prijave.ime as ime, 
        broj_telefona, 
        skola, 
        razred, 
        predmeti.ime as predmet, 
        vrsta_pripreme, 
        detalji_pripreme, 
        rok, 
        preferirano_vreme, 
        mesto, 
        napomena
      FROM prijave
      JOIN predmeti on predmeti.id = prijave.id_predmeta
      WHERE prijave.id = ${body.idPrijave}
    `)
    return {
      code: 200,
      updated: updated
    }
  } catch(error) {
    console.log(error)
    return createError({
      statusCode: 500,
      statusMessage: 'error'
    })
  }
})
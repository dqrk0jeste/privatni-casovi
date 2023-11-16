import { createPool } from '@vercel/postgres'

export default defineEventHandler(async (event) => {
  const user = event.context.user
  const db = createPool()
  try {
    const { rows: myTasks } = await db.query(`
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
      WHERE id_nastavnika = ${user.id}
    `)
    const { rows: otherTasks } = await db.query(`
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
      WHERE id_nastavnika = 0
    `)
    return {
      myTasks: myTasks,
      otherTasks: otherTasks
    }
  } catch (error) {
    console.log(error)
    return createError({
      statusCode: 500,
      statusMessage: 'error'
    })
  }
})
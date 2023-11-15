import { sql } from '@vercel/postgres'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {
    sql`
    INSERT INTO prijave(
      ime, 
      broj_telefona, 
      skola, 
      razred, 
      id_predmeta, 
      vrsta_pripreme, 
      detalji_pripreme, 
      rok, 
      preferirano_vreme, 
      mesto, 
      id_nastavnika, 
      napomena)
    VALUES (
      ${ body.podaci.imeIPrezime },
      ${ body.podaci.brojTelefona },
      ${ body.podaci.skola },
      ${ body.podaci.razred} ,
      ${ body.predmet.id },
      ${ body.predmet.vrstaCasa.vrsta },
      ${ body.predmet.vrstaCasa.detalji },
      ${ body.vreme.rok },
      ${ body.vreme.preferiranoVreme },
      ${ body.mesto },
      ${ body.nastavnik },
      ${ body.napomena }
    );
    `
  } catch(error) {
    console.log(error.message)
    return {
      code: 500,
      message: 'greska'
    }
  }
  return {
    code: 201,
    message: 'uspesno'
  }
})

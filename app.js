//import playwright from "playwright";
const playwright  = require("playwright");

(async () => {
    const browser           =   await playwright["chromium"].launch({headless: true});
    const context           =   await browser.newContext();
    const page              =   await context.newPage();
    await page.goto("https://e.infogram.com/02b02d0b-6c12-4d5c-b1e2-ccc18addfcfc?parent_url=https%3A%2F%2Fwww.gob.cl%2Fyomevacuno%2F&src=embed#async_embed");
    let totalVacunados      =   await page.textContent('[class="ContentWrappersreact__Contents-sc-15uu1au-0 iMiUSj"]');
    let dosisAdministradas  =   await page.textContent('[class="ContentWrappersreact__Contents-sc-15uu1au-0 liqdtQ"]');
    let totalDosisCompleta  =   await page.textContent('[class="ContentWrappersreact__Contents-sc-15uu1au-0 dHAUMM"]');
    let porcentajeVacunados =   await page.textContent('[class="ContentWrappersreact__Contents-sc-15uu1au-0 dZbMxW"]');
    let fecha               =   await page.textContent('[class="ContentWrappersreact__Contents-sc-15uu1au-0 ijDOVB"]');
    
    console.log(fecha);
    console.log(totalVacunados,dosisAdministradas,totalDosisCompleta,porcentajeVacunados);

    //await page.screenshot({ path: "example.png" });
    await browser.close();
})();

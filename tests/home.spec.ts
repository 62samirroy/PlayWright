import {test,expect} from '@playwright/test';


// Run|Debug
test("Open home page and varify titel",async({page})=>{
    // test setup
    await page.goto('https://www.fifa.com/fifaplus/en/home');
   await expect(page).toHaveTitle('FIFA | The Home of Football');
})

test ("varify navigationsLinks",async({page})=>{
    await page.goto('https://www.fifa.com/fifaplus/en/home');
   const logo= page.locator('[href="/fifaplus/en/home"] img')
   await expect(logo).toBeVisible();
   await expect(logo).toHaveAttribute('title','FIFA Logo White Transparent')
})
test ("varify logo is visible and has the alt title",async({page})=>{
    const expectedLinks=[ "OVERVIEW",
    "FIFA WORLD CUP 26™ QUALIFIERS",
    "THE BEST",
    "FIFA BEACH SOCCER WORLD CUP UAE 2024™",
    "FIFA WORLD CUP 26™",
    "HOME",
    "FIFA CLUB WORLD CUP 2023",
    "LIVE",
    "ORIGINALS",
    "ARCHIVE",
    "PLAY ZONE",
    "FIVES",
    "GLOBAL GOALSCORER",
    "WHO AM I?",
    "HEAD TO HEAD",
    "TRIVIA",
    "ROBLOX FIFA WORLD",
    "MORE GAMES",
    "MATCH CENTRE",
    "MEMBER ASSOCIATIONS",
    "HIGHLIGHTS",
    "FIFA STORE",
    "TICKETS",
    "FIFA+ COLLECT",
    "NEWS",
    "OVERVIEW",
    "ABOUT FIFA",
   "WOMEN'S FOOTBALL",
    "SOCIAL IMPACT",
    "FOOTBALL DEVELOPMENT",
    "TECHNICAL",
    "LEGAL",
    "WORLD RANKING"]
     
    await page.goto('https://www.fifa.com/fifaplus/en/home');
    await page.pause()

    const navLinks=page.locator('#mainLinksID a')
    await page.waitForTimeout(3000)
     expect(await navLinks.allInnerTexts()).toEqual(expectedLinks)
})

import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Click on Draw button should load choices', async () => {
    const draw = await driver.findElement(By.id('draw'))
    const choices = await draw.isDisplayed()
    expect(choices).toBe(true)
} )

test('Click on add to duo displays play duo', async () => {
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const addToDuo = await playerDuo.isDisplayed()
    expect(addToDuo).toBe(true)
})
const {Builder, By, Key} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
        // Navigate to Url
        try{
            await driver.get('https://onliner.by');

            const nav = await driver.findElements(By.css('.b-main-navigation > li')).then((el)=>{
                el.map((e) =>{
                    e.findElement(By.css('a > span')).getText().then((txt) =>{
                        console.log(`item is : ${txt}`);
                    })
                })
            })
            // #container > div > div > header > div.b-top-menu > div > nav > ul.b-main-navigation > li.b-main-navigation__item.b-main-navigation__item_current > a.b-main-navigation__link > span

            // #container > div > div > header > div.b-top-menu > div > nav > ul.b-main-navigation > li:nth-child(2) > a > span

            // const search = await driver.findElement(By.name('query')).sendKeys('bluesound')
            // const wrapper = await driver.findElement(By.className('search__content-wrapper'))

            // driver.findElement(By.className('search__results'))

            // const resText = await res.getText()
            // const searchForm = await search.findElement(By.className('fast-search__form'))
            // const searchFormField = await searchForm.findElement(By.className('fast-search__input'));
    

            // Enter text "cheese" and perform keyboard action "Enter"
            // const res = await search.sendKeys('Велосипед', Key.ENTER);

            const titlePage = await driver.getTitle()
            console.log(`The titlePage is: ${titlePage}`);
            // await driver.close();
            // driver.quit();
        }

        catch{
            console.log('Something wrong...');
        }
        




    // let driver = await new Builder().forBrowser('chrome').build();
    // try {
    //     // Navigate to Url
    //     await driver.get('https://google.com');

    //     // Enter text "cheese" and perform keyboard action "Enter"
    //     await driver.findElement(By.name('q')).sendKeys('EPAM', Key.ENTER);

    //     let firstResult = await driver.wait(until.elementLocated(By.css('h3>div')), 3000);

    //     console.log(await firstResult.getAttribute('textContent'));
    // }
    // finally{
    //     // driver.quit();
    // }
})();
  

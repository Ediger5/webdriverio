describe("OtbasyBank Page", () => {
  it("Open the main url", async () => {
    await browser.url("https://otbasybank.kz/")
    await browser.setWindowSize(1400, 900)
    await expect(browser).toHaveUrl("https://otbasybank.kz/")
  });
  it("Block Div-Container", async () => {
    /** Блок ЛОГО (2штуки) */ 
    const BaspanaMarketLogo = $('/html/body/div[3]/div/header/div[1]/div[1]/a/img')
    const OtbasyBankLogo = $('/html/body/div[3]/div/header/div[1]/div[3]/a/p/span')

    await BaspanaMarketLogo.click()
    await OtbasyBankLogo.click()

    /** Блок программы Банка с последующим открытием каждой и закрытием */
    const ProgrammyBanka = $('#pbId')
    const Nurly = $('=Нурлы Жер')
    const Shanyraq = $('=Шаңырақ')
    const SvoiDom = $('=Свой дом')
    const Askeri = $('=Жаңа Баспана')
    const Selo = $('=С дипломом в село')
    const Subs = $('=Субсидирование Аренды')
    const Umay = $('=Женская ипотека «ҰМАЙ»')
    const VseProgrammy = $('=Все программы')

    await ProgrammyBanka.click()
    await Nurly.click()
    await browser.switchWindow('https://otbasybank.kz/programm-bank/nurly-zher')
    await browser.closeWindow()
    await browser.switchWindow('https://otbasybank.kz')
    await ProgrammyBanka.click()
    await Shanyraq.click()
    await browser.switchWindow('https://otbasybank.kz/programm-bank/shanyirak')
    await browser.closeWindow()
    await browser.switchWindow('https://otbasybank.kz')
    await ProgrammyBanka.click()
    await SvoiDom.click()
    await browser.switchWindow('https://otbasybank.kz/programm-bank/own-house')
    await browser.closeWindow()
    await browser.switchWindow('https://otbasybank.kz/')
    await ProgrammyBanka.click()
    await Askeri.click()
    await browser.switchWindow('https://otbasybank.kz/programm-bank/voennyi-produckt')
    await browser.closeWindow()
    await browser.switchWindow('https://otbasybank.kz/')
    await ProgrammyBanka.click()
    await Selo.click()
    await browser.switchWindow('https://otbasybank.kz/?authorizationRequired=1')
    await browser.closeWindow()
    await browser.switchWindow('https://otbasybank.kz/')
    await ProgrammyBanka.click()
    await Subs.click()
    await browser.switchWindow('https://otbasybank.kz/programm-bank/rent-subsidias')
    await browser.closeWindow()
    await browser.switchWindow('https://otbasybank.kz/')
    await ProgrammyBanka.click()
    await Umay.click()
    await browser.switchWindow('https://otbasybank.kz/programm-bank/umay')
    await browser.closeWindow()
    await browser.switchWindow('https://otbasybank.kz/')
    await ProgrammyBanka.click()
    await VseProgrammy.click()
    await browser.back()


    /** Блок Новости */
    const News = $('/html/body/div[3]/div/header/div[2]/div/a[1]/span')

    await News.click()
    await BaspanaMarketLogo.click()

    /** Блок FAQ,переход на страницу FAQ и закрытие ее */
    const FAQ = $('=FAQ')

    await FAQ.click()
    await browser.switchWindow('https://hcsbk.kz/ru/faq/')
    await browser.closeWindow()
    await browser.switchWindow('https://otbasybank.kz')

    /** Блок Разместить обьявление и закрытие его*/
    const Obyavlenie = $('/html/body/div[3]/div/header/div[2]/div/div[4]/p/button/span')
    await Obyavlenie.click()
    await browser.refresh()

    /** Блок Каз Рус */
    const KazButton = $('=Қаз')
    const RusButton = $('=Рус')

    await KazButton.click()
    await browser.pause(1000)
    await RusButton.click()
    await browser.pause(1000)

  })

  /** Блок Ваш Гид Недвижимости */
  it('Vash Gid Nedvizhimosti', async () => {
    /** Ваш Гид недвижимости для Новостройки */
    const PriceFrom = $('#priceFrom')
    const PriceTo = $('#priceTo')
    const Vyhod = $('/html/body/div[3]/div/header/div[1]/div[1]/a/img')

    await browser.execute(() => {
      const element = document.querySelector('#dropdownRegionButton');
      element.click();
    })
    await browser.execute(() => {
      const element = document.querySelector('#dropdownObjectButton');
      element.click();
    })
    await browser.execute(() => {
      const element = document.querySelector('#select-icon-codes');
      element.click();
    })
    await browser.execute(() => {
      const element = document.querySelector('#select-icon-rooms');
      element.click();
    })
    await browser.execute(() => {
      const element = document.querySelector('#select-icon-realizations')
      element.click();
    })
    await browser.execute(() => {
      const element = document.querySelector('#select-icon-prices');
      element.click();
    })
    await PriceFrom.setValue('0')
    await PriceTo.setValue('999999999')
    await browser.keys(['Enter'])
    await browser.pause(4000)
    await Vyhod.click()
  })
  it('Check Gosprogrammy', async () => {
    const Gosprogrammy = await $('=Показать все');
    const Vyhod = await $('/html/body/div[3]/div/header/div[1]/div[1]/a/img');

    const elementLocation = await Gosprogrammy.getLocation('y');
    const viewportHeight = (await browser.getWindowRect()).height;
    // Calculate the scroll position to bring the element closer to the center
    const yOffset = elementLocation - (viewportHeight / 2);
    // Scroll to the adjusted position
    await browser.execute((yOffset) => {
      window.scrollTo(0, yOffset);
    }, yOffset);

    await Gosprogrammy.click();
    await Vyhod.click();
    await browser.pause(2000);
  });
  it('Check Novostroiki', async () => {
    const Novostroiki = $('//*[@id="div_DirectSale"]/div/div[1]/a/div')
    const Vyhod = $('/html/body/div[3]/div/header/div[1]/div[1]/a/img')
    // const ScrollNumberPage = $('/html/body/footer/div/div[1]/nav/ul/li[1]/a/div')

    const elementLocation = await Novostroiki.getLocation('y');
    const viewportHeight = (await browser.getWindowRect()).height;
    // Calculate the scroll position to bring the element closer to the center
    const yOffset = elementLocation - (viewportHeight / 2);
    // Scroll to the adjusted position
    await browser.execute((yOffset) => {
      window.scrollTo(0, yOffset);
    }, yOffset);
    await Novostroiki.click()
    await Vyhod.click()
    await browser.pause(2000)
  })
  it('Check Vtorichka', async () => {
    const Vtorichka = $('//*[@id="div_SecondHouses"]/div/div[1]/a/div')
    const Vyhod = $('/html/body/div[3]/div/header/div[1]/div[1]/a/img')

    const elementLocation = await Vtorichka.getLocation('y');
    const viewportHeight = (await browser.getWindowRect()).height;
    // Calculate the scroll position to bring the element closer to the center
    const yOffset = elementLocation - (viewportHeight / 2);
    // Scroll to the adjusted position
    await browser.execute((yOffset) => {
      window.scrollTo(0, yOffset);
    }, yOffset);
    await Vtorichka.click()
    await Vyhod.click()
    await browser.pause(2000)
  })
  it('Calculator i Novosti', async () => {
    // const scrollCalc = $('=Рассчитать')
    // const CalcButton = $('=Рассчитать')
    // const Vyhod = $('/html/body/div[3]/div/header/div[1]/div[1]/a/img')
    // const CalcVyh = $('/html/body/div[15]/div/div[2]/div[1]/button/svg/path[2]')

    // await scrollCalc.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'center' })
    // await CalcButton.click()
    // await CalcVyh.click()
    // await browser.pause(2000)

    const scrollNews = $('=Читать')
    const NewsButton = $('=Читать')
    await scrollNews.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'center' })
    await browser.pause(800)
    await NewsButton.click()
  })
  it('Bottom', async () => {
    const scrollBot = $('=Интернет-Банкинг')
    const Internet = $('=Интернет-Банкинг')
    const Ipoteka = $('=Ипотека')
    const Calc = $('=Калькулятор')
    const News = $('/html/body/footer/div/div[1]/nav/ul/li[4]/a/div')
    const Programs = $('/html/body/footer/div/div[1]/nav/ul/li[5]/a/div')
    const Map = $('=Карта сайта')
    const Newstroiki = $('=Новостройки')
    const about = $('=О Baspana.kz')

    await scrollBot.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'center' })
    await Internet.click()
    await browser.switchWindow('https://online.hcsbk.kz/UserAccount/Login?ReturnUrl=%2f')
    await browser.closeWindow()
    await browser.switchWindow('https://otbasybank.kz/')
    await browser.pause(2000)
    await Ipoteka.click()
    await browser.switchWindow('https://otbasybank.kz/programm-bank/mortgage-shares-index')
    await browser.closeWindow()
    await browser.switchWindow('https://otbasybank.kz/')
    await Calc.click()
    await browser.switchWindow('https://hcsbk.kz/ru/#calc_sect')
    await browser.closeWindow()
    await browser.switchWindow('https://otbasybank.kz/')
    await News.click()
    await browser.back()
    await browser.pause(3000)
    await scrollBot.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'center' })
    await Programs.click()
    await browser.back()
    await browser.pause(3000)
    await scrollBot.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'center' })
    await Map.click()
    await browser.back()
    await scrollBot.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'center' })
    await Newstroiki.click()
    await browser.back()
    await scrollBot.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'center' })
    await about.click()
    await browser.back()
  })
});

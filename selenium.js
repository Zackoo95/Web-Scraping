var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://www.google.com')
    driver.findElement(webdriver.By.name('q')).sendKeys('iphone 8');
    driver.findElement(webdriver.By.className('jsb')).click();
    driver.findElement({xpath : '//*[@id="rso"]/div[1]/div/div[1]/div/div/h3/a'}).click();
    
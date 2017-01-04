const webdriver = require('selenium-webdriver');
const log = require('./logger');


log.info('Start monitoring');

const driver = new webdriver.Builder()
  .forBrowser('phantomjs')
  .build();


driver.get('http://couchdb.apache.org');

driver.getTitle().then((title) => log.info(title));

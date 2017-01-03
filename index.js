import webdriver, { By, until } from 'selenium-webdriver';


const driver = new webdriver.Builder()
  .forBrowser('firefox')
  .build();

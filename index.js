const express = require("express"),
  app = express(),
  puppeteer = require("puppeteer");

app.get("/", async (request, response) => {
  try {
    const browser = await puppeteer.launch();
    const URL = "https://api.f1online.sk/img/";
    const URLTMP = "http://localhost:3000/img/";
    const page = await browser.newPage();
    page.setViewport({ width: 1000, height: 625 });
    await page.goto(`${URLTMP}${request.query.id}`);
    const image = await page.screenshot();
    await browser.close();
    response.set("Content-Type", "image/png");
    response.send(image);
  } catch (error) {
    console.log(error);
  }
});

var listener = app.listen(3009, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

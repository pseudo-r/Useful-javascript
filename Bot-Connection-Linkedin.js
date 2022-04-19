// 1. load https://www.linkedin.com/mynetwork/
// 2. make sure your LinkedIn is in English
// 3. paste this script on chrome dev tools at your own risk

async function moreConnectionsPlease() {
  // maximum limit of Connect buttons clicked
  const LIMIT = 500;
  // wait in ms before each scroll
  const SCROLL_TIMEOUT = 600;
  // bulk scroll will scroll this amount of times
  const BULK_SCROLL_COUNT = 15;
  // wait in ms before each click
  const CLICK_DELAY = 300;
  // if this amount of connections in the page, time to click
  const MINIMUM_CONNECTS_TO_CLICK = 60;
  // if this amount of connections in the page, time to scroll
  const MINIMUM_CONNECTS_TO_SCROLL = 10;

  var connects = 0;
  var fails = 0;

  // retrieves array "Connect" buttons
  function selectButtonElements() {
    return [...document.querySelectorAll("button span")].filter(a =>
      a.textContent.includes("Connect")
    );
  }

  // scrolls to the bottom of the page
  async function singleScroll() {
    return new Promise(resolve => {
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
        console.log("scroll!");
        resolve();
      }, SCROLL_TIMEOUT);
    });
  }

  // delays an html element click
  async function singleClick(elem) {
    return new Promise(resolve => {
      setTimeout(() => {
        elem.click();
        resolve();
      }, CLICK_DELAY);
    });
  }

  // scroll to the bottom of the page several times
  async function bulkScroll() {
    for (let i = 0; i < BULK_SCROLL_COUNT; i++) {
      await singleScroll();
    }
  }

  // click on all but a few Connect buttons
  async function bulkClick() {

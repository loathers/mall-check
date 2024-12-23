const { mallPrices, sessionStorage, todayToString } = require("kolmafia");

module.exports.main = function () {
  const today = todayToString();
  if (sessionStorage.getItem("all prices date") !== today) {
    mallPrices("allitems");
    sessionStorage.setItem("all prices date", today);
  }
}

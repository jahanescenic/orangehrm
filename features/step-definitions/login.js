module.exports = function () {

    
    this.Then(/^I should get error message$/, async function () {
        return page.loginPage.assertLoginError()
    });

    this.When(/^I login with "([^"]*)" credentials$/, async function (keyword) {
      await page.loginPage.logIn(keyword)
      return page.loginPage.submit()
    });

    this.When(/^I should get my user on top left corner$/, async function () {
      await page.loginPage.assertLoginSuccess()
    });
    
    
  };
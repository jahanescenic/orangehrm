module.exports = function () {
    
    this.Given(/^I visit OrangeHRM$/, async function () {
        await helpers.loadPage(shared.testData.url)
    });

};
const { Logger } = require("webdriver-manager/built/lib/cli");

module.exports = {
    elements: {
        userInput: by.css('#txtUsername'),
        passwordInput: by.css('#txtPassword'),
        submitButton: by.css('#btnLogin'),
        errorSpan: by.css('span#spanMessage'),
        credentialSpan: by.xpath('//div[@id="content"]/div[2]/span'),
        welcomeElement: by.css("#welcome")
    },

    // Login with user and password
    logIn: async function (keyword) {
        var userInput = page.loginPage.elements.userInput;
        var passwordInput = page.loginPage.elements.passwordInput

        if(keyword == "correct"){
            credentials = page.loginPage.elements.credentialSpan;
            await driver.wait(until.elementsLocated(credentials), 10000).then(function(){
                driver.findElement(credentials).getText().then(function(credential) {
                    credential = credential.split("|")
                    user = (credential[0].split(":"))[1].trim()
                    pass = ((credential[1].split(":"))[1].replace(/[()]/g, "")).trim()
                })
            })   
        }
        else if (keyword == "random"){
            user = shared.testData.randomUser
            pass = shared.testData.randomPassword
        }

        await driver.wait(until.elementsLocated(userInput), 10000).then(function(){
            driver.findElements(userInput);
            driver.findElement(userInput).sendKeys(user);
            driver.findElements(passwordInput);
            driver.findElement(passwordInput).sendKeys(pass);
        })
    },

    // Submit Login
    submit: async function(){
        submitButton = page.loginPage.elements.submitButton;
        await driver.findElement(submitButton).click()    
    },

    // Check Failed login message
    assertLoginError: async function(){
        errorSpan = page.loginPage.elements.errorSpan
        await driver.wait(until.elementsLocated(errorSpan), 10000).then(function(){
            driver.findElement(errorSpan).getText().then(function(message) {
                expect(message).to.equal('Invalid credentials');
            })
        })
    },

    // Check profile name on top left corner
    assertLoginSuccess: async function(){
        welcomeElement = page.loginPage.elements.welcomeElement
        await driver.wait(until.elementsLocated(welcomeElement), 10000).then(function(){
            driver.findElement(welcomeElement).getText().then(function(userProfile) {
                return console.info(userProfile);
            })    
        })
    },

};
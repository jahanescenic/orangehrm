module.exports = function () {
    this.Before(function() {
        return this.driver.manage().window().maximize();
    });

    this.After(function() {
        return this.driver.quit();
      
    });
    // add a before feature hook
    this.BeforeFeature(function(feature, done) {
        console.log('BeforeFeature: ' + feature.getName());
        done();
    });
 
    // add an after feature hook
    this.AfterFeature(function(feature, done) {
        console.log('AfterFeature: ' + feature.getName());
        done();
    });
    
    // add before scenario hook
    this.BeforeScenario(function(scenario, done) {
        console.log('BeforeScenario: ' + scenario.getName());
        done();
    });
 
    // add after scenario hook
    this.AfterScenario(function(scenario, done) {
        console.log('AfterScenario: ' + scenario.getName());
        done();
    });
};
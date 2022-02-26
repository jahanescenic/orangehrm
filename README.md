System Test Runner
=================

This repository contains automated system tests of  https://opensource-demo.orangehrmlive.com/

*Pre-requisites*: `NodeJs`, `google-chrome` should be installed in your local machine.


Run System tests
================

The location of all system test feature files: https://github.com/jahanescenic/orangehrm

From the repository root, Run following command to build npm package:
```
npm ci
```

Copy latest chromedriver to launch the test.
```
cp node_modules/chromedriver/lib/chromedriver/chromedriver node_modules/selenium-cucumber-js/node_modules/chromedriver/lib/chromedriver/
```

Finally, you're ready to run some tests.  

```
npm run test
```
The above script is going to launch and create html reports under `reports` directory

You can change test data (random username and password) from "./features/shared-objects/test-data.js"

Limitations
================

- The test coverage is built on top of `selenium-cucumber-js` framework which is appropriete for smaller projects. For diversified test scenarios, more control to the framework is recommended.


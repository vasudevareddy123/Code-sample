$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Facebooklogin.feature");
formatter.feature({
  "line": 1,
  "name": "Facebookreg",
  "description": "",
  "id": "facebookreg",
  "keyword": "Feature"
});
formatter.before({
  "duration": 355922606,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Validating facebook login page",
  "description": "",
  "id": "facebookreg;validating-facebook-login-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Facebookreg"
    },
    {
      "line": 3,
      "name": "@Testrun"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user navigates to facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user gives credential details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should suppose to able login",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookregStep.user_navigates_to_facebook_login_page()"
});
formatter.result({
  "duration": 47933771308,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(C:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe) on port 7055; process output follows: \n1484192551083\taddons.manager\tDEBUG\tApplication has been upgraded\r\n1484192551096\taddons.xpi\tDEBUG\tstartup\r\n1484192551096\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-local\r\n1484192551096\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-share\r\n1484192551098\taddons.xpi\tDEBUG\tIgnoring file entry whose name is not a valid add-on ID: C:\\Users\\fly2v\\AppData\\Local\\Temp\\anonymous1320797976506498250webdriver-profile\\extensions\\webdriver-staging\r\n1484192551098\taddons.xpi\tDEBUG\tcheckForChanges\r\n1484192551105\taddons.xpi\tDEBUG\tDirectory state JSON differs: cache [] state [{\"name\":\"app-global\",\"addons\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"descriptor\":\"C:\\\\Program Files (x86)\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"mtime\":1482549752696,\"rdfTime\":1402020940000}}},{\"name\":\"app-profile\",\"addons\":{\"fxdriver@googlecode.com\":{\"descriptor\":\"C:\\\\Users\\\\fly2v\\\\AppData\\\\Local\\\\Temp\\\\anonymous1320797976506498250webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"mtime\":1484192549863,\"rdfTime\":1484192549790}}}]\r\n1484192551109\taddons.xpi-utils\tDEBUG\tOpening XPI database C:\\Users\\fly2v\\AppData\\Local\\Temp\\anonymous1320797976506498250webdriver-profile\\extensions.json\r\n1484192551110\taddons.xpi\tDEBUG\tNew add-on fxdriver@googlecode.com installed in app-profile\r\n*** Blocklist::_loadBlocklistFromFile: blocklist is disabled\r\n1484192551280\taddons.xpi-utils\tDEBUG\tMake addon app-profile:fxdriver@googlecode.com visible\r\n1484192551281\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1484192551282\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1484192551282\taddons.xpi\tDEBUG\tNew add-on {972ce4c6-7e08-4474-a285-3208198ce6fd} installed in app-global\r\n1484192551283\taddons.xpi-utils\tDEBUG\tMake addon app-global:{972ce4c6-7e08-4474-a285-3208198ce6fd} visible\r\n1484192551283\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1484192551283\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1484192551287\taddons.xpi\tDEBUG\tUpdating database with changes to installed add-ons\r\n1484192551287\taddons.xpi-utils\tDEBUG\tUpdating add-on states\r\n1484192551287\taddons.xpi-utils\tDEBUG\tWriting add-ons list\r\n1484192553040\tDeferredSave.extensions.json\tDEBUG\tStarting timer\r\n1484192553093\tDeferredSave.extensions.json\tDEBUG\tStarting write\r\n1484192553171\tDeferredSave.extensions.json\tWARN\tWrite failed\r\n1484192553171\taddons.xpi-utils\tWARN\tFailed to save XPI database\r\nSystem JS : ERROR (null):0 - uncaught exception: [object Object]\r\nJavaScript error: chrome://fxdriver/content/server.js, line 61: NS_ERROR_XPC_CI_RETURNED_FAILURE: Component returned failure code: 0x80570015 (NS_ERROR_XPC_CI_RETURNED_FAILURE) [nsIJSCID.createInstance]\r\nconsole.error: \r\n  Could not write session state file \r\n  C:\\Users\\fly2v\\AppData\\Local\\Temp\\anonymous1320797976506498250webdriver-profile\\sessionstore.js\r\n  Message: Win error 32 during operation move on file C:\\Users\\fly2v\\AppData\\Local\\Temp\\anonymous1320797976506498250webdriver-profile\\sessionstore.js.tmp (The process cannot access the file because it is being used by another process.\r\r\n)\r\nJavaScript error: chrome://browser/content/urlbarBindings.xml, line 651: aUrl is undefined\r\n1484192577468\taddons.manager\tDEBUG\tshutdown\r\n1484192577468\taddons.xpi\tDEBUG\tshutdown\r\n1484192577468\taddons.xpi-utils\tDEBUG\tshutdown\r\n1484192577469\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1484192577470\tDeferredSave.extensions.json\tDEBUG\tFlush called while data is dirty\r\n1484192577476\tDeferredSave.extensions.json\tDEBUG\tStarting write\r\n1484192577511\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1484192577511\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 16\r\n1484192577511\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1484192577515\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n\nBuild info: version: \u00272.52.0\u0027, revision: \u00274c2593cfc3689a7fcd7be52549167e5ccc93ad28\u0027, time: \u00272016-02-11 11:22:43\u0027\nSystem info: host: \u0027LAPTOP-MTD81E0F\u0027, ip: \u0027192.168.0.25\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:125)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:271)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:119)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:216)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:211)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:207)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat com.rxr.framework.StepLibrary.Facebookreg.launch(Facebookreg.java:28)\r\n\tat com.rxr.framework.StepDefinition.FacebookregStep.user_navigates_to_facebook_login_page(FacebookregStep.java:17)\r\n\tat ✽.Given user navigates to facebook login page(Facebooklogin.feature:5)\r\nCaused by: org.openqa.selenium.firefox.NotConnectedException: Unable to connect to host 127.0.0.1 on port 7055 after 45000 ms. Firefox console output:\n1484192551083\taddons.manager\tDEBUG\tApplication has been upgraded\r\n1484192551096\taddons.xpi\tDEBUG\tstartup\r\n1484192551096\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-local\r\n1484192551096\taddons.xpi\tDEBUG\tSkipping unavailable install location app-system-share\r\n1484192551098\taddons.xpi\tDEBUG\tIgnoring file entry whose name is not a valid add-on ID: C:\\Users\\fly2v\\AppData\\Local\\Temp\\anonymous1320797976506498250webdriver-profile\\extensions\\webdriver-staging\r\n1484192551098\taddons.xpi\tDEBUG\tcheckForChanges\r\n1484192551105\taddons.xpi\tDEBUG\tDirectory state JSON differs: cache [] state [{\"name\":\"app-global\",\"addons\":{\"{972ce4c6-7e08-4474-a285-3208198ce6fd}\":{\"descriptor\":\"C:\\\\Program Files (x86)\\\\Mozilla Firefox\\\\browser\\\\extensions\\\\{972ce4c6-7e08-4474-a285-3208198ce6fd}\",\"mtime\":1482549752696,\"rdfTime\":1402020940000}}},{\"name\":\"app-profile\",\"addons\":{\"fxdriver@googlecode.com\":{\"descriptor\":\"C:\\\\Users\\\\fly2v\\\\AppData\\\\Local\\\\Temp\\\\anonymous1320797976506498250webdriver-profile\\\\extensions\\\\fxdriver@googlecode.com\",\"mtime\":1484192549863,\"rdfTime\":1484192549790}}}]\r\n1484192551109\taddons.xpi-utils\tDEBUG\tOpening XPI database C:\\Users\\fly2v\\AppData\\Local\\Temp\\anonymous1320797976506498250webdriver-profile\\extensions.json\r\n1484192551110\taddons.xpi\tDEBUG\tNew add-on fxdriver@googlecode.com installed in app-profile\r\n*** Blocklist::_loadBlocklistFromFile: blocklist is disabled\r\n1484192551280\taddons.xpi-utils\tDEBUG\tMake addon app-profile:fxdriver@googlecode.com visible\r\n1484192551281\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1484192551282\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1484192551282\taddons.xpi\tDEBUG\tNew add-on {972ce4c6-7e08-4474-a285-3208198ce6fd} installed in app-global\r\n1484192551283\taddons.xpi-utils\tDEBUG\tMake addon app-global:{972ce4c6-7e08-4474-a285-3208198ce6fd} visible\r\n1484192551283\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1484192551283\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1484192551287\taddons.xpi\tDEBUG\tUpdating database with changes to installed add-ons\r\n1484192551287\taddons.xpi-utils\tDEBUG\tUpdating add-on states\r\n1484192551287\taddons.xpi-utils\tDEBUG\tWriting add-ons list\r\n1484192553040\tDeferredSave.extensions.json\tDEBUG\tStarting timer\r\n1484192553093\tDeferredSave.extensions.json\tDEBUG\tStarting write\r\n1484192553171\tDeferredSave.extensions.json\tWARN\tWrite failed\r\n1484192553171\taddons.xpi-utils\tWARN\tFailed to save XPI database\r\nSystem JS : ERROR (null):0 - uncaught exception: [object Object]\r\nJavaScript error: chrome://fxdriver/content/server.js, line 61: NS_ERROR_XPC_CI_RETURNED_FAILURE: Component returned failure code: 0x80570015 (NS_ERROR_XPC_CI_RETURNED_FAILURE) [nsIJSCID.createInstance]\r\nconsole.error: \r\n  Could not write session state file \r\n  C:\\Users\\fly2v\\AppData\\Local\\Temp\\anonymous1320797976506498250webdriver-profile\\sessionstore.js\r\n  Message: Win error 32 during operation move on file C:\\Users\\fly2v\\AppData\\Local\\Temp\\anonymous1320797976506498250webdriver-profile\\sessionstore.js.tmp (The process cannot access the file because it is being used by another process.\r\r\n)\r\nJavaScript error: chrome://browser/content/urlbarBindings.xml, line 651: aUrl is undefined\r\n1484192577468\taddons.manager\tDEBUG\tshutdown\r\n1484192577468\taddons.xpi\tDEBUG\tshutdown\r\n1484192577468\taddons.xpi-utils\tDEBUG\tshutdown\r\n1484192577469\tDeferredSave.extensions.json\tDEBUG\tSave changes\r\n1484192577470\tDeferredSave.extensions.json\tDEBUG\tFlush called while data is dirty\r\n1484192577476\tDeferredSave.extensions.json\tDEBUG\tStarting write\r\n1484192577511\tDeferredSave.extensions.json\tDEBUG\tWrite succeeded\r\n1484192577511\taddons.xpi-utils\tDEBUG\tXPI Database saved, setting schema version preference to 16\r\n1484192577511\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1484192577515\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:113)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:271)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:119)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:216)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:211)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:207)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat com.rxr.framework.StepLibrary.Facebookreg.launch(Facebookreg.java:28)\r\n\tat com.rxr.framework.StepDefinition.FacebookregStep.user_navigates_to_facebook_login_page(FacebookregStep.java:17)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:80)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:714)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:901)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1231)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:127)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:111)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:767)\r\n\tat org.testng.TestRunner.run(TestRunner.java:617)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:334)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:329)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:291)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:240)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1198)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1194)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1123)\r\n\tat org.testng.TestNG.run(TestNG.java:1031)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:281)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:75)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:121)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FacebookregStep.user_gives_credential_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FacebookregStep.user_should_suppose_to_able_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 23949,
  "status": "passed"
});
formatter.uri("Gmailreg.feature");
formatter.feature({
  "line": 1,
  "name": "Gmailreg",
  "description": "",
  "id": "gmailreg",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8224221,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Validating Gmail login page",
  "description": "",
  "id": "gmailreg;validating-gmail-login-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Gmailreg"
    },
    {
      "line": 3,
      "name": "@Testrun"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user navigates to Gmail login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user fills authentication details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able login",
  "keyword": "Then "
});
formatter.match({
  "location": "GmailLoginStep.user_navigates_to_Gmail_login_page()"
});
formatter.result({
  "duration": 7988278422,
  "status": "passed"
});
formatter.match({
  "location": "GmailLoginStep.user_fills_authentication_details()"
});
formatter.result({
  "duration": 3600836407,
  "status": "passed"
});
formatter.match({
  "location": "GmailLoginStep.user_should_be_able_login()"
});
formatter.result({
  "duration": 275795148,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:48)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:20)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:27)\r\n\tat com.rxr.framework.StepLibrary.GmailLogin.loginverify(GmailLogin.java:36)\r\n\tat com.rxr.framework.StepDefinition.GmailLoginStep.user_should_be_able_login(GmailLoginStep.java:27)\r\n\tat ✽.Then user should be able login(Gmailreg.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 23521,
  "status": "passed"
});
});
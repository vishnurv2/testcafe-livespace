const createTestCafe = require('testcafe');

const browsers = [
   [
  "lambdatest:Chrome@89.0:Windows 10",
  "lambdatest:Chrome@90.0:Windows 10",
  "lambdatest:Chrome@89.0:Windows 10",
  "lambdatest:Firefox@89.0:Windows 10",
  "lambdatest:Chrome@89.0:Windows 10",
  "lambdatest:Chrome@90.0:Windows 10",
  "lambdatest:Chrome@89.0:Windows 10",
  "lambdatest:Firefox@89.0:Windows 10",
  "lambdatest:Chrome@89.0:Windows 10",
  "lambdatest:Firefox@89.0:Windows 10",
   ],
];
const runTest = async browser => {
  console.log('starting tests');
  await createTestCafe('localhost')
    .then(tc => {
      testcafe = tc;
      const runner = testcafe.createRunner();
      return runner
        .src(['tests/plainTest.js'])
        .browsers(browser)
        .run();
    })
    .then(async failedCount => {
      console.log('Tests failed: ' + failedCount);
      await testcafe.close();
      return;
    });
}
const runAllBrowsers = async () => {
  for (const browser of browsers) {
    await runTest(browser);
  }
}
runAllBrowsers();

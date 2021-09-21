const url = "https://www.livspace.com/in";
import { Selector as $, t } from 'testcafe';


fixture`Home Page`.page`${url}`
    .beforeEach(async t => {
        await t.maximizeWindow()
    });

test('should have proper title', async t => {
    await t.expect($("title").innerText).eql("Livspace: Hassle free dream home interiors for any budget","Title is not proper");
});
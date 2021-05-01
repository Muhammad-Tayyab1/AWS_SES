import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as FirstEmail from '../lib/first_email-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new FirstEmail.FirstEmailStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});

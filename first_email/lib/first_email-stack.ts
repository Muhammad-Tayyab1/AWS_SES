import * as cdk from '@aws-cdk/core';
import * as cognito from "@aws-cdk/aws-cognito";
import * as lambda from "@aws-cdk/aws-lambda";
import * as iam from "@aws-cdk/aws-iam";
export class FirstEmailStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const authEmail= new lambda.Function(this, 'authEmailFunction',{
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset('lambda-func'),
      handler: 'index.handler'
    });

    const userPool= new cognito.UserPool(this, 'UserPool',{
      selfSignUpEnabled: true,
      autoVerify: {email: true},
      signInAliases: { email: true},
      userVerification: {
        emailSubject: 'Verify Email first',
        emailBody: 'Hello {username}, Thanks  signing up to our application! Your verification Code is {####}',
        emailStyle: cognito.VerificationEmailStyle.CODE,
        smsMessage: 'Hello {username}, Thanks for signing up to our application! Your verification Code is {####}',
      },
      lambdaTriggers: {
        preSignUp: authEmail
      }
    })
  }
}

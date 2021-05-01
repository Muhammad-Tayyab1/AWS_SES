#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { FirstEmailStack } from '../lib/first_email-stack';

const app = new cdk.App();
new FirstEmailStack(app, 'FirstEmailStack');

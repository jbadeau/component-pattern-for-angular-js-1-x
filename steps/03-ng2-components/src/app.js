import 'zone.js';
import 'reflect-metadata';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import bootstrap from 'bootstrap';

//Angular 1 Vendor Import
import * as angular from 'angular';

//Import the upgradeAdapter singleton
import {upgradeAdapter} from './upgrade-adapter';

//Name the application
const APPNAME = 'app';

import uirouter from 'angular-ui-router';

import { routing, routingEventsLogger } from './app.config';

import common from './common/common.module';

import featureA from './feature-a/feature-a.module';
import featureB from './feature-b/feature-b.module';

const DEBUG = false;

const app = angular
    .module(APPNAME, [uirouter, common, featureA, featureB])
    .config(routing);

if (DEBUG) {
    app.run(routingEventsLogger);
}

upgradeAdapter.upgradeNg1Provider('$state');

upgradeAdapter.bootstrap(document.documentElement, [APPNAME]);

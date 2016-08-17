import {upgradeAdapter} from '../upgrade-adapter';

import angular from 'angular';

import { routing } from './feature-a.config.js';

import {FeatureAComponent} from './feature-a-component/feature-a-component';

export default angular
    .module('app.feature-a', [])
    .config(routing)
    .directive('featureAComponent', upgradeAdapter.downgradeNg2Component(FeatureAComponent))
    .name;
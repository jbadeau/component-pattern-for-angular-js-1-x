import {upgradeAdapter} from '../upgrade-adapter';

import angular from 'angular';

import { routing } from './feature-b.config.js';

import {SomeComponent} from './some-component/some-component';

export default angular
    .module('app.feature-b', [])
    .config(routing)
    .directive('someComponent', upgradeAdapter.downgradeNg2Component(SomeComponent))
    .name;
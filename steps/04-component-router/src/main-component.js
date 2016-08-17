import { Inject, Component, InjectMetadata } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { router } from './router';

import template from './main-component.tpl.html';
import {FeatureAComponent} from './feature-a/feature-a-component/feature-a-component';
import {UserInfoComponent} from './common/component/user-info-component';

@Component({
  selector: 'main-component',
  template: template,
  directives: [ROUTER_DIRECTIVES, UserInfoComponent]
})

@RouteConfig(router.config)

export class MainComponent {}
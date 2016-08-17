import {FeatureAComponent} from './feature-a/feature-a-component/feature-a-component';
import {SomeComponent} from './feature-b/some-component/some-component';

export const router = {
  config: [
    { path: '/feature-a', component: FeatureAComponent, name: 'FeatureA', useAsDefault: true },
    { path: '/feature-b', component: SomeComponent, name: 'FeatureB' }
  ]
};
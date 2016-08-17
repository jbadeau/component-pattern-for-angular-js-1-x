import 'zone.js';
import 'reflect-metadata';

import { provide } from '@angular/core';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import tbs from 'bootstrap';

import {
	  ROUTER_PROVIDERS,
	  RouteConfig,
	  Location} from '@angular/router-deprecated';
	  
	  import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { MainComponent } from './main-component';


bootstrap(MainComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);
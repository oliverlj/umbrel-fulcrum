import { setApplication } from '@ember/test-helpers';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

import Application from 'umbrel-fulcrum-frontend/app';
import config from 'umbrel-fulcrum-frontend/config/environment';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();

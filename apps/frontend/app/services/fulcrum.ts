import { tracked } from '@glimmer/tracking';
import Service from '@ember/service';

import { task } from 'ember-concurrency';
import config from 'umbrel-fulcrum-frontend/config/environment';

export default class FulcrumService extends Service {
  @tracked syncPercent = 0;

  fetchSyncPercentTask = task(this, async () => {
    this.syncPercent = await (await fetch(`${config.APP.apiUrl}/v1/fulcrum/syncPercent`)).json();
  });

  @tracked version = '';

  fetchVersionTask = task(this, async () => {
    this.version = await (await fetch(`${config.APP.apiUrl}/v1/fulcrum/version`)).json();
  });
}

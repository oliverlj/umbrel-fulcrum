import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

import { perform } from 'ember-concurrency-ts';

import type FulcrumService from 'umbrel-fulcrum-frontend/services/fulcrum';

export default class Home extends Component {
  @service declare fulcrum: FulcrumService;

  constructor(owner: unknown, args: never) {
    super(owner, args);
    perform(this.fulcrum.fetchVersionTask);
    perform(this.fulcrum.fetchSyncPercentTask);
  }

  get syncPercent() {
    return this.fulcrum.syncPercent >= 99.99 ? 100 : Number(this.fulcrum.syncPercent).toFixed(0);
  }
}

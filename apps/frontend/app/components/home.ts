import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

import type FulcrumService from 'umbrel-fulcrum-frontend/services/fulcrum';

export default class Home extends Component {
  @service declare fulcrum: FulcrumService;

  constructor(owner: unknown, args: never) {
    super(owner, args);
    this.fulcrum.fetchVersionTask.perform();
    this.fulcrum.fetchSyncPercentTask.perform();
  }

  get syncPercent() {
    return this.fulcrum.syncPercent >= 99.99 ? 100 : Number(this.fulcrum.syncPercent).toFixed(0);
  }

  get syncPercentNotZero() {
    return this.syncPercent > 0;
  }
}

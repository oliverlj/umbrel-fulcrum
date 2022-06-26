import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ConnectionInformation extends Component {
  private static readonly LOCAL_NETWORK = 'local';
  private static readonly TOR_NETWORK = 'tor';

  @tracked selectedNework = ConnectionInformation.LOCAL_NETWORK;

  get localNetwork() {
    return this.selectedNework === ConnectionInformation.LOCAL_NETWORK;
  }

  @action
  selectLocalNetwork() {
    this.selectedNework = ConnectionInformation.LOCAL_NETWORK;
  }

  get torNetwork() {
    return this.selectedNework === ConnectionInformation.TOR_NETWORK;
  }

  @action
  selectTorNetwork() {
    this.selectedNework = ConnectionInformation.TOR_NETWORK;
  }

  get connectionInformation() {
    return undefined;
  }
}

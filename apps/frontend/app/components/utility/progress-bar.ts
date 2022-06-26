import Component from '@glimmer/component';

interface ProgressBarArgs {
  percentage: number;
  colorClass: string;
  class: string;
}

export default class ProgressBar extends Component<ProgressBarArgs> {
  private static readonly LOCAL_NETWORK = 'local';
  private static readonly TOR_NETWORK = 'tor';

  get percentage() {
    return this.args.percentage || 0;
  }
}

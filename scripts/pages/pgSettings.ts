import PgSettingsDesign from 'generated/pages/pgSettings';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';

export default class PgSettings extends withDismissAndBackButton(PgSettingsDesign) {
  constructor(private router?: Router, private route?: Route) {
    super({});
  }

  /**
   * @event onShow
   * This event is called when the page appears on the screen (everytime).
   */
  onShow() {
    super.onShow();
    this.initDismissButton(this.router); //Addes a back button to the page headerbar.
  }

  /**
   * @event onLoad
   * This event is called once when the page is created.
   */
  onLoad() {
    super.onLoad();
  }
}

import PgHomeDesign from 'generated/pages/pgHome';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';
import HeaderBarItem from '@smartface/native/ui/headerbaritem';

export default class PgHome extends withDismissAndBackButton(PgHomeDesign) {
  constructor(private router?: Router, private route?: Route) {
    super({});
  }

  /**
   * @event onShow
   * This event is called when the page appears on the screen (everytime).
   */
  onShow() {
    super.onShow();
    //this.initBackButton(this.router); //Addes a back button to the page headerbar.
    this.headerBar.title ='Ana Sayfa'
    var letftItem = new HeaderBarItem();
    var rightItem = new HeaderBarItem();
    letftItem.image = 'images://drawer.png'
    rightItem.image = 'images://filter.png';
    this.headerBar.setLeftItem(letftItem);
    this.headerBar.setItems([
        rightItem
    ])
  }

  /**
   * @event onLoad
   * This event is called once when the page is created.
   */
  onLoad() {
    super.onLoad();
  }
}

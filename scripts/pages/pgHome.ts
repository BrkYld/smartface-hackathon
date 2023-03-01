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
    letftItem.image = 'images://settings.png'
    rightItem.image = 'images://filter.png';
    rightItem.onPress = () => {
        this.router.push('filter');
    }
    letftItem.onPress = () => {
        this.router.push('settings');
    }
    this.headerBar.leftItemEnabled = true;
    this.headerBar.setItems([
        rightItem
    ])
    this.headerBar.setLeftItem(letftItem);
    this.lvMain.refreshData();
  }

  /**
   * @event onLoad
   * This event is called once when the page is created.
   */
  onLoad() {
    super.onLoad();
    this.lvMain.onRowHeight = (index)=> {
        return 125;
    }
    this.lvMain.refreshData();
  }
}

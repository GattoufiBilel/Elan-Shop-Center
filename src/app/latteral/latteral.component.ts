import { Component, ViewChild} from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-latteral',
  templateUrl: './latteral.component.html',
  styleUrls: ['./latteral.component.css']
})
export class LatteralComponent {
      @ViewChild('sidebar') sidebar: SidebarComponent;
      public enableGestures: boolean = false;
      public type: string = 'Push';
      public onCreated(args: any): any {
          this.sidebar.element.style.visibility = '';
      }
      closeClick(): void {
          this.sidebar.hide();
      }

      toggleClick(): void{
        this.sidebar.toggle();
      }
}

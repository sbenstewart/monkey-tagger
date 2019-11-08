import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by <b><a href="https://akveo.com" target="_blank">Akveo</a></b> 2019</span>
    <div class="socials">
      <a href="https://github.com/sbenstewart/monkey-tagger" target="_blank" class="ion ion-social-github"></a>
      <a href="https://sbenstewart.in" target="_blank" class="ion ion-tshirt-outline"></a>
      <a href="mailto:sbenstewart@gmail.com" target="_blank" class="ion ion-ios-email"></a>
      <a href="www.linkedin.com/in/sbenstewart" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}

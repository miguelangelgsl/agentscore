import { Component }   from '@angular/core';


@Component({
	selector: 'breadcrumbs',
    template: `
    <ul class="breadcrumb">
      <li><a href="#">Home</a></li>
      <li><a href="#">Library</a></li>
      <li class="active">Data</li>
    </ul>
`
})
export class BreadcrumbsComponent {

}
import { Component } from '@angular/core';

@Component (
    {
        selector: 'app-content',
        templateUrl: './content.component.html',
        styleUrls: ['./content.component.css']
    }
)

export class ContentComponent {
    catList: String[] = ['iPhone X', 'ASUS_ROG_Phone', 'samsung_galaxy_s10', 'HUAWEI P30 Pro'];
}

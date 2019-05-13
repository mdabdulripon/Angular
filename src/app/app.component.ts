import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	
	public title = 'Multiple Http Call With';

	public headers: any;
	public rows: any;

	constructor( private _data: DataService) { }

	ngOnInit() {
		this._data.getData().subscribe(res => {
			console.log(`res 1`, res[0])
			console.log(`res 2`, res[1])
			this.headers = res[0].companyInfo;
			this.rows = res[1].rows;
		});
	}
}

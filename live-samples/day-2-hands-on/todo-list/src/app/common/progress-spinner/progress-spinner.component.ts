import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-progress-spinner',
	templateUrl: './progress-spinner.component.html',
	styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent {
	@Input()
	public text: string;

	@Input()
	public size: 'lg' | 'sm' | 'md' = 'lg';
}

export class Hero {
	_id: string;
	name: string;
	description: string;
	corporation: string;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}

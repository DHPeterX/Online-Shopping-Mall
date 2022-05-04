import { HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';

export class IResult {

	private serviceMsgCode: string;

	private serviceMsg: string;

	private errorMsgCode: string;

	private errorMsg: string;

	private status: HttpStatus;

	private data: [{}];

	public setData(key:string, value:any) {
		this.data = this.data[key] = value;
	}

	// success(): IResult {
	// 	let tgtResult: IResult = new IResult();
	// 	tgtResult.status = HttpStatus.OK;
	// 	return tgtResult;
	// }

	async success(): Promise<IResult> {
		let result: IResult = new IResult();
		return result;
	}

	async successInclData(inParams:any): Promise<IResult> {
		let result: IResult = new IResult();
		result.data.push(inParams);
		return result;
	}

	// failure(data: any): Promise<IResult> {
	// 	let result: IResult = new IResult();
	// 	this.result.data = data
	// 	return;
	// }

}

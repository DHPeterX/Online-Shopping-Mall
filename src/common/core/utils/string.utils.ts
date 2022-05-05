export class StringUtils {

	public static isEmpty(str: string): boolean {
		if(str == null || str == "" || str == undefined || str.length == 0) {
			return true;
		}
		return false;
	}
}

import { Database } from "../../database/database";
import { IDatabase } from "../../database/idatabase";

export class PasswordManagerComponent {
	private constructor(private database: IDatabase) {}

	public static build(): PasswordManagerComponent {
		const database = Database.getInstance();

		return new PasswordManagerComponent(database);
	}

	public getPasswords() {
		this.database.getPasswords({});
	}

	public createPassword() {
		return "Password created!";
	}
}

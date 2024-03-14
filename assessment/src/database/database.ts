import { GetPasswordsQuery, Password, Todo } from "../shared/types";
import { IDatabase } from "./idatabase";

export class Database implements IDatabase {
	private static _instance: IDatabase;

	private passwords: Password[] = [];

	public static getInstance(): IDatabase {
		if (!this._instance) {
			this._instance = new Database();
		}

		return this._instance;
	}

	public getPasswords(query: GetPasswordsQuery): Password[] {
		const { username, website, id } = query;
		let passwords = this.passwords;

		if (username) {
			passwords = passwords.filter(
				(password) => password.username === username
			);
		}

		if (website) {
			passwords = passwords.filter((password) => password.website === website);
		}

		if (id) {
			passwords = passwords.filter((password) => password.id === id);
		}

		return this.passwords;
	}

	public createPassword(newPassword: Password): void {
		this.passwords.push(newPassword);
	}

	public getPassword(id: string): Password | undefined {
		return this.passwords.find((password) => password.id === id);
	}

	public updatePassword(updatedPassword: Password): void {
		// Find the index of the password to update
		const index = this.passwords.findIndex(
			(password) => password.id === updatedPassword.id
		);
		// Update the password
		this.passwords[index] = updatedPassword;
	}

	public deletePassword(id: string): void {
		// Find the index of the password to delete
		const index = this.passwords.findIndex((password) => password.id === id);
		// Delete the password
		this.passwords.splice(index, 1);
	}
}

import { GetPasswordsQuery, Password, Todo } from "../shared/types";
import { IDatabase } from "./idatabase";

export class Database implements IDatabase {
	private static _instance: IDatabase;

	private todos: Todo[] = [];
	private passwords: Password[] = [];

	public static getInstance(): IDatabase {
		if (!this._instance) {
			this._instance = new Database();
		}

		return this._instance;
	}

	public getTodos(): Todo[] {
		return this.todos;
	}

	public getPasswords(query: GetPasswordsQuery): Password[] {
		const { username, website, id } = query;

		if (id) {
			return this.passwords.filter((password) => password.id === id);
		}

		if (username) {
			return this.passwords.filter(
				(password) => password.username === username
			);
		}

		if (website) {
			return this.passwords.filter((password) => password.website === website);
		}

		return this.passwords;
	}

	public createTodo(newTodo: Todo): void {
		this.todos.push(newTodo);
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

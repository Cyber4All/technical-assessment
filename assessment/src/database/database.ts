import { Password, Todo } from "../shared/types";
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

	public getPasswords(filters: any): Password[] {
		return this.passwords;
	}

	public createTodo(newTodo: Todo): void {
		this.todos.push(newTodo);
	}

	public createPassword(newPassword: Password): void {
		this.passwords.push(newPassword);
	}
}

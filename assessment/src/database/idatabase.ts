import { Password, Todo } from "../shared/types";

/**
 * Represents a database interface.
 */
export interface IDatabase {
	/**
	 * Retrieves all todos from the database.
	 * @returns An array of Todo objects.
	 */
	getTodos(): Todo[];

	/**
	 * Retrieves all passwords from the database.
	 * @returns An array of Password objects.
	 */
	getPasswords(filters: any): Password[];

	/**
	 * Creates a new todo in the database.
	 * @param newTodo The new todo to be created.
	 */
	createTodo(newTodo: Todo): void;

	/**
	 * Creates a new password in the database.
	 * @param newPassword The new password to be created.
	 */
	createPassword(newPassword: Password): void;
}

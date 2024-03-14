import { GetPasswordsQuery, Password, Todo } from "../shared/types";

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
	getPasswords(query: GetPasswordsQuery): Password[];

	/**
	 * Retrieves a password from the database.
	 * @param id The id of the password to retrieve.
	 * @returns The Password object.
	 */
	getPassword(id: string): Password | undefined;

	/**
	 * Updates a password in the database.
	 * @param id The id of the password to update.
	 * @param updates The updates to apply to the password.
	 */
	updatePassword(updatedPassword: Password): void;

	/**
	 * Deletes a password from the database.
	 * @param id The id of the password to delete.
	 */
	deletePassword(id: string): void;

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

export interface Password {
	id: string;
	website: string;
	username: string;
	password: string;
}

export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export interface GetPasswordsQuery {
	username?: string;
	website?: string;
	id?: string;
}

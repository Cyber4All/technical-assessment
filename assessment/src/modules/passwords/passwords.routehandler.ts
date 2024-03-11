import { NextFunction, Request, Response, Router } from "express";
import { PasswordManagerComponent } from "./passwords.component";

export class PasswordsRoutehandler {
	public static build(): Router {
		const router = Router();

		router.get("/passwords", this.getPasswords);
		router.post("/passwords", this.createPassword);

		return router;
	}

	private static getPasswords(req: Request, res: Response, next: NextFunction) {
		try {
			const passwords = PasswordManagerComponent.build().getPasswords();
			res.send(passwords);
		} catch (error) {
			next(error);
		}
	}

	private static createPassword(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			const password = PasswordManagerComponent.build().createPassword();
			res.send(password);
		} catch (error) {
			next(error);
		}
	}
}

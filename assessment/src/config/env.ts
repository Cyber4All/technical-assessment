/**
 * Represents the configuration for environment variables.
 */
export class EnvConfig {
	private static vars: Map<string, string>;

	/**
	 * Initializes the environment configuration.
	 */
	public static init() {
		this.vars = new Map<string, string>();
		this.loadEnv();
	}

	/**
	 * Loads the environment variables.
	 */
	private static loadEnv() {
		this.vars.set("PORT", process.env.PORT || "3000");
	}

	/**
	 * Retrieves the value of the specified environment variable.
	 * @param key - The key of the environment variable.
	 * @returns The value of the environment variable, or an empty string if not found.
	 */
	public static get(key: string): string {
		return this.vars.get(key) || "";
	}
}

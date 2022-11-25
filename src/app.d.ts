/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		ConfigState: import('$lib/types').ConfigState;
		AuthorizerProviderAction: import('$lib/types').AuthorizerProviderAction;
		AuthorizerInputState: import('$lib/types').AuthorizerInputState;
		AuthorizerState: import('$lib/types').AuthorizerState;
		OtpDataType: import('$lib/types').OtpDataType;
	}
	interface Error {
		message: string;
	}
	// interface PageData {}
	// interface Platform {}
}

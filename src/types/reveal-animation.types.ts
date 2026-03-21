type Unit = `${number}px` | `${number}%`;

export type MarginType =
	| Unit
	| `${Unit} ${Unit}`
	| `${Unit} ${Unit} ${Unit}`
	| `${Unit} ${Unit} ${Unit} ${Unit}`;

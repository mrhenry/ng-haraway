const libURL: string = '//s.assets.sh/haraway.js';
let injected: boolean = false;

export function injectAPI(): void {
	if (window['Haraway'] !== undefined) {
		return;
	}
	if (injected) {
		return;
	}

	console.warn(`please add \`<script src="${libURL}"></script>\` to your head`);

	injected = true;
	let script = document.createElement('script');
	script.setAttribute('src', libURL);
	document.head.appendChild(script);
}

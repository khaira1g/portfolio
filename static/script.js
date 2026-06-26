document.addEventListener("contextmenu", (event) => {
	event.preventDefault();
});

const links = [
	{ label: "github", href: "https://github.com/khaira1g" },
	{ label: "discord", href: "https://discord.com/users/1081934856642105394" },
];

function renderLinks() {
	const container = document.getElementById("links");
	for (const link of links) {
		const anchor = document.createElement("a");
		anchor.href = link.href;
		anchor.textContent = link.label;
		anchor.target = link.external === false ? "_self" : "_blank";
		anchor.rel = link.external === false ? "" : "noopener noreferrer";
		container.appendChild(anchor);
	}
}

renderLinks();

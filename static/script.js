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

// Logo shine effect on cursor proximity
const artwork = document.querySelector('.artwork');
const TRIGGER_DISTANCE = 200; // Distance in pixels to trigger shine
const SHINE_RADIUS = 150;

document.addEventListener('mousemove', (e) => {
	const rect = artwork.getBoundingClientRect();
	const logoX = rect.left + rect.width / 2;
	const logoY = rect.top + rect.height / 2;
	
	const cursorX = e.clientX;
	const cursorY = e.clientY;
	
	const distance = Math.sqrt(
		Math.pow(cursorX - logoX, 2) + Math.pow(cursorY - logoY, 2)
	);
	
	// Calculate shine position relative to logo
	const shineX = ((cursorX - rect.left) / rect.width) * 100;
	const shineY = ((cursorY - rect.top) / rect.height) * 100;
	
	artwork.style.setProperty('--shine-x', `${Math.max(0, Math.min(100, shineX))}%`);
	artwork.style.setProperty('--shine-y', `${Math.max(0, Math.min(100, shineY))}%`);
	
	if (distance < TRIGGER_DISTANCE) {
		artwork.classList.add('shine');
	} else {
		artwork.classList.remove('shine');
	}
	
	// Glitch effect on cursor near edges
	const edgeDistance = Math.min(
		cursorX,
		window.innerWidth - cursorX,
		cursorY,
		window.innerHeight - cursorY
	);
	
	const EDGE_THRESHOLD = 80;
	
	if (edgeDistance < EDGE_THRESHOLD) {
		document.body.classList.add('glitch');
		setTimeout(() => {
			document.body.classList.remove('glitch');
		}, 300);
	}
});

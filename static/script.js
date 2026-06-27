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

// Logo shine effect
const wrapper = document.querySelector('.artwork-wrapper');
const overlay = document.querySelector('.shine-overlay');
const TRIGGER_DISTANCE = 200;

document.addEventListener('mousemove', (e) => {
	if (!wrapper || !overlay) return;
	
	const rect = wrapper.getBoundingClientRect();
	const wrapperX = rect.left + rect.width / 2;
	const wrapperY = rect.top + rect.height / 2;
	
	const distance = Math.sqrt(
		Math.pow(e.clientX - wrapperX, 2) + Math.pow(e.clientY - wrapperY, 2)
	);
	
	// Calculate shine position
	const shineX = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
	const shineY = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
	
	overlay.style.setProperty('--shine-x', `${shineX}%`);
	overlay.style.setProperty('--shine-y', `${shineY}%`);
	
	if (distance < TRIGGER_DISTANCE) {
		overlay.classList.add('active');
	} else {
		overlay.classList.remove('active');
	}
	
	// Glitch on edge proximity
	const edgeDistance = Math.min(
		e.clientX,
		window.innerWidth - e.clientX,
		e.clientY,
		window.innerHeight - e.clientY
	);
	
	if (edgeDistance < 80) {
		document.body.classList.add('glitch');
		setTimeout(() => {
			document.body.classList.remove('glitch');
		}, 200);
	}
});

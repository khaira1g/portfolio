document.addEventListener("contextmenu", (event) => {
	event.preventDefault();
});

// Add more links here later: { label: "discord", href: "https://discord.com/users/..." }
const links = [{ label: "github", href: "https://github.com/khaira1g" }];

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

const tracks = [
	{
		src: "./music/track.mp3",
		label: "your track",
	},
];

let tuneFile;
let tuneMeta;
let tuneObject;
let marqueeElement;

function music() {
	if (!tuneObject || !marqueeElement) {
		tuneObject = document.getElementById("tune");
		marqueeElement = document.getElementById("marquee");
	}

	if (!tuneMeta) {
		tuneMeta = tracks[Math.floor(Math.random() * tracks.length)];
		tuneFile = tuneMeta.src;
	}

	if (!tuneObject.paused) {
		resetMarquee("♪ stopped ♪");
		tuneObject.pause();
		return;
	}

	tuneObject.src = tuneFile;
	tuneObject.load();
	tuneObject.volume = 0.5;
	tuneObject.play().catch(() => {
		resetMarquee("♪ add track.mp3 to static/music/ ♪");
	});

	resetMarquee(`♪ playing now : ${tuneMeta.label} ♪`);
}

function volume(event) {
	if (!tuneObject || !marqueeElement) {
		tuneObject = document.getElementById("tune");
		marqueeElement = document.getElementById("marquee");
	}

	if (tuneObject.paused) {
		return;
	}

	const delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
	flyaway(Math.round(tuneObject.volume * 100) + "%", event.clientX, event.clientY);
	if (tuneObject.volume + delta * 0.1 > 1 || tuneObject.volume + delta * 0.1 < 0) {
		return;
	}
	tuneObject.volume += delta * 0.1;
	tuneObject.volume = Math.max(0, Math.min(1, tuneObject.volume));
	event.preventDefault();
}

function resetMarquee(text) {
	const newMarquee = document.createElement("marquee");
	newMarquee.id = "marquee";
	newMarquee.scrollamount = "8";
	newMarquee.textContent = text;

	const oldMarquee = document.getElementById("marquee");
	oldMarquee.parentNode.replaceChild(newMarquee, oldMarquee);

	marqueeElement = newMarquee;
}

function flyaway(text, x, y) {
	const element = document.createElement("div");
	element.style.left = x + "px";
	element.style.top = y + "px";
	element.textContent = text;
	document.getElementById("flyaway").appendChild(element);
	element.classList.add("fade");

	element.addEventListener("animationend", () => {
		element.remove();
	});
}

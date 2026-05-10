document.addEventListener("DOMContentLoaded", () => {
	// Core elements
	const menu = document.querySelector(".context-menu");
	const shareWrapper = document.querySelector(".share-wrapper");
	const shareSublist = shareWrapper.querySelector("ul");
	const menuItems = menu.querySelectorAll('[role="menuitem"]');

	// Menu positioning
	function showMenu(x, y) {
		const vw = window.innerWidth;
		const vh = window.innerHeight;

		// Measure menu dimensions
		menu.style.display = "block";
		menu.style.visibility = "hidden";
		const mw = menu.offsetWidth;
		const mh = menu.offsetHeight;
		menu.style.visibility = "visible";

		// Calculate available space
		const distRight = vw - x;
		const distBottom = vh - y;

		// Adjust position to prevent overflow
		let left = x;
		let top = y;
		if (distRight < mw) left = vw - mw - 10;
		if (distBottom < mh) top = vh - mh - 10;

		// Position and show menu
		menu.style.left = `${left}px`;
		menu.style.top = `${top}px`;
		menu.style.display = "block";

		// Accessibility focus and state
		menu.focus();
		menu.setAttribute("aria-hidden", "false");
		shareWrapper.setAttribute("aria-expanded", "false");
	}

	function hideMenu() {
		menu.style.display = "none";
		shareSublist.style.display = "none";
		menu.setAttribute("aria-hidden", "true");
		shareWrapper.setAttribute("aria-expanded", "false");
	}

	// Smart sublist positioning
	function positionShareSublist() {
		const rect = shareWrapper.getBoundingClientRect();
		const vw = window.innerWidth;
		const vh = window.innerHeight;

		// Measure sublist dimensions
		shareSublist.style.display = "block";
		shareSublist.style.visibility = "hidden";
		const sublistWidth = shareSublist.offsetWidth;
		const sublistHeight = shareSublist.offsetHeight;
		shareSublist.style.visibility = "visible";

		// Reset positioning styles
		shareSublist.style.left = "auto";
		shareSublist.style.right = "auto";
		shareSublist.style.top = "0";
		shareSublist.style.bottom = "auto";

		// Calculate available space
		const spaceRight = vw - rect.right;
		const spaceLeft = rect.left;

		// Debug logging
		console.log("Positioning debug:", {
			viewportWidth: vw,
			sublistWidth: sublistWidth,
			shareRight: rect.right,
			spaceRight: spaceRight,
			spaceLeft: spaceLeft,
			requiredSpace: sublistWidth + 30,
		});

		// Determine optimal position
		const horizontalPosition =
			spaceRight >= sublistWidth + 30 ? "right" : "left";
		const verticalPosition =
			vh - rect.bottom >= sublistHeight + 20 ? "top" : "bottom";

		console.log("Position decision:", {
			horizontal: horizontalPosition,
			vertical: verticalPosition,
			spaceRight: spaceRight,
			threshold: sublistWidth + 30,
		});

		// Apply horizontal positioning
		if (horizontalPosition === "right") {
			shareSublist.style.left = "calc(100% - 5px)";
			shareSublist.style.right = "auto";
		} else {
			shareSublist.style.left = "auto";
			shareSublist.style.right = "calc(100% - 5px)";
		}

		// Apply vertical positioning
		if (verticalPosition === "top") {
			shareSublist.style.top = "0";
			shareSublist.style.bottom = "auto";
		} else {
			shareSublist.style.top = "auto";
			shareSublist.style.bottom = "0";
		}

		// Final boundary check
		setTimeout(() => {
			const sublistRect = shareSublist.getBoundingClientRect();

			// Force reposition if necessary
			if (sublistRect.right > vw - 10 && horizontalPosition === "right") {
				console.log("Forcing left positioning due to right overflow");
				shareSublist.style.left = "auto";
				shareSublist.style.right = "calc(100% - 5px)";
			} else if (sublistRect.left < 10 && horizontalPosition === "left") {
				console.log("Forcing right positioning due to left overflow");
				shareSublist.style.left = "calc(100% - 5px)";
				shareSublist.style.right = "auto";
			}
		}, 0);

		shareSublist.style.display = "block";
		shareWrapper.setAttribute("aria-expanded", "true");
	}

	// Keyboard navigation
	function handleKeyboardNavigation(e) {
		const currentItem = e.target;
		const currentIndex = Array.from(menuItems).indexOf(currentItem);

		switch (e.key) {
			case "ArrowDown":
				e.preventDefault();
				const nextIndex = (currentIndex + 1) % menuItems.length;
				menuItems[nextIndex].focus();
				break;
			case "ArrowUp":
				e.preventDefault();
				const prevIndex =
					currentIndex === 0
						? menuItems.length - 1
						: currentIndex - 1;
				menuItems[prevIndex].focus();
				break;
			case "Escape":
				hideMenu();
				break;
		}
	}

	// Event listeners
	document.addEventListener("contextmenu", (e) => {
		e.preventDefault();
		showMenu(e.clientX, e.clientY);
	});

	// Testing shortcut
	document.addEventListener("keydown", (e) => {
		if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
			showMenu(window.innerWidth / 2, window.innerHeight / 2);
		}
	});

	// Close on outside click
	document.addEventListener("click", (e) => {
		if (!menu.contains(e.target)) hideMenu();
	});

	// Share sublist interactions
	shareWrapper.addEventListener("mouseenter", positionShareSublist);
	shareWrapper.addEventListener("mouseleave", () => {
		shareSublist.style.display = "none";
		shareWrapper.setAttribute("aria-expanded", "false");
	});

	// Keyboard accessibility
	shareWrapper.addEventListener("keydown", (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			positionShareSublist();
		}
	});

	// Add keyboard navigation to all menu items
	menuItems.forEach((item) => {
		item.addEventListener("keydown", handleKeyboardNavigation);
	});
});

module.exports = function (removeBtn,url) {
	removeBtn.forEach(btn => {
		btn.addEventListener("click", async (e) => {
			e.preventDefault();

			const fakeID = parseInt(btn.parentElement.previousElementSibling.firstElementChild.textContent);
			btn.parentElement.parentElement.remove();

			await fetch(`${url}/${fakeID}`, {
				method: "DELETE"
			});
		});
	});
}
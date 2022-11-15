module.exports = function (url, checkArr, id) {
	checkArr.forEach((check, index) => {
		check.addEventListener("change", async (e) => {
			e.preventDefault();
			if (check.checked) {
				await fetch(`${url}/${parseInt(id[index].textContent)}`, {
					method: "PATCH",
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify({ isComplete: true })
				});
			} else {
				await fetch(`${url}/${parseInt(id[index].textContent)}`, {
					method: "PATCH",
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify({ isComplete: false })
				});
			}
		});
	});
};
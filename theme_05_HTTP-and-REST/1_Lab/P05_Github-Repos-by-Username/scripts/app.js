function loadRepos() {
	const BASE_URL = "https://api.github.com/users/"
	const inputUsername = document.getElementById("username");
	const username = inputUsername.value;
	const repos = document.getElementById("repos");

	fetch(`${BASE_URL}${username}/repos`)
		.then((res) => res.json())
		.then((data) => {
			Array.from(repos.children).forEach((child) => child.remove());
			console.log(data)
			data
				.forEach((repo) => {
					const aElement = document.createElement("a");
					aElement.textContent = repo.full_name;
					aElement.setAttribute("href", repo.html_url);
					const liElement = document.createElement("li");
					liElement.appendChild(aElement);
					repos.appendChild(liElement)
				});
		})
		.catch((err) => {
			const aElement = document.createElement("a");
			aElement.textContent = err;
			const liElement = document.createElement("li");
			liElement.appendChild(aElement);
			repos.appendChild(liElement)
		});
}


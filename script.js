function git() {
    var username = document.getElementById("text").value;
    var resultDiv = document.getElementById("result");

    if (username === "") {
        resultDiv.innerHTML = "Please enter a username.";
        return;
    }

    var url = `https://api.github.com/users/${username}`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            resultDiv.innerHTML = `
                <h2>${data.name}</h2>
                <p>${data.bio}</p>
                <img src="${data.avatar_url}" alt="Avatar">
            `;
        })
        .catch(error => {
            resultDiv.innerHTML = "User not found or an error occurred.";
            console.error('There has been a problem with your fetch operation:', error);
        });
}

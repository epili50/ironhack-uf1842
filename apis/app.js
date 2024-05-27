const button = document.querySelector('button')

button.addEventListener('click', async function (){
    const userName = document.querySelector('#username').value;
    console.log(userName);

    const response = await fetch (`https://api.github.com/users/${userName}`)
    console.log(response);

    const data = await response.json();
    console.log(data);

    document.querySelector('#fullName').textContent = data.name;
    document.querySelector('#bio').textContent = data.bio;
    document.querySelector('#profilePicture').src = data.avatar_url;
    document.querySelector('#homeUrl').innerHTML = `<a href = "${data.html_url}" target="_blank">${data.html_url}</a>`;

})
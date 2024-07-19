function git() {

    var orignalName =document.getElementById("text").value;
    
    console.log(orignalName);
    
    fetch("https://api.github.com/users/" + orignalName)
    
    .then((result) => result.json())
    
    .then((data) => {
    
    console.log(data);
    
    document.getElementById(
    
    "result"
    ).innerHTML=`<img src="${data.avatar_url}" alt="user_avatar"><br>${data.login}<br><h1>Total Repo: ${data.public_repos}</h1>`;
});
}
document.addEventListener('DOMContentLoaded', function() {
    const nomeUsuario = document.querySelector('#nome');
    const usernameUsuario = document.querySelector('#username');
    const avatarUsuario = document.querySelector('#avatar');
    const numeroRepositorios = document.querySelector('#numero-repositorios');
    const numeroSeguidores = document.querySelector('#numero-seguidores');
    const numeroSeguindo = document.querySelector('#numero-seguindo');
    const linkUsuario = document.querySelector('#link-user');
    const inputname = document.querySelector('#input-name');
    const errorMessage = document.querySelector('#error-message');

    document.querySelector('#formulario').addEventListener('submit', function(evento) {
        evento.preventDefault();
        const inputTyped = inputname.value;
        const endPoint = `https://api.github.com/users/${inputTyped}`

        fetch(endPoint)
        .then(function(resposta){
            if (resposta.ok) {
                return resposta.json();
            }
            else {
            }
        })
        .then(function(json) {
            const nameUser = json.name;
            const usernameUser = json.login;
            const avatarUser = json.avatar_url;
            const followingUser = json.following;
            const followersUser = json.followers;
            const reposUser = json.public_repos;
            const linkUser = json.html_url;

            nomeUsuario.innerHTML = nameUser;
            usernameUsuario.innerHTML = usernameUser;
            avatarUsuario.src = avatarUser;
            numeroRepositorios.innerHTML = reposUser;
            numeroSeguidores.innerHTML = followersUser;
            numeroSeguindo.innerHTML = followingUser;
            linkUsuario.href = linkUser;
            errorMessage.classList.remove("error");
        })
        .catch(function(erro){
            errorMessage.classList.add("error");
            nomeUsuario.innerHTML = "";
            usernameUsuario.innerHTML = "";
            avatarUsuario.src = "https://via.placeholder.com/180x180";
            numeroRepositorios.innerHTML = "";
            numeroSeguidores.innerHTML = "";
            numeroSeguindo.innerHTML = "";
            linkUsuario.href = "#";
            errorMessage.classList.add("error");
        })
        
        })
})
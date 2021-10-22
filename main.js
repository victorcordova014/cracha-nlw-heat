const linksSocialMedia = {
  github: 'victorcordova014',
  facebook: 'victor.cordova.397',
  youtube: 'RocketSeat',
  instagram: 'victorcordova014',
  twitter: 'rocketseat'
}

function changeSocialMediaLinks() {
  //document.getElementById('userName').textContent = 'Victor'
  //userName.textContent = 'Marcelo'
  github.href = `https://www.github.com/${linksSocialMedia.github}`
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProgileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      github.href = data.html_url
      userLogin.textContent = data.login
      bio.textContent = data.bio
      userImage.src = data.avatar_url
    })
}

getGitHubProgileInfos()

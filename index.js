// Add your code here
function submiData(name, mail) {
    let userData = {
        username:` ${name}`,
        email:`${mail}`
    }

    let ft = fetch('http://localhost:3000/users', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(object => {
        let id = object.id
        console.log(id);
        let div = document.querySelector('.idBox')
        newId = document.createElement('h2')
        newId.textContent = `The new id is : ${id}`
        div.appendChild(newId)
    })
    .catch((error) => {
        let err = document.createElement('h3')
        err.textContent = `${error.message}`
        let div = document.querySelector('.idBox')
        div.appendChild(err)
    });
    return ft
}

console.log('AJAX - warsztat - pobierz dane po kliknięciu przycisku');

let bttnGetData = document.getElementById('get-data');
console.log(bttnGetData);

const getData = () => {

    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(res => res.json())
        .then(data => {

            let pId = document.createElement('p');
            let pUserId = document.createElement('p');
            let pTitle = document.createElement('p');
            let pBody = document.createElement('p');

            pId.innerText = `Post ID: ${data.id}`;
            pUserId.innerText = `User ID ${data.userId}`
            pTitle.innerText = `Title: ${data.title}`;
            pBody.innerText = `Body: ${data.body}`;

            document.body.appendChild(pId);
            document.body.appendChild(pUserId);
            document.body.appendChild(pTitle);
            document.body.appendChild(pBody);

            //console.log(pBody);
        })
        .catch(error => {
            console.error(error);
        });
    //console.log(getData);
};

bttnGetData.addEventListener('click', getData);
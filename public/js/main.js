const URL = `http://localhost:3000/movements/`


const $container = document.querySelector('body');

$container.onclick = (e) => {
    const element = e.target;

    if (element.dataset.method === 'DELETE') {
        handleDelete(element.dataset, deleteRequestToAPI);
    }

    if (element.dataset.method === 'PUT') {
        handleEdit(element.dataset, editRequestToAPI);
        e.preventDefault();
    }
}

const handleEdit = (element, request) => {
    const $inputs = document.querySelectorAll('.form-field');

    const newDate = $inputs[0].value;
    const newDescription = $inputs[1].value;
    const newAmount = $inputs[2].value;



    const newRecord = {
        "date": newDate,
        "description": newDescription,
        "amount": newAmount
    }

    request(newRecord, element)
}

const handleDelete = (element, request) => {
    request(element);
}

const deleteRequestToAPI = ({ method, url }) => {

    fetch(url, {
        method
    })

    setTimeout(() => {
        window.location.href = "http://localhost:3000/";
    }, 60)

}

const editRequestToAPI = (element, { method, url }) => {
    fetch(url, {
        method,
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(element)
    }
    )

    setTimeout(() => {
        window.location.href = "http://localhost:3000/";
    }, 60)

}


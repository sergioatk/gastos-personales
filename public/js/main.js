const $datePicker = document.querySelector('input');
$datePicker.valueAsDate = new Date();

const $table = document.querySelector('table');

$table.onclick = (e) => {
    const element = e.target;
    
    if (element.dataset.method === 'DELETE') {
        handleDelete(element.dataset, requestToAPI);
    }
}

const handleDelete = (element, request) => {
    request(element);
}

const requestToAPI = ({method, url}) => {

    fetch(url, {
        method
    })
        
        setTimeout(() => {
            window.location.href = "http://localhost:3000/";
        }, 60)
        
}
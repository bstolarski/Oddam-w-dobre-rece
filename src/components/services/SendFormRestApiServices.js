export default function SendFormRestApiServices(data) {
    fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            if (res.status === 'success') {
                console.log('sukces!');
            } else {
                console.log('coś poszlo nie tak');
            }
        })
        .catch(err => console.log(err))
}
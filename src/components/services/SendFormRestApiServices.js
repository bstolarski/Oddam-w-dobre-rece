export default function SendFormRestApiServices(data, event) {
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
            if (res.status === 'success') {
                event(true);
            } else {
                event(false);
            }
        })
        .catch(err => console.log(err))
}
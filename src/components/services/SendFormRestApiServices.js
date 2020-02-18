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
        })
}
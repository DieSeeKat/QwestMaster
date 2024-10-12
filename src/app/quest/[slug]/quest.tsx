
async function fetchData(id: string) {
    let data = {};

    try {
        data = await fetch(`http://localhost:3000/api/quest/a`).then(res => res.json());

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }

    return data;
}

export default async function Quest() {
    let hint = "";

    data =

    console.log(hint);

    return (
        <div>
            <h1>Server Side Rendered Page</h1>
            <pre>{hint}</pre>
        </div>
    )
}
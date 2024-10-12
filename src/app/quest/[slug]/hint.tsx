export default async function Hint({ params } : { params: { slug: string }}) {

    let data = {
        hint: "",
        image: false
    };

    try {
        data = await fetch(`http://localhost:3000/api/quest/${params.slug}`).then(res => res.json());

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }

    const hint = data.hint;

    await new Promise(resolve => setTimeout(resolve, 2000));

    return (
        <div
            className="h-full w-full"
        >
            <div>{hint}</div>
        </div>
    )
}
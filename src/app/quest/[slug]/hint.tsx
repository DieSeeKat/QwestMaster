export default async function Hint({ params } : { params: { slug: string }}) {

    const baseURL = process.env.BASE_URL || 'http://localhost:3000';

    let data = {
        hint: "",
        image: false
    };

    try {
        data = await fetch(`${baseURL}/api/quest/${params.slug}`).then(res => res.json());
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }

    const hint = data.hint;

    await new Promise(resolve => setTimeout(resolve, 1000));

    return (
        <div
            className="h-full w-full"
        >
            <div>{hint}</div>
        </div>
    )
}
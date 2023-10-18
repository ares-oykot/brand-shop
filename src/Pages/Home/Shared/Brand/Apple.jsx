import { useLoaderData } from "react-router-dom";

const Apple = () => {
    const apple = useLoaderData();
    console.log(apple);
    return (
        <div>
            <h1>Apple</h1>
        </div>
    );
};

export default Apple;
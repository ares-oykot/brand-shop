import { useLoaderData } from "react-router-dom";

const Sony = () => {
    const sony = useLoaderData();
    console.log(sony);
    return (
        <div>
            <h1>Sony</h1>
        </div>
    );
};

export default Sony;
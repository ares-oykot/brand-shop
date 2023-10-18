import { useLoaderData } from "react-router-dom";

const Samsung = () => {
    const samsung = useLoaderData();
    console.log(samsung);
    return (
        <div>
            <h1>Samsung</h1>
        </div>
    );
};

export default Samsung;
import { useLoaderData } from "react-router-dom";

const Xiaomi = () => {
    const xiaomi = useLoaderData();
    console.log(xiaomi);
    return (
        <div>
            <h1>Xiaomi</h1>
        </div>
    );
};

export default Xiaomi;
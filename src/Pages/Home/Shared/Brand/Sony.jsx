import { useLoaderData } from "react-router-dom";
import Advertisement from "../Advertisement/Advertisement";

const Sony = () => {
    const sony = useLoaderData();
    console.log(sony);
    return (
        <div>
            <Advertisement></Advertisement>
        </div>
    );
};

export default Sony;
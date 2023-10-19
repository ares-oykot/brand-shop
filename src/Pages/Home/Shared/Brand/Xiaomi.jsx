import { useLoaderData } from "react-router-dom";
import Advertisement from "../Advertisement/Advertisement";

const Xiaomi = () => {
    const xiaomi = useLoaderData();
    return (
        <div>
            <Advertisement></Advertisement>
        </div>
    );
};

export default Xiaomi;
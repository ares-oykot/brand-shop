import { useLoaderData } from "react-router-dom";
import Advertisement from "../Advertisement/Advertisement";

const Samsung = () => {
    const samsung = useLoaderData();
    return (
        <div>
            <Advertisement></Advertisement>
        </div>
    );
};

export default Samsung;
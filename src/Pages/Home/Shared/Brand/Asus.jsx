import { useLoaderData } from "react-router-dom";
import Advertisement from "../Advertisement/Advertisement";

const Asus = () => {
    const asus = useLoaderData();
    return (
        <div>
            <Advertisement></Advertisement>
        </div>
    );
};

export default Asus;
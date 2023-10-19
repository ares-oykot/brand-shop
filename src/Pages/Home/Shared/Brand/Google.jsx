import { useLoaderData } from "react-router-dom";
import Advertisement from "../Advertisement/Advertisement";

const Google = () => {
    const google = useLoaderData();
    console.log(google);
    return (
        <div>
            <Advertisement></Advertisement>
        </div>
    );
};

export default Google;
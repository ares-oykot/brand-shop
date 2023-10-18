import { useLoaderData } from "react-router-dom";

const Google = () => {
    const google = useLoaderData();
    console.log(google);
    return (
        <div>
            <h1>Google</h1>
        </div>
    );
};

export default Google;
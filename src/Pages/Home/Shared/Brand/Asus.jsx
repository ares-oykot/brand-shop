import { useLoaderData } from "react-router-dom";

const Asus = () => {
    const asus = useLoaderData();
    console.log(asus);
    return (
        <div>
            <h1>Asus</h1>
        </div>
    );
};

export default Asus;
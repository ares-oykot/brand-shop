const Temporary = () => {
    const handleAddBrand = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const brand = { name, photo };
        fetch('https://brand-shop-server-g3w0fhpjo-soykots-projects.vercel.app/brands', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(brand)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    };
    return (
        <div>
            <div className="mx-32">
                <div className="bg-[#F4F3F0] mt-10 pt-10 py-16 rounded">
                    <form onSubmit={handleAddBrand} className="px-20 mt-4">
                        <div className="flex gap-5">
                            <div className="w-full">
                                <p className="font-semibold mb-2">Name</p>
                                <input className="bg-white w-full rounded-sm pl-3 py-1" placeholder="Enter coffee name" type="text" name="name" id="" />
                            </div>
                        </div>
                        <div className="mt-2">
                            <p className="font-semibold mb-2">Photo URL</p>
                            <input className="bg-white w-full rounded-sm pl-3 py-1" placeholder="Enter Photo URL" type="text" name="photo" id="" />
                        </div>
                        <input className="w-full mt-5 cursor-pointer bg-[#D2B48C] text-[#331A15] border border-[#331A15] text-xl font-semibold py-1 rounded hover:bg-[#a98453]" type="submit" value="Add Brand" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Temporary;
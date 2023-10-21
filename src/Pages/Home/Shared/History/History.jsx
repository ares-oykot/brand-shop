const History = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <h1 className="text-2xl text-center font-semibold my-5">Customers who viewed items in your browsing history also viewed</h1>
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
                <div className="border rounded bg-slate-200 p-3 hover:bg-slate-300 cursor-pointer duration-200">
                    <img className="rounded w-full h-32" src="https://i.ibb.co/CH5td2c/15ProMax.jpg" alt="" />
                    <p>Name : I phone 15 pro max</p>
                    <p>Price : 1199 $</p>
                    <p>Type : phone</p>
                    <p>Brand : apple</p>
                    <p>Rating : 5</p>
                </div>
                <div className="border rounded bg-slate-200 p-3 hover:bg-slate-300 cursor-pointer duration-200">
                    <img className="rounded w-full h-32" src="https://i.ibb.co/gZP0vy7/galaxy-Book3-Ultra.png" alt="" />
                    <p>Name : Galaxy book 3 ultra</p>
                    <p>Price : 2399 $</p>
                    <p>Type : laptop</p>
                    <p>Brand : samsung</p>
                    <p>Rating : 4</p>
                </div>
                <div className="border rounded bg-slate-200 p-3 hover:bg-slate-300 cursor-pointer duration-200">
                    <img className="rounded w-full h-32" src="https://i.ibb.co/hWx1WY4/mac-Book-Pro.png" alt="" />
                    <p>Name : MacBook Pro</p>
                    <p>Price : 2499</p>
                    <p>Type : laptop</p>
                    <p>Brand : apple</p>
                    <p>Rating : 5</p>
                </div>
                <div className="border rounded bg-slate-200 p-3 hover:bg-slate-300 cursor-pointer duration-200">
                    <img className="rounded w-full h-32" src="https://i.ibb.co/sPjm08B/Asus-ROG-Phone-7-Ultimate.jpg" alt="" />
                    <p>Name : ROG Phone 7 Ultimate</p>
                    <p>Price : 1399</p>
                    <p>Type : phone</p>
                    <p>Brand : asus</p>
                    <p>Rating : 4</p>
                </div>
                <div className="border rounded bg-slate-200 p-3 hover:bg-slate-300 cursor-pointer duration-200">
                    <img className="rounded w-full h-32" src="https://i.ibb.co/k22J0dX/x3Pro.png" alt="" />
                    <p>Name : Xiaomi Poco X3 Pro</p>
                    <p>Price : 290</p>
                    <p>Type : phone</p>
                    <p>Brand : xiaomi</p>
                    <p>Rating : 1</p>
                </div>
                <div className="border rounded bg-slate-200 p-3 hover:bg-slate-300 cursor-pointer duration-200">
                    <img className="rounded w-full h-32" src="https://i.ibb.co/09yvwLX/Sony-FES-Watch.jpg" alt="" />
                    <p>Name : Sony-FES-Watch</p>
                    <p>Price : 239</p>
                    <p>Type : watch</p>
                    <p>Brand : sony</p>
                    <p>Rating : 4</p>
                </div>
            </div>
        </div>
    );
};

export default History;
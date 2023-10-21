import flag1 from "../../../../assets/Bangladesh.png"
import flag2 from "../../../../assets/Uganda.png"
import flag3 from "../../../../assets/Pakistan.png"
import flag4 from "../../../../assets/Africa.png"
import payment1 from "../../../../assets/bikas.png"
import payment2 from "../../../../assets/paypal.png"
import payment3 from "../../../../assets/visa.png"
import payment4 from "../../../../assets/Bitcoin.png"
const Available = () => {
    return (
        <div className="max-w-screen-xl mx-auto my-4">
            <div className="flex justify-center items-center flex-col lg:flex-row lg:justify-between bg-yellow-400 p-5 rounded-md">
                <div className="order-2 lg:order-1">
                    <div className="flex gap-1">
                        <img className="h-20 w-36 hover:border-2 hover:border-yellow-400 hover:duration-200" src={flag1} alt="" />
                        <img className="h-20 w-36 hover:border-2 hover:border-yellow-400 hover:duration-200" src={flag4} alt="" />
                    </div>
                    <div className="flex gap-1 mt-1">
                        <img className="h-20 w-36 hover:border-2 hover:border-yellow-400 hover:duration-200" src={flag2} alt="" />
                        <img className="h-20 w-36 hover:border-2 hover:border-yellow-400 hover:duration-200" src={flag3} alt="" />
                    </div>
                </div>
                <div className="order-1 lg:order-2 text-center">
                    <h1 className="text-3xl font-bold text-center mb-5">Our Payment Method and Available Country</h1>
                    <p className="text-xl font-semibold">You can get products from us from the mentioned countries.</p>
                    <p className="text-xl font-semibold">And you can pay us through these payment methods.</p>
                    <p className="text-lg">And hopefully you won't be disappointed.</p>
                </div>
                <div className="order-3 lg:order-3">
                    <div className="flex gap-1">
                        <img className="h-20 w-36 hover:border-2 hover:border-yellow-400 hover:duration-200" src={payment1} alt="" />
                        <img className="h-20 w-36 hover:border-2 hover:border-yellow-400 hover:duration-200 border" src={payment2} alt="" />
                    </div>
                    <div className="flex gap-1 mt-1">
                        <img className="h-20 w-36 hover:border-2 hover:border-yellow-400 hover:duration-200" src={payment3} alt="" />
                        <img className="h-20 w-36 hover:border-2 hover:border-yellow-400 hover:duration-200" src={payment4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Available;
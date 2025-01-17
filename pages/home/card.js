import React from 'react';
import cardSvg from "../../assets/card.svg";
import Image from 'next/image';
import {useRouter} from 'next/router';
// import {useAuthState} from "react-firebase-hooks/auth";

const Card = ({setCurrentPage}) => {

    const router = useRouter();

    return (
        <div className="w-full h-fit bg-white rounded-lg shadow-md">
            <div className="w-full h-48 p-4 rounded-lg flex justify-between bg-[#008037] bg-opacity-50">
                <div className="flex flex-col w-1/2 justify-between">
                    <div className="">
                        <h1 className="text-sm">Card Balance</h1>
                        <h1 className="font-bold text-xl">10000</h1>
                    </div>
                    <div className="">
                        <h1>Surendar PD</h1>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <Image src={cardSvg} alt={"card"}/>
                </div>
            </div>
            <div className="p-4 flex flex-col gap-4">
                <div>
                    <h1 className="text-sm text-slate-500">Feden Id</h1>
                    <h1 className="">surendarpd008@okfeden</h1>
                </div>
                <div>
                    <h1 className="text-sm text-slate-500">Validity</h1>
                    <h1 className="">Jun 2027</h1>
                </div>
                <div>
                    <h1 onClick={() => setCurrentPage('transaction')} className="text-sm text-slate-500">See All Transactions</h1>
                </div>
            </div>
        </div>
    )
}

export default Card
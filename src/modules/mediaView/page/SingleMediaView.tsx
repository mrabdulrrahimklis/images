import {Nav} from "../../../core/components/sharede/Nav.tsx";
import {useParams} from "react-router-dom";
import {useSingleMedia} from "../hooks/useSingleMedia.tsx";
import {ToastContext} from "../../../core/providers/ToastContext.tsx";
import {useContext, useState} from "react";
import logo from '../../../assets/logo.png'
import {CardContext} from "../../../core/providers/CardContext.tsx";

export const SingleMediaView = () => {
    const [lineClamp, setLineClamp] = useState(false)
    const { id } = useParams();
    const { singleMediaView, areSingleMediaViewLoading } = useSingleMedia({ id })

    const toast = useContext(ToastContext);
    const card = useContext(CardContext);

    const addToBasket = () => {
        toast.open('Added to basket!')
        card.setCard(singleMediaView.title)
    }

    if (areSingleMediaViewLoading) {
        return <>
            <Nav isNotHomeScreen/>
            <div className='w-full h-full flex justify-items-center mt-16 justify-center'>
                <h3 className='text-md'>
                    <img className='animate-ping' src={logo} alt='Logo' />
                    Loading...
                </h3>
            </div>
            </>
    }

    return <>
        <Nav isNotHomeScreen/>
        <div>
            <div className="lg:flex h-screen w-full items-center justify-center">
                <div className="w-full lg:w-2/3 px-16 py-12 bg-gray-100 h-full">
                    <h1 className='text-2xl font-bold pb-2 capitalize'>{singleMediaView.title}</h1>
                    <h2 className={`text-md capitalize ${lineClamp ? '' : 'line-clamp-1'}`}>{singleMediaView.caption} </h2>
                    {!lineClamp && <span onClick={() => setLineClamp(true)} className='text-gray-500 underline'>{'Show more'}</span>}
                    <div className='h-3/5 flex justify-center mt-12'>
                        <img alt={singleMediaView.caption} src={singleMediaView.mediasrc}/>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 bg-white b h-full pl-8 pr-16 py-10">
                    <p className="text-gray-600 text-xl font-medium text-center">Choose your Licence</p>
                    <div className="bg-gray-200 border border-gray-400 mt-4">
                        <div className="flex justify-between border-b border-gray-400 p-4">
                            <p className="text-gray-600 text-xl font-medium">Premium RF</p>
                            <p className="text-gray-600 text-xl font-medium"><span
                                className="text-gray-400 text-sm mr-1">from</span>99 Credits</p>
                        </div>


                        {singleMediaView?.usagelicences?.map((licences, index) => (
                            <div key={index} className="pb-4 mx-4">
                                <div
                                    className={`py-4 ${singleMediaView?.usagelicences?.length === index + 1 ? "" : "border-b border-black"}`}
                                >
                                    <div className="flex justify-between mb-2">
                                        <div className="flex">
                                            <input
                                                type="radio"
                                                name="credits"
                                                className="appearance-none m-1 mr-2 w-4 h-4 border border-gray-400 checked:bg-cyan-400 checked:border-white"
                                            />
                                            <p className="text-gray-600 text-md font-medium">{licences.name}</p>
                                        </div>
                                        <p className="text-gray-600 text-md font-medium">{licences.price} {licences.currency}</p>
                                    </div>
                                    <p className="text-gray-400 text-sm font-medium">72dpi @ 1000px x 1000px</p>
                                    <p className="text-gray-400 text-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p>
                                </div>
                            </div>))}
                        </div>

                    <div className="flex justify-between space-x-4 mt-4 pb-8 border-b border-gray-600">
                        <button onClick={addToBasket} className="py-2 w-full px-3 border border-gray-600">
                            Add to Basket
                        </button>
                        <button className="bg-cyan-400 w-full py-2 px-3">Buy Now</button>
                    </div>

                    <div className='pt-8'>
                        <div className="flex flex-row mb-1">
                            <div className='basis-1/4 uppercase'>Credit</div>
                            <div className='basis-3/4 uppercase'>{singleMediaView.creator}</div>
                        </div>
                        <div className="flex flex-row mb-1">
                            <div className='basis-1/4 uppercase'>Image ID</div>
                            <div className='basis-3/4 uppercase'>{singleMediaView.mediaid}</div>
                        </div>
                        <div className="flex flex-row mb-1">
                            <div className='basis-1/4 uppercase'>Max Size</div>
                            <div
                                className='basis-3/4 uppercase'>{singleMediaView.height} X {singleMediaView.width} PIXELS
                            </div>
                        </div>
                        <div className="flex flex-row mb-1">
                            <div className='basis-1/4 uppercase'>Date</div>
                            <div
                                className='basis-3/4 uppercase'>{singleMediaView.creationdate && Intl.DateTimeFormat("en", {
                                dateStyle: "short",
                            }).format(new Date(singleMediaView.creationdate))}</div>
                        </div>
                        <div className="flex flex-row mb-1">
                            <div className='basis-1/4 uppercase'>Info</div>
                            <div className='basis-3/4 uppercase'>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                                rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est
                                ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque
                                fermentum dui faucibus in ornare.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}
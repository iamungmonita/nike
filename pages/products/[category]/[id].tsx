import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import style from '@/styles/Product.module.scss'
import { AHelmet, Button, Carousel2, IconButton } from '@/core';
import useApi from '@/hooks/useApi';
import { Category } from '@/models/Category';
import { cartCounter } from '@/store/counterStore';
import { getAllProducts } from '@/service/products';

type Props = {};
export type productDetails = {
    name: string,
    infos: string[],
    isExpanded?: boolean | undefined

}
export default function index({ }: Props) {
    const [refresh, setRefresh] = useState(false)
    const [info, setInfo] = useState<string[]>([])
    const [products, setProducts] = useState<Category[]>([]);
    const promiseAll = () => Promise.resolve(getAllProducts());
    const { response } = useApi({ service: promiseAll, effects: [] });
    const [productId, setProductId] = useState<number>();
    const router = useRouter();
    const [length, setLength] = useState<boolean>(false)
    const { id, categories } = router.query;
    const filterId = Number(id);
    const { addToCart, increment, removeAll } = cartCounter();


    useEffect(() => {
        if (response?.length) {
            setProducts(response);
        }
    }, [response?.length, refresh]);

    const result = products.filter((pro) => pro.id === filterId);
    function handleSubmit(e: any) {
        e.preventDefault();
        const filterProduct = products.filter((product) => product.id === productId);
        addToCart(filterProduct[0]);
        increment(filterProduct[0].price, 0);
        // removeAll()
    }
    useEffect(() => {
        window.addEventListener('scroll', function scroll() {
            if (this.scrollY > 1200) {
                setLength(true);
            } else {
                setLength(false);
            }
        });
    }, [length]);

    function onClickExpanded(index: number) {
        result.map((a) => a.features[index].isExpanded = !a.features[index].isExpanded)
        result.map((a) => setInfo(a.features[index].details))
        setRefresh(!refresh)
    }
    return (
        <>
            <div className='px-[5%]'>
                {result.map((res, index) => (
                    <div key={index} className="max-w-6xl mx-auto">
                        <AHelmet>{res.name}</AHelmet>
                        <div className="grid md:grid-cols-6 text-left py-5 gap-x-10">

                            {/* Small Screen Only */}
                            <div className='md:hidden pb-5 col-span-6'>
                                {res.material && <p className='text-red-800 font-medium text-sm'>{res.material}</p>}
                                <h2 className="text-2xl font-medium">{res.name}</h2>
                                <h2 className="text-md">{`${res.categoryId === 1 ? `Men's Shoes` : res.categoryId === 2 ? `Women's Shoes` : `Kid's Shoes`}  `}</h2>
                                <span className='flex gap-x-5 items-center'>
                                    <h2 className="text-md">{'$' + res.price}</h2>
                                    {res.discountedPrice && <p className='line-through text-sm'>{"$" + res.discountedPrice}</p>}
                                </span>
                            </div>
                            {/* Small Screen Only */}

                            <div className="flex gap-x-2 col-span-6 md:col-span-4 h-auto">
                                <div className="flex-col min-w-[30px] gap-2 hidden md:flex overflow-x-hidden mr-5">
                                    {[1, 2, 3, 4, 5].map((pic, index) => (
                                        <div className="min-w-[70px] mr-5" key={index}>
                                            <Image className="object-cover rounded-md w-full h-full" src={res.picture} height={60} width={60} alt="" />
                                        </div>
                                    ))}
                                </div>
                                <div className="w-full ">
                                    <Image className="w-full h-full object-contain object-top aspect-auto" src={res.picture} height={400} width={400} alt="" />
                                </div>
                            </div>
                            <div className={`p-2 col-span-6 space-y-5 md:col-span-2 md:overflow-y-scroll md:pr-5 md:h-[100vh] ${style.scroll__bar}`}>
                                <div className='hidden md:block'>
                                    {res.material && <p className='text-red-800 font-medium text-sm'>{res.material}</p>}
                                    <h2 className="text-2xl font-medium">{res.name}</h2>
                                    <h2 className="text-md">{`${res.categoryId === 1 ? `Men's Shoes` : res.categoryId === 2 ? `Women's Shoes` : `Kid's Shoes`}  `}</h2>
                                    <span className='flex gap-x-5 items-center'>
                                        <h2 className="text-md">{'$' + res.price}</h2>
                                        {res.discountedPrice && <p className='line-through text-sm'>{"$" + res.discountedPrice}</p>}
                                    </span>
                                </div>
                                <div className="gap-x-2 flex max-w-[200px]">
                                    <Image className="object-cover w-full h-full rounded-md" src={res.picture} height={100} width={100} alt="" />
                                    <Image className="object-cover w-full h-full rounded-md" src={res.picture} height={100} width={100} alt="" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="font-medium">Select Size</div>
                                    <div className="font-medium text-gray-500">Size Guides</div>
                                </div>
                                <div className="flex gap-1 flex-wrap justify-evenly">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, index) => (
                                        <button key={index} className="border flex-grow px-3  py-2 rounded-md min-w-[70px]">{num}</button>
                                    ))}
                                </div>
                                <div className="text-center">
                                    <p>4 interest-free payments of $32.50 with
                                        <span className='font-medium'> Klarna</span>.
                                        <span className="underline">Learn More</span>
                                    </p>
                                </div>
                                <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
                                    <Button ButtonName="Add to Bag" ButtonTextWhiteBackgroundBlack={true} customStyle={`p-5 hover:bg-hover w-full ${length && 'md:hidden fixed bottom-0 rounded-none z-20 left-0'}`} onClick={() => setProductId(res.id)} />
                                    <Button ButtonName="Favorite" customStyle={'p-5 bg-white text-black border hover:border-black w-full'} />
                                </form>
                                <div>
                                    <br />
                                    <p>*Shipping</p>
                                    <p>To get accurate shipping information <span className='font-medium underline'>Edit location</span></p>
                                    <br />
                                    <h2>Free Pickup</h2>
                                    <h2 className='font-medium underline'> Find a Store</h2>
                                    <br />
                                    <p className='text-sm text-gray-400'>*Faster shipping options might be available</p>
                                </div>
                                <div className='p-5 bg-gray-100'>
                                    <p>This product is made 100% recycled polyester fibers.</p>
                                </div>
                                <div>
                                    <p>Pack collection brings you the best of both worlds. It's made with sturdy woven fabric and GORE-TEX material to keep the wind and rain at bay. Clean lines, a fold-down collar and hidden button-front closure give you timeless protection you can dress up for a polished look or layer underneath with a hoodie for more casual, modern style.</p>
                                    <br />
                                    <div className='pl-[5%]'>
                                        <li>Shown: Mica Green/Mica Green</li>
                                        <li>Style: DV9970-330</li>
                                    </div>
                                </div>
                                <div>
                                    <p className='underline font-medium'>View Product Details</p>
                                </div>
                                <div>

                                    {res.features.map((items, index) =>
                                        <div key={index} className='border-b  py-3'>
                                            <span onClick={() => onClickExpanded(index)} className='flex justify-between items-center'>
                                                <p className='font-medium text-lg'>{items.feature}</p>
                                                <IconButton IconImage={`${items.isExpanded ? '/icons/arrow_up.svg' : '/icons/arrow_down.svg'}`} IconWidth={20} IconHeight={20} NoBackgroundHover={true} NoPadding={true} />
                                            </span>
                                            <ul className='list-disc pl-[5%]'>
                                                {items.isExpanded && items.details && items.details.map((detail, index) => <li key={index} className='text-sm'>{detail}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='space-y-3 my-10'>
                            <h2 className='font-medium text-2xl'>How are we wearing it.</h2>
                            <p className='text-sm text-gray-500 max-w-[80%]'>Upload your photo or mention @Nike on Instagram for a chance to be featured. </p>
                            <Button ButtonName='Upload Your Photo' ButtonTextWhiteBackgroundBlack={true} customStyle={`border rounded-full border-black py-1 px-5`} />
                        </div>

                    </div>
                ))}

            </div>
            <Carousel2 productItem={products} CardVersion={2} itemTitle="Complete Look" /></>
    );
}

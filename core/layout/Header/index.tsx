import HeaderBottom from './HeaderBottom';
import HeaderMiddle from './HeaderMiddle';
import HeaderTop from './HeaderTop';

export default function Header() {
    return (
        <section>
            <div className='w-screen'>
                <div className='flex flex-col justify-between items-center'>
                    <HeaderTop />
                    <HeaderMiddle />
                    <HeaderBottom />
                </div>
            </div>
        </section>
    )
}
import HeaderBottom from './HeaderBottom';
import HeaderMiddle from './HeaderMiddle';
import HeaderTop from './HeaderTop';

export default function Header() {
    return (
        <section className='bg-header'>
            <HeaderTop />
            <HeaderMiddle />
            <HeaderBottom />
        </section>
    )
}
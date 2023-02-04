

export const NavAnchor = (props: {href:string, text: string}) => {

    return (
        <li>
            <a href={props.href} className='block p-3 transition-colors ease-linear duration-300 text-black bg-[#F2F2F2]/70  hover:text-[#F2F2F2] hover:bg-black sm:pl-5 sm:pr-5'>{props.text}</a>
        </li>
    )
}
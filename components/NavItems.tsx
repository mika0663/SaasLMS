import Link  from "next/link";

const navItems = [
    {label: 'Home', href: '/'},
    {label: 'About', href: '/about'},
    {label: 'My Journey', href: 'my-journey'},   
]


const NavItems = () => {
  return (
    <nav className="flex items-center gap-4">
        {navItems.map(({ label,href}) => (
            <Link href = {href} key={label}>
                {label}
            </Link>
        ))}
        </nav> )
}

export default NavItems

import React from 'react'
import Link from 'next/link'
import { Home, User, FolderGit2, Phone, Github, Linkedin, Newspaper, FileText } from 'lucide-react'

const getIcon = (icon) => {
    switch (icon) {
        case 'home':
            return <Home className='w-full h-auto' strokeWidth={2} size={28} />
        case 'about':
            return <User className='w-full h-auto' />
        case 'projects':
            return <FolderGit2 className='w-full h-auto' />
        case 'contact':
            return <Phone className='w-full h-auto' />
        case 'github':
            return <Github className='w-full h-auto' />
        case 'linkedin':
            return <Linkedin className='w-full h-auto' />
        case 'blog':
            return <Newspaper className='w-full h-auto' />
        case 'resume':
            return <FileText className='w-full h-auto' />
        default:
            break;
    }
}

const NavButton = ({ x, y, label, link, icon, newTab }) => {
    return (
        <div
            className='absolute cursor-pointer  '  // Add the group class here
            style={{ transform: `translate(${x}, ${y})` }}
        >
            <Link href={link} target={newTab ? '_blank' : '_self'}
                className="backdrop-blur-[108px] text-foreground border border-accent/5 rounded-full flex items-center justify-center shadow-glass-inset hover:shadow-glass-sm"
                aria-label={label} name={label}
            >
                <span className='relative flex w-14 h-14 p-4 animate-spin-reverse-slow group-hover:pause stroke-white hover:text-slate-800 '>  {/* Add group-hover class */} 
                    <span className='peer'>{getIcon(icon)}</span>
                    <span className='absolute hidden px-2  left-full mx-2 top-1/2 text-1xl text-whiteS  bg-gray-700 -translate-y-1/2 text-foreground text-lg rounded-md shadow-lg stroke-white whitespace-nowrap peer-hover:block '>
                        {label}
                    </span>
                </span>
</Link>
        </div>
    )
}

export default NavButton

"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Navigation({ showBlogLink = false }) {
    // const [mobileView, setMobileView] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            let isMobileView = document.documentElement.clientWidth < 640
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.addEventListener("resize", handleResize)
        }
    }, [])

    function toggleMenu() {
        if (showMobileMenu) setShowMobileMenu(false)
        else setShowMobileMenu(true)
    }

    return (
        <nav className="w-screen px-1 py-2 fixed flex justify-between">
            <Link aria-label="To front page" href="/#" className="px-4 py-2">
                pettmatt
            </Link>

            { !showMobileMenu &&
                <Links menuClassName="wide-screen-menu" showbloglink={ showBlogLink } />
            }

            { showMobileMenu &&
                <div className="burger-container">
                    <button aria-label="mobile navigation toggle button" id="burger-button" onClick={ toggleMenu }>
                        { 
                            (mobileMenuOpen)
                                ? "X"
                                : <Image src="/menu-icon.svg" className="h-12 px-4"
                                    alt="Mobile open the menu icon" width={ 100 } height={ 100 } />
                        }
                    </button>
                </div>
            }

            { showMobileMenu &&
                <Links menuClassName="narrow-screen-menu" showbloglink={ showBlogLink } />
            }
        </nav>
    )
}

const Links = ({ menuClassName = "", showbloglink = true }) => {
    return (
        <div className={ `${ menuClassName } flex justify-end` }>
            {
                (showbloglink) &&
                    <Link href="/blogs" className="px-4 py-2">
                        Blogs
                    </Link>
            }

            <Link href="/#personal-projects" className="px-4 py-2">
                Projects
            </Link>

            <Link href="/#toolkit" className="px-4 py-2">
                Toolkit
            </Link>

            { (true) &&
                <Link href="/#worked-with" className="px-4 py-2">
                    Works
                </Link>
            }

            <Link href="/#links" className="px-4 py-2">
                Links
            </Link>
        </div>
    )
}
"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Navigation({ showBlogLink = false }) {
    const [mobileView, setMobileView] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            const isMobileView = document.documentElement.clientWidth > 500
            setMobileView(isMobileView)
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
        <nav className="w-screen h-12 flex px-4 py-2">
            <Link aria-label="To front page" href="/#">
                pettmatt
            </Link>

            {
                mobileView &&
                    <Links menuClassName="inline wide-menu" showbloglink={ showBlogLink.toString() } />
            }

            <div className="burger-container inline">
                <button aria-label="mobile navigation toggle button" id="burger-button" onClick={ toggleMenu }>
                    { 
                        (showMobileMenu)
                            ? "X"
                            : <Image src="/menu-icon.svg" alt="Mobile open the menu icon"
                                width={ 100 } height={ 100 } />
                    }
                </button>
            </div>

            { showMobileMenu &&
                <Links menuClassName="narrow-menu" showbloglink={ showBlogLink.toString() } />
            }
        </nav>
    )
}

const Links = ({ menuClassName = "", showbloglink = "true" }) => {
    return (
        <div className={ menuClassName }>
            { 
                Boolean("true" === showbloglink)
                    ? (
                        <Link href="/blogs">
                            Blogs
                        </Link>
                    )
                    : ""
            }
            <Link href="/#about">
                About
            </Link>

            <Link href="/#projects-&-blogs">
                Projects & Blogs
            </Link>

            <Link href="/#toolkit">
                Toolkit
            </Link>

            { (false === true) &&
                <Link href="/#projects-&-blogs">
                    Worked with . . .
                </Link>
            }

            <Link href="/#links">
                Links
            </Link>
        </div>
    )
  }
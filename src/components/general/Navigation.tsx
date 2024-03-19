"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Navigation({ showBlogLink = false, showFreelancing = false }) {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [narrowScreen, setNarrowScreen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            const isMobileView = document.documentElement.clientWidth < 640
            setNarrowScreen(isMobileView)

            if (!isMobileView) setShowMobileMenu(false)
        }

        // window.addEventListener("resize", handleResize)

        return () => {
            window.addEventListener("resize", handleResize)
        }
    }, [])

    function toggleMenu() {
        setShowMobileMenu(!showMobileMenu)
    }

    return (
        <nav className="w-screen p-3 fixed flex flex-wrap justify-between">
            <Link title="To front page" href="/#" id="logo" className="px-4 py-2">
                pettmatt
            </Link>

            { !narrowScreen &&
                <Links menuClassName="wide-screen-menu" showbloglink={ showBlogLink } />
            }

            { narrowScreen &&
                <div className="mobile-wrapper">
                    <button id="mobile-menu-button" onClick={ toggleMenu } 
                        aria-label="mobile navigation toggle button"
                    >
                        { showMobileMenu
                            ? <span className="px-2 py-2 font-medium text-2xl">X</span>
                            : <Image src="/menu-icon.svg" className="text"
                                alt="Mobile menu button icon" width={ 100 } height={ 100 } />
                        }
                    </button>
                </div>
            }

            { showMobileMenu &&
                <Links menuClassName="narrow-screen-menu w-full flex-col"
                    showbloglink={ showBlogLink } showFreelancing={ showFreelancing } 
                />
            }
        </nav>
    )
}

const Links = ({ menuClassName = "", showbloglink = true, showFreelancing = false }) => {
    return (
        <div className={ `${ menuClassName } flex justify-end gap-1` }>
            { showbloglink &&
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

            { showFreelancing &&
                <Link href="/#freelancing" className="px-2 py-2">
                    Freelancing
                </Link>
            }

            <Link href="/#links" className="px-4 py-2">
                Links
            </Link>
        </div>
    )
}
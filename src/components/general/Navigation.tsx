"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import BurgerIcon from "../icons/burger"

export default function Navigation({ showBlogLink = false, showFreelancing = false }) {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [narrowScreen, setNarrowScreen] = useState(false)

    function checkScreenSize() {
        const isMobileView = document.documentElement.clientWidth < 640
        setNarrowScreen(isMobileView)

        if (!isMobileView) setShowMobileMenu(false)
    }

    useEffect(() => {    
        window.addEventListener("resize", checkScreenSize)

        return () => {
            window.addEventListener("resize", checkScreenSize)
        }
    }, [])

    function toggleMenu() {
        setShowMobileMenu(!showMobileMenu)
    }

    return (
        <>
            <a href="/#main-content" className="skip-link accessability-element">
                Skip to content
            </a>
            <nav className="w-screen p-3 fixed flex flex-wrap justify-between">
                <Link href="/#" id="logo" className="px-4 py-2">
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
                            <BurgerIcon toggled={showMobileMenu} />
                        </button>
                    </div>
                }

                { showMobileMenu &&
                    <Links menuClassName="narrow-screen-menu w-full flex-col mt-2"
                        showbloglink={ showBlogLink } showFreelancing={ showFreelancing } 
                    />
                }
            </nav>
        </>
    )
}

function Links({ menuClassName = "", showbloglink = false, showFreelancing = false }) {
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
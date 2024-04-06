import Link from 'next/link'
import React from 'react'

export default function Logo() {
    const deskLogo = '/assets/images/logo.png';
    const respLogo = '/assets/images/logo.png';
    return (
        <div className="logo">
            <Link href="/">
                <picture>
                    <source media="(min-width:768px)" srcSet={deskLogo} />
                    <source media="(max-width:767px)" srcSet={respLogo} />
                    <img src={deskLogo} alt="Logo" />
                </picture>
            </Link>
        </div>
    )
}

import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { LayoutDashboard, PenBox } from 'lucide-react';
import { Button } from './ui/button';
import {checkUser} from '@/lib/checkUser'
const Header = async() => {
    await checkUser();
    return (
        <header className="w-full bg-gray-900 shadow-md py-2 px-6 flex justify-between items-center z-50">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
                <Image
                    src="/logo.webp"
                    alt="logo"
                    height={60}
                    width={60}
                    className="h-12 w-12 object-contain rounded-full"
                />

            </Link>

            {/* Authentication Section */}
            <div className="flex items-center space-x-4">
                <SignedIn>
                    <Link href={"/dashboard"}
                        className='text-gray-600 hover:text-blue-600 flex items-center gap-2'>
                        <Button variant="outline">
                            <LayoutDashboard size={1} />
                            <span className='hidden md:block'>Dashboard</span>
                        </Button>
                    </Link>

                    <Link href={"/transaction/create"}
                        className='text-gray-600 hover:text-blue-600 flex items-center gap-2'>
                        <Button variant="outline" className="border-indigo-800 text-white bg-indigo-600 hover:bg-white hover:text-gray-800">
                            <PenBox size={1} />
                            <span className='hidden md:block'>Add Transactions</span>
                        </Button>
                    </Link>

                </SignedIn>
                <SignedOut>
                    <SignInButton>
                        <button className="text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition">
                            Sign In
                        </button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton 
                    appearance={{
                        elements:{
                            avatarBox:"w-10 h-10"
                        }
                    }}/>
                </SignedIn>
            </div>
        </header>
    );
};

export default Header;

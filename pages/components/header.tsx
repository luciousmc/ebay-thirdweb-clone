import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'
import Link from 'next/link'
import {
  ChevronDownIcon,
  BellIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'

type Props = {}

function Header({}: Props) {
  const connectWithMetamask = useMetamask()
  const disconnect = useDisconnect()
  const address = useAddress()

  return (
    <header className="max-w-6xl mx-auto p-2">
      <nav className="flex justify-between">
        <div className="flex items-center space-x-2 text-sm">
          {address ? (
            <button className="connectWalletBtn" onClick={disconnect}>
              Hi, {address.slice(0, 5) + '...' + address.slice(-4)}
            </button>
          ) : (
            <button onClick={connectWithMetamask} className="connectWalletBtn">
              Connect your wallet
            </button>
          )}

          <p className="headerLinks">Daily Deals</p>
          <p className="headerLinks">Help & Contact</p>
        </div>

        <ul className="flex items-center space-x-4 text-sm">
          <li className="headerLinks">
            <Link href="#">Ship to</Link>
          </li>
          <li className="headerLinks">
            <Link href="#">Sell</Link>
          </li>
          <li className="headerLinks">
            <Link href="#">Watchlist</Link>
          </li>
          <li>
            <Link href="/addItem" className="flex items-center hover:link">
              Add to Inventory
              <ChevronDownIcon className="h-4" />
            </Link>
          </li>
          <li>
            <BellIcon className="h-6 w-6" />
          </li>
          <li>
            <ShoppingCartIcon className="h-6 w-6" />
          </li>
        </ul>
      </nav>

      <hr className="mt-2" />

      <section className="flex items-center space-x-2 py-5">
        <div className="h-16 w-16 sm:w-28 md:w-44 cursor-pointer flex-shrink-0">
          <Link href="/">
            <Image
              className="h-full w-full object-contain"
              alt="Thirdweb Logo"
              src="https://links.papareact.com/bdb"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <button className="hidden lg:flex items-center space-x-2 w-20">
          <h1 className="text-gray-600 text-sm">Shop by Category</h1>
          <ChevronDownIcon className="h-4 flex-shrink-0" />
        </button>

        <div className="flex items-center space-x-2 px-2 md:px-5 py-2 border-black border-2 flex-1">
          <MagnifyingGlassIcon className="w-5 text-gray-500" />
          <input
            className="outline-none flex-1"
            type="text"
            placeholder="Search for Anything"
          />
        </div>

        <button className="hidden sm:inline bg-blue-600 text-white px-5 md:px-10 py-2 rounded border-2 border-blue-600">
          Search
        </button>

        <Link href="/create">
          <button className="border-2 border-blue-600 px-5 md:px-10 py-2 text-blue-600 hover:bg-blue-600/50 hover:text-white">
            List Item
          </button>
        </Link>
      </section>

      <hr />

      <section>
        <ul className="flex py-3 space-x-6 text-xs md:text-sm whitespace-nowrap justify-center">
          <li className="link">
            <a href="#">Home</a>
          </li>
          <li className="link">
            <a href="#">Electronics</a>
          </li>
          <li className="link">
            <a href="#">Computers</a>
          </li>
          <li className="link hidden sm:inline">
            <a href="#">Video Games</a>
          </li>
          <li className="link hidden sm:inline">
            <a href="#">Home & Garden</a>
          </li>
          <li className="link hidden md:inline">
            <a href="#">Health & Beauty</a>
          </li>
          <li className="link hidden lg:inline">
            <a href="#">Collectibles and Art</a>
          </li>
          <li className="link hidden lg:inline">
            <a href="#">Books</a>
          </li>
          <li className="link hidden lg:inline">
            <a href="#">Music</a>
          </li>
          <li className="link hidden xl:inline">
            <a href="#">Deals</a>
          </li>
          <li className="link hidden xl:inline">
            <a href="#">Other</a>
          </li>
          <li className="link">
            <a href="#">More</a>
          </li>
        </ul>
      </section>
    </header>
  )
}
export default Header

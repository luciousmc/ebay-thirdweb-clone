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

      <section>
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
      </section>
    </header>
  )
}
export default Header

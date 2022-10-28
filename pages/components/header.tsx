import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'
import Link from 'next/link'

type Props = {}

function Header({}: Props) {
  const connectWithMetamask = useMetamask()
  const disconnect = useDisconnect()
  const address = useAddress()

  return (
    <header>
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
            <Link href="">Add to Inventory</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header

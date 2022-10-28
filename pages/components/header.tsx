import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

type Props = {}

function Header({}: Props) {
  const connectWithMetamask = useMetamask()
  const disconnect = useDisconnect()
  const address = useAddress()

  return (
    <header>
      <nav>
        <div>
          {address ? (
            <button className="connectWalletBtn" onClick={disconnect}>
              Hi, {address}
            </button>
          ) : (
            <button onClick={connectWithMetamask} className="connectWalletBtn">
              Connect your wallet
            </button>
          )}
        </div>
      </nav>
    </header>
  )
}
export default Header

import { BanknotesIcon, ClockIcon } from '@heroicons/react/24/outline'
import {
  MediaRenderer,
  useActiveListings,
  useContract,
} from '@thirdweb-dev/react'
import { ListingType } from '@thirdweb-dev/sdk'
import type { NextPage } from 'next'
import Header from './components/header'

const Home: NextPage = () => {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT,
    'marketplace'
  )

  const { data: listings, isLoading: loadingListings } =
    useActiveListings(contract)

  console.log(listings)
  return (
    <div>
      <Header />

      <main className="max-w-6xl mx-auto p-2">
        {loadingListings ? (
          <span className="text-center animate-pulse text-blue-500">
            Loading Listings...
          </span>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto">
            {listings?.map((listing) => (
              <article
                key={listing.id}
                className="flex flex-col card hover:scale-105 transition-all duration-150 ease-out"
              >
                <div className="flex-1 flex flex-col pb-2 items-center">
                  <MediaRenderer className="w-44" src={listing.asset.image} />
                </div>

                <div className="pt-2 space-y-4">
                  <div>
                    <h2 className="text-lg truncate">{listing.asset.name}</h2>
                    <hr />
                    <p className="truncate text-sm text-gray-600 mt-2">
                      {listing.asset.description}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold">
                      {listing.buyoutCurrencyValuePerToken.displayValue}
                    </span>
                    &nbsp;
                    {listing.buyoutCurrencyValuePerToken.symbol}
                  </div>

                  <div
                    className={`flex items-center space-x-1 justify-end text-sx border w-fit ml-auto p-2 rounded-lg text-white ${
                      listing.type === ListingType.Direct
                        ? 'bg-blue-500'
                        : 'bg-red-500'
                    }`}
                  >
                    <span>
                      {listing.type === ListingType.Direct
                        ? 'Buy Now'
                        : 'Auction'}
                    </span>
                    {listing.type === ListingType.Direct ? (
                      <BanknotesIcon className="h-4" />
                    ) : (
                      <ClockIcon className="h-4" />
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default Home

import { ReactElement, useEffect, useState } from 'react'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import axios from 'axios'

import { useTheme } from 'styled-components'
import { LocationMessageModal } from 'components/Modals/LocationMessageModal'
import { Loading } from 'components/Loading'
import { Button } from 'components/Button'

import { UserGeolocationProps } from './types'

import * as Styles from './styles'

export function Header(): ReactElement {
  const theme = useTheme()
  const router = useRouter()

  const [isLocationMessageModalOpen, setIsLocationMessageModalOpen] =
    useState(false)
  const [isUserCityLoading, setIsUserCityLoading] = useState(true)
  const [userCity, setUserCity] = useState<string | null>(null)

  function handleRedirectToCartPage() {
    router.push('/checkout')
  }

  function toggleLocationMessageModal() {
    setIsLocationMessageModalOpen(prevState => !prevState)
  }

  function onGeoLocationSuccess(position: GeolocationPosition) {
    getUserCity({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
  }

  function onGeoLocationError() {
    setIsUserCityLoading(false)
    setIsLocationMessageModalOpen(true)
  }

  function getUserCity(props: UserGeolocationProps) {
    setTimeout(() => {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${props.latitude},${props.longitude}&sensor=true&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
        )
        .then(() => {
          setUserCity('Curitiba, PR')
        })
        .finally(() => {
          setIsUserCityLoading(false)
        })
    }, 2000)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      onGeoLocationSuccess,
      onGeoLocationError
    )
  }, [])

  return (
    <Styles.HeaderContainer>
      <Image
        src="/logo.png"
        alt='Logo com uma imagem de um café e a escrita "Coffee Delivery"'
        width={84}
        height={40}
      />

      <div>
        <Styles.UserLocation>
          {isUserCityLoading ? (
            <Loading
              width={18}
              height={18}
              color={theme.colors.secondary[700]}
            />
          ) : userCity ? (
            <>
              <MapPin weight="fill" />
              <span>{userCity}</span>
            </>
          ) : (
            <span>Sem acesso a localização</span>
          )}
        </Styles.UserLocation>

        <Button
          background={theme.colors.primary[300]}
          fontColor={theme.colors.primary[700]}
          onClick={handleRedirectToCartPage}
        >
          <ShoppingCart weight="fill" size={22} />
        </Button>
      </div>

      <LocationMessageModal
        isModalOpen={isLocationMessageModalOpen}
        onRequestClose={toggleLocationMessageModal}
      />
    </Styles.HeaderContainer>
  )
}

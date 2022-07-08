import { NextSeo } from 'next-seo'
import Base from "../layout/Base";

export default function Articles(props) {
    return (
        <>
          <NextSeo 
            title='Articles | Matheus Martins'
            description='Open source enthusiast and challenge lover'
            openGraph={{
                type: 'website',
                locale: 'en_US',
                url: 'https://mmmartinsoliv.com',
                site_name: 'Matheus Martins',
                title: 'Matheus Martins'
            }}
          />
          <Base />
        </>
    )
}
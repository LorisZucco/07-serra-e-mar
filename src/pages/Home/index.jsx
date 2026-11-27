import PageLayout from "../../components/templates/PageLayout"
import Hero from "../../components/organisms/hero"
import TripList from "../../components/organisms/TripList"


export default function Home() {
  return (
    <PageLayout>
        <Hero/>
        <TripList/>
    </PageLayout>
  )
}

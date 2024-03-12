import FlightCard from "./components/FlightCard"
import FlightSearchHeader from "./components/FlightSearchHeader"

function FlightListPage() {
    return (
        <div className="">
            <FlightSearchHeader></FlightSearchHeader>
            <div className="m-5 grid grid-cols-3 gap-4">
                <FlightCard></FlightCard>
                <FlightCard></FlightCard>
                <FlightCard></FlightCard>
                <FlightCard></FlightCard>
                <FlightCard></FlightCard>
                <FlightCard></FlightCard>
                <FlightCard></FlightCard>
                <FlightCard></FlightCard>
                <FlightCard></FlightCard>
                <FlightCard></FlightCard>
                <FlightCard></FlightCard>
                <FlightCard></FlightCard>
            </div>
        </div>
    )
}

export default FlightListPage
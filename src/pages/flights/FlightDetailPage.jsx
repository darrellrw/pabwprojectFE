import FlightOrderDetail from "./components/FlightOrderDetail"
import FlightPassengerDetail from "./components/FlightPassengerDetail"
import FlightPaymentDetail from "./components/FlightPaymentDetail"

function FlightDetailPage() {
    return (
        <>
            <FlightOrderDetail></FlightOrderDetail>
            <FlightPassengerDetail></FlightPassengerDetail>

            <FlightPaymentDetail></FlightPaymentDetail>
        </>
    )
}

export default FlightDetailPage
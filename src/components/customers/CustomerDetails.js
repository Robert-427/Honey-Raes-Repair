import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const CustomerDetails = () => {
    const { customerId } = useParams()
    const [customer, updateCustomer] = useState({})

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?_expand=user&_embed=serviceTickets&userId=${customerId}`)
                .then(response => response.json())
                .then((data) => {
                    const singleCustomer = data[0]
                    updateCustomer(singleCustomer)
                })
        },
        [customerId]
    )

    return <section className="customer">
        <header className="customer__header">{customer?.user?.fullName}</header>
        <div>Address: {customer.address}</div>
        <div>Phone Number: {customer.phoneNumber}</div>
        <div>Email: {customer?.user?.email}</div>
        <footer className="customer__footer">Currently has {ticketLength()} tickets</footer>
    </section>
}

const ticketLength = (customer) => {
    let lengthOfTicketArray = ``
    if ((customer?.customer?.length) > 0) {
        lengthOfTicketArray = `${customer?.customer?.length}`
    } else {
        lengthOfTicketArray = `zero`
    }
    return lengthOfTicketArray
}
import { Metadata } from 'next'
import MyOrders from './MyOrders'

export const metadata: Metadata = {
  title: 'Order History',
}
export default function OrderHistory() {
  return (
    <>
      <h1 className="text-2xl py-2">Riwayat pemesanan</h1>
      <MyOrders />
    </>
  )
}

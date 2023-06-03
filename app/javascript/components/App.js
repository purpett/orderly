export default function App() {
  return (
    <div>
      <Routes>
        <Route path="order-at/:slug" element={<CustomerDetails />} />
        <Route path="order-at/:slug/menu" element={<Menu />} />
        <Route path="order-at/:slug/cart" element={<Order />} />
      </Routes>
    </div>
  )
}
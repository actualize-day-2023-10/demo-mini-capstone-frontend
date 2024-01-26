export function Header() {
  return (
    <header>
      <nav className="bg-gray-800 text-gray-300 p-4">
      <a className="rounded-xl p-2 hover:bg-gray-700 hover:text-white" href="/">Home</a>
      <a className="rounded-xl p-2 hover:bg-gray-700 hover:text-white" href="/products/new">New Product</a>
      <a className="rounded-xl p-2 hover:bg-gray-700 hover:text-white" href="/login">Login</a>
      <a className="rounded-xl p-2 hover:bg-gray-700 hover:text-white" href="/signup">Signup</a>
      <a className="rounded-xl p-2 hover:bg-gray-700 hover:text-white" href="/cart">Cart</a>
      </nav>
    </header>
  )
}
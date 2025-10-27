// Imports

import Counter from "./counter";
import CustomCounter from "./custom-counter"

// Main page

export default function Home() {
  return (
    <main>
      <h1> Counters</h1>
      <Counter />
      <CustomCounter />
    </main>
  )
}

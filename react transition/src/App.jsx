import { useState,useTransition } from 'react'

function SearchResults({ query }) {
  // Simulate slow search results
  const items = [];
  if (query) {
    for (let i = 0; i < 1000; i++) {
      items.push(<li key={i}>Result for {query} - {i}</li>);
    }
  }
  return <ul>{items}</ul>;
}
function App() {
  const [input, setInput] = useState()
  const [query, setQuery] = useState(0)
  const [isPending, startTransition] = useTransition()
  const handleChange=(e)=>{
    setInput(e.target.value)

    startTransition(()=>{
      setQuery(e.target.value)
    })
  }
  return (
    <div>
     <input type="text" value={input} onChange={handleChange} placeHolder="type to search"/>
     {isPending && <p>Loading...</p>}
     <SearchResults query={query} />

    </div>
  )
}

export default App

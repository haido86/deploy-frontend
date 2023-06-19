import { ChangeEvent, FormEvent, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleSearchTermSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <form
      onSubmit={handleSearchTermSubmit}
      className="bg-gray-200 rounded-full flex items-center px-2 w-full order-1 lg:order-none lg:w-[500px] ">
      <AiOutlineSearch size={20} />
      <input
        value={searchTerm}
        onChange={handleSearchTermChange}
        className="bg-transparent p-2 focus:outline-none w-full"
        type="text"
        placeholder="Search"
      />
    </form>
  )
}

export default SearchBar

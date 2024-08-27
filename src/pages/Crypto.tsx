import Filter from "../components/Filter/Filter"
import Table from "../components/Table/Table"

const Crypto = () => {
  return (
      <section className='w-full flex flex-col mt-16 mb-24 relative items-center justify-center' >
        <Filter/>
        <Table/>
      </section>
  )
}

export default Crypto
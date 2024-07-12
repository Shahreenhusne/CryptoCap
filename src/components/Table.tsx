

const Table = () => {
  return (
    <div className="flex flex-col mt-9 border border-[#ebcdb0]  w-[80%] text-white text-sm rounded">
       <table className="w-full table-auto ">
          <thead className=" text-base border-b border-[#ebcdb0] font-medium py">
            <tr>
                <th className="py-2">asset</th>
                <th className="py-2">name</th>
                <th className="py-2">price</th>
                <th className="py-2">total volume</th>
                <th className="py-2">market cap change</th>
                <th className="py-2">1H</th>
                <th className="py-2">24H</th>
                <th className="py-2">7D</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" text-center text-base border-b border-[#ebcdb0] hover:bg-custome-linear-one last:border-b-0">
                <td>asset</td>
                <td>name</td>
                <td>price</td>
                <td>total volume</td>
                <td>market cap change</td>
                <td>1H</td>
                <td>24H</td>
                <td>7D</td>
            </tr>
          </tbody>
       </table>
    </div>
  )
}

export default Table
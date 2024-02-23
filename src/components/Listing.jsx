import { useEffect } from "react";
import { useState } from "react";

export default function Listing() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const dataMaping = data?.map((data, index) => (
    <tr
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
      key={data.id}
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {index + 1}
      </th>
      <td className="px-6 py-4">{data.userId}</td>
      <td className="px-6 py-4">{data.id}</td>
      <td className="px-6 py-4">{data.title}</td>
      <td className="px-6 py-4">{data.body}</td>
      <td className="px-6 py-4">
        <input type="text" name="" id="" />
      </td>
    </tr>
  ));

  const reverseOrder = () => {
    setData([...data].reverse());
  };
  return (
    <>
      <button onClick={reverseOrder}>Reverse</button>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                SL
              </th>
              <th scope="col" className="px-6 py-3">
                userId
              </th>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                body
              </th>
              <th scope="col" className="px-6 py-3">
                comment
              </th>
            </tr>
          </thead>
          <tbody>{dataMaping}</tbody>
        </table>
      </div>
    </>
  );
}

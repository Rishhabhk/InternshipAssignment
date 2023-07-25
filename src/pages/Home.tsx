import TableComponent from '../components/TableComponent';
import Spinner from '../components/Spinner';
import { Root } from '../InterfaceAPI';
import axios from 'axios';
import { useState, useEffect } from 'react';
import DeptComponent from '../components/DeptComponent';


const apiUrl = "https://jsonplaceholder.typicode.com/posts";


const Home = () => {
  setTimeout(() => {
    window.history.forward()
  }, 0)
  window.onunload = function () { null };

  const [loading, setLoading] = useState<boolean>();
  const [result, setResult] = useState<Root>([]);
  async function fetchData() {
    try {
      setLoading(true);
      const { data } = await axios.get(apiUrl);
      const res: Root = data;
      setResult(res);
      setLoading(false);
    }
    catch (e) {
      alert("error");
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      {loading ? <Spinner /> : <TableComponent result={result} />}
      <DeptComponent />
    </div>
  )
}

export default Home
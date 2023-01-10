import { useState, useEffect } from 'react';
import useSWR from 'swr';

const LastSalesPage = (props) => {
  const [sales, setSales] = useState(props.sales);
  // const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR('https://nextjs-course-40261-default-rtdb.firebaseio.com/sales.json', (url) => fetch(url).then((res) => res.json()));

  useEffect(() => {
    if (data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      setSales(transformedSales);
    }
  }, [data]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch('https://nextjs-course-40261-default-rtdb.firebaseio.com/sales.json')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const transformedSales = [];

  //       for (const key in data) {
  //         transformedSales.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         });
  //       }

  //       setSales(transformedSales);
  //       setIsLoading(false);
  //     });
  // }, []);

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  // if (!sales) {
  //   return <p>No data yet.</p>;
  // }

  return (
    <ul>
      {sales.map((sale) => {
        return <li key={sale.id}>{`${sale.username} - ${sale.volume}`}</li>;
      })}
    </ul>
  );
};

export default LastSalesPage;

export const getStaticProps = async () => {
  return fetch('https://nextjs-course-40261-default-rtdb.firebaseio.com/sales.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      return {
        props: {
          sales: transformedSales,
        },
      };
    });
};

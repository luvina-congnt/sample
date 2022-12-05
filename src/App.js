import { useQuery, gql } from '@apollo/client';

const GET_BOOKS = gql`
  query GetBook {
    books {
      title
      author
    }
  }
`;

function DisplayBooks() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map(({ title, author }) => (
    <div>
      <h3>Book title: {title}</h3>
      <h4>Author: {author}</h4>
    </div>
  ));
}

export default function App() {
  return (
    <DisplayBooks />
  );
}
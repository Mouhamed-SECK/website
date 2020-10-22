import Head from 'components/Head'

const Home: React.FC = () => {
  return (
    <>
      <Head />

      <p>Hello Thream! 👋</p>

      <style jsx>
        {`
          p {
            margin-left: 15px;
          }
        `}
      </style>
    </>
  )
}

export default Home

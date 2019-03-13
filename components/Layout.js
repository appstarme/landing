import Head from 'next/head';

const Layout = (props) => (
  <div>
    <Head>
      <title>Startender App</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charset="UTF-8" />
    </Head>
    {props.children}
  </div>
);

export default Layout;

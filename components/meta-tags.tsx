export const MetaTags = () => {
  return (
    <>
      {/*Open Graph / Facebook*/}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.lazyjs.pro/" />
      <meta property="og:title" content="Hi, I'm Orest" />
      <meta
        property="og:description"
        content="Orest Prystaiko | JS Fullstack Developer"
      />
      <meta property="og:image" content="/logo.svg" />

      {/*Twitter*/}
      <meta property="twitter:card" content="/logo.svg" />
      <meta property="twitter:url" content="https://www.lazyjs.pro/" />
      <meta property="twitter:title" content="Hi, I'm Orest" />
      <meta
        property="twitter:description"
        content="Orest Prystaiko | JS Fullstack Developer"
      />
      <meta property="twitter:image" content="" />
    </>
  );
};

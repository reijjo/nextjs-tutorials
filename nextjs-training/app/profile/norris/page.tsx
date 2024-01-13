const getData = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");

  return res.json();
};

const Page = async () => {
  const data = await getData();

  return (
    <>
      <h1>Norris profile</h1>
      <div>{data.value}</div>
    </>
  );
};

export default Page;

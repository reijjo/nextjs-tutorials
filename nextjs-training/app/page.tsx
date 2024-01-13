import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  name: { required: true, type: String },
  email: { required: true, type: String },
  age: { required: true, type: Number },
});

const Person =
  mongoose.models.person || mongoose.model("person", schema, "persons");

const dbConnect = async (): Promise<any> => {
  try {
    const conn = await mongoose.connect(String(process.env.MONGO_DB_URI));
    console.log(`Database connected: ${conn.connection.host}`);
    return conn;
  } catch (err) {
    console.error(err);
  }
};

const Home = async () => {
  await dbConnect();
  const persons = await Person.find({});

  console.log("persons", persons);

  const items = persons.map((person: any) => {
    return (
      <div key={person._id}>
        <p>
          Name: {person.name}
          <br />
          Email: {person.email}
          <br />
          Age: {person.age}
          <br />
        </p>
      </div>
    );
  });

  return <main>{items}</main>;
};

export default Home;

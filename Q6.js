const { MongoClient } =
    require("mongodb");

const url =
    "mongodb://127.0.0.1:27017";

const client =
    new MongoClient(url);

async function run() {

    await client.connect();

    console.log(
        "Connected to MongoDB"
    );

    const database =
        client.db("college");

    const collection =
        database.collection("students");

    // CREATE
    await collection.insertOne({
        name: "Rahul",
        age: 20,
        course: "CSE"
    });

    console.log(
        "Student inserted"
    );

    // READ
    const students =
        await collection.find({}).toArray();

    console.log(
        "Students:",
        students
    );

    // UPDATE
    await collection.updateOne(

        { name: "Rahul" },

        {
            $set: {
                age: 21
            }
        }

    );

    console.log(
        "Student updated"
    );

    // DELETE
    await collection.deleteOne({
        name: "Rahul"
    });

    console.log(
        "Student deleted"
    );

    await client.close();
}

run();

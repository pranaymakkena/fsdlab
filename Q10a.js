const express =
    require("express");

const mongoose =
    require("mongoose");

const app =
    express();

app.use(
    express.json()
);

// MongoDB connection
mongoose.connect(
    "mongodb://127.0.0.1:27017/studentDB"
)

.then(() =>
    console.log(
        "MongoDB Connected"
    )
)

.catch(error =>
    console.log(error)
);


// Student Schema
const studentSchema =
    new mongoose.Schema({

        name: String,

        email: String,

        course: String

    });

const Student =
    mongoose.model(
        "Student",
        studentSchema
    );


// CREATE
app.post(
"/students",
async (req, res) => {

    try {

        const student =
            new Student(req.body);

        await student.save();

        res.status(201)
        .json(student);

    }

    catch (error) {

        res.status(500)
        .json(error);

    }

});


// READ
app.get(
"/students",
async (req, res) => {

    const students =
        await Student.find();

    res.json(students);

});


// UPDATE
app.put(
"/students/:id",
async (req, res) => {

    const student =
        await Student.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true
            }

        );

    res.json(student);

});


// DELETE
app.delete(
"/students/:id",
async (req, res) => {

    await Student.findByIdAndDelete(
        req.params.id
    );

    res.json({

        message:
            "Student deleted"

    });

});


app.listen(
3000,
() => {

    console.log(
        "Server running on port 3000"
    );

});

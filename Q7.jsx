import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

function Home() {
    return <h2>Welcome to Student Management System</h2>;
}

function Register() {
    return (
        <div>
            <h2>Student Registration</h2>

            <input
                type="text"
                placeholder="Enter Name"
            />

            <br /><br />

            <input
                type="email"
                placeholder="Enter Email"
            />

            <br /><br />

            <button>
                Register
            </button>
        </div>
    );
}

function Login() {
    return (
        <div>
            <h2>Login</h2>

            <input
                type="email"
                placeholder="Email"
            />

            <br /><br />

            <input
                type="password"
                placeholder="Password"
            />

            <br /><br />

            <button>
                Login
            </button>
        </div>
    );
}

function Contact() {
    return (
        <div>
            <h2>Contact Us</h2>
            <p>Email: student@example.com</p>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
            <p>
                Student Management
                System using React.
            </p>
        </div>
    );
}

function App() {

    return (

        <BrowserRouter>

            <h1>
                Student Management System
            </h1>

            <nav>

                <Link to="/">
                    Home
                </Link>

                {" | "}

                <Link to="/register">
                    Register
                </Link>

                {" | "}

                <Link to="/login">
                    Login
                </Link>

                {" | "}

                <Link to="/contact">
                    Contact
                </Link>

                {" | "}

                <Link to="/about">
                    About
                </Link>

            </nav>

            <hr />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;

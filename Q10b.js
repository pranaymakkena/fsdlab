const jwt =
    require("jsonwebtoken");

const SECRET_KEY =
    "mySecretKey123";


// Generate Token
app.post(
"/login",
(req, res) => {

    const user = {

        username:
            req.body.username

    };

    const token =
        jwt.sign(

            user,

            SECRET_KEY,

            {
                expiresIn:
                    "1h"
            }

        );

    res.json({

        token:
            token

    });

});


// Middleware
function authenticateToken(
req,
res,
next
) {

    const authHeader =
        req.headers.authorization;

    const token =
        authHeader &&
        authHeader.split(" ")[1];


    if (!token) {

        return res.status(401)
        .json({

            message:
                "Access denied"

        });

    }


    jwt.verify(

        token,

        SECRET_KEY,

        (error, user) => {

            if (error) {

                return res.status(403)
                .json({

                    message:
                        "Invalid token"

                });

            }

            req.user = user;

            next();

        }

    );

}


// Protected Endpoint
app.get(

"/profile",

authenticateToken,

(req, res) => {

    res.json({

        message:
            "Authorized access",

        user:
            req.user

    });

}

);

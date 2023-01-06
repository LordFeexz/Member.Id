const errorHandler = (err, req, res, next) => {
  let status = 500;
  let message = "Internal Server Error";

  if (err.name === `SequelizeUniqueConstraintError`) {
    status = 400;
    if (err.parent.constraint === "Users_email_key") {
      message = "email is already use";
    } else if (err.name === "Users_username_key") {
      message = "username is already use";
    } else {
      message = err.errors[0].message;
    }
  } else if (err.name === `SequelizeValidationError`) {
    status = 400;
    message = err.errors[0].message;
  } else if (err.name === "invalid credentials") {
    status = 401;
    message = "invalid email/password";
  } else if (err.name == `invalid token` || err.name == `JsonWebTokenError`) {
    status = 401;
    message = `Invalid Token`;
  } else if (err.name === "Data not found") {
    status = 404;
    message = err.name;
  }
  res.status(status).json({ message });
};

module.exports = errorHandler;

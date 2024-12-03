import { body, validationResult, param } from "express-validator";
import { BadRequestError } from "../errors/customErrors.js";
import User from "../models/userModel.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      console.log(errors);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        // if (errorMessages[0].startsWith("no job")) {
        //   throw new NotFoundError(errorMessages);
        // }
        // if (errorMessages[0].startsWith("not authorized")) {
        //   throw new UnauthorizedError("not authorized to access this route");
        // }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};
export const validateNoteInput = withValidationErrors([
  body("content").notEmpty().withMessage("Note content is required "),
]);
export const validateRegisterUserInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) throw new BadRequestError("Email already Exists");
    }),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  // body("confirmPassword")
  body("passwordConfirm")
    .notEmpty()
    .withMessage("Confirm Password is required")
    .isLength({ min: 8 })
    .withMessage("Confirm Password must be at least 8 characters long")
    .custom((confirmPassword, { req }) => {
      if (confirmPassword !== req.body.password) {
        throw new Error("Passwords must match");
      }
      return true;
    }),
  body("username").notEmpty().withMessage("username is required"),
  body("phone").notEmpty().withMessage("Phone is required"),
  body("birthdayYear").notEmpty().withMessage("Birthday Year is required"),
]);

export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),
  body("password").notEmpty().withMessage("Password is required"),
]);

export const validateUpdateUserInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("Invalid email format"),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be atleast 8 characters"),
  body("username").notEmpty().withMessage("username is required"),
  body("phone").notEmpty().withMessage("Phone is required"),
  body("birthdayYear").notEmpty().withMessage("Birthday Year is required"),
]);

// export const validateNoteIdParamater = withValidationErrors([
//   param("id")
//     .notEmpty()
//     .withMessage("Note ID is required")
//     .bail()
//     .custom((value) => {
//       console.log("Raw value received in middleware:", value);
//       if (!mongoose.Types.ObjectId.isValid(value)) {
//         console.log("Validation failed for ID:", value);
//         throw new BadRequestError("Invalid mongoDb Id");
//       }
//       console.log("Validation passed for ID:", value);
//       return true;
//     })
//     .withMessage("Note ID must be a valid ObjectId"),
// ]);
export const validateNoteIdParamater = withValidationErrors([
  param("id")
    .notEmpty()
    .withMessage("Note ID is required")
    .bail()
    .custom((value, { req }) => {
      console.log("Validation Middleware - Raw Value:", value);
      if (!mongoose.Types.ObjectId.isValid(value)) {
        console.log("Validation Middleware - Invalid ObjectId:", value);
        throw new BadRequestError("Invalid mongoDb Id");
      }
      console.log("Validation Middleware - Valid ObjectId:", value);
      return true;
    })
    .withMessage("Note ID must be a valid ObjectId"),
]);

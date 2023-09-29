const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            require: true,
            trim: true,
        },
        listtodo: [{
            namelisttodo: {
                type: String,
                require: true,
                trim: true,
            },
            todos: [{
                titleToDo: {
                    type: String,
                    require: true,
                    trim: true,
                },
                description: {
                    type: String,
                    require: true,
                    trim: true,
                },
                completed: {
                    type: Boolean,
                    require: true,
                    trim: true,
                    default: false,

                }
            }]
        }],
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("users", userSchema);

module.exports = User;

const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            require: true,
            unique: true,
        },
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
        listtodos: [{
            idlisttodo: {
                type: Number,
                require: true,
                unique: true,
            },
            namelisttodo: {
                type: String,
                require: true,
                trim: true,
            },
            todos: [{
                idtodo: {
                    type: Number,
                    require: true,
                    unique: true,
                    autoIndex: false
                },
                title: {
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
)

const User = mongoose.model("user", userSchema);

module.exports = User
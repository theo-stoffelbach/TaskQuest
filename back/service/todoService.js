const userModel = require('../model/user.model');


const removeTodoService = async (id, idList, idTodo) => {
    console.log("Fin");
    console.log("Fin : ", id, " : ", idList);
    try {
        return await userModel.findOneAndUpdate(
            {_id: id, 'listtodo._id': idList},
            {$pull: {'listtodo.$.todos': {_id: idTodo}}},
            {new: true}
        );

    } catch (err) {
        return {error: "error to put data in DB" + err}
    }
}


module.exports = {
    removeTodoService,
}
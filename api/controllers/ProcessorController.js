/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    //增加
    register: function (req, res) {
        let params = req.body;
        Processor.create(params).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '创建失败！', err));
            res.send(Message.messages(1, '创建成功！', result));
        })
    },
    //删除
    delete: function (req, res) {
        let params = req.body;
        Processor.destroy(params).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '删除失败！', err));
            if (!result.length) return res.send(Message.messages(0, '删除失败！', result));
            res.send(Message.messages(1, '删除成功！', result));
        })
    },
    //修改
    update: function (req, res) {
        let params = {
            id: req.body.id,
        }
        let updateParams = req.body;
        Processor.update(params, updateParams).exec((err, result) => {
            if (err) return res.send(erMessage.messages(0, '更新失败！', err));
            if (!result.length) return res.send(Message.messages(0, '更新失败！', result))
            res.send(Message.messages(1, '更新成功！', result))
        })
    },
    find: function (req, res) {
        let params = req.query;
        Processor.find(params || {}).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '查找失败！', err))
            if (!result.length) return res.send(Message.messages(0, '查找失败！', result))
            res.send(Message.messages(1, '查找成功！', result))
        })
    },

};


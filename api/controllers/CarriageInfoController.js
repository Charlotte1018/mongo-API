/**
 * CarriageInfoController
 *
 * @description :: Server-side logic for managing carriageinfoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    add: (req, res, callback) => {
        let params = req.body;
        CarriageInfo.create(params).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '创建失败', err));
            res.send(Message.messages(1, '创建成功', result));
        })
    },
    delete: (req, res) => {
        let params = req.body;
        CarriageInfo.destroy(params).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '删除失败！', err));
            if (result.length === 0) return res.send(Message.messages(0, '删除失败！', result));
            res.send(Message.messages(1, '删除成功', result));
        });
    },
    update: (req, res) => {
        let params = { id: req.body.id };
        let updateParams = req.body;
        CarriageInfo.update(params, updateParams).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '更新失败！', err));
            if (result.length === 0) return res.send(Message.messages(0, '更新失败！', result));
            res.send(Message.messages(1, '更新成功', result));
        });
    },
    find: (req, res) => {
        let params = req.query;
        CarriageInfo.find(params || {}).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '查找失败！', err));
            if (result.length === 0) return res.send(Message.messages(0, '查找失败！', result));
            res.send(Message.messages(1, '查找成功', result));
        });
    }
};


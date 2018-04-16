/**
 * StorageController
 *
 * @description :: Server-side logic for managing storages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    //登录
    login: (req, res) => {
        let params = req.body;
        let userInfo = {
            companyName: params.companyName
        }
        Storages.find(userInfo).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '登录失败', err))
            if (!result.length) return res.send(Message.messages(0, '您还未注册！', result));
            if (params.password === result[0].password) {
                res.send(Message.messages(1, '登录成功！', result));
            }
        })
    },
    //增加   Storages
    register: function (req, res) {
        let params = req.body;
        Storages.create(params).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '创建失败', err));
            res.send(Message.messages(1, '创建成功', result));
        })
    },
    //删除
    delete: function (req, res) {
        let params = req.body;
        Storages.destroy(params).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '删除失败', err));
            if (!result.length) return res.send(Message.messages(0, '删除失败', result));
            res.send(Message.messages(1, '删除成功', result));
        })
    },
    //修改
    update: function (req, res) {
        let params = {
            id: req.body.id,
        }
        let updateParams = req.body;
        Storages.update(params, updateParams).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '更新失败', err));
            if (!result.length) return res.send(Message.messages(0, '更新失败', result));
            res.send(Message.messages(1, '更新成功', result));
        })
    },
    find: function (req, res) {
        let params = req.query;
        Storages.find(params || {}).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '查找失败', err))
            if (!result.length) return res.send(Message.messages(0, '查找失败', result))
            res.send(Message.messages(1, '查找成功', result));
        })
    }
};


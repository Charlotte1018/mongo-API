/**
 * SuperviseController
 *
 * @description :: Server-side logic for managing supervises
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    find: (req, res) => {
        async.waterfall([(callback) => {
            //物流
            Carriage.find({}).exec((err, result) => {
                if (err) return callback(err);
                callback(null, result);
            });
        }, (carriage, callback) => {
            Processor.find({}).exec((err, result) => {
                if (err) return callback(err);
                callback(null, carriage, result);
            });
        }, (carriage, processor, callback) => {
            Storages.find({}).exec((err, result) => {
                if (err) return callback(err);
                callback(null, carriage, processor, result);
            });
        }], (err, carriage, processor, storages) => {
            if (err) return res.send(Message.messages(0, '出错啦！', err));
            res.send(Message.messages(1, '注册企业信息', { carriage, processor, storages }));
        });
    }
};


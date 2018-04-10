/**
     * 更新文章
     * @param req req信息
     * @param params 传参数据
     * @param cb 回调函数,回调参数:(err:错误信息, result:转换结果)
     */
updateArticle: (req, params, cb) => {
    let filter = {
        author: params.author,
        status: params.status, //草稿默认是0 且只有一个

    }
    async.waterfall([
        function (callback) {  //先查找是否存在未编辑草稿的文章

            Article.find(filter).exec((err, result) => {
                if (err) return callback(err)
                if (result.length) {
                    callback(null, true)
                } else {
                    callback(null, false)
                }
            })
        },
        function (isDraft, callback) { //true代表有草稿则更新，false代表无草稿则创建
            if (isDraft) {
                Article.update(filter, params).exec((err, result) => {
                    if (err) return callback(err)
                    callback(null, result)
                });
            } else {
                params.comments = 0;
                params.views = 0;
                params.likes = 0;

                Article.create(params).exec((err, result) => {
                    if (err) return callback(err)
                    callback(null, result)
                });
            }
        }
    ], function (err, result) {
        if (err) {
            cb(err, null)
        } else {
            cb(null, result)
        }
    })
}
class DBPost{
  constructor(url){
    this.storageKeyName = 'postList';//所以文章本地缓存存储键值
  }

  //得到全文信息
  getAllPostData(){
    var res = wx.getStorageSync(this.storageKeyName);
    if(!res){
      res=require('../data/data.js').postList;
      this.execSetStorageSync(res);
    }
    return res;
  }
  //本地缓存 保存/更新
  execSetStorageSync(data){
    wx.setStorageSync(this.storageKeyName, data);
  }
};
export{DBPost}
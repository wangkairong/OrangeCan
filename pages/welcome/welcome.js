// pages/welcome/welcome.js
Page({

  onTapJump: function (event) {
    wx.navigateTo({
      url: '../post/post',
      success: function () { 
        console.log("jump success")
         },
      fail: function () { 
        console.log("jump fail")
         },
      complete: function () { 
        console.log("jump complete") 
        }
    });
  },
  onUnload:function(){
    console.log("page is unload")
  },
  onHide:function(){
    console.log("page is onHide")
    
  }
  
})
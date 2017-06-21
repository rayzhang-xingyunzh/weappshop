// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location:{
      address:'湖北省武汉市武昌区宝通寺路百瑞景(南一区)1-6商铺',
      latidude: 30.51974,
      longitude: 114.33411,
      name:'曼果宠物'
    },
    tabSelectedIndex:0,
    openTime:'9:00-21:00'
  },

  selectTab:function(event){
    // console.log("selected:",event)
    this.setData({
      tabSelectedIndex:event.currentTarget.dataset.tabid
    })
  },

  showLocation:function(event){
    var location = this.data.location
    wx.openLocation({
      address:location.address,
      name:location.name,
      latitude: location.latidude,
      longitude: location.longitude,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
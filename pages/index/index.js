// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"曼果宠物乐园",
    phoneNumber:18502794699,
    location:{
      address:'武汉市武昌区宝通寺路百瑞景一期1-6商铺',
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

  phoneCall:function(){
    wx.makePhoneCall({
      phoneNumber: this.data.phoneNumber,
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
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    promotions:[{

    },{
      
    }],
    name:"曼果宠物乐园", codeUrl:'http://forweapp.oss-cn-shanghai.aliyuncs.com/code.jpeg',
    phoneNumber:"18502794699",
    location:{
      address:'武汉市武昌区宝通寺路百瑞景一期1-6商铺',
      latidude: 30.51974,
      longitude: 114.33411,
      name:'曼果宠物'
    },
    tabSelectedIndex:0,
    openTime:'9:00-21:00',
    nameGroupWidth:"200rpx"
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
    var pn = this.data.phoneNumber
    wx.showActionSheet({
      itemList: ["呼叫 " + pn],
      success:function(res){
        if(res.tapIndex == 0){
          wx.makePhoneCall({
            phoneNumber: pn,
          })
        }
      },fail:function(res){
        console.log(res)
      }
    })
  },

  showCode:function(){
    wx.previewImage({
      urls: [this.data.codeUrl],
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
  onShow:function(){

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
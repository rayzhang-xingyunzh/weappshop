// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notices: [{
      origin: "http://i2.kiimg.com/599607/bc88dd1fb5aa5898.png",
      image: "http://i2.kiimg.com/599607/bc88dd1fb5aa5898t.jpg",
      title: "买比瑞吉狗粮猫粮小包满100元",
      subTitle: "赠送价值20元高端零食！"
    }, {
      origin: "http://i2.kiimg.com/599607/bc88dd1fb5aa5898.png",
      image: "http://i2.kiimg.com/599607/bc88dd1fb5aa5898t.jpg",
      title: "买比瑞吉狗粮猫粮大包满300元",
      subTitle: "赠送价值80元高端零食+专用储粮桶！"
    }, {
      origin: "http://i2.kiimg.com/599607/1d62a752430b2b05.png",
      image: "http://i2.kiimg.com/599607/1d62a752430b2b05t.jpg",
      title: "买耐吉斯狗粮",
      subTitle: "送麦德氏超浓缩卵磷脂150G一盒！"
    }, {
      origin: "http://i2.kiimg.com/599607/bc88dd1fb5aa5898.png",
      image: "http://i2.kiimg.com/599607/bc88dd1fb5aa5898t.jpg",
      title: "grest犬猫综合营养膏",
      subTitle: "买二送一"
    }, {
      origin: "http://i2.kiimg.com/599607/bc88dd1fb5aa5898.png",
      image: "http://i2.kiimg.com/599607/bc88dd1fb5aa5898t.jpg",
      title: "转发文字及图片集满38个赞",
      subTitle: "送比瑞吉500g狗粮！"
    }],
    combos: [{
      origin: "http://i2.kiimg.com/599607/bc88dd1fb5aa5898.png",
      image: "http://i2.kiimg.com/599607/bc88dd1fb5aa5898t.jpg",
      title: "小型犬精致洗护套餐",
      subTitle: "（10斤内）39元！"
    }, {
      origin: "http://i2.kiimg.com/599607/bc88dd1fb5aa5898.png",
      image: "http://i2.kiimg.com/599607/bc88dd1fb5aa5898t.jpg",
      title: "小型犬精致洗护套餐",
      subTitle: "（10斤内）39元！"
    }, {
      origin: "http://i2.kiimg.com/599607/bc88dd1fb5aa5898.png",
      image: "http://i2.kiimg.com/599607/bc88dd1fb5aa5898t.jpg",
      title: "小型犬精致洗护套餐",
      subTitle: "（10斤内）39元！"
    }, {
      origin: "http://i2.kiimg.com/599607/bc88dd1fb5aa5898.png",
      image: "http://i2.kiimg.com/599607/bc88dd1fb5aa5898t.jpg",
      title: "猫咪轻柔洗护套餐",
      subTitle: "98元！"
    }, {
      origin: "http://i2.kiimg.com/599607/bc88dd1fb5aa5898.png",
      image: "http://i2.kiimg.com/599607/bc88dd1fb5aa5898t.jpg",
      title: "萌宠创意造型",
      subTitle: "（10斤内）128元！"
    }],
    englishName: "Mango's Pet",
    name: "曼果宠物乐园", codeUrl: 'http://i2.kiimg.com/599607/ad5279f2d433082e.jpg',
    phoneNumber: "18502794699",
    location: {
      address: '武汉市武昌区宝通寺路百瑞景一期1-6商铺',
      latidude: 30.51974,
      longitude: 114.33411,
      name: '曼果宠物'
    },
    tabSelectedIndex: 0,
    openTime: '9:00-21:00',
    tabsHeight: 450
  },

  selectTab: function (event) {
    // console.log("selected:",event)
    this.setData({
      tabSelectedIndex: event.currentTarget.dataset.tabid
    })
  },

  showLocation: function (event) {
    var location = this.data.location
    wx.openLocation({
      address: location.address,
      name: location.name,
      latitude: location.latidude,
      longitude: location.longitude,
    })
  },

  phoneCall: function () {
    var pn = this.data.phoneNumber
    wx.showActionSheet({
      itemList: ["呼叫 " + pn],
      success: function (res) {
        if (res.tapIndex == 0) {
          wx.makePhoneCall({
            phoneNumber: pn,
          })
        }
      }, fail: function (res) {
        console.log(res)
      }
    })
  },

  showCode: function () {
    wx.previewImage({
      urls: [this.data.codeUrl],
    })
  },

  showImages:function(){
    wx.previewImage({
      urls: ["http://i2.kiimg.com/599607/1d62a752430b2b05.png", "http://i2.kiimg.com/599607/bc88dd1fb5aa5898.png","http://i2.kiimg.com/599607/ad5279f2d433082e.jpg"],
    })
  },

  showImage: function (event) {
    wx.previewImage({
      urls: [event.currentTarget.dataset.origin],
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getExtConfig({

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  onShow: function () {

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
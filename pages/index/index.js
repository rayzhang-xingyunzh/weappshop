// index.js
Page({
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

  , selectTab: function (event) {
    // console.log("selected:",event)
    this.setData({
      tabSelectedIndex: event.currentTarget.dataset.tabid
    })
  },

  showLocation: function (event) {
    var location = this.data.location
    // wx.chooseLocation({
    //   success: function(res) {
    //     console.log(res)
    //   },
    // })
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

  showImages: function () {
    wx.previewImage({
      current: this.data.bannerOriginalImages[this.data.currentBannerIndex],
      urls: this.data.bannerOriginalImages,
    })
  },

  swiperChanged: function (event) {
    var current = event.detail.current
    this.setData({
      currentBannerIndex: current
    })
  }

  , showImage: function (event) {
    wx.previewImage({
      urls: [event.currentTarget.dataset.origin],
    })
  }

  /**
 * 页面的初始数据
 */
  , data: {
    currentBannerIndex: 0,
    bannerImages: ["http://i2.kiimg.com/599607/9662acabeca0acb6s.jpg",
      "http://i2.kiimg.com/599607/01903977571d49aes.jpg"],
    bannerOriginalImages: ["http://i2.kiimg.com/599607/9662acabeca0acb6.jpg",
      "http://i2.kiimg.com/599607/01903977571d49ae.jpg"],
    rooms: [{
      origin: "http://i1.buimg.com/599607/a729729f18969f18.jpg",
      image: "http://i1.buimg.com/599607/a729729f18969f18t.jpg",
      title: "3D山水全景套间",
      subTitle: "180元/天"
    }, {
      origin: "http://i1.buimg.com/599607/a729729f18969f18.jpg",
      image: "http://i1.buimg.com/599607/a729729f18969f18t.jpg",
      title: "3D山水全景套间",
      subTitle: "180元/天"
    }, {
      origin: "http://i1.buimg.com/599607/a729729f18969f18.jpg",
      image: "http://i1.buimg.com/599607/a729729f18969f18t.jpg",
      title: "3D山水全景套间",
      subTitle: "180元/天"
    }, {
      origin: "http://i1.buimg.com/599607/a729729f18969f18.jpg",
      image: "http://i1.buimg.com/599607/a729729f18969f18t.jpg",
      title: "3D山水全景套间",
      subTitle: "180元/天"
    }, {
      origin: "http://i1.buimg.com/599607/a729729f18969f18.jpg",
      image: "http://i1.buimg.com/599607/a729729f18969f18t.jpg",
      title: "3D山水全景套间",
      subTitle: "180元/天"
    }, {
      origin: "http://i1.buimg.com/599607/a729729f18969f18.jpg",
      image: "http://i1.buimg.com/599607/a729729f18969f18t.jpg",
      title: "3D山水全景套间",
      subTitle: "180元/天"
    }, {
      origin: "http://i1.buimg.com/599607/a729729f18969f18.jpg",
      image: "http://i1.buimg.com/599607/a729729f18969f18t.jpg",
      title: "3D山水全景套间",
      subTitle: "180元/天"
    }],
    sales: [{
      origin: "http://i1.buimg.com/599607/0b777f6781f4ad0f.jpg",
      image: "http://i1.buimg.com/599607/0b777f6781f4ad0ft.jpg",
      title: "小型犬精致洗护套餐",
      subTitle: "（10斤内）39元！"
    }],
    englishName: "Puppy pet hotel",
    name: "狗狗大人 宠物酒店",
    nickName: "宠物·酒店",
    phoneNumber: "18502794699",
    location: {
      address: '武汉洪山区杨园南路武铁佳苑东门底商19号商铺',
      latidude:30.5908,
      longitude: 114.3533,
      name: '狗狗大人宠物酒店(武汉钻石总店)'
    },
    tabSelectedIndex: 0,
    introduction:"   此处应有文字若干行，暂请自行脑补",
    openTime: '9:30-22:00'
  }

})
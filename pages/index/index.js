
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

  showCode: function () {
    wx.previewImage({
      urls: ["http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RcrVGZdd7Giajficvu8jib50QQuayvpNIkw8icWSHBj8KsMWlEqxx77pRnC67g3koZgH8WbwBPhsPEO5A/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1"],
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

  , goToMain:function(event){
    wx.navigateToMiniProgram({
      appId: ''
    })
  }

  , showImage: function (event) {
    wx.previewImage({
      urls: [event.currentTarget.dataset.origin]
    })
  }

  , showMarkupImages: function (event) {
    wx.previewImage({
      current: event.currentTarget.dataset.origin,
      urls: this.data.markups
    })
  }

  /**
 * 页面的初始数据
 */
  , data: {
    currentBannerIndex: 0,
    bannerImages: ["http://mmbiz.qpic.cn/mmbiz_png/JWk88JUM5RciaZnyLyyQp2VDqgicE2O0nzQKV0I4PQm5ULqEWug7V97uqA0iaShUGznG1gREfPDRpQ69XGB1nmPMw/640?wx_fmt=png&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_png/JWk88JUM5RcrVGZdd7Giajficvu8jib50QQhEPCcQ1OO7f7526ZtfZOibNdE2tibw8W6sroVUeHiaeOr6hvrTvUNDOmg/640?wx_fmt=png&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RciaZnyLyyQp2VDqgicE2O0nzGnlJaZ71beoDtrCIQjEv3W2UnQxUNSz78A68tXLL68ZHiaQmXsZCVNQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_png/JWk88JUM5RciaZnyLyyQp2VDqgicE2O0nzGl1Nl725LoGDR9sYACdumI1KnbRx7t8GERhoTiavHdVtt9BuqZRMm2w/640?wx_fmt=png&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_png/JWk88JUM5RciaZnyLyyQp2VDqgicE2O0nz1kz36ld1kIjapjicPUcKKD7CnQzyOQPFWXj55IncPBunIrjdWL2wEnA/640?wx_fmt=png&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_png/JWk88JUM5RciaZnyLyyQp2VDqgicE2O0nzMicwWgUS68FoKqL9s6r2qBJHR0MTU2UEbTMPgnH3I93Rkj28gicA5yzQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1"],
    bannerOriginalImages: ["http://mmbiz.qpic.cn/mmbiz_png/JWk88JUM5RciaZnyLyyQp2VDqgicE2O0nzQKV0I4PQm5ULqEWug7V97uqA0iaShUGznG1gREfPDRpQ69XGB1nmPMw/640?wx_fmt=png&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_png/JWk88JUM5RcrVGZdd7Giajficvu8jib50QQhEPCcQ1OO7f7526ZtfZOibNdE2tibw8W6sroVUeHiaeOr6hvrTvUNDOmg/640?wx_fmt=png&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RciaZnyLyyQp2VDqgicE2O0nzGnlJaZ71beoDtrCIQjEv3W2UnQxUNSz78A68tXLL68ZHiaQmXsZCVNQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_png/JWk88JUM5RciaZnyLyyQp2VDqgicE2O0nzGl1Nl725LoGDR9sYACdumI1KnbRx7t8GERhoTiavHdVtt9BuqZRMm2w/640?wx_fmt=png&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_png/JWk88JUM5RciaZnyLyyQp2VDqgicE2O0nz1kz36ld1kIjapjicPUcKKD7CnQzyOQPFWXj55IncPBunIrjdWL2wEnA/640?wx_fmt=png&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_png/JWk88JUM5RciaZnyLyyQp2VDqgicE2O0nzMicwWgUS68FoKqL9s6r2qBJHR0MTU2UEbTMPgnH3I93Rkj28gicA5yzQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1"],
    englishName: "Puppy pet hotel",
    name: "狗狗大人 宠物酒店",
    nickName: "宠物·酒店",
    phoneNumber: "18674075127",
    location: {
      address: '武汉洪山区杨园南路武铁佳苑东门底商19号商铺',
      latidude: 30.5908,
      longitude: 114.3533,
      name: '狗狗大人宠物酒店(武汉钻石总店)'
    },
    tabSelectedIndex: 0,
    introduction: "  狗狗大人宠物酒店是一家致力于打造全武汉宠物级高端住宿的宠物店，为主人外出导致的家中爱宠无法照顾提供方便以及免除后顾之忧。\n  狗狗大人宠物酒店所有宠物住宿房间均为独立单间。每个房间配备独立摄像头和一位贴心管家。您可以在任何地点24小时观看狗狗住店情况。私人管家独立负责您的爱宠，24小时待命。让您的爱宠远离笼养与孤独。\n  狗狗大人宠物酒店服务项目：酒店式宠物寄养。世界级NGCK宠物协会B级美容师坐镇美容。\n  宠物用品出售。",
    openTime: '9:00-21:00'
  }

})
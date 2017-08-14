
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
    rooms: [{
      origin: "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RdA9avuhWdxMib6c2NgytT1Im1rzWwk2gvWUlAe6mIN9gk63Epx4FvkATichJ5Y3IdP74Ze87TATFzQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      image: "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RdA9avuhWdxMib6c2NgytT1Im1rzWwk2gvWUlAe6mIN9gk63Epx4FvkATichJ5Y3IdP74Ze87TATFzQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      title: "3D山水全景套间",
      subTitle: "180元/天"
    }, {
      origin: "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RdA9avuhWdxMib6c2NgytT1Ia3ic1TrVAsTic2lZye3hibtD9T3rbYVVy8PHJfc9xSfYglIsSNbseop6Q/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      image: "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RdA9avuhWdxMib6c2NgytT1Ia3ic1TrVAsTic2lZye3hibtD9T3rbYVVy8PHJfc9xSfYglIsSNbseop6Q/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      title: "3D地中海套间",
      subTitle: "150元/天"
    }, {
      origin: "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RdA9avuhWdxMib6c2NgytT1IzYGO2vgZ3tmkxhNCDEM6lc6jgGtgIfMPibuvskbNeZVNjju3Pn1WjiaA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      image: "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RdA9avuhWdxMib6c2NgytT1IzYGO2vgZ3tmkxhNCDEM6lc6jgGtgIfMPibuvskbNeZVNjju3Pn1WjiaA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      title: "3D欧式街景套间",
      subTitle: "150元/天"
    }, {
      origin: "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RdA9avuhWdxMib6c2NgytT1IM02TBVq6CB1yzEDu3OiaIs3De9nORSy5NwK1De3L5gw5cDxYbPojHog/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      image: "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RdA9avuhWdxMib6c2NgytT1IM02TBVq6CB1yzEDu3OiaIs3De9nORSy5NwK1De3L5gw5cDxYbPojHog/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      title: "巧克力工厂套间",
      subTitle: "110元/天"
    }, {
      origin: "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RdA9avuhWdxMib6c2NgytT1If5HGl9RicbG6EE4p1TbyG2qUKUOLicbgLu3GIrreSVGnvib1rm7ia8I6rQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      image: "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RdA9avuhWdxMib6c2NgytT1If5HGl9RicbG6EE4p1TbyG2qUKUOLicbgLu3GIrreSVGnvib1rm7ia8I6rQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      title: "雨中漫步套间",
      subTitle: "100元/天"
    }, {
      origin: "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RdA9avuhWdxMib6c2NgytT1IB30KgbwWyQoQE8sNbhqCiaUHL2zCrwsXhsSEn2ic87fCfDwjwrflf2lQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      image: "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RdA9avuhWdxMib6c2NgytT1IB30KgbwWyQoQE8sNbhqCiaUHL2zCrwsXhsSEn2ic87fCfDwjwrflf2lQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      title: "黑白魔方城套间",
      subTitle: "80元/天"
    }, {
      origin: "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RdA9avuhWdxMib6c2NgytT1IicanyreoLAGB7skknk5fbNqnNgib64uSeiaenwp8hmRWWFlico2fliaAzgw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      image: "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RdA9avuhWdxMib6c2NgytT1IicanyreoLAGB7skknk5fbNqnNgib64uSeiaenwp8hmRWWFlico2fliaAzgw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      title: "温馨糖果房套间",
      subTitle: "80元/天"
    }],
    markups: [
      "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFTnwC5ZbBoL7K5GjsSebZ4YqHicMyMyNFibufbByaZibBwKrPj9nolS3Xg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFQ5hibWebYhhgwCaWJQOkMIjrobFichKWZMCfiaaTicCs0hbcrFd6He7sKw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFF2NgUeq0h936F3FhtJibYy4VM43CUK06aniauBBWx6ribyeyclicCKtmIA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFOcpdFzElJiaSJJmAxzle4fhE2EyqJD7dvXk852cvn5eYzVFcGPWWKIQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFMQ8ziau9jjUn1zo8Hlf5AxU3bD1qsfuhW6cDreIcYialvmnGQAsHluFA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFgxb1xiaE6jr4FSCaXmQXAP8gOicCL5NUKoTicqqNmFE7665vJkrEk8Z8w/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFcUSSSiahicb7icT5ibUXcRVYiadicmatUnTdMnxtBtYEenCRW6ibloQqnKnUQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFuiaic6O153yPrCjh2CRNKPmxyJfRnGeaocRicN1ua6cQ9Ck0EyxrJhq9A/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFzKyfywMwUCiclMTtmFgQM1mZafqH8ibaVjKOFEFPUjuvgp3cR6FpV4Sg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFb8RW6hdQS4qYs2OMnjoCedzviaeTTtbe0M05rpquMj9GmLCRE4BMJ1A/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFh68YprFzChtqdibu7CoIY98jlmgVAjq2HluAKrAbIIVuNgzBmhvngbw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFR49CrUPV01ebnkgKmceGxltdmBCU6N1NeIzia8gczluGPkqo6gyBaaA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFjBtn0OxZkWY5z9uJqt9PeJMfBBn5YTbyicbL3bBqHzhEZRia4iahIH6Xw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfF9VuwAia3AEVicrXAMHNib4JQ4nbrAxunWvVBstoyPdDubTl7UT6y0UlSQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFQaBEvQJOJY1bRvWgOj5vlAFe4po3y8LQxyR3tBQicsaibHEXQpnqdYcA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFUeNX4gNoOttvviaiaIsRjTGic7hKKKJMKHWryF39PU2rArVNibaWzviaibkA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFxnyGOftUeaQmWS1PGdW6zoUeo3jOLhAQib9LicUu1zNibe03JVG5wWS3Q/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFSpQr92ZLW5NyPVqmCmwC8WuwFCzD5s9GU2LpD8XoX49BPpzJWZZiaRQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFxjP1T34b7MqJl6nkS0jU2QNRTiae3WGib9JE5ju0ztbBJRq4EAM10hlQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFx8yukYdBRobw1tCk58HzhqBbwrty9dvhTYhgp6MR69aAR0Gib8sQcPw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFX0IGQmzydtaEicefc0ayCNsJFUXhkA3eYH0Ld1xfk8pODoHZFmFgQ6g/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1"],
    sales: [{
      origin: "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFzq1vXp8MryXx9aFg05A0ncuSQ66PYAice4NvSI2I8NFrVEs3rK6DnUw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      image: "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFzq1vXp8MryXx9aFg05A0ncuSQ66PYAice4NvSI2I8NFrVEs3rK6DnUw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      category: "柯基",
      sex: true,
      age: "4个月",
      vaccination: "疫苗齐全",
      price: 3800
    }, {
      origin: "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFdShseicuKBy4XrBQzviacSrLnGUfNb1RpPT40sopW4Vum7oAYX9M3qrw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      image: "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFdShseicuKBy4XrBQzviacSrLnGUfNb1RpPT40sopW4Vum7oAYX9M3qrw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      category: "小体泰迪",
      sex: true,
      age: "4个月",
      vaccination: "疫苗一针",
      price: 1599
    }, {
      origin: "hhttp://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFufpKjKGWYichWHWV0TibZYU8pQwOXeYYjD6RK48Tb0aQOrTSYbv2ibVnQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      image: "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfFufpKjKGWYichWHWV0TibZYU8pQwOXeYYjD6RK48Tb0aQOrTSYbv2ibVnQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      category: "松狮",
      sex: false,
      age: "4个月",
      vaccination: "疫苗齐全",
      price: 4500
    }, {
      origin: "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfF89mBoXpq29iaxTeoTcfYsyuPZzCDX40nF1voL3cibQUgs95x40R88fvw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      image: "http://mmbiz.qpic.cn/mmbiz_jpg/JWk88JUM5RehTpChS2o2Vntux2u4VvfF89mBoXpq29iaxTeoTcfYsyuPZzCDX40nF1voL3cibQUgs95x40R88fvw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      category: "松狮",
      sex: false,
      age: "4个月",
      vaccination: "疫苗齐全",
      price: 4500
    }],
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
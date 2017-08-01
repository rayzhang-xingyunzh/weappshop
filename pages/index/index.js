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

  showImages: function () {
    wx.previewImage({
      current: this.data.bannerOriginalImages[this.data.currentBannerIndex],
      urls: this.data.bannerOriginalImages,
    })
  },

  swiperChanged:function(event){
    var current = event.detail.current
    this.setData({
      currentBannerIndex:current
    })
  }

  ,showImage: function (event) {
    wx.previewImage({
      urls: [event.currentTarget.dataset.origin],
    })
  }

  /**
 * 页面的初始数据
 */
  , data: {
    currentBannerIndex:0,
    bannerImages: ["http://i2.kiimg.com/599607/9662acabeca0acb6s.jpg",
      "http://i2.kiimg.com/599607/01903977571d49aes.jpg",
      "http://i2.kiimg.com/599607/c9b8876139d10770s.jpg",
      "http://i2.kiimg.com/599607/70aff178d52b9c30s.jpg",
      "http://i2.kiimg.com/599607/bb3e4c2e9b96fb95s.jpg",
      "http://i2.kiimg.com/599607/314486c0022f4269s.jpg",
      "http://i2.kiimg.com/599607/76b6cba3b8e35f97s.jpg",
      "http://i2.kiimg.com/599607/dc563159a89cc4bfs.jpg",
      "http://i2.kiimg.com/599607/18975c417c8da624s.jpg"],
    bannerOriginalImages: ["http://i2.kiimg.com/599607/9662acabeca0acb6.jpg",
    "http://i2.kiimg.com/599607/01903977571d49ae.jpg",
    "http://i2.kiimg.com/599607/c9b8876139d10770.jpg",
    "http://i2.kiimg.com/599607/70aff178d52b9c30.jpg",
    "http://i2.kiimg.com/599607/bb3e4c2e9b96fb95.jpg",
    "http://i2.kiimg.com/599607/314486c0022f4269.jpg",
    "http://i2.kiimg.com/599607/76b6cba3b8e35f97.jpg",
    "http://i2.kiimg.com/599607/dc563159a89cc4bf.jpg",
    "http://i2.kiimg.com/599607/18975c417c8da624.jpg"],
    vips: [{
      color:"#cbcbff",
      image: "http://i2.kiimg.com/599607/5d2449359bc7c51c.png",
      title: "银卡充值500元",
      subTitle: "享受洗澡美容9.5折优惠"
    },{
        color: "#f8c228",
      image: "http://i2.kiimg.com/599607/60fd1275def4bd45.png",
      title: "金卡充值1000元",
      subTitle: "享受洗澡美容9折优惠，商品9.5折优惠"
    }, {
        color: "white",
      image: "http://i2.kiimg.com/599607/24a645ec7acb63e0.png",
      title: "白金卡充值2000元",
      subTitle: "享受洗澡美容8.5折优惠，商品9折优惠"
    }, {
        color: "#c67239",
      image: "http://i2.kiimg.com/599607/04b2ad9c46c92403.png",
      title: "钻石卡充值3000元",
      subTitle: "享受洗澡美容8折优惠，商品9折优惠"
    }],
    notices: [{
      origin: "http://i1.buimg.com/599607/a729729f18969f18.jpg",
      image: "http://i1.buimg.com/599607/a729729f18969f18t.jpg",
      title: "买比瑞吉狗粮猫粮小包满100元",
      subTitle: "赠送价值20元高端零食！"
    }, {
        origin: "http://i1.buimg.com/599607/049742638e24fe18.jpg",
        image: "http://i1.buimg.com/599607/049742638e24fe18t.jpg",
      title: "买比瑞吉狗粮猫粮大包满300元",
      subTitle: "赠送价值80元高端零食+专用储粮桶！"
    }, {
        origin: "http://i1.buimg.com/599607/1d62a752430b2b05.jpg",
      image: "http://i1.buimg.com/599607/1d62a752430b2b05t.jpg",
      title: "买耐吉斯狗粮",
      subTitle: "送麦德氏超浓缩卵磷脂150G一盒！"
    }, {
        origin: "http://i1.buimg.com/599607/ae8e25c823b3ee1b.jpg",
      image: "http://i1.buimg.com/599607/ae8e25c823b3ee1bt.jpg",
      title: "grest犬猫综合营养膏",
      subTitle: "买二送一"
    }, {
        origin: "http://i1.buimg.com/599607/bc88dd1fb5aa5898.jpg",
      image: "http://i1.buimg.com/599607/bc88dd1fb5aa5898t.jpg",
      title: "转发文字及图片集满38个赞",
      subTitle: "送比瑞吉500g狗粮！"
    }],
    combos: [{
      origin: "http://i1.buimg.com/599607/0b777f6781f4ad0f.jpg",
      image: "http://i1.buimg.com/599607/0b777f6781f4ad0ft.jpg",
      title: "小型犬精致洗护套餐",
      subTitle: "（10斤内）39元！"
    }, {
      origin: "http://i1.buimg.com/599607/b86641a58b071218.jpg",
      image: "http://i1.buimg.com/599607/b86641a58b071218t.jpg",
      title: "中型犬精致洗护套餐",
      subTitle: "（30斤内）59元！"
    }, {
      origin: "http://i1.buimg.com/599607/3a38364ff58c81de.jpg",
      image: "http://i1.buimg.com/599607/3a38364ff58c81det.jpg",
      title: "大型犬精致洗护套餐",
      subTitle: "（50斤内）89元！"
    }, {
      origin: "http://i1.buimg.com/599607/46624f0ae2c7c193.jpg",
      image: "http://i1.buimg.com/599607/46624f0ae2c7c193t.jpg",
      title: "猫咪轻柔洗护套餐",
      subTitle: "98元！"
    }, {
      origin: "http://i1.buimg.com/599607/849ec510b336ca11.jpg",
      image: "http://i1.buimg.com/599607/849ec510b336ca11t.jpg",
      title: "萌宠创意造型",
      subTitle: "（10斤内）128元！"
    }],
    englishName: "Puppy pet hotel",
    name: "狗狗大人 宠物酒店",
    nickName:"宠物·酒店",
    codeUrl: 'http://i2.kiimg.com/599607/ad5279f2d433082e.jpg',
    phoneNumber: "18627777872",
    location: {
      address: '湖北省武汉市武昌区杨园街',
      latidude: 30.51974,
      longitude: 114.33411,
      name: '狗狗大人 宠物酒店'
    },
    tabSelectedIndex: 0,
    openTime: '9:30-22:00'
  }

})
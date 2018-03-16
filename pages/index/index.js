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
    let origin = event.currentTarget.dataset.origin
    if(!!origin){
      wx.previewImage({
        urls: [event.currentTarget.dataset.origin],
      })
    }
  }

  /**
 * 页面的初始数据
 */
  , data: {
    currentBannerIndex:0,
    bannerImages: ["https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBbLhapBRhDpw4FxH5MJhcNL3bkxDkTzqAibqia2RcWibMBu6ZiciadgtZjgw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBIgzaBr6FnYLXiaw40UibSibR3u8mMJCkE4ppbwEzIPoKl530sJRXoQppQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBJPPV9u9JthhoGP31prZDPhOzic3LicicJdbCCG3zpJjufaFIlPVXrVVicw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBL7AJDvDbHTUQv7A3uLhm4qxnurKdMHa2zDU90UyTZibIBR80oicAuLrw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBl4gE2hJTfjtGtu3JdgI1ws9U2kyXaastM9kicIwOss4Xxx8q9zaCOIg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBJaBIPAe3lOQx5cYRuXGpyn9OyKqEkaT83rAAuqenpYB6A79ezjh2DA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvB2RibDnk6l9DjanfWvwx05lFMP5gZ4ZJHOrf4tjmaJeicpxia9vGt6jRSw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBgojkNUg2dOZebeqUib71c570CmWMDaDDDCiaWicLib8XUYawcymOS42yAw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBWGs8U7TiaDdtLeHqQbMcuoxDiaQPaA62lF3U2hEjutU5v1M84h6epO5Q/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1"],
    bannerOriginalImages: ["https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBbLhapBRhDpw4FxH5MJhcNL3bkxDkTzqAibqia2RcWibMBu6ZiciadgtZjgw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBIgzaBr6FnYLXiaw40UibSibR3u8mMJCkE4ppbwEzIPoKl530sJRXoQppQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBJPPV9u9JthhoGP31prZDPhOzic3LicicJdbCCG3zpJjufaFIlPVXrVVicw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBL7AJDvDbHTUQv7A3uLhm4qxnurKdMHa2zDU90UyTZibIBR80oicAuLrw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBl4gE2hJTfjtGtu3JdgI1ws9U2kyXaastM9kicIwOss4Xxx8q9zaCOIg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBJaBIPAe3lOQx5cYRuXGpyn9OyKqEkaT83rAAuqenpYB6A79ezjh2DA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvB2RibDnk6l9DjanfWvwx05lFMP5gZ4ZJHOrf4tjmaJeicpxia9vGt6jRSw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBgojkNUg2dOZebeqUib71c570CmWMDaDDDCiaWicLib8XUYawcymOS42yAw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      "https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBWGs8U7TiaDdtLeHqQbMcuoxDiaQPaA62lF3U2hEjutU5v1M84h6epO5Q/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1"],
    vips: [{
      color:"#cbcbff",
      image: "/src/images/vip1.png",
      title: "银卡充值500元",
      subTitle: "享受洗澡美容9.5折优惠"
    },{
        color: "#f8c228",
        image: "/src/images/vip2.png",
      title: "金卡充值1000元",
      subTitle: "享受洗澡美容9折优惠，商品9.5折优惠"
    }, {
        color: "white",
        image: "/src/images/vip3.png",
      title: "白金卡充值2000元",
      subTitle: "享受洗澡美容8.5折优惠，商品9折优惠"
    }, {
        color: "#c67239",
        image: "/src/images/vip4.png",
      title: "钻石卡充值3000元",
      subTitle: "享受洗澡美容8折优惠，商品9折优惠"
    }],
    notices: [{
      origin: "https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBnpCuqo4lRcmfSlyqz1DSydafO2RxIJokHWrkylI8OTL0TkOuDvbUrA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      image: "https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBnpCuqo4lRcmfSlyqz1DSydafO2RxIJokHWrkylI8OTL0TkOuDvbUrA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      title: "买比瑞吉狗粮猫粮小包满100元",
      subTitle: "赠送价值20元高端零食！"
    }, {
        origin: "https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBVibNJBbvCpKdVwVianW05asTSMj2qOcdBKtJ2TCgVYqyHA4tOsyGxOlA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBVibNJBbvCpKdVwVianW05asTSMj2qOcdBKtJ2TCgVYqyHA4tOsyGxOlA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      title: "买比瑞吉狗粮猫粮大包满300元",
      subTitle: "赠送价值80元高端零食+专用储粮桶！"
    }, {
        origin: "https://mmbiz.qpic.cn/mmbiz_png/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBtCaQ7Q9ibOMMwKVicfdMSekuOzZl1bqVVxCTNk4RJxfd3OUaX92xxGHA/640?wx_fmt=png&wxfrom=5&wx_lazy=1",
        image: "https://mmbiz.qpic.cn/mmbiz_png/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBtCaQ7Q9ibOMMwKVicfdMSekuOzZl1bqVVxCTNk4RJxfd3OUaX92xxGHA/640?wx_fmt=png&wxfrom=5&wx_lazy=1",
      title: "买耐吉斯狗粮",
      subTitle: "送麦德氏超浓缩卵磷脂150G一盒！"
    }, {
        origin: "https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBU6kibLQvMd9jwkXx4sYwVnjkokhS6XDIWibYzwiaco48sbqCmOZWoLADQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBU6kibLQvMd9jwkXx4sYwVnjkokhS6XDIWibYzwiaco48sbqCmOZWoLADQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      title: "grest犬猫综合营养膏",
      subTitle: "买二送一"
    }, {
        origin: "https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBVH2WbpsmkUTaYUdNtiaj3VbHtkWlraZqPU82LB3micuH6nibkJHUhTHEQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBVH2WbpsmkUTaYUdNtiaj3VbHtkWlraZqPU82LB3micuH6nibkJHUhTHEQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1",
      title: "转发文字及图片集满38个赞",
      subTitle: "送比瑞吉500g狗粮！"
    }],
    combos: [{
      image: "/src/images/小狗.png",
      title: "小型犬精致洗护套餐",
      subTitle: "（10斤内）39元！"
    }, {
        image: "/src/images/中狗.png",
      title: "中型犬精致洗护套餐",
      subTitle: "（30斤内）59元！"
    }, {
        image: "/src/images/大狗.png",
      title: "大型犬精致洗护套餐",
      subTitle: "（50斤内）89元！"
    }, {
        image: "/src/images/猫咪轻柔洗护套餐.png",
      title: "猫咪轻柔洗护套餐",
      subTitle: "98元！"
    }, {
        image: "/src/images/萌宠创意造型.png",
      title: "萌宠创意造型",
      subTitle: "（10斤内）128元！"
    }],
    englishName: "Mango's Pet",
    name: "曼果宠物乐园",
    codeUrl: 'https://mmbiz.qpic.cn/mmbiz_png/0fDicUBTeAC78wgfH9EyricxrYBqkWONvBqvQkzLQPyX7jtEKAtvFAcSnTuGydDctqRG6xuVnPLLDzmH7VCxPZgw/640?wx_fmt=png&wxfrom=5&wx_lazy=1',
    phoneNumber: "18627777872",
    location: {
      address: '武汉市武昌区宝通寺路百瑞景一期1-6商铺',
      latidude: 30.51974,
      longitude: 114.33411,
      name: '曼果宠物'
    },
    tabSelectedIndex: 0,
    openTime: '9:30-22:00'
  }

})
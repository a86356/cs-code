// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['北京市','北京市','东城区'],
    pic:"/images/999.png",
    cond_txt:"多云",
    hum:"0",
    pres:"0",
    vis:"0",
    wind_dir:"0",
    wind_spd:"0",
    wind_sc:"0"
  },
  getInfo(e) {
    let { avatarUrl, nickName } = e.detail.userInfo;
    this.setData({
      nickName: nickName,
      avatar: avatarUrl
    })


  },
  changecity(e){
    this.setData({
      region: e.detail.value
    },()=>{
      this.getNowWeather();
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNowWeather();
  },


  getNowWeather(){
    let that = this;
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now',
      data:{
        location: this.data.region[1],
        key:"37c13615ec3043909023813551b2c39b"
      },
      success:function(res){
        let {
           cond_code,
           cond_txt,
           hum,
           pres, 
           vis,
           wind_dir,
           wind_spd,
           wind_sc
        } =  res.data.HeWeather6[0].now;
        that.setData({
          cond_txt: cond_txt,
          pic: "/images/" + cond_code+".png",
          hum,
          pres,
          vis,
          wind_dir,
          wind_spd,
          wind_sc
        })


      }
    })

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
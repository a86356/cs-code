// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"",
    pic:"",
    content:"",
    date:"",
    id:"356412",
    detailList:[
      {
        id:"356412",
        title: "特写：2019，天安门城楼前的中国",
      poster: "http://image1.chinanews.com.cn/cnsupload/big/2019/10-01/4-426/a7e426b0dd6c43d2bc710fafe810a0d5.jpg",
        add_date: "2019-10 - 01",
      content: "如今，在北京城古老的建筑身旁，“人类命运共同体”彩车现身长安街，传递出中国与世界“天下大同”“有容乃大”的共存格局。中国人始终坚信，推动构建人类命运共同体，不是倡导每个国家必须遵循统一的价值标准，更不是一种制度替代另一种制度，而是主张不同社会制度、不同意识形态、不同历史文明、不同发展水平的国家，在国际活动中目标一致、利益共生。"
      },
      {
        id: "546734",
      title: "中国成功发射高分十号卫星 主要用于国土普查、防灾减灾等领域",
      poster: "http://i2.chinanews.com/simg/cmshd/2019/10/05/998e12aa71f248d4a797761b18e48418.jpg",
      add_date: "2019 - 10 - 05",
      content: "中新网北京10月5日电(郭超凯 赵金龙)北京时间10月5日2时51分，中国在太原卫星发射中心用长征四号丙运载火箭，成功将高分十号卫星发射升空，卫星顺利进入预定轨道，任务获得圆满成功。高分十号卫星是高分辨率对地观测系统国家科技重大专项安排的微波遥感卫星，\n地面像元分辨率最高可达亚米级，主要用于国土普查、城市规划、土地确权、路网设计、农作物估产和防灾减灾等领域，可为“一带一路”等国家重大战略实施和国防现代化建设提供信息保障。\n长征四号丙运载火箭和高分十号卫星，均由中国航天科技集团有限公司所属上海航天技术研究院研制。此次任务是长征系列运载火箭的第314次航天飞行。(完) "
      },
      {
        id: "239875",
      title: "记者手记：国家庆典，每个人都是记录者",
      poster: "http://i2.chinanews.com/simg/cmshd/2019/10/01/c5391220f28d49bdbd14c58a4300bde0.jpg",
      add_date: "2019 - 10 - 01",
      content: "10月1日凌晨3时，大批中外记者先后乘坐巴士，向天安门方向出发。仍处于夜幕中的北京，多数市民正在享受难得的假期时光。此刻长安街上的安静，将与7个小时后形成巨大反差。作为今年中国官方举行的重要活动——新中国成立70周年庆典，吸引了4700余名中外记者报名采访。被外界誉为“站在世界版图前的中国”，70年后发展坐标定向何方，本身自带足够吸引力。"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id;
    
    let list = this.data.detailList;
    for(let i=0;i<list.length;i++){
      let item = list[i];
      if(list[i].id==id){
        this.setData({
          title: item.title,
          pic: item.poster,
          content: item.content,
          date: item.add_date,
        })
      }
    }
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
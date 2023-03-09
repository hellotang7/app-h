export default {
  state:{
    isCollapse:false //控制菜单收缩
  },
  mutations:{
    //修改菜单收缩方法
    collapseMenu(state){
      state.isCollapse = !state.isCollapse
    }
  }
}

export default {
  install (Vue, options) {
    Vue.prototype.API_URL = API
  }
}
const API = {
  /* 获取验证码 */
  getValidateCode: '/api/login/getValidateCode',
  /* 登录 */
  login: '/api/login/login',
  getMenu: '/api/menu/findMenuList', // 查询菜单栏
  getCategory: '/api/followUp/resourceClassifyList', // 查询分类列表
  addCategory: '/api/followUp/resourceClassify', // 新增分类
  editCategoty: '/api/followUp/resourceClassify', // 更新分类
  delCategory: '/api/followUp/deleteResourceClassify', // 删除分类
  getLabel: '/api/followUp/labelList', // 获取标签
  addLabel: '/api/followUp/label', // 新增标签
  editLabel: '/api/followUp/label', // 更新标签
  delLabel: '/api/followUp/deleteLabel', // 删除标签
  getAllLabel: '/api/followUp/findResourceClassifyHasLabelList', // 查询所有分类标签
  getForm: '/api/followup/inquiry/page', // 查询问诊表
  addForm: '/api/followup/inquiry', // 新增问诊表
  editForm: '/api/followup/inquiry', // 更新问诊表
  delForm: '/api/followup/inquiry', // 删除问诊表
  putFormStatus: '/api/followup/inquiry/used_status', // 启用禁用问诊表
  getFormDetail: '/api/followup/inquiry', // 查询问诊表详情
  addSubject: '/api/followup/inquiry/question', // 新增问诊表题目
  getSubject: '/api/followup/inquiry/question', // 查询问诊表题目详情
  editSubject: '/api/followup/inquiry/question', // 更新问诊表题目
  delSubject: '/api/followup/inquiry/question', // 删除问诊表题目
  /* 新增患教资料 */
  addSufferInfo: '/api/followup/patient_guide',
  /* 查询患教资料详情 */
  getSufferInfo: '/api/followup/patient_guide',
  /* 新增随访方案 */
  addProgramInfo: '/api/followUp/saveFollowUpPlan',
  /* 查询随访方案详情 */
  getProgramInfo: '/api/followUp/findFollowUpPlanInfo',
  /* 更新随访方案 */
  updateProgramInfo: '/api/followUp/updateFollowUpPlan'
}

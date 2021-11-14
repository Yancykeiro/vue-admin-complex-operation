<template>
  <div class="app-container">
    <switch-roles @change="handleRolesChange" />

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>使用v-permission</span>
      </div>
      <div class="text item">
        <div v-permission="['admin']">我是admin权限下展示的内容</div>
        <div v-permission="['admin','editor']">我是ALL权限下展示的内容</div>
        <div v-permission="['editor']">我是editor权限下展示的内容</div>
      </div>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>使用v-if</span>
      </div>
      <div class="text item">
        <div v-if="checkPermission(['admin'])">我是admin权限下展示的内容</div>
        <div v-if="checkPermission(['editor'])">我是editor权限下展示的内容</div>
        <div v-if="checkPermission(['admin','editor'])">我是ALL权限下展示的内容</div>
      </div>
    </el-card>

  </div>
</template>

<script>
import permission from '@/directive/permission/index.js' // 权限判断指令
import checkPermission from '@/utils/permission' // 权限判断函数
import SwitchRoles from './components/SwitchRoles'

export default {
  name: 'DirectivePermission',
  components: { SwitchRoles },
  directives: { permission },
  data() {
    return {
      key: 1 // 为了能每次切换权限的时候重新初始化指令
    }
  },
  methods: {
    checkPermission,
    handleRolesChange() {
      this.key++
    }
  }
}
</script>

<style lang="scss" scoped>

.box-card{
  margin-top: 20px;
}
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
    div{
      margin-bottom: 10px;
    }
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
.app-container {
  ::v-deep .permission-alert {
    width: 320px;
    margin-top: 15px;
    background-color: #f0f9eb;
    color: #67c23a;
    padding: 8px 16px;
    border-radius: 4px;
    display: inline-block;
  }
  ::v-deep .permission-sourceCode {
    margin-left: 15px;
  }
  ::v-deep .permission-tag {
    background-color: #ecf5ff;
  }
}
</style>


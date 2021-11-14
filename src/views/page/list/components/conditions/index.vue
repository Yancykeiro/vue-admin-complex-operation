<template>
  <div class="conditions-warpper">
    <div class="conditions-warpper__item">
      <span>昵称</span>
      <el-input v-model="input" placeholder="昵称" />
    </div>
    <div class="conditions-warpper__item"><span>所属学科</span><el-select v-model="value" placeholder="请选择" /></div>
    <div class="conditions-warpper__item"><span>职位</span><el-input v-model="input" placeholder="职位" /></div>
    <div class="conditions-warpper__item"><span>工作年限</span><el-input v-model="input" placeholder="起" class="my-year" /><el-input v-model="input" placeholder="止" class="my-year" /></div>
    <div class="conditions-warpper__item"><span>手机号</span><el-input v-model="input" placeholder="手机号" /></div>
    <el-button type="primary">搜索</el-button>
    <el-button type="info">重置</el-button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.conditions-warpper{
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
    &__item{
        display: flex;
        flex-direction: row;
        align-items: center;
        border: 1px solid #eee;
        border-radius: 4px;
        margin-right: 20px;
        span{
          width: 80px;
          text-align: center;
          display: inline-block;
          color: #606266;
          font-size: 14px;
        }
        .el-input__inner{
          border: none;
          border-left: 1px solid #eee;
          border-radius: 0;
        }
        .my-year{
            width: 60px !important;
          }
        .conditions-warpper__item span {
          width: 0px;
        }
    }

}
</style>

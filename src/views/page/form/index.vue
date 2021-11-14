<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="活动名称">
        <s-validate #default="{ validate }" :rules="rules.name" :value="form.name">
          <el-input v-model="form.name" @blur="validate" />
        </s-validate>
        <!-- <el-input v-model="form.name" /> -->
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="上海" value="上海" />
          <el-option label="北京" value="北京" />
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="5">
          <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-col>
        <el-col :span="1" class="line">-</el-col>
        <el-col :span="5">
          <el-time-picker v-model="form.date2" type="fixed-time" placeholder="选择时间" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type" />
          <el-checkbox label="地推活动" name="type" />
          <el-checkbox label="线下主题活动" name="type" />
          <el-checkbox label="单纯品牌曝光" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助" />
          <el-radio label="线下场地免费" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <s-validate #default="{ validate }" :rules="rules.desc" :value="form.desc">
          <el-input v-model="form.desc" type="textarea" @blur="validate" />
        </s-validate>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>

  </div>

</template>

<script>
import SValidate from './components/svalidate.vue'

export default {
  components: {
    SValidate
  },
  data() {
    return {
      value: '',
      rules: {
        name: [
          {
            test: function(value) {
              return value
            },
            message: '请输入活动名称'
          }
        ],
        desc: [
          {
            test: function(value) {
              // return /\d+/.test(value)
              return value
            },
            message: '请输入活动形式'
          }
        ]
      },
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('提交成功')
    },
    onCancel() {
      this.$message({
        message: '取消提交',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>


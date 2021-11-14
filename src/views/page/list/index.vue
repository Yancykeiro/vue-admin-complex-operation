<template>
  <div class="test-warpper">
    <div class="title">导师列表</div>
    <list-layout>
      <tempalte slot="header">
        <components />
      </tempalte>
      <tempalte slot="content">
        <lb-table
          :column="formData.column"
          :data="formData.list"
          :pagination="ture"
          border
          align="center"
        />
        <div class="append">
          <span>显示第1到第3条记录，总共3条记录</span>
        </div>
      </tempalte>
    </list-layout>
  </div>
</template>

<script>
import { getTestList } from '@/api/test.js'

import ListLayout from '@/components/ListLayout/index.vue'

import LbTable from '@/components/lb-table/lb-table.vue'

import Components from './components/conditions/index.vue'

export default {
  components: {
    ListLayout,
    LbTable,
    Components
  },
  data() {
    return {
      formData: {
        column: [
          {
            type: 'selection'
          },
          {
            prop: 'nike',
            label: '昵称',
            sortable: true

          },
          {
            prop: 'phone',
            label: '手机号',
            sortable: true
          },
          {
            prop: 'name',
            label: '真实姓名',
            sortable: true
          },
          {
            prop: 'subject',
            label: '所属学科',
            sortable: true
          },
          {
            prop: 'job',
            label: '职位',
            sortable: true
          },
          {
            prop: 'year',
            label: '工作年限',
            sortable: true
          },
          {
            prop: 'updateTime',
            label: '录入时间',
            sortable: true
          },
          {
            prop: 'actions',
            label: '操作',
            render(_, scope) {
              return (<div class='actions'>
                <el-button class='actions-item'>查看</el-button>
                <el-button class='actions-item'>编辑</el-button>
                <el-button class='actions-item'>删除</el-button>
              </div>)
            }
          }
        ],
        list: []
      }
    }
  },

  created() {
    getTestList().then((res) => {
      const { code, data } = res
      if (Number(code) === 20000) {
        const { items } = data
        this.formData.list = items
      }
      console.log('test', res)
    })
  }

}
</script>

<style lang="scss">
.title{
  padding: 50px 0 10px 25px;
  border-bottom: 1px solid #eee;
}
.actions{
  align-items: center;
  .el-button.actions-item{
    padding: 0 1px;
    border: 0;
    border-radius: 0;
    color: #0c79f1;
    margin-left: 0;
  }
  .el-button.actions-item:nth-child(2){
      border-left: 1px solid #0c79f1;
      border-right: 1px solid #0c79f1;
  }

}
.append{
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  color: #606266;
  border: 1px solid #eee;
  border-top: none;
  span{
    padding-left:20px;
  }
}

</style>

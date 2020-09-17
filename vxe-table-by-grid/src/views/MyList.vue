<template>
  <div>
    <vxe-grid v-bind="xGridOptions"></vxe-grid>
  </div>
</template>

<script>
export default {
  data () {
    return {
      xGridOptions: {
        resizable: true,
        checkboxConfig: {
          labelField: 'id',
          highlight: true,
          range: true
        },
        proxyConfig: {
          ajax: {
            query: () => this.findList()
          }
        },
        columns: [
          { type: 'seq', width: 60, fixed: 'left' },
          { type: 'checkbox', title: 'ID', width: 140, fixed: 'left' },
          { field: 'name', title: 'Name' },
          { field: 'nickname', title: 'Nickname' },
          { field: 'role', title: 'Role' },
          { field: 'sex', title: 'Sex', cellRender: { name: 'DICT', props: { code: 'SEX_LIST' } } },
          { field: 'describe', title: 'Describe', showOverflow: true }
        ]
      }
    }
  },
  methods: {
    findList () {
      return new Promise((resolve) => {
        setTimeout(() => {
          const list = [
            { id: 10001, name: 'Test1', nickname: 'T1', role: '前端', sex: '1', age: 22, status: '1', describe: 'Address abc123' },
            { id: 10002, name: 'Test2', nickname: 'T2', role: '后端', sex: '0', age: 24, status: '2', describe: 'Address rttry' },
            { id: 10003, name: 'Test3', nickname: 'T3', role: '测试', sex: '1', age: 26, status: '3', describe: 'Address xxxxx' }
          ]
          resolve(list)
        }, 100)
      })
    }
  }
}
</script>

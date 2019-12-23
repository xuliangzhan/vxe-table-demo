<template>
  <div>
    <vxe-grid
      resizable
      :filter-config="{remote: true}"
      :columns="tableColumn"
      :proxy-config="tableProxy"
      :checkbox-config="{labelField: 'id', reserve: true, highlight: true, range: true}">
    </vxe-grid>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableProxy: {
        sort: true,
        filter: true,
        ajax: {
          query: '/api/user/list'
        }
      },
      tableColumn: [
        { type: 'seq', width: 60, fixed: 'left' },
        { type: 'checkbox', title: 'ID', width: 140, fixed: 'left' },
        { field: 'name', title: 'Name', remoteSort: true },
        { field: 'nickname', title: 'Nickname', remoteSort: true },
        { field: 'age', title: 'Age', remoteSort: true },
        {
          field: 'role',
          title: 'Role',
          remoteSort: true,
          width: 200,
          filters: [
            { label: '前端开发', value: '前端' },
            { label: '后端开发', value: '后端' },
            { label: '测试', value: '测试' },
            { label: '程序员鼓励师', value: '程序员鼓励师' }
          ],
          filterMultiple: false
        },
        { field: 'describe', title: 'Describe', showOverflow: true }
      ]
    }
  }
}
</script>

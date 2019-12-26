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
        height: 528,
        filterConfig: {
          remote: true
        },
        checkboxConfig: {
          labelField: 'id',
          highlight: true,
          range: true
        },
        pagerConfig: {
          pageSize: 15,
          pageSizes: [5, 10, 20, 50, 100, 200, 500, 1000]
        },
        proxyConfig: {
          sort: true,
          filter: true,
          ajax: {
            query: '/api/user/page/list/{{page.pageSize}}/{{page.currentPage}}'
          }
        },
        columns: [
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
}
</script>

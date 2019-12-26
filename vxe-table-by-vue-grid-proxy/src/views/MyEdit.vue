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
        editConfig: {
          trigger: 'click',
          mode: 'row',
          showStatus: true
        },
        editRules: {
          name: [
            { required: true, message: '名称必须填写' },
            { min: 3, max: 50, message: '名称长度在 3 到 50 个字符' }
          ],
          role: [
            { required: true, message: '角色必须填写' }
          ]
        },
        pagerConfig: {
          pageSize: 15,
          pageSizes: [5, 10, 20, 50, 100, 200, 500, 1000]
        },
        proxyConfig: {
          sort: true,
          filter: true,
          ajax: {
            query: '/api/user/page/list/{{page.pageSize}}/{{page.currentPage}}',
            delete: '/api/user/save',
            save: '/api/user/save'
          }
        },
        toolbar: {
          buttons: [
            { code: 'insert_actived', name: 'Add', icon: 'fa fa-plus' },
            { code: 'mark_cancel', name: 'Mark', icon: 'fa fa-bookmark-o' },
            { code: 'save', name: 'Save', icon: 'fa fa-save' }
          ],
          refresh: true,
          custom: true
        },
        columns: [
          { type: 'seq', width: 60, fixed: 'left' },
          { type: 'checkbox', title: 'ID', width: 140, fixed: 'left' },
          { field: 'name', title: 'Name', remoteSort: true, editRender: { name: 'input' } },
          { field: 'nickname', title: 'Nickname', remoteSort: true, editRender: { name: 'input' } },
          { field: 'age', title: 'Age', remoteSort: true, editRender: { name: 'input' } },
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
            filterMultiple: false,
            editRender: { name: 'input' }
          },
          { field: 'describe', title: 'Describe', showOverflow: true, editRender: { name: 'input' } }
        ]
      }
    }
  }
}
</script>

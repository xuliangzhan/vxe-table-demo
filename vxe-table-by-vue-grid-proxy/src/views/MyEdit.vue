<template>
  <div>
    <vxe-grid v-bind="xGridOptions" :loading="loading"></vxe-grid>
  </div>
</template>

<script>

export default {
  data () {
    return {
      loading: false,
      xGridOptions: null
    }
  },
  created () {
    this.loading = true
    // 模拟后台异步读取配置文件
    setTimeout(() => {
      const xGridConfig = {
        resizable: true,
        height: 528,
        exportConfig: {},
        filterConfig: {
          remote: true
        },
        sortConfig: {
          trigger: 'cell'
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
            { pattern: '\\w{3,50}', message: '名称长度在 3 到 50 个字符' }
          ],
          role: [
            { required: true, message: '角色必须填写' }
          ]
        },
        pagerConfig: {
          pageSize: 15,
          pageSizes: [5, 15, 20, 50, 100]
        },
        proxyConfig: {
          sort: true,
          filter: true,
          ajax: {
            query: {
              url: '/api/user/page/list/{{page.pageSize}}/{{page.currentPage}}'
            },
            delete: {
              url: '/api/user/save'
            },
            save: {
              url: '/api/user/save'
            }
          }
        },
        toolbar: {
          buttons: [
            { code: 'insert_actived', name: 'Add', icon: 'fa fa-plus' },
            { code: 'mark_cancel', name: 'Mark', icon: 'fa fa-bookmark-o' },
            { code: 'save', name: 'Save', icon: 'fa fa-save' }
          ],
          export: true,
          zoom: true,
          refresh: true,
          custom: true
        },
        columns: [
          { type: 'seq', width: 60, fixed: 'left' },
          { type: 'checkbox', title: 'ID', width: 140, fixed: 'left' },
          { field: 'name', title: 'Name', remoteSort: true, editRender: { name: 'input' } },
          { field: 'nickname', title: 'Nickname', remoteSort: true, editRender: { name: 'input' } },
          { field: 'age', title: 'Age', remoteSort: true, editRender: { name: 'input' } },
          { field: 'type', title: 'Type', cellRender: { name: 'DICT', props: { code: 'OPERATE_STATUS' } } },
          { field: 'status', title: 'Status', editRender: { name: 'select', options: { dict: 'COLOR_STATUS' } } },
          { field: 'sex', title: 'Sex', filters: { dict: 'SEX_LIST' }, filterMultiple: false, remoteSort: true, editRender: { name: 'select', options: { url: '/api/conf/sex/list' } } },
          { field: 'role', title: 'Role', width: 200, filters: { url: '/api/conf/role/list' }, filterMultiple: false, remoteSort: true, editRender: { name: 'input' } },
          { field: 'describe', title: 'Describe', showOverflow: true, editRender: { name: 'input' } }
        ]
      }
      this.loading = false
      this.xGridOptions = xGridConfig
    }, 300)
  }
}
</script>

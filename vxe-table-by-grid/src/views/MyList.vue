<template>
  <div>
    <vxe-grid v-bind="xGridOptions"></vxe-grid>
  </div>
</template>

<script>
import XEAjax from 'xe-ajax'

export default {
  data () {
    return {
      xGridOptions: {
        resizable: true,
        filterConfig: {
          remote: true
        },
        checkboxConfig: {
          labelField: 'id',
          highlight: true,
          range: true
        },
        proxyConfig: {
          sort: true,
          filter: true,
          ajax: {
            query: () => XEAjax.get('/api/user/list')
          }
        },
        columns: [
          { type: 'seq', width: 60, fixed: 'left' },
          { type: 'checkbox', title: 'ID', width: 140, fixed: 'left' },
          { field: 'name', title: 'Name', remoteSort: true },
          { field: 'nickname', title: 'Nickname', remoteSort: true },
          { field: 'age', title: 'Age', remoteSort: true },
          { field: 'sex', title: 'Sex', cellRender: { name: 'DICT', props: { code: 'SEX_LIST' } } },
          { field: 'describe', title: 'Describe', showOverflow: true }
        ]
      }
    }
  }
}
</script>

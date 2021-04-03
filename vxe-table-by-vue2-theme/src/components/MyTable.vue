<template>
  <div>
    <vxe-toolbar>
      <template v-slot:buttons>
        <vxe-button status="primary">按钮1</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      round
      highlight-hover-row
      :data="tableData">
      <vxe-column type="seq" title="Number" width="80"></vxe-column>
      <vxe-column field="name" title="Name" sortable></vxe-column>
      <vxe-column field="sex" title="Sex" sortable></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>

    <vxe-pager
      :current-page.sync="tablePage.currentPage"
      :page-size.sync="tablePage.pageSize"
      :total="tablePage.totalResult">
    </vxe-pager>
  </div>
</template>

<script>
export default {
  name: 'MyTable',
  data () {
    return {
      tablePage: {
        currentPage: 1,
        pageSize: 15,
        totalResult: 0
      },
      tableData: [
        { id: 10001, name: 'Test1', role: 'Developer', sex: 'Man', address: 'Address abc123' },
        { id: 10002, name: 'Test2', role: 'Developer', sex: 'Female', address: 'Address rttry' },
        { id: 10003, name: 'Test3', role: 'Developer', sex: 'Man', address: 'Address xxxxx' }
      ]
    }
  }
}
</script>

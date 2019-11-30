<template>
  <div>
    <select v-model="$i18n.locale">
      <option value="zh-CN">简体中文</option>
      <option value="zh-TW">繁体中文</option>
      <option value="en">英文</option>
    </select>

    <vxe-table
      border
      highlight-hover-row
      :data="tableData">
      <vxe-table-column type="index" title="app.table.title.seq" width="100"></vxe-table-column>
      <vxe-table-column field="name" title="app.table.title.name" sortable></vxe-table-column>
      <vxe-table-column field="sex" title="app.table.title.sex" sortable></vxe-table-column>
      <vxe-table-column field="address" title="app.table.title.address"></vxe-table-column>
    </vxe-table>

    <vxe-pager
      perfect
      :current-page="tablePage.currentPage"
      :page-size="tablePage.pageSize"
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
        pageSize: 10,
        totalResult: 0
      },
      tableData: [
        {
          id: 10001,
          name: 'Test1',
          role: 'Developer',
          sex: 'Man',
          address: 'Address abc123'
        },
        {
          id: 10002,
          name: 'Test2',
          role: 'Developer',
          sex: 'Female',
          address: 'Address rttry'
        },
        {
          id: 10003,
          name: 'Test3',
          role: 'Developer',
          sex: 'Man',
          address: 'Address xxxxx'
        }
      ]
    }
  }
}
</script>

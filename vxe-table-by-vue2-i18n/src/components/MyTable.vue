<template>
  <div>
    <vxe-select v-model="$i18n.locale">
      <vxe-option value="zh_CN" label="简体中文"></vxe-option>
      <vxe-option value="zh_TC" label="繁體中文"></vxe-option>
      <vxe-option value="en_US" label="英文"></vxe-option>
    </vxe-select>

    <vxe-table
      border
      highlight-hover-row
      :data="tableData">
      <vxe-column type="seq" title="app.table.title.seq" width="100"></vxe-column>
      <vxe-column field="name" title="app.table.title.name" sortable></vxe-column>
      <vxe-column field="age" title="app.table.title.age" sortable></vxe-column>
      <vxe-column field="sex" title="app.table.title.sex" sortable>
        <template #default="{ row }">
          <span style="color: blue">{{ row.sex }}</span>
        </template>
      </vxe-column>
      <vxe-column field="address" title="app.table.title.address">
        <template #default="{ row }">
          <span style="color: red">{{ row.address }}</span>
        </template>
      </vxe-column>
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
        { id: 10001, name: 'Test1', role: 'Developer', sex: 'Man', address: 'Address abc123' },
        { id: 10002, name: 'Test2', role: 'Developer', sex: 'Female', address: 'Address rttry' },
        { id: 10003, name: 'Test3', role: 'Developer', sex: 'Man', address: 'Address xxxxx' }
      ]
    }
  }
}
</script>

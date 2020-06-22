<template>
  <div>
    <vxe-table
      border
      round
      highlight-hover-row
      :data="tableData">
      <vxe-table-column type="seq" title="Number" width="80"></vxe-table-column>
      <vxe-table-column field="name" title="Name" sortable></vxe-table-column>
      <vxe-table-column field="sex" title="Sex" sortable></vxe-table-column>
      <vxe-table-column field="address" title="Address"></vxe-table-column>
    </vxe-table>
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

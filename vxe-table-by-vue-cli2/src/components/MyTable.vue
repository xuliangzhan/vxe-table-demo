<template>
  <div>
    <vxe-table border :data="tableData">
      <vxe-table-column type="index" title="Number" width="80"></vxe-table-column>
      <vxe-table-column field="name" title="Name"></vxe-table-column>
      <vxe-table-column field="sex" title="Sex"></vxe-table-column>
      <vxe-table-column field="address" title="Address"></vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>
export default {
  name: 'MyTable',
  data () {
    return {
      tableData: [
        {
          id: 10001,
          name: 'Test1',
          role: 'Developer',
          sex: 'Man',
          address: 'Address abc123'
        }
      ]
    }
  }
}
</script>

<template>
  <div>
    <vxe-grid
      border
      highlight-hover-row
      :data="tableData"
      :columns="tableColumn">
    </vxe-grid>
  </div>
</template>

<script>
export default {
  name: 'MyTable',
  data () {
    return {
      tableColumn: [
        { type: 'seq', title: 'Number', width: 80 },
        { field: 'name', title: 'Name', sortable: true },
        { field: 'sex', title: 'Sex', sortable: true },
        { field: 'address', title: 'Address' }
      ],
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

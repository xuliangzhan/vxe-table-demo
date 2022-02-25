<template>
  <div>
    <vxe-button @click="insertEvent">新增</vxe-button>
    <vxe-button @click="removeEvent">删除</vxe-button>
    <vxe-button @click="savsEvent">保存</vxe-button>
    <vxe-table
      border
      keep-source
      ref="xTable"
      :row-config="{isHover: true}"
      :edit-config="{trigger: 'click', mode: 'cell', showStatus: true}"
      :data="tableData">
      <vxe-column type="checkbox" width="80"></vxe-column>
      <vxe-column type="seq" title="Number" width="80"></vxe-column>
      <vxe-column field="name" title="Name" sortable :edit-render="{name: '$input', attrs: {type: 'text'}}"></vxe-column>
      <vxe-column field="sex" title="Sex" sortable :edit-render="{name: '$input', attrs: {type: 'text'}}">
        <template #default="{ row }">
          <span style="color: blue">{{ row.sex }}</span>
        </template>
      </vxe-column>
      <vxe-column field="address" title="Address">
        <template #default="{ row }">
          <span style="color: red">{{ row.address }}</span>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import { Table } from 'vxe-table'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MyTable extends Vue {
  $refs!: {
    xTable: Table;
  }

  data () {
    return {
      tableData: [
        { id: 10001, name: 'Test1', role: 'Developer', sex: 'Man', address: 'Address abc123' },
        { id: 10002, name: 'Test2', role: 'Developer', sex: 'Female', address: 'Address rttry' },
        { id: 10003, name: 'Test3', role: 'Developer', sex: 'Man', address: 'Address xxxxx' }
      ]
    }
  }

  insertEvent () {
    const newRecord = {
      name: `New ${Date.now()}`
    }
    this.$refs.xTable.insert(newRecord)
  }

  removeEvent () {
    this.$refs.xTable.removeCheckboxRow()
  }

  savsEvent () {
    const { insertRecords, removeRecords, updateRecords } = this.$refs.xTable.getRecordset()
    alert(`insertRecords=${insertRecords.length} removeRecords=${removeRecords.length} updateRecords=${updateRecords.length}`)
  }
}
</script>

<template>
  <div>
    <button @click="insertEvent">新增</button>
    <button @click="removeEvent">删除</button>
    <button @click="savsEvent">保存</button>

    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <!--插槽模板-->
      <template #sexTmpl="{ row }">
        <span style="color: blue">{{ row.sex }}</span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue'
import { VxeGridProps, VxeGridInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: 'title',
  keepSource: true,
  rowConfig: {
    isHover: true
  },
  editConfig: {
    trigger: 'click',
    mode: 'cell',
    showStatus: true
  },
  editRules: {
    name: [
      { required: true, message: '必须填写' }
    ]
  },
  columns: [
    { type: 'seq', width: 80 },
    { field: 'name', title: 'Name', sortable: true, editRender: { name: 'input' } },
    {
      field: 'sex',
      title: 'Sex',
      sortable: true,
      editRender: { name: 'input' },
      slots: {
        // 插槽模板
        default: 'sexTmpl'
      }
    },
    {
      field: 'address',
      title: 'Address',
      slots: {
        // JSX 渲染
        default ({ row }) {
          return <span style="color: red">{ row.address }</span>
        }
      }
    }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Developer', sex: 'Man', address: 'Address abc123' },
    { id: 10002, name: 'Test2', role: 'Developer', sex: 'Female', address: 'Address rttry' },
    { id: 10003, name: 'Test3', role: 'Developer', sex: 'Man', address: 'Address xxxxx' }
  ]
})

const insertEvent = () => {
  const newRecord = {
    name: `New ${Date.now()}`
  }
  const $grid = gridRef.value
  if ($grid) {
    $grid.insert(newRecord)
  }
}

const removeEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.removeCheckboxRow()
  }
}

const savsEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    const { insertRecords, removeRecords, updateRecords } = $grid.getRecordset()
    alert(`insertRecords=${insertRecords.length} removeRecords=${removeRecords.length} updateRecords=${updateRecords.length}`)
  }
}
</script>

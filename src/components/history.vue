<template>
  <div>
    <group :title="'请假列表'">
      <cell v-for="item in list" :title="item.label" link="./askLeave" :inline-desc="item.value"></cell>
    </group>
    <box gap="10px 10px">
      <x-button type="primary" @click.native="add">add</x-button>
      <x-button type="warn" @click.native="del">delete</x-button>
    </box>
  </div>
</template>
<script>
import { Cell, CellBox, CellFormPreview, Group, XButton, Box } from 'vux'

export default {
  components: {
    Group,
    Cell,
    CellFormPreview,
    CellBox,
    XButton,
    Box
  },
  data () {
    return {
      list: [{
        label: '列表',
        value: '2017-04-19 12:00'
      }, {
        label: '列表',
        value: '2017-04-19 12:00'
      }, {
        label: '列表',
        value: '2017-04-19 12:00'
      }]
    }
  },
  methods: {
    add () {
      this.list.push({label: '列表', value: '2017-04-19 12:00'})
    },
    del () {
      this.list.pop({label: '列表', value: '2017-04-19 12:00'})
    }
  }
}
</script>

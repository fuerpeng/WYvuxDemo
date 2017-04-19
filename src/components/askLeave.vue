<template>
  <div>
   <div style="padding:10px 10px 0;text-align:right">
        <router-link to="/history"><x-button mini type="primary" @click.native="history">查看请假历史</x-button></router-link>
    </div>
    <group :title="'部门是' + defaultValue">
      <selector placeholder="所在部门" title="所在部门" name="district" v-model="defaultValue" :options="list" @on-change="onChange"></selector>
    </group>
    <group title="请假事由">
      <x-textarea v-model="textarea" :max="200" placeholder="请填写请假事由" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
    </group>
    <group>
      <datetime v-model="beginTime" :placeholder="'开始时间'" :min-year=2000 :max-year=2016 format="YYYY-MM-DD HH:mm" @on-change="change" :title="'开始时间'" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" confirm-text="完成" cancel-text="取消"></datetime>
    </group>
    <group>
      <datetime v-model="endTime" :placeholder="'结束时间'" :min-year=2000 :max-year=2016 format="YYYY-MM-DD HH:mm" @on-change="change" :title="'结束时间'" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" confirm-text="完成" cancel-text="取消"></datetime>
    </group>
    <divider>请假类型</divider>
    <div class="box">
      <checker v-model="demo1" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item v-for="item in leaveType" :value="item">{{item}}</checker-item>
      </checker>
    </div>
    <div class="weui-cells__title">上传附件/请上传病假条或者病例/请上传开会通知</div>
    <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <div class="weui-uploader">
                    <div class="weui-uploader__hd">
                        
                    </div>
                    <div class="weui-uploader__bd">                          
                        <div class="weui-uploader__input-box">
                            <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <divider>确定</divider>
    <div style="padding:0 10px 10px">
      <x-button type="primary" @click.native="sure">确定</x-button>
    </div>
  </div>
</template>

<script>
import router from '../router'
import { Group, Cell, Selector, XTextarea, Datetime, Checker, CheckerItem, Divider, XButton, Confirm } from 'vux'

export default {
  components: {
    Group,
    Cell,
    Selector,
    XTextarea,
    Datetime,
    Checker,
    CheckerItem,
    Divider,
    XButton,
    Confirm
  },
  data () {
    return {
      defaultValue: '教务处',
      list: ['教务处', '后勤'],
      beginTime: '',
      endTime: '',
      demo1: '',
      textarea: '',
      leaveType: ['调休', '其他', '迟到', '早退', '等等']
    }
  },
  methods: {
    onChange (val) {
      console.log(val)
    },
    onEvent (event) {
      console.log('on', event)
    },
    change (value) {
      console.log('change', value)
    },
    history () {
      console.log('查看历史')
    },
    sure () {
      var that = this
      console.log(this.beginTime, this.endTime)
      if (this.textarea === '') {
        vuxalert(that, '提示', '请输入请假内容')
      } else if (this.beginTime === '') {
        vuxalert(that, '提示', '请输入开始时间')
      } else if (this.endTime === '') {
        vuxalert(that, '提示', '请输入结束时间')
      } else if (new Date(this.beginTime) >= new Date(this.endTime)) {
        vuxalert(that, '提示', '结束时间应大于开始时间')
      } else if (this.demo1 === '') {
        vuxalert(that, '提示', '请选择请假类型')
      } else {
        vuxconfirm(that, '提示', '确定要提交请假吗？')
      }
    }
  }
}
function vuxalert (dom, title, content) {
  dom.$vux.alert.show({
    title: title,
    content: content,
    onShow () {
      console.log('showing')
    },
    onHide () {
      console.log('hiding')
    }
  })
}
function vuxconfirm (dom, title, content) {
  dom.$vux.confirm.show({
    title: title,
    content: content,
    hideOnBlur: true,
    onShow () {
      console.log('show')
    },
    onHide () {
      console.log('hide')
    },
    onCancel () {
      console.log('cancel')
    },
    onConfirm () {
      console.log('confrim')
      router.push('sure')
    }
  })
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
.box {
  padding: 0 15px;
}
.demo1-item {
  border: 1px solid #ececec;
  padding: 5px 15px;
}
.demo1-item-selected {
  border: 1px solid green;
}
.weui-uploader__input-box {
    float: left;
    position: relative;
    margin-right: 9px;
    margin-bottom: 9px;
    width: 77px;
    height: 77px;
    border: 1px solid #D9D9D9;
}
.weui-uploader__input {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.weui-uploader__input-box:before, .weui-uploader__input-box:after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #D9D9D9;
}
.weui-uploader__input-box:before {
    width: 2px;
    height: 39.5px;
}
.weui-uploader__input-box:after {
    width: 39.5px;
    height: 2px;
}
.weui-uploader__input-box:before, .weui-uploader__input-box:after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #D9D9D9;
}
</style>

<template>
  <div class="ml-advanced-query">
    <el-tooltip effect="dark"
      :disabled="!isUse"
      placement="top-start">
      <template #content>
        已有高级查询条件生效 |
        <el-button type="text" @click="clear"> 清空</el-button>
      </template>
      <el-button
        :icon="isUse?'el-icon-loading':'el-icon-finished'"
        @click="showDialog"
        size="small"
      type="primary">
      高级查询
      </el-button>
    </el-tooltip>
    <!-- 弹窗 -->
    <el-dialog v-model="dialogVisible" title="高级查询构造器" width="700px" :modal="false">
      <el-form :inline="true">
        <template v-if="isUse">
          <!-- 连接条件 -->
          <el-form-item label="条件连接关系">
            <el-select v-model="valueData.condition" size="small" style="width:250px">
                <el-option label="AND（所有条件都要求匹配）" value="and"></el-option>
                <el-option label="OR（条件中的任意一个匹配）" value="or"></el-option>
            </el-select>
          </el-form-item>
          
            <div class="row" v-for="(item,index) in valueData.list" :key="index">
              <!-- 字段名称 -->
              <el-form-item>
                <el-select v-model="item.field" size="small" style="width:150px" @change="itemFieldChange(item)" clearable placeholder="请选择字段">
                  <el-option
                    v-for="fieldItem in fields"
                    :key="fieldItem.name"
                    :label="fieldItem.label"
                    :value="fieldItem.name">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-select v-model="item.op" size="small" style="width:100px">
                  <el-option
                    v-for="opItem in operator"
                    :key="opItem.value"
                    :label="opItem.label"
                    :value="opItem.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <!-- 数组类型 -->
                <el-input-number v-if="getFieldType(item.field)=='number'"  v-bind="getFieldProps(item.field)" v-model="item.value" size="small" :controls="false" style="width:180px"></el-input-number>
                <!-- 日期类型 -->
                <el-date-picker v-else-if="getFieldType(item.field)=='date'" type="date" v-bind="getFieldProps(item.field)" v-model="item.value" size="small" style="width:180px"></el-date-picker>
                <!-- 日期类型 -->
                <el-date-picker v-else-if="getFieldType(item.field)=='datetime'" type="datetime" v-bind="getFieldProps(item.field)" v-model="item.value" size="small" style="width:180px"></el-date-picker>
                <!-- 下拉选择类型 -->
                <el-select v-else-if="getFieldType(item.field)=='select'" v-bind="getFieldProps(item.field)" v-model="item.value" size="small" style="width:180px">
                  <el-option v-for="optionItem in getFieldProps(item.field).options" :key="optionItem.value" :label="optionItem.label" :value="optionItem.value"></el-option>
                </el-select>
                <!-- 文本类型 -->
                <el-input v-else v-bind="getFieldProps(item.field)" v-model="item.value" clearable placeholder="请输入值" size="small" style="width:180px"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button size="small"  type="primary" plain icon="el-icon-plus" @click="addItem()"></el-button>
                <el-button size="small"  type="danger" plain icon="el-icon-minus" @click="delItem(index)"></el-button>
              </el-form-item>
            </div>
          
        </template>
        <div v-else>
          <el-empty style="padding:0" :image-size="100" description="未添加任何查询条件">
             <el-button type="text" @click="addItem">点击添加</el-button>
          </el-empty>
        </div>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="clear">重置</el-button>
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="commit">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'MlAdvancedQuery', 
  props: {
    modelValue: {
      default: null,
      type: Object
    },
    fields: {
      default: () => [],
      type: Array
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const dialogVisible = ref(false)
    const operator = ref([
      {'label':'等于','value':'eq'},
      {'label':'包含','value':'contains'},
      {'label':'以..开始','value':'start'},
      {'label':'以..结尾','value':'end'},
      {'label':'在...中','value':'in'},
      {'label':'不等于','value':'neq'},
      {'label':'大于','value':'gt'},
      {'label':'大于等于','value':'egt'},
      {'label':'小于','value':'lt'},
      {'label':'小于等于','value':'elt'},
    ])

    // 使用计算属性处理 v-model
    const valueData = computed({
      get: () => props.modelValue || {list: [], condition: 'and'},
      set: (val) => emit('update:modelValue', val)
    })

    // 计算属性：判断是否有生效的查询条件
    const isUse = computed(() => {
      return valueData.value && Array.isArray(valueData.value.list) && valueData.value.list.length > 0
    })

    // 方法定义
    const clear = () => {
      emit('update:modelValue', null)
    }

    const showDialog = () => {
      dialogVisible.value = true
    }

    const commit = () => {
      dialogVisible.value = false
      if(isUse.value){
        emit('change')
      }
    }

    /**
     * 获取字段 拓展属性
     */
    const getFieldProps = (field) => {
      const fieldInfo = props.fields.find(f => f.name == field)
      if(fieldInfo){
        const default_props = getDefaultProps(fieldInfo['type'])
        return Object.assign(default_props, fieldInfo['props'])
      } else {
        return {}
      }
    }

    /**
     * 获取默认属性
     */
    const getDefaultProps = (type) => {
      if(type == 'date'){
        return { 'value-format':'yyyy-MM-dd' }
      } else if(type == 'datetime'){
        return { 'value-format':'yyyy-MM-dd HH:mm:ss' }
      } else {
        return {}
      }
    }

    /**
     * 获取字段 类型
     */
    const getFieldType = (field) => {
      const fieldInfo = props.fields.find(f => f.name == field)
      if(fieldInfo){
        return fieldInfo.type
      } else {
        return 'text'
      }
    }

    const itemFieldChange = (item) => {
      item.value = ''
    }

    const addItem = () => {
      const temp = Object.assign({list:[],condition:'and'}, valueData.value)
      temp.list.push({ field:'', op:'eq', value:''})
      emit('update:modelValue', temp)
    }

    const delItem = (index) => {
      valueData.value.list.splice(index, 1)
      emit('update:modelValue', valueData.value)
    }

    return {
      dialogVisible,
      operator,
      valueData,
      isUse,
      clear,
      showDialog,
      commit,
      getFieldProps,
      getDefaultProps,
      getFieldType,
      itemFieldChange,
      addItem,
      delItem
    }
  }
}
</script>
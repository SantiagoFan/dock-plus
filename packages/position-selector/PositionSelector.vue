<template>
  <div class="ml-position-selector">
    <el-card shadow="hover">
      <template #header>
        <div style="padding:0px 10px;">
          <span><i class="el-icon-map-location"></i> 地址坐标</span>
          <el-button style="float: right; padding: 10px 0" type="text" @click="showMap">选择地址</el-button>
        </div>
      </template>
      <div class="item">
        <el-row>
          <span>地址：{{ address ? address : '未设置' }}</span>
        </el-row>
        <el-row class="sub-info">
          <el-col :span="12">经度：{{ lng }}</el-col>
          <el-col :span="12">纬度：{{ lat }}</el-col>
        </el-row>
      </div>
    </el-card>
    <!-- 弹窗选择 -->
    <el-dialog custom-class="ml-position-selector-dialog" v-model="dialogVisible" title="选择地图" width="1000px" append-to-body>
      <div class="map">
        
        <!-- 地图 -->
        <div id="map" ref="container" style="width:100%; height:500px;"></div>
        <div class="address-search">
          <el-input v-model="detail.address" @input="getSuggestions" placeholder="请输入地址来直接查找相关位置"></el-input>
        </div>
        <div v-if="nearPois.length>0" class="address-list">
          <div v-for="(item, index) in nearPois" :key="index" class="items" @click="selectAddress(item)">
            <div class="address-title">{{ item.title }}</div>
            <div class="address-info">{{ item.address }}</div>
          </div>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-row :gutter="10">
            <el-col :span="6">
              <el-input disabled v-model="center.lng" placeholder="坐标经度">
                <template #prepend>经度</template>
              </el-input>
            </el-col>
            <el-col :span="6">
              <el-input disabled v-model="center.lat" placeholder="坐标纬度">
                <template #prepend>纬度</template>
              </el-input>
            </el-col>
            <el-col :span="12">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="Select">确 定</el-button>
            </el-col>
          </el-row>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'

export default {
  name: 'MlPositionSelector',
  props: {
    mapKey:{
      type:String,
      default:''
    },
    lng:{
      type:Number,
      default:116.397502
    },
    lat:{
      type:Number,
      default:39.908802
    },
    adcode:{
      type:String,
      default:''
    },
    province:{
      type:String,
      default:''
    },
    city:{
      type:String,
      default:''
    },
    district:{
      type:String,
      default:''
    },
    address:{
      type:String,
      default:''
    }
  },
  emits: ['update:lng', 'update:lat', 'update:province', 'update:city', 'update:district', 'update:adcode', 'update:address', 'change'],

  setup(props, { emit }) {
    const dialogVisible = ref(false)
    const TMap = ref(null)// 对象
    const map = ref(null) // 实例
    const marker = ref(null) // 标记点
    const nearPois = ref([])// 附近搜索建议
    
    const state = reactive({
      center: {
        height:0,
        lng: props.lng || 116.397502,
        lat: props.lat || 39.908802
      },
      detail:{ //地址临时分量
        adcode: props.adcode || '',
        province: props.province || '',
        city: props.city || '',
        district: props.district || '',
        address: props.address || ''
      },
      searchService: null, //关键字搜索服务
      suggestService: null,// 搜索建议服务
      geocoderService: null,// 地址解析
    })

    const showMap = () => {
      dialogVisible.value = true
      init()
    }

    const init = () => {
      if(map.value) { return }
      initMap().then(TMapObj => {
        // 中心点
        state.center = new TMapObj.LatLng(props.lat || 39.908802, props.lng || 116.397502)
        TMap.value = TMapObj
        map.value = new TMapObj.Map("map", {
          center: state.center, //设置地图中心点坐标
          zoom: 15, //设置地图缩放级别
          viewMode: "2D",
        })
        //监听点击事件
        map.value.on("click", mapClick)
        // 初始化点
        initMaker(state.center)
        // 搜索服务
        // state.searchService = new TMap.service.Search({ pageSize: 10 });
        // 输入建议服务
        state.suggestService = new TMapObj.service.Suggestion({
          pageSize: 10,
          regionFix: false, // 自动扩大范围到全国匹配
        })
        // 地址解析服务
        state.geocoderService = new TMapObj.service.Geocoder()
      })
    }

    // 初始化地图
    const initMap = () => {
      return new Promise((resolve) => {
        // 如果已加载直接返回
        if(typeof window.TMap !== "undefined") {
          resolve(window.TMap)
          return true
        }
        // 地图异步加载回调处理
        window.onMapCallback = function () {
          resolve(window.TMap)
        }
  
        // 插入script脚本
        let TMap_URL = "https://map.qq.com/api/gljs?v=1.exp&libraries=tools,service&key="+ props.mapKey +"&callback=onMapCallback"
        let scriptNode = document.createElement("script")
        scriptNode.setAttribute("type", "text/javascript")
        scriptNode.setAttribute("src", TMap_URL)
        document.body.appendChild(scriptNode)
      })
    }

    // 初始化标记点
    const initMaker = (latLng) => {
      marker.value = new TMap.value.MultiMarker({
        map: map.value,
        styles: {
          // 点标记样式
          marker: new TMap.value.MarkerStyle({
            width: 20, // 样式宽
            height: 30, // 样式高
            anchor: { x: 10, y: 30 }, // 描点位置
          }),
        },
        geometries: [
          // 点标记数据数组
          {
            // 标记位置(纬度，经度，高度)
            position: latLng,
            id: 'centerMarker',
          },
        ],
      })
    }

    // 移动地图到中心点
    const moveCenter = () => {
      const data = marker.value.getGeometryById('centerMarker')
      Object.assign(data, {
        position: state.center,
      })
      marker.value.updateGeometries([data])
      nearPois.value = []
    }

    // 地图点击 更新地点
    const mapClick = (event) => {
      state.center = event.latLng

      state.geocoderService.getAddress({
        location: event.latLng
      }).then(res => {
        state.detail.address = res.result.address
        state.detail.province = res.result.ad_info.province
        state.detail.city = res.result.ad_info.city
        state.detail.district = res.result.ad_info.district
        state.detail.adcode = res.result.ad_info.adcode
      })
      moveCenter()
    }
    
    // 通过关键词获得推荐位置
    const getSuggestions = () => {
      if(!state.detail.address) {
        nearPois.value = []
        return 
      }
      state.suggestService.getSuggestions({ keyword: state.detail.address, location: map.value.getCenter() })
        .then((res) => {
          nearPois.value = res.data
        })
    }

    // 建议列表选择
    const selectAddress = (item) => {
      state.center = item.location
      moveCenter()
      map.value.setCenter(item.location)

      state.detail.address = item.address
      state.detail.province = item.province
      state.detail.city = item.city
      state.detail.district = item.district
      state.detail.adcode = item.adcode
    }

    const Select = () => {
      emit('update:lng', state.center.lng)
      emit('update:lat', state.center.lat)
      emit('update:province', state.detail.province)
      emit('update:city', state.detail.city)
      emit('update:district', state.detail.district)
      emit('update:adcode', state.detail.adcode)
      emit('update:address', state.detail.address)
      emit('change', {
        ...state.detail,
        ...state.center
      })
      dialogVisible.value = false
    }

    return {
      dialogVisible,
      TMap,
      map,
      marker,
      nearPois,
      ...toRefs(state),
      showMap,
      init,
      initMap,
      initMaker,
      moveCenter,
      mapClick,
      getSuggestions,
      selectAddress,
      Select
    }
  }
}
</script>
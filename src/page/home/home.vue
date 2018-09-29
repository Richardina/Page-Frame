<template>
<el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-main>Main
    <el-button type="text" @click="dialogFormVisible=true">新建</el-button>
    <el-dialog title="创建" :visible.sync="dialogFormVisible">
    <el-form :model="form">
        <el-form-item label="CAD模型">
    <el-radio-group v-model="form.resource">
      <el-radio label="本地上传"></el-radio>
    <el-button type="primary">浏览</el-button>
      <el-radio label="从Onshape导入"></el-radio>
    <el-button type="primary" disabled>浏览</el-button>
    </el-radio-group>
  </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
    </el-dialog>
  </el-main>
</el-container>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  }
}
</script>
<style>
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>

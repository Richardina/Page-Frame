<template>
<el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-main>Main
    <el-button type="text" @click="dialogFormVisible=true">新建</el-button>
    <el-dialog title="创建" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="CAD模型">
        <el-radio-group v-model="form.resource">
          <el-row style="height:40px" :gutter="20">
            <el-col :span="16">
              <el-radio label="本地上传" style="margin:5px"></el-radio>
            </el-col>
            <el-col :span="8">
              <el-upload class="upload-demo" action="" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="1" :on-exceed="handleExceed" :file-list="local_fileList">
                <el-button size="mini" type="primary">浏览</el-button>
              </el-upload>
            </el-col>
          </el-row>
          <el-row style="height:40px" :gutter="20">
            <el-col :span="16">
              <el-radio label="从Onshape导入" style="margin:5px"></el-radio>
            </el-col>
            <el-col :span="8">
              <el-upload class="upload-demo" action="" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="1" :on-exceed="handleExceed" :file-list="shape_fileList">
                <el-button size="mini" type="primary">浏览</el-button>
              </el-upload>
            </el-col>
          </el-row>
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
        resource: ''
      },
      local_fileList: [],
      shape_fileList: [{name: 'food1.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name} ？`)
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

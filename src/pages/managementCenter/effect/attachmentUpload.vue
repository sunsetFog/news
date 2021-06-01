<template>
  <el-container
    v-loading="loadingStatus !== null"
    :element-loading-text="loadingText"
    direction="vertical"
  >
    <el-main @onkeydown.native="handlerKeyChange($event)">
      <el-row>
        <el-col :span="16">
          <div class="zoom">
            <span class="pen-in" @click="magnify" title="zoom-in">
              <i class="el-icon-zoom-in"></i>
              <span class="icon-name"></span>
            </span>
            <span class="pen-out" @click="shrink" title="zoom-out">
              <i class="el-icon-zoom-out"></i>
            </span>
            <el-button-group>
              <el-button
                type="primary"
                size="mini"
                :disabled="picNum == 0 ? true : false"
                @click="sunZhang('left')"
              >
                <i class="el-icon-arrow-left"></i>
              </el-button>
              <el-button
                type="primary"
                size="mini"
                :disabled="
                  picNum == saveSunContent.length - 1 ||
                  saveSunContent.length == 0
                    ? true
                    : false
                "
                @click="sunZhang('right')"
              >
                <i class="el-icon-arrow-right"></i>
              </el-button>
            </el-button-group>
          </div>
          <div style="height: 800px; overflow: scroll">
            <div id="dv-zoom">
              <img
                id="previewImage"
                :src="imgSrc"
                :style="{
                  transform: 'scale(' + multiples + ')',
                  transformOrigin: 'top left',
                }"
              />
              <svg
                id="textBoxes"
                :style="{
                  transform: 'scale(' + multiples + ')',
                  transformOrigin: 'top left',
                }"
              >
                <template v-for="(item, index) in getUniRecResultSVG2">
                  <a href="#">
                    <polygon
                      v-if="item"
                      :points="
                        item.position[0] +
                        ',' +
                        item.position[1] +
                        ',' +
                        item.position[2] +
                        ',' +
                        item.position[3] +
                        ',' +
                        item.position[2] +
                        ',' +
                        item.position[5] +
                        ',' +
                        item.position[0] +
                        ',' +
                        item.position[7]
                      "
                      :data-word="item.word ? item.word : ''"
                    ></polygon>
                  </a>
                </template>
              </svg>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-upload
              drag
              :multiple="true"
              :name="uploadName"
              :accept="accept"
              ref="upload"
              :limit="limit"
              :action="uploadUrl"
              :data="uploadData"
              :headers="headerData"
              :beforeUpload="beforeAvatarUpload"
              :on-exceed="onExceed"
              :onError="uploadErrorDefault"
              :onSuccess="uploadSuccessDefault"
              :onProgress="uploadProgress"
              :auto-upload="true"
              :show-file-list="false"
              :file-list="fileList"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                将文件拖到此处，或
                <em>点击上传</em>
              </div>
            </el-upload>
          </div>

          <el-form
            ref="ocrForm"
            :model="ocrFormData"
            :rules="rules"
            label-width="150px"
            id="fillForm"
            :key="nocache"
          >
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>Information</span>
              </div>

              <template v-for="(item, index) in dynamicList">
                <el-row type="flex" v-if="item.columnType == 'VARCHAR'">
                  <el-col>
                    <el-form-item
                      :label="item.columnTitle"
                      :prop="item.columnName"
                    >
                      <el-input
                        v-model="ocrFormData[item.columnName]"
                        :id="item.columnName"
                        maxlength="30"
                      />
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row type="flex" v-if="item.columnType == 'DATE'">
                  <el-col>
                    <el-form-item
                      :label="item.columnTitle"
                      :prop="item.columnName"
                    >
                      <el-date-picker
                        v-model="ocrFormData[item.columnName]"
                        value-format="yyyy-MM-dd"
                        style="width: 100%"
                        type="date"
                        :id="item.columnName"
                        @change="selectTime"
                        placeholder
                      ></el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row type="flex" v-if="item.columnType == 'NUMBER'">
                  <el-col>
                    <el-form-item
                      :label="item.columnTitle"
                      :prop="item.columnName"
                    >
                      <el-input-number
                        :min="0"
                        :max="9999999999"
                        style="width: 100%"
                        v-model="ocrFormData[item.columnName]"
                        :id="item.columnName"
                        :name="item.columnName"
                      ></el-input-number>
                    </el-form-item>
                  </el-col>
                </el-row>
              </template>
              <el-row class="ocr-buttons">
                <el-button type="primary" @click="saveOcr" size="medium"
                  >保存</el-button
                >
                <el-button @click="cancelOcr" size="medium">取消</el-button>
              </el-row>
            </el-card>
          </el-form>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: "FileUpload",
  data() {
    return {
      uploadUrl: process.env.mock_url + "/ifin-expense/oieOcr/uniRecognized", //上传-全文识别
      uploadName: "file", // 上传名字
      limit: 1000, // 上传限制文件数量
      fileList: [], // 上传列表
      headerData: {}, // 上传http-header
      uploadData: {}, //上传---传参
      accept:
        ".doc, .docx, .xls, .xlsx, .ppt, .pptx, .pdf, .jpg, .bmp, .gif, .png, .jpeg,.tif, .psd, .wmf, .cdr, .dwg, .ai", //上传类型

      loadingStatus: null, // 加载

      imgSrc: "", // base64图片
      getUniRecResultSVG2: [], // svg遍历数组
      saveSunContent: [], // 保存content
      saveSunFileBase64: [], // 保存fileBase64

      ocrFormData: {
        // form--数据
        recordId: null, // 记录保存id
        fileId: null, // 上传文件id
      },
      dynamicList: [], // 动态表单
      nocache: new Date().getTime(), // form--key
      rules: {
        // form--rules正则验证
      },

      picNum: 0, // 发票分页
      multiples: 0.25, // 缩放---transform:scale()

      batchId: "", // 发票识别参数--上传成功取batchId
      timer: "", // 发票识别---定时器延迟
      nullCount: 0, // 发票识别http次数
    };
  },
  computed: {
    loadingText() {
      // element-loading-text
      if (this.loadingStatus === "preview") {
        return "预览生成中...";
      } else if (this.loadingStatus === "upload") {
        return "上传中...";
      } else if (this.loadingStatus === "getResult") {
        return "识别中";
      } else if (this.loadingStatus === "save") {
        return "保存中";
      } else {
        return "";
      }
    },
  },
  props: {
    getRequestsOCR: {
      // url参数
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  created() {
    this.getOCRTemplate();
    this.uploadData = this.getRequestsOCR;
    console.log("getRequestsOCR", this.getRequestsOCR);
  },
  mounted() {
    // form 监听input事件
    const fillForm = document.getElementById("fillForm");
    let inputElement, selectText;
    const imgReader = new FileReader();
    let that = this;
    fillForm.addEventListener("click", formInput);
    function formInput(event) {
      if (event.target.localName === "input") {
        inputElement = event.target;
        // console.log('inputElement',inputElement)
      } else {
        inputElement = undefined;
        return;
      }
      console.log("-input-inputElement--", inputElement);
      console.log("-input-data-word--", selectText);
      if (selectText) {
        let sign1 =
          inputElement.getAttribute("id") || inputElement.getAttribute("name");
        that.sunListener(sign1, selectText, inputElement.getAttribute("name"));
        // inputElement.value += selectText;
        selectText = "";
        inputElement = undefined;
      }
    }
    // 监听svg事件
    const textBoxes = document.getElementById("textBoxes");
    textBoxes.addEventListener("click", function (event) {
      console.log("----polygon---2499", event.target);
      var event = event || window.event;
      event.stopPropagation(); //阻止冒泡
      if (event.target.localName === "polygon") {
        selectText = event.target.getAttribute("data-word");
        console.log("-svg-inputElement--", inputElement);
        console.log("-svg-data-word--", selectText);
        if (inputElement && selectText) {
          let sign1 =
            inputElement.getAttribute("id") ||
            inputElement.getAttribute("name");
          that.sunListener(
            sign1,
            selectText,
            inputElement.getAttribute("name")
          );
          // inputElement.value += selectText;
          inputElement = undefined;
          selectText = "";
        }
      }
    });
    //拖拽功能

    var dvZoom = document.getElementById("dv-zoom");
    var x = 0;
    var y = 0;
    var l = 0;
    var t = 0;
    var isDown = false;
    //鼠标按下事件
    dvZoom.onmousedown = function (e) {
      //获取x坐标和y坐标
      x = e.clientX;
      y = e.clientY;

      //获取左部和顶部的偏移量
      l = dvZoom.offsetLeft;
      t = dvZoom.offsetTop;
      //开关打开
      isDown = true;
      //设置样式
      dvZoom.style.cursor = "move";
    };
    //鼠标移动
    window.onmousemove = function (e) {
      if (isDown == false) {
        return;
      }
      //获取x和y
      var nx = e.clientX;
      var ny = e.clientY;
      //计算移动后的左偏移量和顶部的偏移量
      var nl = nx - (x - l);
      var nt = ny - (y - t);

      dvZoom.style.left = nl + "px";
      dvZoom.style.top = nt + "px";
    };
    //鼠标抬起事件
    dvZoom.onmouseup = function () {
      //开关关闭
      isDown = false;
      dvZoom.style.cursor = "default";
    };
  },

  methods: {
    sunListener(id, value, name) {
      console.log("Listener===", id, "---", value, name);
      if (id == "invoiceDate") {
        this.$message.error("格式错误");
        return;
      }
      if (name) {
        for (let i = 0; i < value.length; i++) {
          var zifu = value.charAt(i);
          if (isNaN(zifu) && zifu != ".") {
            // console.log('435843')
            value = value.split(zifu).join("");
          }
        }
        value = Number(value);
        console.log("name-o-", value);
      }
      this.$set(this.ocrFormData, id, value);
      // console.log('list==43=',this.ocrFormData)
      // this.ocrFormData[id] = value
    },

    sunZhang(value) {
      // console.log('zhang-shu---',this.picNum,this.saveSunContent.length - 1)
      if (value == "left") {
        if (this.picNum == 0) {
          // console.log('left-reture---')
          return;
        }
        this.picNum--;
      } else {
        if (this.picNum == this.saveSunContent.length - 1) {
          // console.log('right-reture---')
          return;
        }
        this.picNum++;
      }
      this.imgSrc =
        "data:image/jpg;base64," + this.saveSunFileBase64[this.picNum];
      this.getUniRecResultSVG2 = this.saveSunContent[this.picNum];
      this.sunHighlight("page");
    },
    // 上传成功处理
    setData(response) {
      console.log("--response--", response);

      if (response.data) {
        // if (!response.data.fileBase64) {
        //   this.$alert('请选择正确的语言', "warn", {
        //     confirmButtonText: "OK",
        //     callback: action => {
        //       this.$message({
        //         type: "warn",
        //         message: `action: ${action}`
        //       });
        //     }
        //   });
        //   return;
        // }

        let lyArr = response.data.content;
        for (let i = 0; i < lyArr.length; i++) {
          lyArr[i] = lyArr[i].map((d) => {
            const newPositionFormat = [];
            const tempPositions = d.position.split(",").map((d) => Number(d));
            newPositionFormat.push(
              Math.ceil(tempPositions[0]),
              Math.ceil(tempPositions[1]),
              Math.ceil(tempPositions[2]),
              Math.ceil(tempPositions[3]),
              Math.ceil(tempPositions[2]),
              Math.ceil(tempPositions[5]),
              Math.ceil(tempPositions[0]),
              Math.ceil(tempPositions[7])
            );
            d.position = newPositionFormat;
            return d;
          });
        }
        console.log("---处理position---", lyArr);
        this.saveSunContent = lyArr;
        this.saveSunFileBase64 = response.data.fileBase64;
        this.imgSrc = "data:image/jpg;base64," + response.data.fileBase64[0];
        this.batchId = response.data.batchId;
        this.ocrFormData.fileId = response.data.fileId;
        this.ocrFormData.recordId = null;

        // console.log('--imgSrc',this.imgSrc,'-fileBase64',response.data.fileBase64)
        this.getUniRecResultSVG2 = lyArr[0];
        console.log("--getUniRecResultSVG2", this.getUniRecResultSVG2);
        this.sunHighlight();
      } else {
        this.$message({
          type: "info",
          message: "couldnt recongize this invoice",
        });
      }
    },
    // 定位高亮和发票识别
    sunHighlight(params) {
      if (params == "page") {
        this.loadingStatus = null;
        return;
      }
      // 定时器调用发票识别

      this.nullCount = 0;
      this.timer = setInterval(this.distinguish, 6000);
    },
    // 发票识别接口----ocr/getRegInvoiceResult
    distinguish() {
      this.loadingStatus = "getResult";
      let param = { batchId: this.batchId };
      this.$apihttp({
        url: "/ifin-expense/ocr/getRegInvoiceResult",
        data: param,
        method: "post",
      }).then((data) => {
        let response = data.data;
        console.log("发票识别数据001", response);
        if (!response) {
          this.nullCount = this.nullCount + 1;
          console.log("--2-32----", this.nullCount);
          if (this.nullCount == 10) {
            clearInterval(this.timer);
            this.loadingStatus = null;
          }
          return;
        }
        if (response) {
          clearInterval(this.timer);
          this.magnify();
          this.shrink();
          this.sunUpdateForm(response.data);
          this.loadingStatus = null;
        }
      });
    },
    // 发票识别处理
    sunUpdateForm(list = []) {
      for (let i = 0; i < this.dynamicList.length; i++) {
        for (let j = 0; j < list.length; j++) {
          if (this.dynamicList[i].columnMapping == list[j].key) {
            this.ocrFormData[this.dynamicList[i].columnName] = list[j].word;
          }
        }
      }
    },

    // 放大
    magnify() {
      if (this.multiples >= 3) {
        return;
      }
      this.multiples += 0.25;
    },
    // 缩小
    shrink() {
      if (this.multiples <= 0.25) {
        return;
      }
      this.multiples -= 0.25;
    },

    // 上传数量限制
    onExceed() {
      this.$message({
        type: "info",
        message: "文件超出个数限制" + ":" + this.limit,
      });
    },
    // 上传成功
    uploadSuccessDefault(response, file, fileList) {
      console.log("upload成功==", response, file, fileList);
      this.loadingStatus = "getResult";
      switch (response.resultCode) {
        case "ISC-000":
          this.setData(response);
          //  this.refreshData()
          break;
        case "ISC-999": // 程序报错，显示more信息
        default:
          this.$message({
            msgCode: response.resultCode,
            message: response.resultMsg,
          });
      }
      // this.uploadSuccess(response, file, fileList);
    },
    // 上传
    uploadProgress() {
      console.log("uploadProgress==");
      this.loadingStatus = "upload";
    },
    // 上传错误
    uploadErrorDefault() {
      console.log("upload失败");
      this.loadingStatus = null;
      this.$message({
        type: "error",
        message: "上传失败",
      });
    },
    // 上传前设置
    beforeAvatarUpload(file) {
      const fileSize = parseFloat(file.size) / 1024 / 1024;
      if (fileSize <= 0) {
        this.$message({
          message: "上传文件大小必须大于0",
          duration: 3000,
        });
        return false;
      }
      if (fileSize > 50) {
        this.$message({
          message: "上传文件大小不能超过:" + "50MB",
          duration: 3000,
        });
        return false;
      }
      // return this.beforeUpload(file)
    },

    // 保存按钮
    saveOcr() {
      if (this.ocrFormData.recordId) {
        this.$confirm("记录已存在，更新还是取消保存？", "", {
          confirmButtonText: "更新",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.saveOcr2();
          })
          .catch(() => {
            this.loadingStatus = null;
          });
      } else {
        this.saveOcr2();
      }
    },
    // 保存处理
    saveOcr2() {
      this.$nextTick(() => {
        this.$refs["ocrForm"].validate((valid) => {
          if (valid) {
            this.loadingStatus = "save";
            let params = {
              moduleType: this.getRequestsOCR.moduleType,
              orgId: Number(this.getRequestsOCR.orgId),
              sourceTableId: Number(this.getRequestsOCR.tableId),
              sourceTableName: this.getRequestsOCR.tableName,
              userName: this.getRequestsOCR.userName,
              attachedFileId: this.ocrFormData.fileId,
              recordId: this.ocrFormData.recordId,
            };

            for (let key in this.ocrFormData) {
              // console.log('key===',key)
              for (let i = 0; i < this.dynamicList.length; i++) {
                if (key == this.dynamicList[i].columnName) {
                  // console.log('ueuru--------')
                  params[key] = this.ocrFormData[key];
                }
              }
            }

            console.log("保存传的参数", params);
            if (!this.ocrFormData.recordId) {
              // this.$apihttp({
              //     url: '/ifin-expense/oieOcr/saveInvoice',
              //     data: params,
              //     method: 'post'
              // }).then(data => {
              this.$message({
                message: "保存成功",
                type: "success",
              });
              this.loadingStatus = null;
              this.ocrFormData.recordId = 889; // 值来自data
              // this.$emit("searchList"); //自动触发updateInfo事件
              // })
              // .catch(err => {
              //   this.$message({
              //     message: '保存失败',
              //     type: "warning"
              //   });
              // });
              this.loadingStatus = null;
            } else {
              // this.$apihttp({
              //     url: '/ifin-expense/oieOcr/updateInvoice',
              //     data: params,
              //     method: 'post'
              // }).then(data => {
              this.$message({
                message: "更新成功",
                type: "success",
              });
              this.loadingStatus = null;
              // this.$emit("searchList"); //自动触发updateInfo事件
              // })
              // .catch(err => {
              //   this.$message({
              //     message: '更新失败',
              //     type: "warning"
              //   });
              //   this.loadingStatus = null;
              // });
            }
          } else {
            this.$message({
              message: "必填字段为空",
              type: "warning",
            });
            this.loadingStatus = null;
            return false;
          }
        });
      });
    },
    // 取消按钮
    cancelOcr() {
      this.$confirm("记录没有保存！", "", {
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        type: "warning",
      })

        .then(() => {
          // this.ocrFormData = {};
          // this.$emit("searchList");
          // this.$emit("cancelOcr");
        })
        .catch(() => {});
    },
    // 键盘事件
    handlerKeyChange($ev) {
      if ($ev.keyCode === 38) {
        console.log("跳到下一个");
        this.magnify();
      }
      if ($ev.keyCode === 40) {
        console.log("跳到下h 个");
        this.shrink();
      }
    },
    // 动态表单模板---ocrTemplates/getOCRTemplate
    getOCRTemplate() {
      let params = {
        moduleType: this.getRequestsOCR.moduleType,
        orgId: Number(this.getRequestsOCR.orgId),
        tableName: this.getRequestsOCR.tableName,
      };
      this.$apihttp({
        url: "/ifin-expense/ocrTemplates/getOCRTemplate",
        data: params,
        method: "post",
      })
        .then((data) => {
          console.log("data", data);
          let columns = data.data;

          this.dynamicList = columns;

          columns.map((item, index) => {
            // 添加字段
            this.$set(this.ocrFormData, item.columnName, undefined);
            if (item.required == "1") {
              // 添加正则
              this.rules[item.columnName] = [
                {
                  required: true,
                  message: "not recognized ,please enter it manually",
                  trigger: "blur",
                },
              ];
            }
          });
          console.log("---formData--", this.ocrFormData);
          console.log("this.rules", this.rules);
        })
        .catch((err) => {});
    },
    // 日期选择
    selectTime(val) {
      console.log("日期确定=", val);
    },
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="less" scoped>
/deep/.el-upload {
  width: 100%;
}
/deep/.el-upload-dragger {
  width: 100%;
}
#dv-zoom {
  position: relative;
  display: inline-block;
  top: 0px !important;
}
#textBoxes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.ocr-buttons {
  padding-left: 20px;
}
.zoom {
  width: 350px;
  height: 30px;
  margin: auto;
  span {
    float: left;
  }
  .pen-out,
  .pen-in {
    font-size: 20px;
    margin-right: 20px;
  }
}
</style>

<template>
  <el-form ref="ElForm" :model="formData" style="width: 400px">
    <el-form-item label="工单编号" required props="taskId">
      <el-input placeholder="请输入工单编号" v-model="formData.taskId"></el-input>
    </el-form-item>
    <el-form-item required label="action" prop="action">
      <el-select name="action" v-model="formData.action">
        <el-option key="UPLOAD" value="UPLOAD" label="UPLOAD"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="time" prop="data.time" required>
      <el-date-picker
        name="time"
        type="datetime"
        placeholder="Select date and time"
        v-model="formData.data.time"
      ></el-date-picker>
    </el-form-item>
    <el-form-item label="batchNo" required prop="data.batchNo">
      <el-input v-model="formData.data.batchNo" placeholder="请输入字符串"></el-input>
    </el-form-item>
    <el-form-item label="dataName" required prop="data.dataName">
      <el-input v-model="formData.data.dataName" placeholder="请输入字符串"></el-input>
    </el-form-item>
    <el-form-item label="dataNumber">
      <el-input type="number" placeholder="请输入数字" v-model="formData.data.dataNumber"></el-input>
    </el-form-item>
    <el-form-item label="dataSize">
      <el-input type="number" placeholder="请输入数字" v-model="formData.data.dataSize"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="default" @click="onSubmit('ElForm')">提交</el-button>
    </el-form-item>
  </el-form>
  <div>
    返回结果：
    <pre>{{ resultData }}</pre>
  </div>
</template>

<script>
import { postTaskLog } from "@/api/index";
export default {
  name: "DeliveryLogs",
  data() {
    return {
      resultData: "",
      formData: {
        taskId: "",
        action: "",
        data: {
          time: new Date(),
          batchNo: "",
          dataName: "",
          dataNumber: null,
          dataSize: null,
        },
      },
    };
  },
  methods: {
    onSubmit(formName) {
      console.log(formName);
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          try {
            const result = await postTaskLog(this.formData.taskId, {
              action: this.formData.action,
              data: this.formData.data,
            });
            if (result) {
              this.resultData = result;
            } else {
              this.resultData = "推送成功！！！！";
            }
          } catch (error) {
            console.log(error);
            this.resultData = JSON.stringify(error);
          }
        }
      });
    },
  },
};
</script>

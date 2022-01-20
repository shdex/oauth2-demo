<template>
  <el-form ref="ElForm" :model="formData" style="width: 600px">
    <el-form-item label="工单编号" required props="taskId">
      <el-input placeholder="请输入工单编号" v-model="formData.taskId"></el-input>
    </el-form-item>
    <el-form-item label="批次号" required props="batchNo">
      <el-input placeholder="请输入批次号" v-model="formData.batchNo"></el-input>
    </el-form-item>
    <el-form-item label="密文的采样数据" required props="data">
      <el-input type="textarea" rows="30" placeholder="请输入密文的采样数据" v-model="formData.data"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="default" @click="onSubmit('ElForm')">提交</el-button>
    </el-form-item>
  </el-form>

  <div>返回结果：</div>
  <pre>{{ resultData }}</pre>
</template>

<script>
import { postTaskEdence } from "@/api/index";
export default {
  name: "DeliveryProof",
  data() {
    return {
      resultData: "",
      formData: {
        taskId: "",
        batchNo: "",
        data: "",
      },
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          try {
            const result = await postTaskEdence(this.formData.taskId, {
              data: this.formData.data,
              batchNo: this.formData.batchNo,
            });
            if (result) {
              this.resultData = result;
            } else {
              this.resultData = "推送成功！！！！";
            }
          } catch (error) {
            console.log(error);
            this.resultData = error;
          }
        }
      });
    },
  },
};
</script>

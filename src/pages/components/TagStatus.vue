<template>
  <div class="tag" :class="[`tag_${status}`]">
    <span>{{ getLabel("delivery_status", status) }}</span>
  </div>
</template>

<script>
import { getLabel } from "@/utils/contanst.js";
export default {
  props: {
    status: {
      type: String,
      default: "",
      required: true,
    },
  },
  methods: {
    getLabel,
  },
};
</script>

<style lang="scss">
.tag {
  width: 104px;
  height: 32px;
  border-radius: 20px;
  display: inline-block;
  line-height: 32px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;

  span {
    margin-left: 4px;
  }

  &.tag_1,
  &.tag_3 {
    color: #e9a412;
    background: rgba(233, 164, 18, 0.1);
  }

  &.tag_2 {
    color: #2baa4e;
    background: rgba(43, 170, 78, 0.1);
  }

  &.tag_4 {
    color: #357fed;
    background: rgba(53, 127, 237, 0.1);
  }

  &.tag_5 {
    color: #d71c45;
    background: rgba(215, 28, 69, 0.1);
  }
}
</style>

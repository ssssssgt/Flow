<template>
  <el-cascader
    :value="value"
    :options="options"
    :show-all-levels="false"
    :disabled="isDisabled"
    @change="handleChange"
  >
  </el-cascader>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Array,
      required: true,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    handleChange(selectedValues) {
      this.$emit("input", selectedValues);
    },
  },
};
</script>

<template>
  <a-select :v-model="ss" placeholder="Select a person" style="width: 200px">
    <a-select-option value="jack">Jack</a-select-option>
    <a-select-option value="lucy">Lucy</a-select-option>
    <a-select-option value="tom">Tom</a-select-option>
  </a-select>
</template>
<script>
export default {
  data() {
    return {
      a: [
        {
          pageSize: 10,
          pageIndex: 1,
          sort: [],
          filters: [{ field: "title", op: "cn", term: "returnMsg" }],
          filter: {
            op: "or",
            groups: [],
            rules: [{ field: "type", op: "cn", data: "returnMsg" }],
          },
        },
      ],
      b: [
        {
          pageSize: 10,
          pageIndex: 1,
          sort: [],
          filters: [{ field: "type", op: "cn", term: "returnMsg" }],
          filter: {
            op: "or",
            groups: [],
            rules: [{ field: "type", op: "cn", data: "returnMsg" }],
          },
        },
      ],
      ss: "",
    };
  },
  methods: {
    // handleChange(value) {
    //   console.log(`selected ${value}`);
    // },
    // handleBlur() {
    //   console.log('blur');
    // },
    // handleFocus() {
    //   console.log('focus');
    // },
    // filterOption(input, option) {
    //   return (
    //     option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
    //   );
    // },
  },
};
</script>
/script>

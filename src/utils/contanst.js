const contanst = {
  delivery_status: [
    {
      label: "待配置",
      value: "1",
    },
    {
      label: "交付完成",
      value: "2",
    },
    {
      label: "待交付",
      value: "3",
    },
    {
      label: "交付中",
      value: "4",
    },
    {
      label: "交付中止",
      value: "5",
    },
  ],
  dataType: [
    {
      value: "01",
      label: "数据集",
    },
    {
      value: "02",
      label: "算法集",
    },
    {
      value: "03",
      label: "数据服务",
    },
    {
      value: "99",
      label: "其他",
    },
  ],
};

function getLabel(key, v) {
  if (!v) return;
  return contanst[key].find((item) => item.value == v).label;
}

export { getLabel };

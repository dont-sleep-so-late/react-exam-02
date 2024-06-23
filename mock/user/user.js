// 引入mockjs库
import Mock from "mockjs";

// Mock.setup({
//   timeout: "200-600",
// });

Mock.mock(/home\/getData/, "get", () => {
  return {
    code: 200,
    msg: "success",
    data: [
      {
        id: 1,
        name: "张三",
        role: "软件工程师",
        skills: "Python",
        region: "北京",
      },
      {
        id: 2,
        name: "李四",
        role: "数据分析师",
        skills: "R",
        region: "上海",
      },
      {
        id: 3,
        name: "王五",
        role: "产品经理",
        skills: "需求分析",
        region: "深圳",
      },
      {
        id: 4,
        name: "赵六",
        role: "UI设计师",
        skills: "Photoshop",
        region: "广州",
      },
      {
        id: 5,
        name: "钱七",
        role: "前端工程师",
        skills: "HTML, CSS, JavaScript",
        region: "杭州",
      },
    ],
  };
});
Mock.mock("/mock/random", "get", {
  code: 200,
  message: "random success",
  data: {
    content: ["床头明月光", "疑是地上霜", "举头望明月", "低头思故乡"],
    emotion: "思",
  },
});

Mock.mock("/mock/acrostic", "post", {
  code: 200,
  message: "acrostic success",
  data: {
    content: ["我头明月光", "是是地上霜", "藏头望明月", "头头思故乡"],
    emotion: "悲",
  },
});

Mock.mock("/mock/after", "post", {
  code: 200,
  message: "after success",
  data: {
    content: ["床头明月光", "我是续写啊", "我是续写啊", "我是续写啊"],
    emotion: "乐",
  },
});

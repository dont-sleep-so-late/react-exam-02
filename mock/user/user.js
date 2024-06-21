// 引入mockjs库
import Mock from "mockjs";

// Mock.setup({
//   timeout: "200-600",
// });

Mock.mock("/api/test", "get", () => {
  return {
    code: 200,
    msg: "success",
    data: [
      {
        id: 1,
        姓名: "张三",
        角色: "软件工程师",
        主要技能: "Python",
        地区: "北京",
      },
      {
        id: 2,
        姓名: "李四",
        角色: "数据分析师",
        主要技能: "R",
        地区: "上海",
      },
      {
        id: 3,
        姓名: "王五",
        角色: "产品经理",
        主要技能: "需求分析",
        地区: "深圳",
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

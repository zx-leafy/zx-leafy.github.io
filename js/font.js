// 加载 CSS
function loadCSS(url) {
  return new Promise((resolve, reject) => {
    //// 检查是否已加载
    const existingLinks = document.querySelectorAll(`link[href="${url}"]`);
    if (existingLinks.length > 0) {
      return resolve(url);
    }

    //// 创建新的 link 元素
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;

    //// 成功加载处理
    link.onload = () => {
      link.onload = null;
      link.onerror = null;
      resolve(url);
    };

    //// 加载失败处理
    link.onerror = () => {
      link.onerror = null;
      link.onload = null;
      document.head.removeChild(link);
      reject(new Error(`无法加载CSS文件: ${url}`));
    };

    //// 添加到文档头部
    document.head.appendChild(link);
  });
}

// 初始化
function initialize() {
  loadCSS(
    "https://chinese-fonts-cdn.deno.dev/packages/maple-mono-cn/dist/MapleMono-CN-Regular/result.css"
  ); //// 加载字体 CSS
}

// 触发器
//// 网页加载完毕后触发初始化
window.addEventListener("DOMContentLoaded", () => initialize());

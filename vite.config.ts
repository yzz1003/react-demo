import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import {
  GenerateApiOption,
  vitePluginSwaggerTypescriptApi,
} from "vite-plugin-swagger-typescript-api";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig((mode) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      react(),
      vitePluginSwaggerTypescriptApi({
        name: "xxOpenTypeApi.ts",
        output: resolve("./src/api/interface"),
        url: "http://localhost:3000/api-json",
        generateClient: false, // 生成客户端代码
        extractRequestParams: true, // 将请求query生成类型定义
        extractRequestBody: true, // 将请求body生成类型定义
        moduleNameFirstTag: true, // 根据tags中的第一个标签名进行路由分离
        generateResponses: true, // 生成有关请求响应的附加信息
        generateUnionEnums: true, // 生成所有“enum”类型作为联合类型
        modular: false,
      } as GenerateApiOption),
    ],
    server: {
      open: true,
      port: 3001,
      host: "0.0.0.0",
      proxy: {
        "/api": {
          target: "http://0.0.0.0:3000",
          changeOrigin: true,
        },
      },
    },
  };
});

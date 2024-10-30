import useSWR from "swr";
// utils/fetcher.js
import { useState, useEffect } from "react";

// 这是一个自定义的 fetcher 函数，支持 POST 请求
const fetcher = async (url, method = "GET", body = null, headers = {}) => {
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : null,
  });

  // 如果响应不是 OK，抛出错误
  if (!res.ok) {
    const error = new Error(
      `An error occurred while fetching the data. Status: ${res.status}`
    );
    error.info = await res.json(); // 尝试解析错误响应体
    error.status = res.status;
    throw error;
  }

  // 返回解析后的响应数据
  return res.json();
};
export default fetcher;

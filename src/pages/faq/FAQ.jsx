import styles from "./FAQ.module.scss";
import { Down, Up } from "@icon-park/react";
import { useState, useEffect, useCallback } from "react";
// const useHashChange = (callback) => {
//   useEffect(() => {
//     const handleHashChange = () => {
//       const hash = window.location.hash;
//       if (hash) {
//         const elementId = hash.substring(1); // Remove the '#' character
//         const element = document.getElementById(elementId);
//         if (element) {
//           callback(element);
//         }
//       }
//     };

//     // 页面加载时立即执行一次
//     handleHashChange();

//     // 添加事件监听器
//     window.addEventListener("hashchange", handleHashChange);

//     // 清理函数
//     return () => {
//       window.removeEventListener("hashchange", handleHashChange);
//     };
//   }, [callback]);
// };
export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  //   const [i, setI] = useState({ icon: Down });
  const data = [
    {
      Q: "Who is IllustraAI for?",
      A: "IllustraAI is designed for anyone who wants to create beautiful illustrations for their projects. Whether you're a designer, a marketer, or just someone who needs a quick visual, we've got you covered.",
    },
    {
      Q: "How much does IllustraAI cost?",
      A: "IllustraAI is completely free to use. No hidden fees or subscriptions. Just a click away!",
    },
    {
      Q: "Can I use IllustraAI for commercial projects?",
      A: "IllustraAI is completely free to use. No hidden fees or subscriptions. Just a click away!",
    },
  ];
  const open = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
      //   i.icon === Up ? setI({icon:Down}) : setI({icon:Up})
    } else {
      setExpandedIndex(index);
    }
  };
  //   useHashChange((element) => {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   });
  return (
    <div id="FAQ">
      <div className={styles.container}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        {data.map((item, index) => (
          <div className={styles.box} key={index}>
            <div className={styles.boxQuestion} onClick={() => open(index)}>
              <h3>{item.Q}</h3>
              {expandedIndex === index ? (
                <Up theme="outline" size="14" fill="#333" />
              ) : (
                <Down theme="outline" size="14" fill="#333" />
              )}
              {/* <i.icon theme="outline" size="14" fill="#333" /> */}
            </div>
            {/* 根据状态决定是否显示<p>标签 */}
            <p className={expandedIndex === index ? styles.expanded : ""}>
              {item.A}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

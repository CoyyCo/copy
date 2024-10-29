import styles from "./Faq.module.scss";
import { Down, Up } from "@icon-park/react";
import { useState } from "react";
export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);
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
    } else {
      setExpandedIndex(index);
    }
  };
  return (
    <>
    
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
    </>
  );
}

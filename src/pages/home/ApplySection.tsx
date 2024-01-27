import { useState } from "react";
import styles from "./ApplySection.module.scss";

function sendMessage() {
  const webhookUrl =
    "https://discord.com/api/webhooks/1200878773386620999/Uj2cRTN5DHOvpLwr7Wy91hZeAOd0wkXv-lbeIF96Zip-iHGdJvxDnVj9VUKx3hRlVyuR";
  var message = "asdasdasd";

  if (!webhookUrl || !message) {
    alert("Webhook URL and message are required");
    return;
  }

  var payload = {
    content: message,
  };

  fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (response.ok) {
        alert("Message sent successfully");
      } else {
        alert("Failed to send message");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred while sending the message");
    });
}

function ApplySection() {
  const positions = [
    "백엔드",
    "프론트엔드",
    "안드로이드",
    "iOS",
    "데브옵스/보안",
    "AI/머신러닝",
    "UI/UX디자인",
    "제품디자인",
  ];

  return (
    <div className={styles.content}>
      <h1 className={styles.h1}>다니고 싶은 회사를 모두 선택해주세요</h1>
      <h1 className={styles.h1}>고민중인 포지션을 모두 골라주세요</h1>

      <div className={styles.position_container}>
        {positions.map((position) => (
          <label>
            <div className={styles.position}>{position}</div>
          </label>
        ))}
      </div>

      <div className={styles.submit} onClick={() => sendMessage()}>
        신청하기
      </div>
    </div>
  );
}

export default ApplySection;

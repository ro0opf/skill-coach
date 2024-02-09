import { ChangeEvent, useState } from "react";
import styles from "./ApplySection.module.scss";
import { APPLY_DISCORD_WEBHOOK_URL } from "../../../Const";
import TextField from "./TextField";
import styled from "styled-components";
import { Spacer } from "../../../components/Spacer";
import SelectableButton from "./SelectableButton";
import isMobile from "../../../utils/CommonUtils";

const StyledH1 = styled.h1`
  color: #f0eff3;
  font-size: 32px;
  line-height: 36px;
  margin-top: 40px;
  margin-bottom: 40px;
  position: relative;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-margin-top: 120px;

  /* 모바일 스타일 */
  @media only screen and (max-width: 767px) {
    width: auto;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* 모바일 스타일 */
  @media only screen and (max-width: 767px) {
    width: auto;
  }
`;

function buildMessage(
  companys: string[],
  positions: string[],
  name: string,
  phone: string
) {
  return (
    "지원 회사 : " +
    companys.join(", ") +
    "\n" +
    "지원 포지션 : " +
    positions.join(", ") +
    "\n" +
    "이름 : " +
    name +
    "\n" +
    "연락처 : " +
    phone
  );
}

function sendMessage(message: string | undefined) {
  if (!message) {
    alert("message are required");
    return;
  }

  var payload = {
    content: message,
  };

  fetch(APPLY_DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (response.ok) {
        alert("신청해주셔서 감사합니다.\n1~2일 내에 연락드리겠습니다.");
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
  const companys = [
    "네이버",
    "카카오",
    "라인",
    "쿠팡",
    "배달의민족",
    "토스",
    "SK하이닉스",
    "삼성전자",
    "SKT",
    "현대자동차",
    "기아자동차",
  ];

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

  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [selectedCompanys, setSelectedCompanys] = useState<string[]>([]);

  const handleCompanyClick = (option: string) => {
    setSelectedCompanys((prevSelectedOptions) =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter(
          (selectedOption) => selectedOption !== option
        )
        : [...prevSelectedOptions, option]
    );
  };

  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);

  const handlePositionClick = (option: string) => {
    setSelectedPositions((prevSelectedOptions) =>
      prevSelectedOptions.includes(option)
        ? prevSelectedOptions.filter(
          (selectedOption) => selectedOption !== option
        )
        : [...prevSelectedOptions, option]
    );
  };

  return (
    <Container id="applyForm">
      <StyledH1>다니고 싶은 회사를 모두 선택해주세요</StyledH1>

      <div className={styles.position_container}>
        {companys.map((company) => (
          <label>
            <SelectableButton
              label={company}
              isSelected={selectedCompanys.includes(company)}
              onChange={() => handleCompanyClick(company)}
            />
          </label>
        ))}
      </div>

      <StyledH1>고민중인 포지션을 모두 골라주세요</StyledH1>

      <div className={styles.position_container}>
        {positions.map((position) => (
          <label>
            <SelectableButton
              label={position}
              isSelected={selectedPositions.includes(position)}
              onChange={() => handlePositionClick(position)}
            />
          </label>
        ))}
      </div>

      <Spacer height="24px" />

      <InputContainer>
        <TextField
          label="이름"
          width={isMobile() ? "160px" : "240px"}
          value={name}
          onChange={(value) => setName(value)}
        />
        <Spacer height="24px" />
        <TextField
          label="연락처"
          width={isMobile() ? "160px" : "240px"}
          value={phoneNumber}
          onChange={(value) => setPhoneNumber(value)}
        />
      </InputContainer>

      <div
        className={styles.submit}
        onClick={() =>
          (name.length < 1 || phoneNumber.length < 1) ? alert("정보를 전부 입력 해주세요") : sendMessage(
            buildMessage(selectedCompanys, selectedPositions, name, phoneNumber)
          )
        }
      >
        신청하기
      </div>
    </Container>
  );
}

export default ApplySection;

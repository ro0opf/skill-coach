import { useState } from "react";
import styles from "./Position.module.scss";

function Position() {

    const positionList = [
        {
            "id": "backend",
            "name": "백엔드"
        },
        {
            "id": "frontend",
            "name": "프론트엔드"
        },
        {
            "id": "android",
            "name": "안드로이드"
        },
        {
            "id": "ios",
            "name": "iOS"
        },
        {
            "id": "devopssec",
            "name": "데브옵스/보안"
        },
        {
            "id": "ai",
            "name": "AI/머신러닝"
        },
        {
            "id": "uidesign",
            "name": "UI/UX디자인"
        },
        {
            "id": "productdesign",
            "name": "제품디자인"
        },
    ]

    const [checkedIds, setCheckedIds] = useState(new Set)

    const onPositionClick = (position: any) => {
        const newSet = new Set(checkedIds);
        if (checkedIds.has(position.id)) {
            newSet.delete(position.id)
        } else {
            newSet.add(position.id)
        }
        setCheckedIds(newSet)
    }

    return (
        <div>
            <div className={styles.container}>
                <h1>고민중인 포지션을 모두 골라주세요</h1>
                <div className={styles.row}>
                    {
                        positionList.map((position) => {
                            const checked = checkedIds.has(position.id)

                            return (
                                <label onClick={() => onPositionClick(position)}>
                                    <div className={`${styles.cardBox} ${checked ? styles.cardBoxChecked : ""}`}>
                                        <span>{position.name}</span>
                                    </div>
                                </label>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Position;
import { useState } from "react";
import styles from "./Company.module.scss";
import ic_naver from "../../resources/ic_naver.png";
import ic_kakao from "../../resources/ic_kakao.png";
import ic_line from "../../resources/ic_line.png";
import ic_coupang from "../../resources/ic_coupang.png";
import ic_baemin from "../../resources/ic_baemin.png";
import ic_carrot from "../../resources/ic_carrot.png";
import ic_toss from "../../resources/ic_toss.png";

function Company() {

    const companyList = [
        {
            "id": "naver",
            "name": "네이버",
            "src": ic_naver
        },
        {
            "id": "kakao",
            "name": "카카오",
            "src": ic_kakao
        },
        {
            "id": "line",
            "name": "라인",
            "src": ic_line
        },
        {
            "id": "coupang",
            "name": "쿠팡",
            "src": ic_coupang
        },
        {
            "id": "baemin",
            "name": "배민",
            "src": ic_baemin
        },
        {
            "id": "carrot",
            "name": "당근",
            "src": ic_carrot
        },
        {
            "id": "toss",
            "name": "토스",
            "src": ic_toss
        },
    ]

    const [checkedIds, setCheckedIds] = useState(new Set)

    const onCompanyClick = (company: any) => {
        const newSet = new Set(checkedIds);
        if (checkedIds.has(company.id)) {
            newSet.delete(company.id)
        } else {
            newSet.add(company.id)
        }
        console.log("click : " + company)
        console.log(newSet)
        setCheckedIds(newSet)
    }

    return (
        <div>
            <h1>다니고 싶은 회사를 모두 선택해주세요</h1>
            <div className={styles.row}>
                {
                    companyList.map((company) => {
                        const checked = checkedIds.has(company.id)

                        return (
                            <label onClick={() => onCompanyClick(company)}>
                                <div className={`${styles.iconBox} ${checked ? styles.iconBoxChecked : ""}`}>
                                    <img src={company.src} alt="icon" />
                                    <span>{company.name}</span>

                                </div>
                            </label>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Company;
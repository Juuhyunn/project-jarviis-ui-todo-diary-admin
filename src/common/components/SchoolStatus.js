import React from "react";

const SchoolStatus = () => (
<div>
    <table border="1">
        <caption>제주 특별 자치도 학교 현황 (2015.4.1 기준)
        </caption>
        <thead>
            <tr>
                <th>구분</th>
                <th>학교 수</th>
                <th>학급 수</th>
                <th>학생 수</th>
                <th>교원 수</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>유치원</th>
                <td>117</td>
                <td>252</td>
                <td>5,547</td>
                <td>474</td>
            </tr>
            <tr>
                <th>초등학교</th>
                <td>111</td>
                <td>1,720</td>
                <td>37,686</td>
                <td>2,632</td>
            </tr>
            <tr>
                <th>중학교</th>
                <td>44</td>
                <td>699</td>
                <td>21,274</td>
                <td>1,412</td>
            </tr>
            <tr>
                <th>고등학교</th>
                <td>29</td>
                <td>676</td>
                <td>22,019</td>
                <td>1,433</td>
            </tr>
            <tr>
                <th>특수학교</th>
                <td>3</td>
                <td>90</td>
                <td>428</td>
                <td>160</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>합계</th>
                <td>300</td>
                <td>3,437</td>
                <td>86,954</td>
                <td>6,111</td>
            </tr>
        </tfoot>
    </table>
</div>);
export default SchoolStatus
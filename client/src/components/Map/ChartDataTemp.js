import React from 'react'
import { Bar, Doughnut, Line } from 'react-chartjs-2'
import { Chart, ArcElement, registerables } from 'chart.js'
import { useEffect } from 'react';
import { chartColors } from './chartColors';
import { useState } from 'react';

Chart.register(ArcElement);
Chart.register(...registerables);


const ChartData = (props) => {
  const [monday, setMonday] = useState(0) //월요일 생활인구 수 
  const [tuesday, setTuesday] = useState(0) //화요일 생활인구 수
  const [wednesday, setWednesday] = useState(0) // 수요일 생활인구 수
  const [thursday, setThursday] = useState(0) // 목요일 생활인구 수 
  const [friday, setFriday] = useState(0) // 금요일 생활인구 수
  const [saturday, setSaturday] = useState(0)//토
  const [sunday, setSunday] = useState(0)//일





  ///////////////////추가////////////////////////
  const listDay={"월요일":monday, "화요일":tuesday, "수요일":wednesday, "목요일":thursday, "금요일":friday, "토요일":saturday, "일요일":sunday}
  const [maxDayValue,setMaxDayValue] = useState(1) //가장 많은 시간대 인구 수 
  const [maxDay, setMaxDay] = useState("") //가장 많은 시간대 요일 
  const [minDayValue, setMinDayValue] = useState(1)
  const [minDay, setMinDay] = useState("")
///////////////////////////////////////////////////////






  const [time1, setTime1] = useState(0) //시간대 1 생활인구 수 
  const [time2, setTime2] = useState(0) //시간대 2 생활인구 수 
  const [time3, setTime3] = useState(0) //시간대 3 생활인구 수
  const [time4, setTime4] = useState(0) //시간대 4 생활인구 수
  const [time5, setTime5] = useState(0) //시간대 5 생활인구 수
  const [time6, setTime6] = useState(0) //시간대 6 생활인구 수







/////////////////////추가//////////////////////
  const listTime={"시간대1(00~06)":time1, "시간대2(06~11)":time2, "시간대3(11~14)":time3, "시간대4(14~17)":time4, "시간대5(17~21)":time5, "시간대6(21~24)":time6}
  const [maxTimeValue,setMaxTimeValue] = useState(1) //가장 많은 시간대 인구 수 
  const [maxTime, setMaxTime] = useState("") //가장 많은 시간대 요일 
  const [minTimeValue, setMinTimeValue] = useState(1)
  const [minTime, setMinTime] = useState("")
  const [shop, setShop] = useState("") //행정동 총 점포수
  ///////////////////////////////////////////////




  const [stay, setStay] = useState(0) //행정동 총 상주인구 수 
  const [live, setLive] = useState(0) //행정동 총 생활인구 수 
  const [work, setWork] = useState(0) //행정동 총 직장인구 수 

  const [averageSale, setAverageSale] = useState(0) //행정동 분기당 평균매출
  const allSale = 80551349 //전체 행정동 평균매출의 평균 

  
  


  useEffect(() => {


    simpleDayData()
    simpletimeData()
    simplePeopleData()
    simpleAverSale()

    ///////추가////////
    simpleShop()
  //////////////////

  }, [props])

  

  /////////////////추가/////////////////////////////////////
  useEffect(()=>{
    setMaxTimeValue(Math.max(time1,time2,time3,time4,time5,time6))
    setMinTimeValue(Math.min(time1,time2,time3,time4,time5,time6))

    setMaxDayValue(Math.max(monday,tuesday,wednesday,thursday,friday,saturday,sunday))
    setMinDayValue(Math.min(monday,tuesday,wednesday,thursday,friday,saturday,sunday))
    
    
  },[listTime])
  

  useEffect(()=>{
    
    setMaxTime(Object.keys(listTime).find(key=>listTime[key] === maxTimeValue))
    setMinTime(Object.keys(listTime).find(key=>listTime[key] === minTimeValue))

    setMaxDay(Object.keys(listDay).find(key=>listDay[key] === maxDayValue))
    setMinDay(Object.keys(listDay).find(key=>listDay[key] === minDayValue))
  },[maxTimeValue])

///////////////////////////////////////////////////////////////////////////////////






  function simpleDayData() {
    if (props.buildingData === undefined) {
      console.log("데이터가 존재하지 않습니다. ")
      
    } else {
      setMonday(props.buildingData.월요일_생활인구_수)
      setTuesday(props.buildingData.화요일_생활인구_수)
      setWednesday(props.buildingData.수요일_생활인구_수)
      setThursday(props.buildingData.목요일_생활인구_수)
      setFriday(props.buildingData.금요일_생활인구_수)
      setSaturday(props.buildingData.토요일_생활인구_수)
      setSunday(props.buildingData.일요일_생활인구_수)

    }
  }
  function simpletimeData() {
    if (props.buildingData === undefined) {
      console.log("데이터가 존재하지 않습니다.")
    } else {
      setTime1(props.buildingData.시간대_1_생활인구_수)
      setTime2(props.buildingData.시간대_2_생활인구_수)
      setTime3(props.buildingData.시간대_3_생활인구_수)
      setTime4(props.buildingData.시간대_4_생활인구_수)
      setTime5(props.buildingData.시간대_5_생활인구_수)
      setTime6(props.buildingData.시간대_6_생활인구_수)
    }
  }
  function simplePeopleData() {
    if (props.buildingData === undefined) {
      console.log("데이터가 존재하지 않습니다. ")
    } else {
      setStay(props.buildingData.행정동_총_상주인구_수)
      setLive(props.buildingData.행정동_총_생활인구_수)
      setWork(props.buildingData.행정동_총_직장인구_수)
    }
  }
  function simpleAverSale() {
    if (props.buildingData === undefined) {
      console.log("데이터가 존재하지 않습니다. ")
    } else {
      setAverageSale(props.buildingData.행정동_분기당_평균매출)

    }
  }




  /////////////////추가///////////////////////
  function simpleShop() {
    if (props.buildingData === undefined) {
      console.log("데이터가 존재하지 않습니다. ")
    } else {   
      setShop(props.buildingData.행정동_총점포수)
    }
  }
//////////////////////////////////////////////


  const shopData = {
    labels: ['개포동', '논현동', '대치동', '도곡동', '삼성동', '수서동', '신사동', '역삼동', '일원동', '청담동'],
    datasets: [
      {
        label: '',
        borderWidth: 5, // 테두리 두께
        data: [261, 1531, 1002, 273, 1039, 120, 1578, 2413, 102, 599], // 수치
        fill: true,
        backgroundColor: ['yellow', 'red', 'green', 'blue', 'white', 'black', 'green'] // 각 막대 색
      }
    ]
  }



  const dayData = {
    labels: ["월요일 생활인구 수", "화요일 생활인구 수", "수요일 생활인구 수", "목요일 생활인구 수", "금요일 생활인구 수", "토요일 생활인구 수", "일요일 생활인구 수"],
    datasets: [
      {
        label: "요일 별",
        borderWidth: 5, // 테두리 두께
        data: [monday, tuesday, wednesday, thursday, friday, saturday, sunday], // 수치
        fill: true,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
      }
    ]
  }
  const timeData = {
    labels: ["시간대1(00~06) 생활인구 수", "시간대2(06~11) 생활인구 수", "시간대3(11~14) 생활인구 수", "시간대4(14~17) 생활인구 수", "시간대5(17~21) 생활인구 수", "시간대6(21~24) 생활인구 수"],
    datasets: [
      {
        label: "시간대 별",
        borderWidth: 1, // 테두리 두께
        data: [time1, time2, time3, time4, time5, time6], // 수치
        fill: true,
        backgroundColor: ["#11b288", "#207ac7", "#207ac7", "#207ac7", "#d6d6d6", "#d6d6d6", "#d6d6d6", "#d6d6d6"] // 각 막대 색
      }
    ]
  }
  let data = [allSale, averageSale]
  let labels = ["강남구 행정동 전체 평균 매출", `${props.place} 평균 매출`]

  let customLabels = labels.map((label, index) => `${label}: ${data[index]}`)
  const chartdata = {
    labels: customLabels,
    datasets: [
      {
        label: "",
        backgroundColor: [
          "#83ce83",
          "#959595",
          "#f96a5d",
          "#00A6B4",
          "#6800B4",
        ],
        data: data,
        cutout: "0%"
      },
    ],
  };




  return (
    <div style={{ width: 1500, height: 300 }}>
      <div>
        <td>
          <tr>
            <h4 className='prac'>요일 별 생활 인구 수</h4>
            <Bar data={dayData} 
            width={300}
            height={300}
            options={{ indexAxis: 'y', responsive: false, legend: { display: true, position: "bottom" } }}></Bar><br />
          </tr>
          
          <tr>
          가장 많은 요일 : {maxDay}로 인구수는 {maxDayValue} <br/>
          가장 적은 요일 : {minDay}로 인구수는 {minDayValue}
          </tr>
        </td>
        <td>
        
      </td>
        <td>
          <tr>
            <h4 className='prac'>시간대 별 생활 인구 수</h4>
            <Bar data={timeData}
                 width={300}
                 height={300}
                options={{ responsive: false, legend: { display: true, position: "bottom" } }}></Bar><br />
          </tr>
          <tr>
            가장 많은 시간대 : {maxTime} 로 인구수는 {maxTimeValue}<br/>
            가장 적은 시간대 : {minTime} 로 인구수는 {minTimeValue}
          </tr>
          <tr>
          
          </tr>
        </td>
      

      </div><br />
      <td>
        <tr>
        <h4 className='prac'>행정동 전체와 해당 지역 매출 비율</h4>
          <Doughnut
            data={chartdata}
            options={{
              legend: { display: true, position: "right" },
              datalabels: {
                display: true,
                color: "white",
              },
              tooltips: {
                backgroundColor: "#5a6e7f",
              }
            }}></Doughnut><br />
        </tr>
        <tr>
          전체 동 매출의 평균 {allSale} <br/>
          {props.place}의 매출 {averageSale}
          
        </tr>
      </td>
      <td>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </td>
      <td>
        <tr>
          <h4 className='prac'>행정동 총 점포수</h4>
          <Bar data={shopData} 
          width={300}
          height={300}
          options={{ responsive: false, legend: { display: true, position: "bottom" } }}></Bar><br />
        </tr>
        <tr>
          가장 많은 점포수 지역은 역삼동으로 2413 <br/>
          {props.place}의 점포수는 {shop}
        </tr>
      </td>


      <p className='prac'>상주 인구 수: {stay}</p>
      <p className='prac'>직장 인구 수: {work}</p>
      <p className='prac'>생활 인구 수: {live}</p>


      {/* <Pie

        data={expData}    
        options={options}

        height={200}
        width={600}
      />
      <Doughnut
        data={data}
        options={options}
      ></Doughnut> */}
    </div>
  )
}

export default ChartData
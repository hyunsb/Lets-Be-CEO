import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import DetailLoate from './DetailLoate';
import DetailPeople from './DetailPeople';
import DetailSales from './DetailSales';

import s from "../../css/Header.module.css";

const DetailAnalyze = () => {
  const location = useLocation();
  const place = location.state.place

  const [deLocate, setDeLocate] = useState()  //상세지역 테이블 정보 담음
  const [dePeople, setDePeple] = useState()  //상세인구 테이블 정보 담음
  const [deSales, setDeSales] = useState() //상세매출 테이블 정보 담음

  const [category, setCategory] = useState()

  const [dish, setDish] = useState() //상세 지역에 요식업 정보담음 

  const [showDetailLocate, setShowDetailLocate] = useState(false) //상세 지역정보 클릭시 상세 지역정보
  const [showDetailPeople, setShowDetailPeople] = useState(false) //상세 인구정보
  const [showDetailSale, setShowDetailSale] = useState(false) //상세매출

  const [showDetailSummary, setShowDetailSummary] = useState(true) //상세정보 기본 설명란 

  function showData(e) {
    setCategory(e.target.value)
    fetch(`http://localhost:5000/api2/detailSales/${place}/${category}`)
      .then(res => res.json())
      .then(data => setDeSales(data))
  }

  useEffect(() => {
    fetch(`http://localhost:5000/api/detailLocate/${place}`)
      .then(res => res.json())
      .then(data => setDeLocate(data))
  }, [])

  useEffect(() => {
    fetch(`http://localhost:5000/api/${place}`)
      .then(res => res.json())
      .then(data => setDish(data))
  }, [])
  useEffect(() => {
    fetch(`http://localhost:5000/api/detailPeople/${place}`)
      .then(res => res.json())
      .then(data => setDePeple(data))
  }, [])
  // useEffect(()=>{
  //   fetch(`http://localhost:5000/api/detailSales/${place}`)
  //   .then(res=>res.json())
  //   .then(data=>setDeSales(data))
  // },[])


  function clickLocate() {
    setShowDetailSummary(false)
    setShowDetailPeople(false)
    setShowDetailSale(false)
    setShowDetailLocate(true)
  }

  function clickPeople() {
    setShowDetailSummary(false)
    setShowDetailLocate(false)
    setShowDetailSale(false)
    setShowDetailPeople(true)
  }
  function clickSale() {
    setShowDetailSummary(false)
    setShowDetailLocate(false)
    setShowDetailPeople(false)
    setShowDetailSale(true)
  }

  function clickSummary(){
    setShowDetailSummary(true)
    setShowDetailLocate(false)
    setShowDetailPeople(false)
    setShowDetailSale(false)

  }


  return (
    <>
      <h1>{place}</h1> <br />
      <div className={s.navbar}>
        <ul className={s.navbar__menu}>
        <li>
            <div className={s.link__menu} onClick={clickSummary}> 
              분석 설명서
            </div>
          </li>
          <li>
            <div className={s.link__menu} onClick={clickLocate}>
              상세지역
            </div>
          </li>
          <li>
            <div className={s.link__menu} onClick={clickPeople}>
              상세인구
            </div>
          </li>
          <li>
            <div className={s.link__menu} onClick={clickSale}>
              상세매출
            </div>
          </li>
        </ul>
      </div>

      {showDetailSummary ? 
      <>
        <br/><br/><br/>
        <div>
        용어 정리<br/><br/>
        ● 집객시설 : 공원, 대형 사우나, 관광지, 대형 백화점/아울렛 등 대규모의 인구유입을 유도하는 시설<br/><br/>
        ● 생활인구 : 서울시가 2018년 KT와 합동으로 인구 추계를한 인구모델로 조사시점에서 개인이 위치한 지역을 기반으로 집계한 인구데이터.<br/>
        → 해당 지역의 거주자 뿐만 아니라 등교, 출근, 병원방문 등의 이유로 조사시점에 해당지역에 있는 모든 인구를 집계한 모델이다.<br/><br/>
        ● 상주인구 : 해당 지역에 주거지를 두고 거주하는 인구를 의미한다, 상주인구는 주간에는 특정 이유로 다른 지역으로 이동해 있을 가능성이 있다.<br/><br/>
        ● 직장인구 : 해당 지역으로 출근하기 위해 유입되는 인구를 추계한 데이터를 의미한다. 직장인구는 야간에 특정 이유로 다른 지역으로 이동해 있을 가능성이 있다.<br/>
        </div>
        <br/><br/>
        <div>
          GUIDE<br/><br/>
          ※ 데이터들의 측정기준 기간은 한분기입니다.<br/>
          ※ 해당 페이지에서 동은 앞서 사용자가 앞서서 선택한 강남구 내 행정동을 의미합니다.<br/>
          ※ 해당 페이지에서 상권은 앞서 선택한 행정동 내에 존재하는 상권들입니다.<br/>
          <br/><br/>
          ● 상세지역 분석<br/><br/>
          1. 알아보고자 하는 요식업 업종을 선택한다.<br/>
          2. 분석하기 버튼을 누른다.<br/>
          3. 선택한 동의 각 상권에 분포한 집객시설 개수를 확인한다.<br/>
          4. 선택한 동의 각 상권에 분포한 해당 업종의 개수를 확인한다.<br/>
          5. 선택한 동에 존재하는 상권을 선택한다.<br/>
          6. 선택한 상권에 존재하는 아파트의 가격분포와 평균싯가를 확인한다.<br/>
          7. 선택한 상권에 존재하는 버스 정거장, 지하철 정류장 개수를 확인한다.<br/>
          <br/><br/>
          ● 상세인구 분석<br/><br/>
          1. 분석하기 버튼을 누른다.<br/>
          2. 선택한 동의 각 상권에  생활인구 정보를 확인한다.<br/>
          3. 선택한 동의 각 상권 별 평균 가구원수 정보를 확인한다.<br/>
          4. 선택한 동에 존재하는 상권을 선택하고 상권선택 버튼을 누른다.<br/>
          5. 해당 상권의 요일병, 연령별, 시간대별의 생활인구 분포정보를 확인한다.<br/>
          6. 해당 상권의 연령대별 직장인구, 상주인구 분포를 확인한다 .<br/>
          7. 성별, 연령대, 요일, 시간대를 설정하여 조건에 맞는 해당 상권의 생활 인구, 한 가구당 상주하는 인구수에 대한 정보를 확인한다.<br/>
          <br/><br/>
          ● 상세매출 분석<br/><br/>
          1. 정보를 찾고 싶은 업종을 선택한다.<br/>
          2. 분석하기 버튼을 누른다<br/>
          3. 선택한 업종에서 발생되는 각 상권별 분기당 매출 정보를 확인한다.<br/>
          4. 선택한 동에 존재하는 상권을 선택하고 상권선택 버튼을 누른다.<br/>
          5. 해당 상권에서 선택한 업종의 성별 매출 비율정보를 확인한다.<br/>
          6. 해당 상권에서 선택한 업종의 시간대별, 요일별, 연령대별 매출 분포를 확인한다.<br/>
        </div>
        <br/><br/><br/>
      </>
       : null}
      {showDetailSale ?
        <>
          <br /><br /><br /><br />
          <h1>매출 분석하기</h1>
          <div>
            업종을 선택해주세요: {'   '}
            <select onChange={showData}>
              <option>업종 선택</option>
              <option>분식전문점</option>
              <option>양식음식점</option>
              <option>일식음식점</option>
              <option>중식음식점</option>
              <option>치킨전문점</option>
              <option>패스트푸드점</option>
              <option>한식음식점</option>
              <option>호프-간이주점</option>
            </select><br />
            <DetailSales deSales={deSales} place={place} category={category}></DetailSales>
          </div>
        </>
        : null}
      {showDetailLocate ?
        <>
          <br /><br /><br /><br />
          <h1>지역 분석하기</h1>
          <div>
            업종을 선택해주세요: {'   '}
            <select onChange={showData}>
              <option>업종 선택</option>
              <option>분식전문점</option>
              <option>양식음식점</option>
              <option>일식음식점</option>
              <option>중식음식점</option>
              <option>치킨전문점</option>
              <option>패스트푸드점</option>
              <option>한식음식점</option>
              <option>호프-간이주점</option>
            </select><br />
            <DetailLoate dish={dish} place={place} category={category} deLocate={deLocate}></DetailLoate>
          </div>
        </>
        : null}
      {showDetailPeople ?
        <>
          <div>
            <br /><br /><br /><br />
            <h1>인구 분석하기</h1>
            <div>
              <DetailPeople dePeople={dePeople} place={place} category={category} ></DetailPeople>
            </div>
          </div>
        </>
        : null}
      

    </>
  )
}

export default DetailAnalyze
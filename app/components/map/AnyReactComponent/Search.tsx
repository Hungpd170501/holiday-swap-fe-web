"use client";
import { Dispatch, SetStateAction, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import styled from 'styled-components';

interface SearchProps {
    setCheckOutDate: (value: string) => void;
    setCheckInDate: (value: string) => void;
    top: any;
    left: any;
    position: any;
}
export function Search({ setCheckOutDate, setCheckInDate, top, left, position }: SearchProps) {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }
    function handleSelect(ranges: any) {
        setStartDate(ranges.selection.startDate);
        setCheckInDate(ranges.selection.startDate.toString().slice(0, 15));
        setEndDate(ranges.selection.endDate);
        setCheckOutDate(ranges.selection.endDate.toString().slice(0, 15));
    }
    return <SearchWrapper position={position} left={left} className={""}>
        <DateRangePicker className='rounded-l-xl' minDate={new Date()} ranges={[selectionRange]} onChange={handleSelect} />
    </SearchWrapper>
}
export const SearchWrapper = styled.div<{position: any, left:any, className: any}>`
  left:  ${(props: any) => (props.left)};
  width: 30vw;
  background-color: white;
  position:  ${(props: any) => (props.position)};
  top: 70px;
  box-shadow: 1px 7px 27px -3px black;
  animation: 0.8s AnimateRight 0s forwards;
  transform: translateX(-30%);
  font-size: 14px;
  border-radius: 1rem;
  z-index: 1;
`
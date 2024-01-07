'use client';

import React, { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Tag,
  message,
} from 'antd';
import { ExportOutlined } from '@ant-design/icons';

import { DateRange } from 'react-date-range';
import axios from 'axios';
import GetAvailableTimesHasCreatedByCoOwnerId from '@/app/actions/getAvailableTimesHasCreatedByCoOwnerId';
import GetTimeHasBookedByCoOwnerId from '@/app/actions/getTimeHasBookedByCoOwnerId';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
dayjs.extend(isoWeek);

interface IDate {
  checkIn: string;
  checkOut: string;
}
interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}
const compareDates = (date1: Date, date2: Date) => {
  const year1 = date1.getFullYear();
  const month1 = date1.getMonth();
  const day1 = date1.getDate();
  const year2 = date2.getFullYear();
  const month2 = date2.getMonth();
  const day2 = date2.getDate();
  const formattedDate1 = new Date(year1, month1, day1);
  const formattedDate2 = new Date(year2, month2, day2);
  return formattedDate1.toDateString() === formattedDate2.toDateString();
};
const isDateInISOWeekNumber = (date: Date, targetWeekNumbers: number[]) => {
  const isoWeekNumber = getISOWeekNumber(date);
  const rangeWeek = getStartAndEndDateOfWeekISO(isoWeekNumber - 1, date.getFullYear());
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const subtractOneDay = new Date(year, month, day);
  subtractOneDay.setDate(subtractOneDay.getDate() - 1);
  const isoWeekNumber2 = getISOWeekNumber(subtractOneDay);
  return targetWeekNumbers.includes(isoWeekNumber2) || targetWeekNumbers.includes(isoWeekNumber);
};

const getISOWeekNumber = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const tempDate = new Date(Date.UTC(year, month, day));
  const dayOfWeek = tempDate.getUTCDay() || 7;
  tempDate.setUTCDate(tempDate.getUTCDate() + 4 - dayOfWeek);
  const startOfYear: Date = new Date(Date.UTC(tempDate.getUTCFullYear(), 0, 1));
  let weekNumber = Math.ceil(((+tempDate - +startOfYear) / 86400000 + 1) / 7);
  return weekNumber;
};
const checkDateIsInBoundary = (array: IDate[], weeksTimeFrame: number[]) => {
  let arr: Date[] = [];
  array.forEach((e) => {
    let checkIn = new Date(e.checkIn);
    let checkOut = new Date(e.checkOut);
    checkIn.setHours(0, 0, 0, 0);
    checkOut.setHours(0, 0, 0, 0);
    const startDateWeek = getStartAndEndDateOfWeekISO(
      getISOWeekNumber(checkIn),
      checkIn.getFullYear()
    ).startDate;
    startDateWeek.setHours(0, 0, 0, 0);
    const endDateWeek = getStartAndEndDateOfWeekISO(
      getISOWeekNumber(checkIn),
      checkIn.getFullYear()
    ).endDate;
    endDateWeek.setHours(0, 0, 0, 0);
    if (
      !weeksTimeFrame.includes(getISOWeekNumber(checkIn) + 1) &&
      !weeksTimeFrame.includes(getISOWeekNumber(checkIn) - 1)
    ) {
      if (checkIn.toDateString() == startDateWeek.toDateString()) arr.push(checkIn);

      if (endDateWeek.toDateString() == checkOut.toDateString()) arr.push(checkOut);
    }
  });
  return arr;
};
// const dateIsConsecutive = (array: IDate[]) => {
//   array?.forEach((element) => {
//     let checkIn = new Date(element.checkIn);
//     let checkOut = new Date(element.checkOut);
//     for (let index = 1; index < array.length; index++) {
//       const nextCheckIn = new Date(array[index].checkIn);
//       const nextCheckOut = new Date(array[index].checkOut);
//       if (checkOut.getTime() == nextCheckIn.getTime()) {
//         element.checkOut = nextCheckOut.toString();
//       }
//     }
//   });
// };

const func4 = (ranges: any, array: IDate[], weeksTimeFrame: number[]) => {
  const { selection } = ranges;
  const startDate = selection.startDate;

  const endDate = selection.endDate;
  let result: Date[] = [];
  array.forEach((element) => {
    let checkIn = new Date(element.checkIn);
    checkIn.setHours(0, 0, 0, 0);
    let checkOut = new Date(element.checkOut);
    checkOut.setHours(0, 0, 0, 0);

    if (startDate.getTime() <= checkIn.getTime()) {
      result.push(checkOut);
    } else if (startDate.getTime() >= checkIn.getTime()) {
      result.push(checkIn);
    }
  });
  let x: Date[] = dateDiffIsGreaterTwo(array);

  x.forEach((e) => {
    result.push(new Date(e));
  });

  let b = checkDateIsInBoundary(array, weeksTimeFrame);

  b.forEach((e) => {
    result.push(new Date(e));
  });

  return result;
};

const dateDiffIsGreaterTwo = (array: IDate[]) => {
  let arr: Date[] = [];
  array.forEach((element) => {
    let checkIn = new Date(element.checkIn);
    let checkOut = new Date(element.checkOut);
    const timeDifference = checkOut.getTime() - checkIn.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);

    if (daysDifference > 1) {
      let theDateStart = checkIn;
      theDateStart = new Date(theDateStart.getTime() + 24 * 60 * 60 * 1000);
      while (theDateStart.getTime() < checkOut.getTime()) {
        arr.push(theDateStart);
        theDateStart = new Date(theDateStart.getTime() + 24 * 60 * 60 * 1000);
      }
    }
  });
  return arr;
};
function getStartAndEndDateOfWeekISO(week: number, year: number) {
  const startDate = dayjs().year(year).isoWeek(week).startOf('isoWeek').startOf('day');
  const endDate = dayjs().year(year).isoWeek(week).endOf('isoWeek').startOf('day').add(1, 'days');
  return {
    startDate: startDate.toDate(),
    endDate: endDate.toDate(),
  };
}
function getWeekNumbers(startDate: Date, endDate: Date) {
  let weekNumbers = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    let weekNumber = getISOWeekNumber(currentDate);
    weekNumbers.push(weekNumber);
    currentDate.setDate(currentDate.getDate() + 7); // Move to the next week
  }

  return weekNumbers;
}
const ModalCoOwnerCalendar = (props: any) => {
  const initialDate = {
    startDate:
      new Date(props.coOwner.startTime) > new Date()
        ? new Date(props.coOwner.startTime)
        : new Date(),
    endDate:
      new Date(props.coOwner.startTime) > new Date()
        ? new Date(props.coOwner.startTime)
        : new Date(),
    key: 'selection',
  };
  const [coOwnerId, setCoOwnerId] = useState<number>(props.coOwnerId);
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [pricePerNight, setPricePerNight] = useState<string>();
  const [timesHasCreated, setTimesHasCreated] = useState<IDate[]>([]);
  const [timesHasBooked, setTimesHasBooked] = useState<IDate[]>([]);
  const [timesDisable, setTimesDisable] = useState<any>([]);
  const [timesDisableOnClick, setTimesDisableOnClick] = useState<Date[]>([]);
  const [weeksTimeFrame, setWeeksTimeFrame] = useState<number[]>([]);
  const [open, setOpen] = useState(false);
  const [dateRange, setDateRange] = useState(initialDate);
  const [yearSelectBox, setYearSelectBox] = useState(new Date().getFullYear());
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const createAvailableTime = () => {
    let body = JSON.stringify({
      startTime: startTime,
      endTime: endTime,
      pricePerNight: pricePerNight,
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://holiday-swap.click/api/v1/available-times/${coOwnerId}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
    };
    axios
      .request(config)
      .then((response) => {
        props.fetchAvailableTimeByCoOwnerId();
        setOpen(false);
        message.success('Create success!.');
      })
      .catch((error) => {
        message.error(error.response.data.message);
      });
  };

  const handleDateChange = (value: any) => {
    const rs = func4(value, timesDisable, weeksTimeFrame);

    setTimesDisableOnClick(rs);
    setDateRange(value.selection);
  };
  useEffect(() => {
    const offset = new Date().getTimezoneOffset();
    var startDate = new Date(dateRange.startDate.getTime() - offset * 60 * 1000);
    var endDate = new Date(dateRange.endDate.getTime() - offset * 60 * 1000);
    setStartTime(startDate.toISOString().split('T')[0]);
    setEndTime(endDate.toISOString().split('T')[0]);
  }, [dateRange]);
  const fetchTimesDisable = async () => {
    const avCreated = await GetAvailableTimesHasCreatedByCoOwnerId({
      coOwnerId: coOwnerId,
    });
    const rs = avCreated?.map((element: any) => {
      const startDate = new Date(element.startTime);
      const endDate = new Date(element.endTime);
      const obj = { checkIn: startDate, checkOut: endDate };
      return obj;
    });
    const timesHasBooked = await GetTimeHasBookedByCoOwnerId({
      coOwnerId: coOwnerId,
    });
    const rs2 = timesHasBooked?.map((element: any) => {
      const startDate = new Date(element.checkIn);
      const endDate = new Date(element.checkOut);
      const obj = { checkIn: startDate, checkOut: endDate };
      return obj;
    });
    const rs3 = rs?.concat(rs2);
    setTimesDisable(rs3);
  };
  const fetchWeeks = () => {
    let weeks: number[] = [];
    props.coOwner.timeFrames.forEach((element: any) => {
      weeks.push(element.weekNumber);
    });
    weeks.sort(function (a, b) {
      return a - b;
    });
    setWeeksTimeFrame(weeks);
  };
  useEffect(() => {
    fetchTimesDisable();
    fetchWeeks();
    getTheListSelectWeek(yearSelectBox);
  }, [open]);

  function getTheListSelectWeek(year: number) {
    const arr = weeksTimeFrame.map((e: any, i: number) => {
      let disable = false;
      let arrDisable: number[] = [];
      timesDisable.map((e: any, i: number) => {
        const checkIn = new Date(e.checkIn);
        const checkOut = new Date(e.checkOut);

        if (checkIn.getFullYear() === year || checkOut.getFullYear() === year) {
          const x: any = getWeekNumbers(checkIn, checkOut);
          arrDisable = [...arrDisable, ...x];
        }
      });

      disable = arrDisable.includes(e);
      let week = {
        label: e < 10 ? `${e}` : `${e}`,
        value: String(e),
        disabled: disable,
      };

      return week;
    });
    setPlainOptions(arr);
  }
  const [plainOptions, setPlainOptions] = useState<Option[]>([]);
  const defaultCheckedList: CheckboxValueType[] = [];
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);

  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;

  const onChange = (list: CheckboxValueType[]) => {
    function getAdjacentNumbers(input: number, nums: number[]) {
      const result = [input];
      const inputId = nums.findIndex((e) => e == input);

      if (inputId === -1) return [input];
      // left side

      for (let index = inputId; index > 0; index--) {
        let element = nums[inputId];
        if (element - 1 == nums[index - 1]) {
          result.push(nums[index - 1]);
          element = nums[index - 1];
        }
      }
      //right side
      if (inputId == nums.length - 1 && nums[nums.length - 1] == 52) result.push(1);
      for (let index = inputId; index < nums.length - 1; index++) {
        let element = nums[inputId];
        if (element + 1 == nums[index + 1]) {
          result.push(nums[index + 1]);
          element = nums[index + 1];
        }
      }
      result.sort((a, b) => {
        return a - b;
      });
      return result ? result : [input];
    }

    const theNewWeekInput: number = Number(list.filter((x) => !checkedList.includes(x))[0]);
    const arrPre: CheckboxValueType[] = list.filter((x) => x != theNewWeekInput);
    let checkAdjacent: boolean = false;

    arrPre.forEach((e: CheckboxValueType) => {
      if (!checkAdjacent) {
        checkAdjacent = getAdjacentNumbers(theNewWeekInput, weeksTimeFrame).includes(Number(e));
      }
    });
    if (!checkAdjacent && list.length > checkedList.length) {
      list = [String(theNewWeekInput)];
      setCheckedList(list);
    } else setCheckedList(list);

    list.sort((a, b) => Number(a) - Number(b));
    if (theNewWeekInput) {
      const min: number = list[0] as number;
      const max: number = list[list.length - 1] as number;

      const dateWeek = {
        startDate:
          getStartAndEndDateOfWeekISO(min, yearSelectBox).startDate < new Date()
            ? new Date()
            : getStartAndEndDateOfWeekISO(min, yearSelectBox).startDate,
        endDate: getStartAndEndDateOfWeekISO(max, yearSelectBox).endDate,
        key: 'selection',
      };
      setDateRange(dateWeek);
    }
  };
  useEffect(() => {
    getTheListSelectWeek(yearSelectBox);
    setCheckedList([]);
  }, [yearSelectBox]);
  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions.map((op) => op.value) : []);
  };

  return (
    <>
      <Space>
        <Button type="link" onClick={showModal} icon={<ExportOutlined />}>
          Create new public time
        </Button>
      </Space>
      <Modal
        open={open}
        title="Create new public time"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        width={1000}
      >
        <div className=" justify-center">
          <div className="flex w-full">
            <div className="pt-2 pl-2 pr-4 w-[300px]">
              <div>
                <DatePicker
                  allowClear={false}
                  onChange={(value: any, dateString: string) => {
                    setYearSelectBox(Number(dateString));
                  }}
                  picker="year"
                  className="rounded h-[35px] w-full"
                  defaultValue={dayjs()}
                  disabledDate={(date: any) => {
                    let start;
                    let end;
                    new Date(props.coOwner.startTime) > new Date()
                      ? (start = new Date(props.coOwner.startTime))
                      : (start = new Date());
                    props.coOwner.endTime ? (end = new Date(props.coOwner.endTime)) : (end = null);
                    return end ? date <= start || date >= end : date <= start;
                  }}
                />
                {/* <Checkbox
                  className="my-2"
                  indeterminate={indeterminate}
                  onChange={onCheckAllChange}
                  checked={checkAll}
                >
                  Select all
                </Checkbox> */}
              </div>

              <div>
                <Checkbox.Group className="w-full" onChange={onChange} value={checkedList}>
                  <Row>
                    {plainOptions.map((e, i) => {
                      return (
                        <Col span={6} key={i}>
                          <Checkbox className="" value={e.value} disabled={e.disabled}>
                            {e.label}
                          </Checkbox>
                        </Col>
                      );
                    })}
                  </Row>
                </Checkbox.Group>
              </div>
            </div>
            <div className="w-full">
              <DateRange
                dateDisplayFormat="yyyy-MM-dd"
                disabledDates={timesDisableOnClick}
                rangeColors={['#5C98F2']}
                ranges={[dateRange]}
                date={new Date()}
                onChange={(value: any) => {
                  handleDateChange(value);
                }}
                maxDate={
                  props.coOwner.endTime
                    ? new Date(new Date(props.coOwner.endTime).getFullYear(), 10, 31)
                    : new Date(new Date().getFullYear() + 50, 10, 31)
                }
                minDate={
                  new Date(props.coOwner.startTime) > new Date()
                    ? new Date(props.coOwner.startTime)
                    : new Date()
                }
                disabledDay={(date) => {
                  date.setHours(0, 0, 0, 0);
                  let disableDays = true;
                  disableDays = !isDateInISOWeekNumber(date, weeksTimeFrame);
                  return disableDays;
                }}
                weekStartsOn={1}
                weekdayDisplayFormat={'EEEEEE'}
                months={3}
                direction="horizontal"
                className="2px w-full"
              />
            </div>
          </div>
          <div className=" justify-center">
            <div className="flex w-full">
              <div className="pt-2 pl-2 pr-4 w-[300px]">
                <>Input price per night</>
              </div>
              <div className="w-full">
                <Input
                  placeholder="Input price per night"
                  className="rounded-md"
                  type="number"
                  value={pricePerNight}
                  min={1}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (Number(e.target.value) < 1) {
                      setPricePerNight;
                    } else {
                      setPricePerNight(e.target.value);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-3">
            <button
              className="border rounded-lg border-curent h-10 text-white bg-common hover:bg-sky-500 justify-self-center w-full"
              type="button"
              onClick={() => createAvailableTime()}
            >
              Create
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalCoOwnerCalendar;

"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ContactDetailSidebar from "./ContactDetailSidebar";
import { MdOutlineStickyNote2 } from "react-icons/md";

const steps = ["Select Tour", "Contact Details", "Payment", "Complete"];

export default function DetailBookingStep() {
  const [activeStep, setActiveStep] = React.useState(1);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}></Typography>
          {/* Thêm mã HTML tùy thuộc vào bước hiện tại */}
          {activeStep === 1 && (
            <div className="flex flex-row gap-20">
              <div className="h-auto w-[780px]">
                <div className="pt-20 pb-10 text-[20px] font-bold">
                  Traveller Details
                </div>
                <div className="flex flex-row w-full justify-between mb-14">
                  <div>Traveller 1</div>
                  <div className="flex flex-col">
                    <div className="flex flex-row w-full gap-6 pb-3 ">
                      <div>
                        <select className="py-4 px-4" name="" id="">
                          <option value="">Mr</option>
                          <option value="">Mrs</option>
                          <option value="">Ms</option>
                          <option value="">Miss</option>
                          <option value="">Master</option>
                        </select>
                      </div>
                      <div>
                        <input
                          className="px-4 py-4 border border-gray-500"
                          type="text"
                          placeholder="First Name"
                        />
                      </div>
                      <div>
                        <input
                          className="px-4 py-4 border border-gray-500"
                          type="text"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-6 ">
                      <select className="w-full py-4 px-4 " name="" id="">
                        <option value="">Age</option>
                        <option value="">12-15</option>
                        <option value="">15-20</option>
                        <option value="">20+</option>
                      </select>
                      <input
                        className="px-4 py-4 border w-full border-gray-500"
                        type="text"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row w-full justify-between mb-14">
                  <div>Traveller 2</div>
                  <div className="flex flex-col">
                    <div className="flex flex-row w-full gap-6 pb-3 ">
                      <div>
                        <select className="py-4 px-4" name="" id="">
                          <option value="">Mr</option>
                          <option value="">Mrs</option>
                          <option value="">Ms</option>
                          <option value="">Miss</option>
                          <option value="">Master</option>
                        </select>
                      </div>
                      <div>
                        <input
                          className="px-4 py-4 border border-gray-500"
                          type="text"
                          placeholder="First Name"
                        />
                      </div>
                      <div>
                        <input
                          className="px-4 py-4 border border-gray-500"
                          type="text"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-6 ">
                      <select className="w-full  py-4 px-4 " name="" id="">
                        <option value="">Age</option>
                        <option value="">12-15</option>
                        <option value="">15-20</option>
                        <option value="">20+</option>
                      </select>
                      <input
                        className="px-4 py-4 border w-full border-gray-500"
                        type="text"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row w-full justify-between mb-14">
                  <div>Traveller 3</div>
                  <div className="flex flex-col">
                    <div className="flex flex-row w-full gap-6 pb-3 ">
                      <div>
                        <select className="py-4 px-4" name="" id="">
                          <option value="">Mr</option>
                          <option value="">Mrs</option>
                          <option value="">Ms</option>
                          <option value="">Miss</option>
                          <option value="">Master</option>
                        </select>
                      </div>
                      <div>
                        <input
                          className="px-4 py-4 border border-gray-500"
                          type="text"
                          placeholder="First Name"
                        />
                      </div>
                      <div>
                        <input
                          className="px-4 py-4 border border-gray-500"
                          type="text"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-6 ">
                      <select className="w-full  py-4 px-4 " name="" id="">
                        <option value="">Age</option>
                        <option value="">12-15</option>
                        <option value="">15-20</option>
                        <option value="">20+</option>
                      </select>
                      <input
                        className="px-4 py-4 border w-full border-gray-500"
                        type="text"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row w-full justify-between mb-14">
                  <div>Traveller 4</div>
                  <div className="flex flex-col">
                    <div className="flex flex-row w-full gap-6 pb-3 ">
                      <div>
                        <select className="py-4 px-4" name="" id="">
                          <option value="">Mr</option>
                          <option value="">Mrs</option>
                          <option value="">Ms</option>
                          <option value="">Miss</option>
                          <option value="">Master</option>
                        </select>
                      </div>
                      <div>
                        <input
                          className="px-4 py-4 border border-gray-500"
                          type="text"
                          placeholder="First Name"
                        />
                      </div>
                      <div>
                        <input
                          className="px-4 py-4 border border-gray-500"
                          type="text"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-6 ">
                      <select className="w-full  py-4 px-4 " name="" id="">
                        <option value="">Age</option>
                        <option value="">12-15</option>
                        <option value="">15-20</option>
                        <option value="">20+</option>
                      </select>
                      <input
                        className="px-4 py-4 border w-full border-gray-500"
                        type="text"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-gray-400"></div>
                <div className="w-[650px] h-auto">
                  <div className="text-[20px] font-bold my-10">
                    Contact Details
                  </div>
                  <div className="flex flex-row items-center w-full justify-between mb-10">
                    <div className="mr-4">First Name*</div>
                    <input
                      className="w-[500px] py-4 border border-gray-400"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-row items-center w-full justify-between mb-10">
                    <div className="mr-4">Last Name*</div>
                    <input
                      className="w-[500px] py-4 border border-gray-400"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-row items-center w-full justify-between mb-10">
                    <div className="mr-4">Email*</div>
                    <input
                      className="w-[500px] py-4 border border-gray-400"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-row items-center w-full justify-between mb-10">
                    <div className="mr-4">Phone*</div>
                    <input
                      className="w-[500px] py-4 border border-gray-400"
                      type="text"
                    />
                  </div>
                </div>
                <div className="w-full h-[1px] bg-gray-400"></div>
                <div>
                  <div className="flex flex-row items-center mt-10 mb-5">
                    <MdOutlineStickyNote2 size={25} />
                    <div className="text-[20px] font-bold">Note</div>
                  </div>
                  <div className="flex flex-row">
                    <div className="mr-4">Additional Notes</div>
                    <div className="flex flex-col">
                      <textarea
                        className="border border-gray-400 w-[500px] h-[129px]"
                        name=""
                        id=""
                      ></textarea>
                      <Button
                        onClick={handleNext}
                        className="bg-blue-500 text-white hover:bg-blue-500 mt-10 w-[130px] h-[50px]"
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ContactDetailSidebar />
              </div>
            </div>
          )}
          {activeStep === 2 && (
            <div className="h-auto w-[780px]">
              <div className="flex flex-row gap-20 justify-between">
                <div className="bg-white shadow-2xl h-auto w-full px-20  mt-20 rounded-xl">
                  <div className="flex w-full justify-between items-center">
                    <div>
                      <div className="text-[20px] font-bold py-10">
                        Contact Details
                      </div>
                      <div className="flex flex-row mb-2 ">
                        First Name: <span className="ml-[25px]"> Thuc</span>
                      </div>
                      <div className="flex flex-row mb-3">
                        Last Name: <span className="ml-[25px]">Bui</span>
                      </div>
                      <div className="flex flex-row mb-3">
                        Email:{" "}
                        <span className="ml-[66px]">
                          toilikeyou23@Gmail.com
                        </span>
                      </div>
                      <div className="flex flex-row mb-3">
                        Phone: <span className="ml-[60px]">0953876092</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-[20px] font-bold py-10">
                        Billing Details
                      </div>
                      <div className="flex flex-row mb-2 ">
                        First Name: <span className="ml-[25px]"> Thuc</span>
                      </div>
                      <div className="flex flex-row mb-3">
                        Last Name: <span className="ml-[25px]">Bui</span>
                      </div>
                      <div className="flex flex-row mb-3">
                        Email:{" "}
                        <span className="ml-[66px]">
                          toilikeyou23@Gmail.com
                        </span>
                      </div>
                      <div className="flex flex-row mb-3">
                        Phone: <span className="ml-[60px]">0953876092</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center">
                      <MdOutlineStickyNote2 size={25} />
                      <div className="text-[20px] font-bold pt-8 pb-4">
                        Note
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div>Additional Notes:</div>
                      <div className="ml-6 w-[400px]">
                        Marriott's Aruba Surf Club sits beachfront on the
                        Caribbean with an outdoor swimming pool, lazy river and
                        health club
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[20px] font-bold py-10">
                      Traveller Detail
                    </div>
                    <div className="flex flex-row mb-8 pb-8 w-[250px] justify-between">
                      <div>Traveller 1:</div>
                      <div>
                        <div className="mb-1 ">
                          Mr <span>Bùi Thức</span>
                        </div>
                        <div className="mb-1 ">
                          Age <span>18</span>
                        </div>
                        <div>
                          Phone <span>0856597778</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row mb-8 pb-8 w-[250px] justify-between">
                      <div>Traveller 2:</div>
                      <div>
                        <div className="mb-1">
                          Mr <span>Bùi Đức Thịnh</span>
                        </div>
                        <div className="mb-1">
                          Age <span>12</span>
                        </div>
                        <div>
                          Phone <span>0856597778</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row mb-8 pb-8 w-[250px] justify-between">
                      <div>Traveller 3:</div>
                      <div>
                        <div className="mb-1">
                          Mr <span>Bùi Thưởng</span>
                        </div>
                        <div className="mb-1">
                          Age <span>49</span>
                        </div>
                        <div>
                          Phone <span>0856597778</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row mb-8 pb-10 w-[250px] justify-between">
                      <div>Traveller 1:</div>
                      <div>
                        <div className="mb-1">
                          Ms <span>Bùi Lụa</span>
                        </div>
                        <div className="mb-1">
                          Age <span>41</span>
                        </div>
                        <div>
                          Phone <span>0856597778</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <ContactDetailSidebar />
                </div>
              </div>
              <Button
                onClick={handleNext}
                className="bg-blue-500 text-white hover:bg-blue-500 mt-10 w-[150px] h-[50px]"
              >
                {activeStep === steps.length - 1 ? "Finish" : "PayNow"}
              </Button>
            </div>
          )}
          {activeStep === 3 && (
            <div className="w-full flex flex-row justify-center">
              <div className="flex flex-col  justify-center items-center bg-gray-300 w-[800px] h-auto">
                <ContactDetailSidebar />
                <div className="text-red-300 py-3">Your Point (1000 point)</div>
                <button className="bg-blue-500 text-white hover:bg-blue-500 w-[150px] h-[50px] mb-10 rounded-md">
                  Pay(327 Point)
                </button>
              </div>
            </div>
          )}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            {/* <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button> */}
            <Box sx={{ flex: "1 1 auto" }} />
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

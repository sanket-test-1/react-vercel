import React from "react";

import {
  Column,
  Row,
  Image,
  Text,
  Line,
  Button,
  Stack,
  List,
  Grid,
  Input,
} from "components";

const LatestEventPage = () => {
  return (
    <>
      <Column
        className="bg-white_A700 font-cairo mx-[auto] w-[100%]"
        compId="25:1200"
        comWidth={1920}
        comHeight={5967}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="w-[100%]"
          compId="580"
          comWidth={1920}
          comHeight={5968}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Column
            className="w-[100%]"
            compId="630"
            comWidth={1920}
            comHeight={5385}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <header
              className="w-[100%]"
              compId="41"
              comWidth={1920}
              comHeight={191}
              compLeft={0}
              compRight={0}
              compType="AppBar"
            >
              <Column
                className="w-[100%]"
                compId="25:1594"
                comWidth={1920}
                comHeight={191}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="bg-bluegray_800 w-[100%]"
                  compId="521"
                  comWidth={1920}
                  comHeight={61}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-start justify-start 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]"
                    compId="520"
                    comWidth={1920}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_telephonecall.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="25:1628"
                      comWidth={24}
                      comHeight={24}
                      compLeft={150}
                      compRight={0}
                      compType="Image"
                      alt="telephonecall"
                    />
                    <Text
                      className="cursor-pointer hover:font-bold font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[21px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_50 text-left w-[auto]"
                      compId="25:1627"
                      comWidth={97}
                      comHeight={30}
                      compLeft={21}
                      compRight={0}
                      compType="Text"
                    >{`+12 345 6789`}</Text>
                    <Image
                      src={"images/img_inbox21_3.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="25:1634"
                      comWidth={24}
                      comHeight={24}
                      compLeft={56}
                      compRight={0}
                      compType="Image"
                      alt="inbox21"
                    />
                    <Text
                      className="cursor-pointer hover:font-bold font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[21px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_50 text-left w-[auto]"
                      compId="25:1633"
                      comWidth={142}
                      comHeight={30}
                      compLeft={21}
                      compRight={0}
                      compType="Text"
                    >{`support@elmna.com`}</Text>
                    <Row
                      className="items-center justify-center lg:ml-[539px] xl:ml-[617px] 2xl:ml-[694px] 3xl:ml-[832px] ml-[925px] w-[10%]"
                      compId="683"
                      comWidth={194}
                      comHeight={30}
                      compLeft={925}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="cursor-pointer hover:font-bold font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_50 text-left w-[auto]"
                        compId="25:1625"
                        comWidth={79}
                        comHeight={30}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Help Center`}</Text>
                      <Text
                        className="cursor-pointer hover:font-bold font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_50 text-left w-[auto]"
                        compId="25:1637"
                        comWidth={31}
                        comHeight={30}
                        compLeft={20}
                        compRight={0}
                        compType="Text"
                      >{`Blog`}</Text>
                      <Text
                        className="cursor-pointer hover:font-bold font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_50 text-left w-[auto]"
                        compId="25:1638"
                        comWidth={44}
                        comHeight={30}
                        compLeft={20}
                        compRight={0}
                        compType="Text"
                      >{`Career`}</Text>
                    </Row>
                    <Text
                      className="cursor-pointer hover:font-bold font-bold lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] ml-[68px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_50 text-left w-[auto]"
                      compId="25:1639"
                      comWidth={20}
                      comHeight={30}
                      compLeft={68}
                      compRight={0}
                      compType="Text"
                    >{`EN`}</Text>
                    <Image
                      src={"images/img_chevron1_2.svg"}
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] 3xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      compId="25:1640"
                      comWidth={16}
                      comHeight={16}
                      compLeft={12}
                      compRight={0}
                      compType="Image"
                      alt="chevron1"
                    />
                  </Row>
                  <Line
                    className="bg-bluegray_600 h-[1px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[100%]"
                    compId="25:1642"
                    comWidth={1920}
                    comHeight={1}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                </Column>
                <Column
                  className="bg-bluegray_700 w-[100%]"
                  compId="524"
                  comWidth={1920}
                  comHeight={130}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-start lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] w-[100%]"
                    compId="523"
                    comWidth={1920}
                    comHeight={72}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_logo_3.svg"}
                      className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] h-[72px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] object-contain w-[10%]"
                      compId="25:1615"
                      comWidth={198}
                      comHeight={72}
                      compLeft={150}
                      compRight={0}
                      compType="Image"
                      alt="logo"
                    />
                    <Row
                      className="items-center justify-center 3xl:ml-[105px] ml-[117px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[87px] lg:my-[11px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] my-[19px] w-[32%]"
                      compId="684"
                      comWidth={610}
                      comHeight={34}
                      compLeft={117}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_50 text-left w-[auto]"
                        compId="25:1608"
                        comWidth={47}
                        comHeight={34}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`About`}</Text>
                      <Row
                        className="items-center justify-center lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[49px] w-[27%]"
                        compId="25:1609"
                        comWidth={165}
                        comHeight={34}
                        compLeft={49}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_50 text-left w-[auto]"
                          compId="25:1610"
                          comWidth={141}
                          comHeight={34}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Program & Events`}</Text>
                        <Image
                          src={"images/img_chevron1_2.svg"}
                          className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                          compId="25:1611"
                          comWidth={16}
                          comHeight={16}
                          compLeft={8}
                          compRight={0}
                          compType="Image"
                          alt="chevron1"
                        />
                      </Row>
                      <Text
                        className="font-bold lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_50 text-left w-[auto]"
                        compId="25:1614"
                        comWidth={101}
                        comHeight={34}
                        compLeft={50}
                        compRight={0}
                        compType="Text"
                      >{`Alumni Story`}</Text>
                      <Text
                        className="font-bold lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_50 text-left w-[auto]"
                        compId="25:1613"
                        comWidth={150}
                        comHeight={34}
                        compLeft={48}
                        compRight={0}
                        compType="Text"
                      >{`Career Oppurtunity`}</Text>
                    </Row>
                    <Image
                      src={"images/img_search91_1.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[159px] xl:ml-[182px] 2xl:ml-[204px] 3xl:ml-[245px] ml-[273px] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="25:1605"
                      comWidth={24}
                      comHeight={24}
                      compLeft={273}
                      compRight={0}
                      compType="Image"
                      alt="search91"
                    />
                    <Button
                      className="border border-gray_300_33 border-solid font-bold lg:ml-[22px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] ml-[39px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] 2xl:py-[10px] 3xl:py-[13px] py-[14.545px] lg:py-[8px] xl:py-[9px] rounded-radius58 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_50 text-center w-[9%]"
                      compId="25:1601"
                      comWidth={178}
                      comHeight={60}
                      compLeft={39}
                      compRight={0}
                      compType="Button"
                    >{`Sign In`}</Button>
                    <Button
                      className="bg-gray_300_33 font-bold lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] ml-[18px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] 2xl:py-[10px] 3xl:py-[13px] py-[14.545px] lg:py-[8px] xl:py-[9px] rounded-radius58 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_300 w-[8%]"
                      compId="25:1598"
                      comWidth={163}
                      comHeight={60}
                      compLeft={18}
                      compRight={0}
                      compType="Button"
                    >{`Join Now`}</Button>
                  </Row>
                  <Line
                    className="bg-bluegray_600 h-[1px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[100%]"
                    compId="25:1597"
                    comWidth={1920}
                    comHeight={1}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                </Column>
              </Column>
            </header>
            <Column
              className="font-lora w-[100%]"
              compId="25:1283"
              comWidth={1920}
              comHeight={5195}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Stack
                className="lg:h-[286px] xl:h-[327px] 2xl:h-[368px] 3xl:h-[442px] h-[490.07996px] w-[100%]"
                compId="632"
                comWidth={1920}
                comHeight={490.07996}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_background_11.svg"}
                  className="absolute lg:h-[286px] xl:h-[327px] 2xl:h-[368px] 3xl:h-[442px] h-[490.08px] inset-[0] object-cover w-[100%]"
                  compId="36:359"
                  comWidth={1920}
                  comHeight={490.08}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="background"
                />
                <Column
                  className="absolute bottom-[19%] inset-x-[0] items-center justify-start mx-[auto] w-[34%]"
                  compId="36:377"
                  comWidth={658}
                  comHeight={150.5}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold font-lora mx-[auto] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-center text-white_A700 w-[auto]"
                    compId="36:378"
                    comWidth={658}
                    comHeight={77.18}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Latest Event`}</Text>
                  <Text
                    className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] mb-[1px] lg:ml-[37px] 2xl:ml-[48px] 3xl:ml-[57px] ml-[64px] lg:mr-[36px] 2xl:mr-[47px] 3xl:mr-[56px] mr-[63px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19.29px] xl:mx-[42px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-center text-white_A700 w-[81%]"
                    compId="36:379"
                    comWidth={531}
                    comHeight={54.02}
                    compLeft={64}
                    compRight={63}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                </Column>
              </Stack>
              <Column
                className="bg-bluegray_602 items-center justify-start mt-[0] w-[100%]"
                compId="538"
                comWidth={1920}
                comHeight={262.4}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Line
                  className="bg-bluegray_600 h-[0.96px] w-[100%]"
                  compId="36:380"
                  comWidth={1920}
                  comHeight={0.96}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <List
                  className="lg:gap-[31px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] gap-[53.50px] grid grid-cols-[repeat(2,_1fr_1px)_1fr] lg:mb-[40px] xl:mb-[46px] 2xl:mb-[52px] 3xl:mb-[62px] mb-[69.46px] min-h-[auto] lg:mt-[37px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] mt-[64.64px] mx-[auto] w-[84%]"
                  compId="682"
                  comWidth={1620}
                  comHeight={127.34003}
                  compLeft={150}
                  compRight={150}
                  compType="List"
                  orientation="horizontal"
                >
                  <Row
                    className="items-start justify-between w-[100%]"
                    compId="527"
                    comWidth={496}
                    comHeight={127.34}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="items-center justify-start lg:mb-[18px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] mb-[30.87px] w-[14%]"
                      compId="633"
                      comWidth={71}
                      comHeight={96.47}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold font-lora mx-[auto] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-center text-gray_300 w-[auto]"
                        compId="25:1521"
                        comWidth={65}
                        comHeight={74.28}
                        compLeft={3}
                        compRight={3}
                        compType="Text"
                      >{`24`}</Text>
                      <Text
                        className="font-cairo font-semibold mx-[auto] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-center text-gray_300 w-[auto]"
                        compId="25:1522"
                        comWidth={71}
                        comHeight={27.01}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`November`}</Text>
                    </Column>
                    <Column
                      className="items-start justify-start w-[80%]"
                      compId="526"
                      comWidth={399}
                      comHeight={127.34003}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-cairo font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-left text-yellow_600 w-[auto]"
                        compId="25:1524"
                        comWidth={179}
                        comHeight={27.01}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`08:00 AM - 04:30 PM`}</Text>
                      <Text
                        className="font-lora font-medium mt-[10.61px] lg:mt-[6px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                        compId="25:1523"
                        comWidth={399}
                        comHeight={29.91}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Weekend holiday with Elmna Club’s`}</Text>
                      <Text
                        className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5.79px] 3xl:mt-[5px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[89%]"
                        compId="25:1525"
                        comWidth={355}
                        comHeight={54.02}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...`}</Text>
                    </Column>
                  </Row>
                  <Line
                    className="self-center w-[1px] h-[160.14px] bg-gray_300_59 lg:h-[94px] xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px]"
                    compId="25:1533"
                    comWidth={1}
                    comHeight={160.14}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Row
                    className="items-start justify-center w-[100%]"
                    compId="530"
                    comWidth={453}
                    comHeight={127.34}
                    compLeft={107}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="items-center justify-start lg:mb-[18px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] mb-[30.87px] w-[16%]"
                      compId="634"
                      comWidth={71}
                      comHeight={96.47}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold font-lora mx-[auto] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-center text-gray_300 w-[auto]"
                        compId="25:1528"
                        comWidth={67}
                        comHeight={74.28}
                        compLeft={2}
                        compRight={2}
                        compType="Text"
                      >{`28`}</Text>
                      <Text
                        className="font-cairo font-semibold mx-[auto] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-center text-gray_300 w-[auto]"
                        compId="25:1529"
                        comWidth={71}
                        comHeight={27.01}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`November`}</Text>
                    </Column>
                    <Column
                      className="items-start justify-start lg:ml-[15px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] ml-[27px] w-[78%]"
                      compId="529"
                      comWidth={355}
                      comHeight={127.34003}
                      compLeft={27}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-cairo font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-left text-yellow_600 w-[auto]"
                        compId="25:1531"
                        comWidth={179}
                        comHeight={27.01}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`08:00 AM - 04:30 PM`}</Text>
                      <Text
                        className="font-lora font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10.61px] lg:mt-[6px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                        compId="25:1530"
                        comWidth={332}
                        comHeight={29.91}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Club Sponsorships 2020-2021`}</Text>
                      <Text
                        className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5.79px] 3xl:mt-[5px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[100%]"
                        compId="25:1532"
                        comWidth={355}
                        comHeight={54.02}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...`}</Text>
                    </Column>
                  </Row>
                  <Line
                    className="self-center w-[1px] h-[160.14px] bg-gray_300_59 lg:h-[94px] xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px]"
                    compId="25:1533"
                    comWidth={1}
                    comHeight={160.14}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Column
                    className="w-[100%]"
                    compId="534"
                    comWidth={457}
                    comHeight={127.34}
                    compLeft={107}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-start justify-between w-[100%]"
                      compId="533"
                      comWidth={457}
                      comHeight={71.869995}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-bold lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-center text-gray_300 w-[auto]"
                        compId="25:1535"
                        comWidth={72}
                        comHeight={71.87}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`27`}</Text>
                      <Column
                        className="items-start justify-start xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] 2xl:mb-[3px] mb-[4.34px] xl:mr-[11px] 2xl:mr-[12px] 3xl:mr-[15px] mr-[17px] lg:mr-[9px] w-[74%]"
                        compId="532"
                        comWidth={338}
                        comHeight={67.52997}
                        compLeft={0}
                        compRight={17}
                        compType="Column"
                      >
                        <Text
                          className="font-cairo font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-left text-yellow_600 w-[auto]"
                          compId="25:1538"
                          comWidth={179}
                          comHeight={27.01}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`08:00 AM - 04:30 PM`}</Text>
                        <Text
                          className="font-lora font-medium mt-[10.61px] lg:mt-[6px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                          compId="25:1537"
                          comWidth={338}
                          comHeight={29.91}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`An Evening With Elmna’s Club`}</Text>
                      </Column>
                    </Row>
                    <Row
                      className="font-cairo items-start justify-start w-[100%]"
                      compId="531"
                      comWidth={457}
                      comHeight={55.47003}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-semibold lg:mb-[18px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] mb-[30.87px] ml-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-center text-gray_300 w-[auto]"
                        compId="25:1536"
                        comWidth={71}
                        comHeight={24.6}
                        compLeft={2}
                        compRight={0}
                        compType="Text"
                      >{`November`}</Text>
                      <Text
                        className="font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:ml-[16px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] ml-[29px] mt-[1px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[78%]"
                        compId="25:1539"
                        comWidth={355}
                        comHeight={54.02}
                        compLeft={29}
                        compRight={0}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...`}</Text>
                    </Row>
                  </Column>
                </List>
              </Column>
              <Stack
                className="font-cairo 3xl:h-[1078px] h-[1196.24px] lg:h-[698px] xl:h-[799px] 2xl:h-[898px] 3xl:mt-[104px] mt-[115.77px] lg:mt-[67px] xl:mt-[77px] 2xl:mt-[86px] w-[100%]"
                compId="636"
                comWidth={1920}
                comHeight={1196.24}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Stack
                  className="absolute 3xl:h-[1078px] h-[1196.24px] lg:h-[698px] xl:h-[799px] 2xl:h-[898px] inset-[0] w-[100%]"
                  compId="638"
                  comWidth={1920}
                  comHeight={1196.24}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Stack
                    className="absolute 3xl:h-[1078px] h-[1196.24px] lg:h-[698px] xl:h-[799px] 2xl:h-[898px] inset-[0] w-[100%]"
                    compId="640"
                    comWidth={1920}
                    comHeight={1196.24}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <Image
                      src={"images/img_background_12.svg"}
                      className="absolute lg:h-[521px] xl:h-[596px] 2xl:h-[670px] 3xl:h-[804px] h-[892.36px] object-cover top-[0] w-[100%]"
                      compId="25:1448"
                      comWidth={1920}
                      comHeight={892.36}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="background"
                    />
                    <Image
                      src={"images/img_image_5.svg"}
                      className="absolute bottom-[12%] lg:h-[321px] xl:h-[367px] 2xl:h-[412px] 3xl:h-[495px] h-[548.92px] object-cover w-[100%]"
                      compId="25:1449"
                      comWidth={1920}
                      comHeight={548.92}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="image"
                    />
                    <Stack
                      className="absolute bottom-[0] lg:h-[219px] xl:h-[251px] 2xl:h-[282px] 3xl:h-[338px] h-[375.27002px] right-[8%] w-[35%]"
                      compId="642"
                      comWidth={669}
                      comHeight={375.27002}
                      compLeft={0}
                      compRight={150}
                      compType="Stack"
                    >
                      <div
                        className="absolute bg-bluegray_700 lg:h-[219px] xl:h-[251px] 2xl:h-[282px] 3xl:h-[338px] h-[375.27px] inset-[0] justify-center m-[auto] rounded-radius16 shadow-bs w-[68%]"
                        compId="25:1486"
                        comWidth={455}
                        comHeight={375.27}
                        compLeft={107}
                        compRight={107}
                        compType="View"
                      ></div>
                      <Column
                        className="absolute bg-gradient1  inset-[0] items-center justify-end rounded-radius16 w-[100%]"
                        compId="542"
                        comWidth={669}
                        comHeight={375.27}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="items-center justify-between lg:mt-[37px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] mt-[63.67px] mx-[auto] w-[78%]"
                          compId="25:1498"
                          comWidth={522}
                          comHeight={123.48}
                          compLeft={51}
                          compRight={51}
                          compType="Row"
                        >
                          <Column
                            className="items-center w-[14%]"
                            compId="25:1499"
                            comWidth={71}
                            comHeight={123.48}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-bold font-lora mx-[auto] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-center text-white_A700 w-[auto]"
                              compId="25:1500"
                              comWidth={71}
                              comHeight={74.28}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`02`}</Text>
                            <Text
                              className="font-cairo font-normal mx-[auto] not-italic lg:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] text-[27px] text-center text-gray_300 w-[auto]"
                              compId="25:1501"
                              comWidth={57}
                              comHeight={49.2}
                              compLeft={7}
                              compRight={7}
                              compType="Text"
                            >{`Days`}</Text>
                          </Column>
                          <Column
                            className="items-center w-[11%]"
                            compId="25:1502"
                            comWidth={58}
                            comHeight={123.48}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-bold font-lora mx-[auto] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-center text-white_A700 w-[auto]"
                              compId="25:1503"
                              comWidth={58}
                              comHeight={74.28}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`14`}</Text>
                            <Text
                              className="font-cairo font-normal ml-[1px] not-italic lg:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] text-[27px] text-center text-gray_300 w-[auto]"
                              compId="25:1504"
                              comWidth={57}
                              comHeight={49.2}
                              compLeft={1}
                              compRight={0}
                              compType="Text"
                            >{`Hour`}</Text>
                          </Column>
                          <Column
                            className="items-center w-[16%]"
                            compId="25:1505"
                            comWidth={81}
                            comHeight={123.48}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-bold font-lora mx-[auto] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-center text-white_A700 w-[auto]"
                              compId="25:1506"
                              comWidth={69}
                              comHeight={74.28}
                              compLeft={6}
                              compRight={6}
                              compType="Text"
                            >{`36`}</Text>
                            <Text
                              className="font-cairo font-normal mx-[auto] not-italic lg:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] text-[27px] text-center text-gray_300 w-[auto]"
                              compId="25:1507"
                              comWidth={81}
                              comHeight={49.2}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`Minute`}</Text>
                          </Column>
                          <Column
                            className="items-center w-[18%]"
                            compId="25:1508"
                            comWidth={96}
                            comHeight={123.48}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-bold font-lora mx-[auto] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-center text-white_A700 w-[auto]"
                              compId="25:1509"
                              comWidth={66}
                              comHeight={74.28}
                              compLeft={15}
                              compRight={15}
                              compType="Text"
                            >{`54`}</Text>
                            <Text
                              className="font-cairo font-normal mx-[auto] not-italic lg:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] text-[27px] text-center text-gray_300 w-[auto]"
                              compId="25:1510"
                              comWidth={96}
                              comHeight={49.2}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`Seconds`}</Text>
                          </Column>
                        </Row>
                        <Line
                          className="bg-bluegray_601 h-[0.96px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[19px] mt-[21.23px] mx-[auto] rounded-radius16 w-[85%]"
                          compId="25:1488"
                          comWidth={567}
                          comHeight={0.96}
                          compLeft={51}
                          compRight={51}
                          compType="Line"
                        />
                        <Row
                          className="items-end justify-start lg:mb-[28px] xl:mb-[32px] 2xl:mb-[36px] 3xl:mb-[44px] mb-[49.2px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] mt-[47.27px] w-[100%]"
                          compId="541"
                          comWidth={669}
                          comHeight={69.45996}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Column
                            className="items-start justify-start lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] w-[39%]"
                            compId="543"
                            comWidth={262}
                            comHeight={69.45996}
                            compLeft={50}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-semibold lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-[28px] text-gray_300 text-left w-[auto]"
                              compId="25:1489"
                              comWidth={262}
                              comHeight={30.87}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`November 28th, 2020`}</Text>
                            <Text
                              className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[7.72px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[auto]"
                              compId="25:1490"
                              comWidth={207}
                              comHeight={30.87}
                              compLeft={0}
                              compRight={10}
                              compType="Text"
                            >{`Monday, 08:00 AM - 06:00 PM`}</Text>
                          </Column>
                          <Image
                            src={"images/img_btnbell_1.svg"}
                            className="lg:h-[32px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] h-[54.02px] lg:ml-[51px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] ml-[88px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15.44px] lg:mt-[9px] object-contain w-[8%]"
                            compId="25:1494"
                            comWidth={56}
                            comHeight={54.02}
                            compLeft={88}
                            compRight={0}
                            compType="Image"
                            alt="btnBell"
                          />
                          <Text
                            className="bg-gray_300 font-bold leading-[normal] lg:ml-[5px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] ml-[9px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15.44px] lg:mt-[9px] pb-[10.610107px] pt-[10.609863px] lg:px-[20px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] px-[35px] lg:py-[6px] 2xl:py-[7px] xl:py-[7px] 3xl:py-[9px] rounded-radius70 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-black_901 text-center w-[23%]"
                            compId="25:1491"
                            comWidth={154}
                            comHeight={54.02}
                            compLeft={9}
                            compRight={0}
                            compType="Text"
                          >{`REGISTER`}</Text>
                        </Row>
                      </Column>
                    </Stack>
                  </Stack>
                  <Column
                    className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[5%] w-[71%]"
                    compId="540"
                    comWidth={1369}
                    comHeight={379.13}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-center justify-start w-[100%]"
                      compId="643"
                      comWidth={1369}
                      comHeight={211.27}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-semibold mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-bluegray_700 text-center uppercase w-[auto]"
                        compId="25:1483"
                        comWidth={204}
                        comHeight={43.41}
                        compLeft={283}
                        compRight={283}
                        compType="Text"
                      >{`Upcoming events`}</Text>
                      <Stack
                        className="font-lora lg:h-[100px] xl:h-[114px] 2xl:h-[128px] 3xl:h-[153px] h-[169.79px] lg:ml-[165px] 2xl:ml-[212px] 3xl:ml-[254px] ml-[283px] lg:mr-[164px] 2xl:mr-[211px] 3xl:mr-[253px] mr-[282px] xl:mx-[188px] w-[59%]"
                        compId="645"
                        comWidth={804}
                        comHeight={169.79}
                        compLeft={283}
                        compRight={282}
                        compType="Stack"
                      >
                        <Image
                          src={"images/img_circleelement_3.svg"}
                          className="absolute lg:h-[33px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] h-[55.21px] left-[11%] object-contain top-[0] w-[9%]"
                          compId="25:1462"
                          comWidth={74.68}
                          comHeight={55.21}
                          compLeft={88}
                          compRight={0}
                          compType="Image"
                          alt="circleElement"
                        />
                        <Text
                          className="absolute bottom-[0] capitalize font-bold lg:leading-[46px] xl:leading-[53px] 2xl:leading-[60px] 3xl:leading-[72px] leading-[80.00px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-black_902 text-center w-[100%]"
                          compId="25:1484"
                          comWidth={804}
                          comHeight={154.35}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Graduation Party at Elmna’s base camp`}</Text>
                      </Stack>
                    </Column>
                    <Row
                      className="items-center justify-center lg:ml-[267px] xl:ml-[305px] 2xl:ml-[343px] 3xl:ml-[412px] ml-[458px] lg:mr-[266px] xl:mr-[304px] 2xl:mr-[342px] 3xl:mr-[411px] mr-[457px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23.15px] w-[33%]"
                      compId="25:1456"
                      comWidth={454}
                      comHeight={28.94}
                      compLeft={458}
                      compRight={457}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_mapmarker1_1.svg"}
                        className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[23.15px] mb-[2.89px] mt-[2.9px] xl:my-[1px] lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] object-contain w-[5%]"
                        compId="25:1458"
                        comWidth={24}
                        comHeight={23.15}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="mapmarker1"
                      />
                      <Text
                        className="font-semibold xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                        compId="25:1457"
                        comWidth={415}
                        comHeight={28.94}
                        compLeft={15}
                        compRight={0}
                        compType="Text"
                      >{`832  Thompson Drive, San Fransisco CA 94107, United States`}</Text>
                    </Row>
                    <Text
                      className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] leading-[32.00px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23.16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_700 w-[100%]"
                      compId="25:1454"
                      comWidth={1369}
                      comHeight={92.61}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`}</Text>
                  </Column>
                </Stack>
                <Row
                  className="absolute bottom-[5%] items-center justify-start left-[8%] w-[47%]"
                  compId="25:1511"
                  comWidth={907}
                  comHeight={32.8}
                  compLeft={150}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_rightarrow1_3.svg"}
                    className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[23.15px] mb-[4.83px] mt-[4.82px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain w-[3%]"
                    compId="25:1516"
                    comWidth={24}
                    comHeight={23.15}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="rightarrow1"
                  />
                  <Text
                    className="font-normal lg:ml-[11px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] ml-[19px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_400 text-left w-[auto]"
                    compId="25:1515"
                    comWidth={193}
                    comHeight={32.8}
                    compLeft={19}
                    compRight={0}
                    compType="Text"
                  >{`Weekend at Elmna  Camp`}</Text>
                  <Text
                    className="font-bold lg:ml-[186px] xl:ml-[213px] 2xl:ml-[240px] 3xl:ml-[288px] ml-[320px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-center underline w-[auto]"
                    compId="25:1514"
                    comWidth={303}
                    comHeight={32.8}
                    compLeft={320}
                    compRight={0}
                    compType="Text"
                  >{`New elmna “Start-up” in distrupt 2020`}</Text>
                  <Image
                    src={"images/img_rightarrow1_4.svg"}
                    className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[23.15px] mb-[4.83px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] mt-[4.82px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain w-[3%]"
                    compId="25:1512"
                    comWidth={24}
                    comHeight={23.15}
                    compLeft={24}
                    compRight={0}
                    compType="Image"
                    alt="rightarrow1"
                  />
                </Row>
              </Stack>
              <Column
                className="font-lora items-center justify-start 3xl:mt-[104px] mt-[115.77px] lg:mt-[67px] xl:mt-[77px] 2xl:mt-[86px] w-[100%]"
                compId="571"
                comWidth={1920}
                comHeight={2083.79}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Stack
                  className="lg:h-[1152px] xl:h-[1318px] 2xl:h-[1483px] 3xl:h-[1779px] h-[1974.7703px] w-[100%]"
                  compId="647"
                  comWidth={1920}
                  comHeight={1974.7703}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Stack
                    className="absolute lg:h-[1152px] xl:h-[1318px] 2xl:h-[1483px] 3xl:h-[1779px] h-[1974.77px] inset-[0] w-[100%]"
                    compId="649"
                    comWidth={1920}
                    comHeight={1974.77}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <Image
                      src={"images/img_background_13.svg"}
                      className="absolute lg:h-[481px] xl:h-[550px] 2xl:h-[618px] 3xl:h-[742px] h-[822.9px] object-cover top-[0] w-[100%]"
                      compId="36:295"
                      comWidth={1920}
                      comHeight={822.9}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="background"
                    />
                    <Grid
                      className="absolute bottom-[0] lg:gap-[26px] xl:gap-[30px] 2xl:gap-[34px] 3xl:gap-[41px] gap-[46.00003px] grid grid-cols-3 inset-x-[0] mx-[auto] w-[84%]"
                      compId="681"
                      comWidth={1619.98}
                      comHeight={1756.7402}
                      compLeft={0}
                      compRight={0}
                      compType="Grid"
                    >
                      <Stack
                        className="lg:h-[320px] xl:h-[365px] 2xl:h-[411px] 3xl:h-[493px] h-[546.99px] w-[100%]"
                        compId="651"
                        comWidth={509.33}
                        comHeight={546.99}
                        compLeft={0}
                        compRight={1110.65}
                        compType="Stack"
                      >
                        <Column
                          className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] inset-x-[0] items-start justify-center rounded-radius20 top-[1%] w-[100%]"
                          compId="170:19"
                          comWidth={509.33}
                          comHeight={539.28}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-cairo font-semibold lg:mt-[191px] xl:mt-[218px] 2xl:mt-[246px] 3xl:mt-[295px] mt-[328.01px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left tracking-ls1 w-[auto]"
                            compId="36:337"
                            comWidth={125}
                            comHeight={26.26}
                            compLeft={30}
                            compRight={30}
                            compType="Text"
                          >{`ACCOUNTING`}</Text>
                          <Text
                            className="capitalize font-bold font-lora leading-[normal] xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6.53px] lg:mx-[17px] 2xl:mx-[22px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_801 text-left w-[88%]"
                            compId="36:336"
                            comWidth={450}
                            comHeight={52.1}
                            compLeft={30}
                            compRight={29.33}
                            compType="Text"
                          >{`Short disccusions about business in pandemic covid 19`}</Text>
                          <Text
                            className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mb-[18px] xl:mb-[21px] 2xl:mb-[23px] 3xl:mb-[28px] mb-[31.83px] xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[13.51px] lg:mt-[7px] xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[88%]"
                            compId="36:338"
                            comWidth={450}
                            comHeight={81.04}
                            compLeft={30}
                            compRight={29.33}
                            compType="Text"
                          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ....`}</Text>
                        </Column>
                        <Stack
                          className="absolute lg:h-[179px] xl:h-[205px] 2xl:h-[231px] 3xl:h-[277px] h-[306.78px] top-[0] w-[100%]"
                          compId="653"
                          comWidth={509.33}
                          comHeight={306.78}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Image
                            src={"images/img_image_6.svg"}
                            className="absolute lg:h-[179px] xl:h-[205px] 2xl:h-[231px] 3xl:h-[277px] h-[306.78px] inset-[0] object-cover w-[100%]"
                            compId="36:339"
                            comWidth={509.33}
                            comHeight={306.78}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="image"
                          />
                          <Row
                            className="absolute bg-black_900 bottom-[0] items-center justify-between left-[0] rounded-radius6 w-[43%]"
                            compId="588"
                            comWidth={220}
                            comHeight={109.01}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Column
                              className="items-start lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18.33px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] ml-[28.35px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.01px] w-[17%]"
                              compId="587"
                              comWidth={38}
                              comHeight={63.66992}
                              compLeft={28.35}
                              compRight={0}
                              compType="Column"
                            >
                              <Text
                                className="font-bold font-lora lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-[34px] text-left text-white_A700 w-[auto]"
                                compId="36:351"
                                comWidth={38}
                                comHeight={27.01}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`28`}</Text>
                              <Text
                                className="font-cairo font-semibold ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] mt-[9.65px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700_70 w-[auto]"
                                compId="36:352"
                                comWidth={35}
                                comHeight={27.01}
                                compLeft={1.03}
                                compRight={10}
                                compType="Text"
                              >{`NOV`}</Text>
                            </Column>
                            <Image
                              src={"images/img_btnbook_2.svg"}
                              className="lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[53px] h-[57.88px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] mb-[24.12px] lg:mr-[22px] xl:mr-[26px] 2xl:mr-[29px] 3xl:mr-[35px] mr-[39px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.01px] object-contain w-[27%]"
                              compId="36:346"
                              comWidth={60}
                              comHeight={57.88}
                              compLeft={0}
                              compRight={39}
                              compType="Image"
                              alt="btnBook"
                            />
                          </Row>
                        </Stack>
                      </Stack>
                      <Stack
                        className="lg:h-[320px] xl:h-[365px] 2xl:h-[411px] 3xl:h-[493px] h-[546.99px] w-[100%]"
                        compId="655"
                        comWidth={509.33}
                        comHeight={546.99}
                        compLeft={555.33}
                        compRight={555.32}
                        compType="Stack"
                      >
                        <Column
                          className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] inset-x-[0] items-start justify-center rounded-radius20 top-[1%] w-[100%]"
                          compId="170:21"
                          comWidth={509.33}
                          comHeight={539.28}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-cairo font-semibold lg:mt-[191px] xl:mt-[218px] 2xl:mt-[246px] 3xl:mt-[295px] mt-[328.01px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left tracking-ls1 w-[auto]"
                            compId="36:299"
                            comWidth={125}
                            comHeight={26.26}
                            compLeft={30}
                            compRight={30}
                            compType="Text"
                          >{`MOBILE APP`}</Text>
                          <Text
                            className="font-bold font-lora xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.39px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6.53px] lg:mx-[17px] 2xl:mx-[22px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_801 text-left w-[auto]"
                            compId="36:298"
                            comWidth={449.94}
                            comHeight={27.02}
                            compLeft={30}
                            compRight={29.39}
                            compType="Text"
                          >{`Global Android Programmer Meetup 2020`}</Text>
                          <Text
                            className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mb-[33px] xl:mb-[37px] 2xl:mb-[42px] 3xl:mb-[51px] mb-[56.91px] xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[13.51px] lg:mt-[7px] xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[88%]"
                            compId="36:300"
                            comWidth={450}
                            comHeight={81.04}
                            compLeft={30}
                            compRight={29.33}
                            compType="Text"
                          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ....`}</Text>
                        </Column>
                        <Stack
                          className="absolute lg:h-[179px] xl:h-[205px] 2xl:h-[231px] 3xl:h-[277px] h-[306.78px] top-[0] w-[100%]"
                          compId="657"
                          comWidth={509.33}
                          comHeight={306.78}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Image
                            src={"images/img_image_6.svg"}
                            className="absolute lg:h-[179px] xl:h-[205px] 2xl:h-[231px] 3xl:h-[277px] h-[306.78px] inset-[0] object-cover w-[100%]"
                            compId="36:301"
                            comWidth={509.33}
                            comHeight={306.78}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="image"
                          />
                          <Row
                            className="absolute bg-black_900 bottom-[0] items-center justify-between left-[0] rounded-radius6 w-[43%]"
                            compId="592"
                            comWidth={220}
                            comHeight={109.01}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Column
                              className="items-start lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18.33px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] ml-[28.34px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.01px] w-[17%]"
                              compId="591"
                              comWidth={38}
                              comHeight={63.66992}
                              compLeft={28.34}
                              compRight={0}
                              compType="Column"
                            >
                              <Text
                                className="font-bold font-lora lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-[34px] text-left text-white_A700 w-[auto]"
                                compId="36:313"
                                comWidth={38}
                                comHeight={27.01}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`29`}</Text>
                              <Text
                                className="font-cairo font-semibold ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] mt-[9.65px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700_70 w-[auto]"
                                compId="36:314"
                                comWidth={35}
                                comHeight={27.01}
                                compLeft={1.03}
                                compRight={10}
                                compType="Text"
                              >{`NOV`}</Text>
                            </Column>
                            <Image
                              src={"images/img_btnbook_3.svg"}
                              className="lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[53px] h-[57.88px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] mb-[24.12px] lg:mr-[22px] xl:mr-[26px] 2xl:mr-[29px] 3xl:mr-[35px] mr-[39px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.01px] object-contain w-[27%]"
                              compId="36:308"
                              comWidth={60}
                              comHeight={57.88}
                              compLeft={0}
                              compRight={39}
                              compType="Image"
                              alt="btnBook"
                            />
                          </Row>
                        </Stack>
                      </Stack>
                      <Stack
                        className="lg:h-[320px] xl:h-[365px] 2xl:h-[411px] 3xl:h-[493px] h-[546.99px] w-[100%]"
                        compId="660"
                        comWidth={509.33}
                        comHeight={546.99}
                        compLeft={1110.33}
                        compRight={0.32}
                        compType="Stack"
                      >
                        <Column
                          className="absolute bg-white_A700 bottom-[0] inset-x-[0] items-start justify-center rounded-radius20 shadow-bs1 top-[1%] w-[100%]"
                          compId="170:23"
                          comWidth={509.33}
                          comHeight={539.28}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-cairo font-semibold lg:mt-[191px] xl:mt-[218px] 2xl:mt-[246px] 3xl:mt-[295px] mt-[328.01px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left tracking-ls1 w-[auto]"
                            compId="36:318"
                            comWidth={152}
                            comHeight={27.01}
                            compLeft={30}
                            compRight={30}
                            compType="Text"
                          >{`ART EXIBITHION`}</Text>
                          <Text
                            className="font-bold font-lora xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.39px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5.78px] 3xl:mt-[5px] lg:mx-[17px] 2xl:mx-[22px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_801 text-left underline w-[auto]"
                            compId="36:317"
                            comWidth={449.94}
                            comHeight={27.02}
                            compLeft={30}
                            compRight={29.39}
                            compType="Text"
                          >{`Paris Designer Meetup with Elmna’s Partner`}</Text>
                          <Text
                            className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mb-[33px] xl:mb-[37px] 2xl:mb-[42px] 3xl:mb-[51px] mb-[56.91px] xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[13.51px] lg:mt-[7px] xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[88%]"
                            compId="36:319"
                            comWidth={450}
                            comHeight={81.04}
                            compLeft={30}
                            compRight={29.33}
                            compType="Text"
                          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ....`}</Text>
                        </Column>
                        <Stack
                          className="absolute lg:h-[179px] xl:h-[205px] 2xl:h-[231px] 3xl:h-[277px] h-[306.78px] top-[0] w-[100%]"
                          compId="662"
                          comWidth={509.33}
                          comHeight={306.78}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Image
                            src={"images/img_image_6.svg"}
                            className="absolute lg:h-[179px] xl:h-[205px] 2xl:h-[231px] 3xl:h-[277px] h-[306.78px] inset-[0] object-cover w-[100%]"
                            compId="36:320"
                            comWidth={509.33}
                            comHeight={306.78}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="image"
                          />
                          <Row
                            className="absolute bg-black_900 bottom-[0] items-center justify-between left-[0] w-[43%]"
                            compId="596"
                            comWidth={220}
                            comHeight={109.01}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Column
                              className="items-start lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18.33px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] ml-[28.34px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.01px] w-[19%]"
                              compId="595"
                              comWidth={41}
                              comHeight={63.66992}
                              compLeft={28.34}
                              compRight={0}
                              compType="Column"
                            >
                              <Text
                                className="font-bold font-lora lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-[34px] text-left text-white_A700 w-[auto]"
                                compId="36:332"
                                comWidth={41}
                                comHeight={27.01}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`30`}</Text>
                              <Text
                                className="font-cairo font-semibold ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] mt-[9.65px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700_70 w-[auto]"
                                compId="36:333"
                                comWidth={35}
                                comHeight={27.01}
                                compLeft={1.03}
                                compRight={10}
                                compType="Text"
                              >{`NOV`}</Text>
                            </Column>
                            <Image
                              src={"images/img_btnbook_2.svg"}
                              className="lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[53px] h-[57.88px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] mb-[24.12px] lg:mr-[22px] xl:mr-[26px] 2xl:mr-[29px] 3xl:mr-[35px] mr-[39px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.01px] object-contain w-[27%]"
                              compId="36:327"
                              comWidth={60}
                              comHeight={57.88}
                              compLeft={0}
                              compRight={39}
                              compType="Image"
                              alt="btnBook"
                            />
                          </Row>
                        </Stack>
                        <Row
                          className="absolute bg-bluegray_700 items-center justify-center right-[14%] top-[36%] w-[43%]"
                          compId="551"
                          comWidth={220}
                          comHeight={109.01}
                          compLeft={0}
                          compRight={69.66}
                          compType="Row"
                        >
                          <Text
                            className="font-bold lg:mb-[24px] 2xl:mb-[31px] 3xl:mb-[37px] mb-[41.48px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] ml-[42px] lg:mt-[23px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40.52px] xl:my-[27px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-left text-white_A700 w-[auto]"
                            compId="37:1148"
                            comWidth={81}
                            comHeight={27.01}
                            compLeft={42}
                            compRight={0}
                            compType="Text"
                          >{`Register`}</Text>
                          <Image
                            src={"images/img_rightarrow1_5.svg"}
                            className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] h-[20.26px] lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[40px] mb-[45.33px] lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] ml-[35px] lg:mr-[23px] xl:mr-[27px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[41px] lg:mt-[25px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[39px] mt-[43.42px] object-contain w-[10%]"
                            compId="39:2"
                            comWidth={21}
                            comHeight={20.26}
                            compLeft={35}
                            compRight={41}
                            compType="Image"
                            alt="rightarrow1"
                          />
                        </Row>
                      </Stack>
                      <Stack
                        className="lg:h-[320px] xl:h-[365px] 2xl:h-[411px] 3xl:h-[493px] h-[546.99px] w-[100%]"
                        compId="664"
                        comWidth={509.33}
                        comHeight={546.99}
                        compLeft={0}
                        compRight={1110.65}
                        compType="Stack"
                      >
                        <Column
                          className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] inset-x-[0] items-start justify-center rounded-radius20 top-[1%] w-[100%]"
                          compId="602"
                          comWidth={509.33}
                          comHeight={539.28}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-cairo font-semibold lg:mt-[191px] xl:mt-[218px] 2xl:mt-[246px] 3xl:mt-[295px] mt-[328px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left tracking-ls1 w-[auto]"
                            compId="36:442"
                            comWidth={125}
                            comHeight={26.26}
                            compLeft={30}
                            compRight={30}
                            compType="Text"
                          >{`MOBILE APP`}</Text>
                          <Text
                            className="font-bold font-lora xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.39px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6.54px] lg:mx-[17px] 2xl:mx-[22px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_801 text-left w-[auto]"
                            compId="36:441"
                            comWidth={449.94}
                            comHeight={27.02}
                            compLeft={30}
                            compRight={29.39}
                            compType="Text"
                          >{`Global Android Programmer Meetup 2020`}</Text>
                          <Text
                            className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mb-[33px] xl:mb-[37px] 2xl:mb-[42px] 3xl:mb-[51px] mb-[56.92px] xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[13.5px] lg:mt-[7px] xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[88%]"
                            compId="36:443"
                            comWidth={450}
                            comHeight={81.04}
                            compLeft={30}
                            compRight={29.33}
                            compType="Text"
                          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ....`}</Text>
                        </Column>
                        <Stack
                          className="absolute lg:h-[179px] xl:h-[205px] 2xl:h-[231px] 3xl:h-[277px] h-[306.78px] top-[0] w-[100%]"
                          compId="666"
                          comWidth={509.33}
                          comHeight={306.78}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Image
                            src={"images/img_image_7.svg"}
                            className="absolute lg:h-[179px] xl:h-[205px] 2xl:h-[231px] 3xl:h-[277px] h-[306.78px] inset-[0] object-cover w-[100%]"
                            compId="36:444"
                            comWidth={509.33}
                            comHeight={306.78}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="image"
                          />
                          <Row
                            className="absolute bg-black_900 bottom-[0] items-center justify-between left-[0] rounded-radius6 w-[43%]"
                            compId="600"
                            comWidth={220}
                            comHeight={109.01}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Column
                              className="items-start lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18.33px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] ml-[28.35px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.01px] w-[16%]"
                              compId="599"
                              comWidth={36}
                              comHeight={63.670166}
                              compLeft={28.35}
                              compRight={0}
                              compType="Column"
                            >
                              <Text
                                className="font-bold font-lora lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-[34px] text-left text-white_A700 w-[auto]"
                                compId="36:456"
                                comWidth={36}
                                comHeight={27.01}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`01`}</Text>
                              <Text
                                className="font-cairo font-semibold ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] mt-[9.65px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700_70 w-[auto]"
                                compId="36:457"
                                comWidth={32}
                                comHeight={27.01}
                                compLeft={1.03}
                                compRight={10}
                                compType="Text"
                              >{`DEC`}</Text>
                            </Column>
                            <Image
                              src={"images/img_btnbook_3.svg"}
                              className="lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[53px] h-[57.88px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] mb-[24.12px] lg:mr-[22px] xl:mr-[26px] 2xl:mr-[29px] 3xl:mr-[35px] mr-[39px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.01px] object-contain w-[27%]"
                              compId="36:451"
                              comWidth={60}
                              comHeight={57.88}
                              compLeft={0}
                              compRight={39}
                              compType="Image"
                              alt="btnBook"
                            />
                          </Row>
                        </Stack>
                      </Stack>
                      <Stack
                        className="lg:h-[320px] xl:h-[365px] 2xl:h-[411px] 3xl:h-[493px] h-[546.99px] w-[100%]"
                        compId="668"
                        comWidth={509.33}
                        comHeight={546.99}
                        compLeft={555.33}
                        compRight={555.32}
                        compType="Stack"
                      >
                        <Column
                          className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] inset-x-[0] items-start justify-center rounded-radius20 top-[1%] w-[100%]"
                          compId="607"
                          comWidth={509.33}
                          comHeight={539.28}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-cairo font-semibold lg:mt-[191px] xl:mt-[218px] 2xl:mt-[246px] 3xl:mt-[295px] mt-[328px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left tracking-ls1 w-[auto]"
                            compId="36:461"
                            comWidth={152}
                            comHeight={27.01}
                            compLeft={30}
                            compRight={30}
                            compType="Text"
                          >{`ART EXIBITHION`}</Text>
                          <Text
                            className="font-bold font-lora xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.39px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5.79px] 3xl:mt-[5px] lg:mx-[17px] 2xl:mx-[22px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_801 text-left w-[auto]"
                            compId="36:460"
                            comWidth={449.94}
                            comHeight={27.02}
                            compLeft={30}
                            compRight={29.39}
                            compType="Text"
                          >{`Paris Designer Meetup with Elmna’s Partner`}</Text>
                          <Text
                            className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mb-[33px] xl:mb-[37px] 2xl:mb-[42px] 3xl:mb-[51px] mb-[56.92px] xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[13.5px] lg:mt-[7px] xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[88%]"
                            compId="36:462"
                            comWidth={450}
                            comHeight={81.04}
                            compLeft={30}
                            compRight={29.33}
                            compType="Text"
                          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ....`}</Text>
                        </Column>
                        <Stack
                          className="absolute lg:h-[179px] xl:h-[205px] 2xl:h-[231px] 3xl:h-[277px] h-[306.78px] top-[0] w-[100%]"
                          compId="670"
                          comWidth={509.33}
                          comHeight={306.78}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Image
                            src={"images/img_image_7.svg"}
                            className="absolute lg:h-[179px] xl:h-[205px] 2xl:h-[231px] 3xl:h-[277px] h-[306.78px] inset-[0] object-cover w-[100%]"
                            compId="36:463"
                            comWidth={509.33}
                            comHeight={306.78}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="image"
                          />
                          <Row
                            className="absolute bg-black_900 bottom-[0] items-center justify-between left-[0] rounded-radius6 w-[43%]"
                            compId="605"
                            comWidth={220}
                            comHeight={109.01}
                            compLeft={0}
                            compRight={0}
                            compType="Row"
                          >
                            <Column
                              className="items-start lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18.33px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] ml-[28.34px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.01px] w-[18%]"
                              compId="604"
                              comWidth={40}
                              comHeight={63.670166}
                              compLeft={28.34}
                              compRight={0}
                              compType="Column"
                            >
                              <Text
                                className="font-bold font-lora lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-[34px] text-left text-white_A700 w-[auto]"
                                compId="36:475"
                                comWidth={40}
                                comHeight={27.01}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`05`}</Text>
                              <Text
                                className="font-cairo font-semibold ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] mt-[9.65px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700_70 w-[auto]"
                                compId="36:476"
                                comWidth={32}
                                comHeight={27.01}
                                compLeft={1.03}
                                compRight={10}
                                compType="Text"
                              >{`DEC`}</Text>
                            </Column>
                            <Image
                              src={"images/img_btnbook_2.svg"}
                              className="lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[53px] h-[57.88px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] mb-[24.12px] lg:mr-[22px] xl:mr-[26px] 2xl:mr-[29px] 3xl:mr-[35px] mr-[39px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.01px] object-contain w-[27%]"
                              compId="36:470"
                              comWidth={60}
                              comHeight={57.88}
                              compLeft={0}
                              compRight={39}
                              compType="Image"
                              alt="btnBook"
                            />
                          </Row>
                        </Stack>
                      </Stack>
                      <Stack
                        className="lg:h-[320px] xl:h-[365px] 2xl:h-[411px] 3xl:h-[493px] h-[546.99px] w-[100%]"
                        compId="672"
                        comWidth={509.33}
                        comHeight={546.99}
                        compLeft={1110.65}
                        compRight={0}
                        compType="Stack"
                      >
                        <Column
                          className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] inset-x-[0] items-start justify-center rounded-radius20 top-[1%] w-[100%]"
                          compId="611"
                          comWidth={509.33}
                          comHeight={539.28}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-cairo font-semibold lg:mt-[191px] xl:mt-[218px] 2xl:mt-[246px] 3xl:mt-[295px] mt-[328px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left tracking-ls1 w-[auto]"
                            compId="36:480"
                            comWidth={125}
                            comHeight={26.26}
                            compLeft={30}
                            compRight={30}
                            compType="Text"
                          >{`ACCOUNTING`}</Text>
                          <Text
                            className="font-bold font-lora leading-[normal] xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6.54px] lg:mx-[17px] 2xl:mx-[22px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_801 text-left w-[88%]"
                            compId="36:479"
                            comWidth={450}
                            comHeight={52.1}
                            compLeft={30}
                            compRight={29.33}
                            compType="Text"
                          >{`Bussiness Plan in Pandemic with Famous Native Speaker`}</Text>
                          <Text
                            className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mb-[18px] xl:mb-[21px] 2xl:mb-[23px] 3xl:mb-[28px] mb-[31.83px] xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[13.51px] lg:mt-[7px] xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[88%]"
                            compId="36:481"
                            comWidth={450}
                            comHeight={81.04}
                            compLeft={30}
                            compRight={29.33}
                            compType="Text"
                          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ....`}</Text>
                        </Column>
                        <Column
                          className="absolute bg-gray_401 items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] top-[0] w-[100%]"
                          compId="36:483"
                          comWidth={509.33}
                          comHeight={306.78}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Row
                            className="bg-black_900 items-center justify-start lg:mr-[168px] xl:mr-[193px] 2xl:mr-[217px] 3xl:mr-[260px] mr-[289.33px] lg:mt-[115px] xl:mt-[131px] 2xl:mt-[148px] 3xl:mt-[178px] mt-[197.77px] rounded-radius6 w-[43%]"
                            compId="610"
                            comWidth={220}
                            comHeight={109.01}
                            compLeft={0}
                            compRight={289.33}
                            compType="Row"
                          >
                            <Column
                              className="items-start lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18.33px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] ml-[28.35px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.01px] w-[19%]"
                              compId="609"
                              comWidth={42}
                              comHeight={63.670166}
                              compLeft={28.35}
                              compRight={0}
                              compType="Column"
                            >
                              <Text
                                className="font-bold font-lora lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-[34px] text-left text-white_A700 w-[auto]"
                                compId="36:494"
                                comWidth={42}
                                comHeight={27.01}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`08`}</Text>
                              <Text
                                className="font-cairo font-semibold ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] mt-[9.65px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700_70 w-[auto]"
                                compId="36:495"
                                comWidth={32}
                                comHeight={27.01}
                                compLeft={1.03}
                                compRight={10}
                                compType="Text"
                              >{`DEC`}</Text>
                            </Column>
                            <Image
                              src={"images/img_btnbook_2.svg"}
                              className="lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[53px] h-[57.88px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] mb-[24.12px] lg:ml-[29px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] ml-[50.65px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.01px] object-contain w-[27%]"
                              compId="36:489"
                              comWidth={60}
                              comHeight={57.88}
                              compLeft={50.65}
                              compRight={0}
                              compType="Image"
                              alt="btnBook"
                            />
                          </Row>
                        </Column>
                      </Stack>
                      <Stack
                        className="lg:h-[320px] xl:h-[365px] 2xl:h-[411px] 3xl:h-[493px] h-[546.99px] w-[100%]"
                        compId="674"
                        comWidth={509.33}
                        comHeight={546.99}
                        compLeft={0}
                        compRight={1110.65}
                        compType="Stack"
                      >
                        <Column
                          className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] inset-x-[0] items-start justify-center rounded-radius20 top-[1%] w-[100%]"
                          compId="615"
                          comWidth={509.33}
                          comHeight={539.28}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-cairo font-semibold lg:mt-[191px] xl:mt-[218px] 2xl:mt-[246px] 3xl:mt-[295px] mt-[328px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left tracking-ls1 w-[auto]"
                            compId="36:520"
                            comWidth={152}
                            comHeight={27.01}
                            compLeft={30}
                            compRight={30}
                            compType="Text"
                          >{`ART EXIBITHION`}</Text>
                          <Text
                            className="font-bold font-lora xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.39px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5.78px] 3xl:mt-[5px] lg:mx-[17px] 2xl:mx-[22px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_801 text-left w-[auto]"
                            compId="36:519"
                            comWidth={449.94}
                            comHeight={27.02}
                            compLeft={30}
                            compRight={29.39}
                            compType="Text"
                          >{`Paris Designer Meetup with Elmna’s Partner`}</Text>
                          <Text
                            className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mb-[33px] xl:mb-[37px] 2xl:mb-[42px] 3xl:mb-[51px] mb-[56.92px] xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[13.51px] lg:mt-[7px] xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[88%]"
                            compId="36:521"
                            comWidth={450}
                            comHeight={81.04}
                            compLeft={30}
                            compRight={29.33}
                            compType="Text"
                          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ....`}</Text>
                        </Column>
                        <Column
                          className="absolute bg-gray_401 items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] top-[0] w-[100%]"
                          compId="36:523"
                          comWidth={509.33}
                          comHeight={306.78}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Row
                            className="bg-black_900 items-center justify-start lg:mr-[168px] xl:mr-[193px] 2xl:mr-[217px] 3xl:mr-[260px] mr-[289.33px] lg:mt-[115px] xl:mt-[131px] 2xl:mt-[148px] 3xl:mt-[178px] mt-[197.77px] rounded-radius6 w-[43%]"
                            compId="614"
                            comWidth={220}
                            comHeight={109.01}
                            compLeft={0}
                            compRight={289.33}
                            compType="Row"
                          >
                            <Column
                              className="items-start lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18.33px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] ml-[28.35px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.01px] w-[15%]"
                              compId="613"
                              comWidth={34}
                              comHeight={63.66992}
                              compLeft={28.35}
                              compRight={0}
                              compType="Column"
                            >
                              <Text
                                className="font-bold font-lora lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-[34px] text-left text-white_A700 w-[auto]"
                                compId="36:534"
                                comWidth={34}
                                comHeight={27.01}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`16`}</Text>
                              <Text
                                className="font-cairo font-semibold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] mt-[9.65px] mx-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700_70 w-[auto]"
                                compId="36:535"
                                comWidth={32}
                                comHeight={27.01}
                                compLeft={1.03}
                                compRight={0.97}
                                compType="Text"
                              >{`DEC`}</Text>
                            </Column>
                            <Image
                              src={"images/img_btnbook_2.svg"}
                              className="lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[53px] h-[57.88px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] mb-[24.12px] lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] ml-[58.65px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.01px] object-contain w-[27%]"
                              compId="36:529"
                              comWidth={60}
                              comHeight={57.88}
                              compLeft={58.65}
                              compRight={0}
                              compType="Image"
                              alt="btnBook"
                            />
                          </Row>
                        </Column>
                      </Stack>
                      <Stack
                        className="lg:h-[320px] xl:h-[365px] 2xl:h-[411px] 3xl:h-[493px] h-[546.99px] w-[100%]"
                        compId="676"
                        comWidth={509.33}
                        comHeight={546.99}
                        compLeft={555.33}
                        compRight={555.32}
                        compType="Stack"
                      >
                        <Column
                          className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] inset-x-[0] items-start justify-center rounded-radius20 top-[1%] w-[100%]"
                          compId="619"
                          comWidth={509.33}
                          comHeight={539.28}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-cairo font-semibold lg:mt-[191px] xl:mt-[218px] 2xl:mt-[246px] 3xl:mt-[295px] mt-[328px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left tracking-ls1 w-[auto]"
                            compId="36:539"
                            comWidth={125}
                            comHeight={26.26}
                            compLeft={30}
                            compRight={30}
                            compType="Text"
                          >{`ACCOUNTING`}</Text>
                          <Text
                            className="font-bold font-lora leading-[normal] xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6.53px] lg:mx-[17px] 2xl:mx-[22px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_801 text-left w-[88%]"
                            compId="36:538"
                            comWidth={450}
                            comHeight={52.1}
                            compLeft={30}
                            compRight={29.33}
                            compType="Text"
                          >{`Bussiness Plan in Pandemic with Famous Native Speaker`}</Text>
                          <Text
                            className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mb-[18px] xl:mb-[21px] 2xl:mb-[23px] 3xl:mb-[28px] mb-[31.84px] xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[13.51px] lg:mt-[7px] xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[88%]"
                            compId="36:540"
                            comWidth={450}
                            comHeight={81.04}
                            compLeft={30}
                            compRight={29.33}
                            compType="Text"
                          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ....`}</Text>
                        </Column>
                        <Column
                          className="absolute bg-gray_401 items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] top-[0] w-[100%]"
                          compId="36:542"
                          comWidth={509.33}
                          comHeight={306.78}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Row
                            className="bg-black_900 items-center justify-start lg:mr-[168px] xl:mr-[193px] 2xl:mr-[217px] 3xl:mr-[260px] mr-[289.33px] lg:mt-[115px] xl:mt-[131px] 2xl:mt-[148px] 3xl:mt-[178px] mt-[197.77px] rounded-radius6 w-[43%]"
                            compId="618"
                            comWidth={220}
                            comHeight={109.01}
                            compLeft={0}
                            compRight={289.33}
                            compType="Row"
                          >
                            <Column
                              className="items-start lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18.33px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] ml-[28.34px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.01px] w-[15%]"
                              compId="617"
                              comWidth={34}
                              comHeight={63.66992}
                              compLeft={28.34}
                              compRight={0}
                              compType="Column"
                            >
                              <Text
                                className="font-bold font-lora lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-[34px] text-left text-white_A700 w-[auto]"
                                compId="36:553"
                                comWidth={34}
                                comHeight={27.01}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`18`}</Text>
                              <Text
                                className="font-cairo font-semibold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] mt-[9.65px] mx-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700_70 w-[auto]"
                                compId="36:554"
                                comWidth={32}
                                comHeight={27.01}
                                compLeft={1.03}
                                compRight={0.97}
                                compType="Text"
                              >{`DEC`}</Text>
                            </Column>
                            <Image
                              src={"images/img_btnbook_2.svg"}
                              className="lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[53px] h-[57.88px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] mb-[24.12px] lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] ml-[58.66px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.01px] object-contain w-[27%]"
                              compId="36:548"
                              comWidth={60}
                              comHeight={57.88}
                              compLeft={58.66}
                              compRight={0}
                              compType="Image"
                              alt="btnBook"
                            />
                          </Row>
                        </Column>
                      </Stack>
                      <Stack
                        className="lg:h-[320px] xl:h-[365px] 2xl:h-[411px] 3xl:h-[493px] h-[546.99px] w-[100%]"
                        compId="678"
                        comWidth={509.33}
                        comHeight={546.99}
                        compLeft={1110.65}
                        compRight={0}
                        compType="Stack"
                      >
                        <Column
                          className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] inset-x-[0] items-start justify-center rounded-radius20 top-[1%] w-[100%]"
                          compId="623"
                          comWidth={509.33}
                          comHeight={539.28}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-cairo font-semibold lg:mt-[191px] xl:mt-[218px] 2xl:mt-[246px] 3xl:mt-[295px] mt-[328px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left tracking-ls1 w-[auto]"
                            compId="36:501"
                            comWidth={125}
                            comHeight={26.26}
                            compLeft={30}
                            compRight={30}
                            compType="Text"
                          >{`MOBILE APP`}</Text>
                          <Text
                            className="font-bold font-lora xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.39px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6.53px] lg:mx-[17px] 2xl:mx-[22px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_801 text-left w-[auto]"
                            compId="36:500"
                            comWidth={449.94}
                            comHeight={27.02}
                            compLeft={30}
                            compRight={29.39}
                            compType="Text"
                          >{`Global Android Programmer Meetup 2020`}</Text>
                          <Text
                            className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mb-[33px] xl:mb-[37px] 2xl:mb-[42px] 3xl:mb-[51px] mb-[56.92px] xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[13.51px] lg:mt-[7px] xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[88%]"
                            compId="36:502"
                            comWidth={450}
                            comHeight={81.04}
                            compLeft={30}
                            compRight={29.33}
                            compType="Text"
                          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ....`}</Text>
                        </Column>
                        <Column
                          className="absolute bg-gray_401 items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] top-[0] w-[100%]"
                          compId="36:504"
                          comWidth={509.33}
                          comHeight={306.78}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Row
                            className="bg-black_900 items-center justify-start lg:mr-[168px] xl:mr-[193px] 2xl:mr-[217px] 3xl:mr-[260px] mr-[289.33px] lg:mt-[115px] xl:mt-[131px] 2xl:mt-[148px] 3xl:mt-[178px] mt-[197.77px] rounded-radius6 w-[43%]"
                            compId="622"
                            comWidth={220}
                            comHeight={109.01}
                            compLeft={0}
                            compRight={289.33}
                            compType="Row"
                          >
                            <Column
                              className="items-start lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18.33px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] ml-[28.35px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.01px] w-[17%]"
                              compId="621"
                              comWidth={37}
                              comHeight={63.66992}
                              compLeft={28.35}
                              compRight={0}
                              compType="Column"
                            >
                              <Text
                                className="font-bold font-lora lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-[34px] text-left text-white_A700 w-[auto]"
                                compId="36:515"
                                comWidth={37}
                                comHeight={27.01}
                                compLeft={0}
                                compRight={0}
                                compType="Text"
                              >{`24`}</Text>
                              <Text
                                className="font-cairo font-semibold ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] mt-[9.65px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700_70 w-[auto]"
                                compId="36:516"
                                comWidth={32}
                                comHeight={27.01}
                                compLeft={1.03}
                                compRight={10}
                                compType="Text"
                              >{`DEC`}</Text>
                            </Column>
                            <Image
                              src={"images/img_btnbook_3.svg"}
                              className="lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[53px] h-[57.88px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] mb-[24.12px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[41px] 3xl:ml-[50px] ml-[55.65px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.01px] object-contain w-[27%]"
                              compId="36:510"
                              comWidth={60}
                              comHeight={57.88}
                              compLeft={55.65}
                              compRight={0}
                              compType="Image"
                              alt="btnBook"
                            />
                          </Row>
                        </Column>
                      </Stack>
                    </Grid>
                  </Stack>
                  <Row
                    className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[3%] w-[84%]"
                    compId="548"
                    comWidth={1620}
                    comHeight={74.28}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-bold lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-black_902 text-left w-[auto]"
                      compId="36:354"
                      comWidth={193}
                      comHeight={74.28}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Events`}</Text>
                    <Row
                      className="border border-bluegray_700 border-solid font-cairo items-center justify-center lg:mb-[3px] xl:mb-[4px] mb-[6.75px] lg:ml-[579px] xl:ml-[663px] 2xl:ml-[746px] 3xl:ml-[895px] ml-[994px] lg:mt-[4px] xl:mt-[5px] mt-[7.72px] 2xl:my-[5px] 3xl:my-[6px] rounded-radius60 w-[16%]"
                      compId="547"
                      comWidth={254}
                      comHeight={59.81}
                      compLeft={994}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_calendarsilhou_1.svg"}
                        className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[23.15px] lg:ml-[16px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] ml-[29px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18.33px] object-contain w-[9%]"
                        compId="36:435"
                        comWidth={24}
                        comHeight={23.15}
                        compLeft={29}
                        compRight={0}
                        compType="Image"
                        alt="calendarsilhou"
                      />
                      <Text
                        className="font-bold mb-[13.5px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23px] mt-[13.51px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_700 text-left w-[auto]"
                        compId="36:432"
                        comWidth={91}
                        comHeight={32.8}
                        compLeft={23}
                        compRight={0}
                        compType="Text"
                      >{`Filter Date`}</Text>
                      <Image
                        src={"images/img_chevron1_3.svg"}
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] h-[15.44px] mb-[22.18px] lg:ml-[22px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] ml-[39px] lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] mr-[32px] mt-[22.19px] lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] object-contain w-[6%]"
                        compId="36:433"
                        comWidth={16}
                        comHeight={15.44}
                        compLeft={39}
                        compRight={32}
                        compType="Image"
                        alt="chevron1"
                      />
                    </Row>
                    <Row
                      className="border border-bluegray_700 border-solid font-cairo items-center justify-center lg:mb-[3px] xl:mb-[4px] mb-[6.75px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] ml-[18px] lg:mt-[4px] xl:mt-[5px] mt-[7.72px] 2xl:my-[5px] 3xl:my-[6px] rounded-radius60 w-[10%]"
                      compId="546"
                      comWidth={161}
                      comHeight={59.81}
                      compLeft={18}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-bold mb-[13.5px] lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] ml-[35px] mt-[13.51px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_700 text-left w-[auto]"
                        compId="36:357"
                        comWidth={54}
                        comHeight={32.8}
                        compLeft={35}
                        compRight={0}
                        compType="Text"
                      >{`Latest`}</Text>
                      <Image
                        src={"images/img_chevron1_3.svg"}
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] h-[15.44px] mb-[22.18px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] mr-[32px] mt-[22.19px] lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] object-contain w-[10%]"
                        compId="36:428"
                        comWidth={16}
                        comHeight={15.44}
                        compLeft={24}
                        compRight={32}
                        compType="Image"
                        alt="chevron1"
                      />
                    </Row>
                  </Row>
                </Stack>
                <Row
                  className="font-cairo items-center justify-center lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] mt-[57.89px] mx-[auto] w-[28%]"
                  compId="37:11"
                  comWidth={536}
                  comHeight={51.13}
                  compLeft={692}
                  compRight={692}
                  compType="Row"
                >
                  <Row
                    className="items-center justify-between w-[100%]"
                    compId="685"
                    comWidth={536}
                    comHeight={51.129883}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <div className="bg-transparent border-0 w-[30%] input-wrap">
                      <Image
                        src={"images/img_chevron_1.svg"}
                        className="absolute left-[30px] bg-transparent border-0 lg:left-[17px] xl:left-[20px] 2xl:left-[22px] 3xl:left-[27px] my-[auto] inset-y-[0]"
                        compId="37:34"
                        comWidth={16}
                        comHeight={15.44}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="chevron 1"
                      />
                      <Input
                        className="placeholder:bg-transparent bg-white_A700 border-0 font-bold xl:pb-[13px] pb-[19.875px] lg:pl-[44px] xl:pl-[50px] 2xl:pl-[57px] 3xl:pl-[68px] pl-[76px] xl:pt-[12px] pt-[18.905px] lg:py-[11px] 2xl:py-[14px] 3xl:py-[17px] rounded-radius61 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[100%]"
                        compId="37:26"
                        comWidth={0}
                        comHeight={51.13}
                        compLeft={0}
                        compRight={0}
                        compType="EditText"
                        name="btnPrevious"
                        placeholder={`Previous`}
                      ></Input>
                    </div>
                    <Row
                      className="bg-teal_50 items-center justify-center rounded-radius61 w-[42%]"
                      compId="568"
                      comWidth={225}
                      comHeight={51.13}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Row
                        className="items-start justify-center w-[62%]"
                        compId="686"
                        comWidth={139}
                        comHeight={51.129883}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold mb-[10.61px] lg:mb-[6px] 2xl:mb-[7px] xl:mb-[7px] 3xl:mb-[9px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[7.72px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left w-[auto]"
                          compId="37:16"
                          comWidth={11}
                          comHeight={32.8}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`1`}</Text>
                        <Text
                          className="font-bold mb-[10.61px] lg:mb-[6px] 2xl:mb-[7px] xl:mb-[7px] 3xl:mb-[9px] lg:ml-[15px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] ml-[27px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[7.72px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left w-[auto]"
                          compId="37:17"
                          comWidth={11}
                          comHeight={32.8}
                          compLeft={27}
                          compRight={0}
                          compType="Text"
                        >{`2`}</Text>
                        <Text
                          className="bg-bluegray_700 font-bold leading-[normal] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] ml-[28px] pb-[10.609863px] lg:pb-[6px] 2xl:pb-[7px] xl:pb-[7px] 3xl:pb-[9px] lg:pl-[15px] xl:pl-[17px] 2xl:pl-[19px] 3xl:pl-[23px] pl-[26px] lg:pr-[14px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[22px] pr-[25px] lg:pt-[4px] 2xl:pt-[5px] xl:pt-[5px] 3xl:pt-[6px] pt-[7.720215px] rounded-radius61 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-white_A701 w-[45%]"
                          compId="34"
                          comWidth={62}
                          comHeight={51.13}
                          compLeft={28}
                          compRight={0}
                          compType="Text"
                        >{`3`}</Text>
                      </Row>
                      <Text
                        className="font-bold mb-[10.61px] lg:mb-[6px] 2xl:mb-[7px] xl:mb-[7px] 3xl:mb-[9px] lg:ml-[11px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] ml-[19px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[7.72px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left w-[auto]"
                        compId="37:19"
                        comWidth={11}
                        comHeight={32.8}
                        compLeft={19}
                        compRight={0}
                        compType="Text"
                      >{`4`}</Text>
                    </Row>
                    <Row
                      className="bg-white_A700 items-center justify-center rounded-radius61 w-[21%]"
                      compId="569"
                      comWidth={115}
                      comHeight={51.13}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-bold mb-[10.61px] lg:mb-[6px] 2xl:mb-[7px] xl:mb-[7px] 3xl:mb-[9px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] mt-[7.72px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left w-[auto]"
                        compId="37:22"
                        comWidth={37}
                        comHeight={32.8}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Next`}</Text>
                      <Image
                        src={"images/img_chevron1_4.svg"}
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] h-[15.44px] xl:mb-[11px] 3xl:mb-[15px] mb-[17.36px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] ml-[17px] lg:ml-[9px] xl:mt-[12px] 3xl:mt-[16px] mt-[18.33px] lg:my-[10px] 2xl:my-[13px] object-contain w-[14%]"
                        compId="37:32"
                        comWidth={16}
                        comHeight={15.44}
                        compLeft={17}
                        compRight={0}
                        compType="Image"
                        alt="chevron1"
                      />
                    </Row>
                  </Row>
                </Row>
              </Column>
              <Column
                className="bg-white_A700 font-lora items-center justify-start 3xl:mt-[104px] mt-[115.76px] lg:mt-[67px] xl:mt-[77px] 2xl:mt-[86px] w-[100%]"
                compId="626"
                comWidth={1920}
                comHeight={346.33}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mt-[45px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] mt-[78.15px] mx-[auto] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-[30px] text-black_902 text-center w-[auto]"
                  compId="25:1338"
                  comWidth={236}
                  comHeight={36.66}
                  compLeft={305}
                  compRight={305}
                  compType="Text"
                >{`Our Partnership`}</Text>
                <Image
                  src={"images/img_clientlogo_2.svg"}
                  className="lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] h-[58.79px] lg:mb-[47px] xl:mb-[54px] 2xl:mb-[60px] 3xl:mb-[73px] mb-[81.09px] lg:mt-[53px] xl:mt-[61px] 2xl:mt-[68px] 3xl:mt-[82px] mt-[91.64px] mx-[auto] object-contain w-[68%]"
                  compId="25:1320"
                  comWidth={1308.32}
                  comHeight={58.79}
                  compLeft={305}
                  compRight={305}
                  compType="Image"
                  alt="clientLogo"
                />
              </Column>
              <Stack
                className="bg-black_900 font-lora lg:h-[206px] xl:h-[236px] 2xl:h-[266px] 3xl:h-[318px] h-[353.09px] 3xl:mt-[104px] mt-[115.77px] lg:mt-[67px] xl:mt-[77px] 2xl:mt-[86px] w-[100%]"
                compId="680"
                comWidth={1920}
                comHeight={353.09}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_maskgroup_3.svg"}
                  className="absolute lg:h-[206px] xl:h-[236px] 2xl:h-[266px] 3xl:h-[318px] h-[353.09px] inset-[0] object-cover w-[100%]"
                  compId="25:1287"
                  comWidth={1920}
                  comHeight={353.09}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="MaskGroup"
                />
                <Row
                  className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[84%]"
                  compId="573"
                  comWidth={1619}
                  comHeight={146.64}
                  compLeft={152}
                  compRight={149}
                  compType="Row"
                >
                  <Text
                    className="font-normal lg:leading-[44px] xl:leading-[50px] 2xl:leading-[57px] 3xl:leading-[68px] leading-[76.00px] not-italic lg:text-[25px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[39px] text-[44px] text-left text-white_A700 w-[49%]"
                    compId="25:1302"
                    comWidth={789}
                    comHeight={146.64}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Don’t miss our weekly updates about elmna’s alumni story`}</Text>
                  <Row
                    className="bg-black_900 border border-gray_300 border-solid font-cairo items-center justify-between lg:my-[20px] xl:my-[23px] 2xl:my-[26px] 3xl:my-[31px] my-[34.73px] rounded-radius60 w-[34%]"
                    compId="572"
                    comWidth={546}
                    comHeight={77.18}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] mb-[17.37px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[33px] ml-[37px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.01px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_600 text-left w-[auto]"
                      compId="25:1298"
                      comWidth={200}
                      comHeight={32.8}
                      compLeft={37}
                      compRight={0}
                      compType="Text"
                    >{`Enter your email address...`}</Text>
                    <Button
                      className="bg-bluegray_700 font-bold mr-[10.21px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] my-[9.65px] lg:pl-[20px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] pl-[35px] 2xl:py-[10px] 3xl:py-[12px] py-[14.085px] lg:py-[8px] xl:py-[9px] rounded-radius37 shadow-bs2 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[36%]"
                      compId="25:1299"
                      comWidth={196.79}
                      comHeight={57.88}
                      compLeft={0}
                      compRight={10.21}
                      compType="Button"
                    >{`SUBSCRIBE`}</Button>
                  </Row>
                </Row>
              </Stack>
            </Column>
          </Column>
          <footer
            className="w-[100%]"
            compId="25:1203"
            comWidth={1920}
            comHeight={583}
            compLeft={0}
            compRight={0}
            compType="BottomBar"
          >
            <Column
              className="bg-white_A700 w-[100%]"
              compId="628"
              comWidth={1920}
              comHeight={583}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-start justify-evenly 2xl:mt-[101px] 3xl:mt-[121px] mt-[135px] lg:mt-[78px] xl:mt-[90px] w-[100%]"
                compId="25:1216"
                comWidth={1920}
                comHeight={303}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-start justify-start w-[28%]"
                  compId="25:1217"
                  comWidth={530}
                  comHeight={303}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_logo_4.svg"}
                    className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] h-[72px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] object-contain w-[37%]"
                    compId="25:1218"
                    comWidth={198}
                    comHeight={72}
                    compLeft={0}
                    compRight={10}
                    compType="Image"
                    alt="logo"
                  />
                  <Text
                    className="font-normal lg:leading-[14px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] leading-[24.00px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900 text-left w-[100%]"
                    compId="25:1226"
                    comWidth={530}
                    comHeight={72}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Elmna University Alumni is a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud`}</Text>
                  <Column
                    className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30px] w-[100%]"
                    compId="688"
                    comWidth={530}
                    comHeight={99}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="577"
                      comWidth={530}
                      comHeight={99}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900 text-left w-[auto]"
                        compId="25:1240"
                        comWidth={66}
                        comHeight={30}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Follow Us`}</Text>
                      <Column
                        className="lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] w-[100%]"
                        compId="689"
                        comWidth={530}
                        comHeight={51}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="items-center justify-start w-[100%]"
                          compId="576"
                          comWidth={530}
                          comHeight={51}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Image
                            src={"images/img_social01_2.svg"}
                            className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22.15px] 3xl:mb-[12px] mb-[14.35px] lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] ml-[5px] 3xl:mt-[13px] mt-[14.5px] 2xl:my-[10px] lg:my-[8px] xl:my-[9px] object-contain w-[2%]"
                            compId="25:1229"
                            comWidth={12.08}
                            comHeight={22.15}
                            compLeft={5}
                            compRight={0}
                            compType="Image"
                            alt="social01"
                          />
                          <Image
                            src={"images/img_social03_2.svg"}
                            className="lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[48.92px] object-contain lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]"
                            compId="25:1233"
                            comWidth={51}
                            comHeight={51}
                            compLeft={48.92}
                            compRight={0}
                            compType="Image"
                            alt="social03"
                          />
                          <Image
                            src={"images/img_social02_1.svg"}
                            className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[22.66px] 3xl:mb-[12px] mb-[13.84px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40.29px] 3xl:mt-[13px] mt-[14.5px] 2xl:my-[10px] lg:my-[8px] xl:my-[9px] object-contain w-[6%]"
                            compId="25:1231"
                            comWidth={31.47}
                            comHeight={22.66}
                            compLeft={40.29}
                            compRight={0}
                            compType="Image"
                            alt="social02"
                          />
                          <Image
                            src={"images/img_social04.svg"}
                            className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[23.16px] mb-[13.84px] lg:ml-[30px] xl:ml-[34px] 2xl:ml-[38px] 3xl:ml-[46px] ml-[51.6px] mt-[14px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] object-contain w-[5%]"
                            compId="25:1236"
                            comWidth={24.17}
                            comHeight={23.16}
                            compLeft={51.6}
                            compRight={0}
                            compType="Image"
                            alt="social04"
                          />
                          <Image
                            src={"images/img_social05_1.svg"}
                            className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22.15px] 3xl:mb-[12px] mb-[14.35px] lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] ml-[57.64px] 3xl:mt-[13px] mt-[14.5px] 2xl:my-[10px] lg:my-[8px] xl:my-[9px] object-contain lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px] w-[22.15px]"
                            compId="25:1238"
                            comWidth={22.15}
                            comHeight={22.15}
                            compLeft={57.64}
                            compRight={0}
                            compType="Image"
                            alt="social05"
                          />
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Column
                  className="items-start justify-start lg:mb-[49px] xl:mb-[56px] 2xl:mb-[63px] 3xl:mb-[75px] mb-[84px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] w-[5%]"
                  compId="25:1276"
                  comWidth={99}
                  comHeight={216}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-black_900 text-left w-[auto]"
                    compId="25:1277"
                    comWidth={99}
                    comHeight={37}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Why Elmna`}</Text>
                  <Column
                    className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[89%]"
                    compId="25:1278"
                    comWidth={88}
                    comHeight={162}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold mr-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:1279"
                      comWidth={87}
                      comHeight={30}
                      compLeft={0}
                      compRight={1}
                      compType="Text"
                    >{`About elmna`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:1280"
                      comWidth={71}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Enterprise`}</Text>
                    <Text
                      className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:1281"
                      comWidth={88}
                      comHeight={30}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Alumni Story`}</Text>
                    <Text
                      className="font-semibold lg:mr-[5px] 2xl:mr-[6px] xl:mr-[6px] 3xl:mr-[8px] mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:1282"
                      comWidth={79}
                      comHeight={30}
                      compLeft={0}
                      compRight={9}
                      compType="Text"
                    >{`Community`}</Text>
                  </Column>
                </Column>
                <Column
                  className="items-start justify-start lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] w-[5%]"
                  compId="25:1268"
                  comWidth={90}
                  comHeight={260}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-black_900 text-left w-[auto]"
                    compId="25:1275"
                    comWidth={90}
                    comHeight={37}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Resources`}</Text>
                  <Column
                    className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[89%]"
                    compId="25:1269"
                    comWidth={80}
                    comHeight={206}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:1270"
                      comWidth={69}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Download`}</Text>
                    <Text
                      className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:1271"
                      comWidth={80}
                      comHeight={30}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Help Center`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:1272"
                      comWidth={47}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Events`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:1273"
                      comWidth={47}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Guides`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:1274"
                      comWidth={52}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Partner`}</Text>
                  </Column>
                </Column>
                <Column
                  className="items-start justify-start lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] w-[5%]"
                  compId="25:1260"
                  comWidth={100}
                  comHeight={260}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-black_900 text-left w-[auto]"
                    compId="25:1267"
                    comWidth={100}
                    comHeight={37}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Community`}</Text>
                  <Column
                    className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[72%]"
                    compId="25:1261"
                    comWidth={72}
                    comHeight={206}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:1262"
                      comWidth={61}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`About us`}</Text>
                    <Text
                      className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:1263"
                      comWidth={72}
                      comHeight={30}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Contact us`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:1264"
                      comWidth={37}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Login`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:1265"
                      comWidth={52}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Sign Up`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:1266"
                      comWidth={28}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`FAQ`}</Text>
                  </Column>
                </Column>
                <Column
                  className="items-start justify-start lg:mb-[43px] xl:mb-[49px] 2xl:mb-[55px] 3xl:mb-[66px] mb-[74px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] w-[15%]"
                  compId="25:1241"
                  comWidth={285}
                  comHeight={226}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-black_900 text-left w-[auto]"
                    compId="25:1242"
                    comWidth={176}
                    comHeight={37}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Get in Touch with Us`}</Text>
                  <Column
                    className="xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[100%]"
                    compId="690"
                    comWidth={285}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-start justify-start w-[100%]"
                      compId="25:1243"
                      comWidth={285}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_pin51_2.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[15px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="25:1245"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="pin51"
                      />
                      <Text
                        className="font-semibold leading-[normal] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[86%]"
                        compId="25:1244"
                        comWidth={246}
                        comHeight={60}
                        compLeft={15}
                        compRight={0}
                        compType="Text"
                      >
                        {
                          <>
                            {`832  Thompson Drive, San Fransisco`}
                            <br />
                            {`CA 94107, United States`}
                          </>
                        }
                      </Text>
                    </Row>
                  </Column>
                  <Row
                    className="items-start justify-start lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[100%]"
                    compId="25:1248"
                    comWidth={285}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_telephonecall_1.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="25:1250"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="telephonecall"
                    />
                    <Text
                      className="font-semibold xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:1249"
                      comWidth={124}
                      comHeight={30}
                      compLeft={15}
                      compRight={0}
                      compType="Text"
                    >{`+123 345123 556`}</Text>
                  </Row>
                  <Row
                    className="items-start justify-start lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                    compId="25:1254"
                    comWidth={285}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_inbox21_4.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="25:1256"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="inbox21"
                    />
                    <Text
                      className="font-semibold xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:1255"
                      comWidth={144}
                      comHeight={30}
                      compLeft={15}
                      compRight={0}
                      compType="Text"
                    >{`support@elmna.com`}</Text>
                  </Row>
                </Column>
              </Row>
              <Column
                className="bg-white_A700 lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[61px] w-[100%]"
                compId="578"
                comWidth={1920}
                comHeight={84}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Line
                  className="bg-gray_100_14 h-[1px] w-[100%]"
                  compId="25:1212"
                  comWidth={1920}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Row
                  className="items-center justify-evenly xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] mt-[26px] lg:my-[15px] w-[100%]"
                  compId="25:1207"
                  comWidth={1920}
                  comHeight={30}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900 text-left w-[auto]"
                    compId="25:1213"
                    comWidth={372}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Elmna University Alumni -   © 2020 All Rights Reserved`}</Text>
                  <Row
                    className="items-center justify-center w-[19%]"
                    compId="687"
                    comWidth={367}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:1210"
                      comWidth={41}
                      comHeight={30}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`About`}</Text>
                    <Text
                      className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:1209"
                      comWidth={28}
                      comHeight={30}
                      compLeft={50}
                      compRight={0}
                      compType="Text"
                    >{`FAQ`}</Text>
                    <Text
                      className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:1208"
                      comWidth={92}
                      comHeight={30}
                      compLeft={50}
                      compRight={0}
                      compType="Text"
                    >{`Privacy Policy`}</Text>
                    <Text
                      className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:1211"
                      comWidth={56}
                      comHeight={30}
                      compLeft={50}
                      compRight={0}
                      compType="Text"
                    >{`Sitemap`}</Text>
                  </Row>
                  <Text
                    className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900 text-right w-[auto]"
                    compId="25:1215"
                    comWidth={186}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Made with ♥ by Peterdraw`}</Text>
                </Row>
              </Column>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default LatestEventPage;

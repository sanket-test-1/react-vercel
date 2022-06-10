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
} from "components";

const HomepagePage = () => {
  return (
    <>
      <Column
        className="bg-white_A700 font-cairo mx-[auto] w-[100%]"
        compId="1:14"
        comWidth={1920}
        comHeight={10636}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="lg:mb-[15px] xl:mb-[17px] 2xl:mb-[19px] 3xl:mb-[23px] mb-[26px] w-[100%]"
          compId="228"
          comWidth={1920}
          comHeight={10610}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Column
            className="w-[100%]"
            compId="275"
            comWidth={1920}
            comHeight={10054}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <header
              className="w-[100%]"
              compId="14"
              comWidth={1920}
              comHeight={191}
              compLeft={0}
              compRight={0}
              compType="AppBar"
            >
              <Column
                className="w-[100%]"
                compId="1:597"
                comWidth={1920}
                comHeight={191}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="bg-bluegray_800 w-[100%]"
                  compId="127"
                  comWidth={1920}
                  comHeight={61}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-start justify-start 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]"
                    compId="126"
                    comWidth={1920}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_telephonecall.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="25:194"
                      comWidth={24}
                      comHeight={24}
                      compLeft={150}
                      compRight={0}
                      compType="Image"
                      alt="telephonecall"
                    />
                    <Text
                      className="cursor-pointer hover:font-bold font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[21px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_50 text-left w-[auto]"
                      compId="25:198"
                      comWidth={97}
                      comHeight={30}
                      compLeft={21}
                      compRight={0}
                      compType="Text"
                    >{`+12 345 6789`}</Text>
                    <Image
                      src={"images/img_inbox21.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="25:210"
                      comWidth={24}
                      comHeight={24}
                      compLeft={56}
                      compRight={0}
                      compType="Image"
                      alt="inbox21"
                    />
                    <Text
                      className="cursor-pointer hover:font-bold font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[21px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_50 text-left w-[auto]"
                      compId="25:201"
                      comWidth={142}
                      comHeight={30}
                      compLeft={21}
                      compRight={0}
                      compType="Text"
                    >{`support@elmna.com`}</Text>
                    <Row
                      className="items-center justify-center lg:ml-[539px] xl:ml-[617px] 2xl:ml-[694px] 3xl:ml-[832px] ml-[925px] w-[10%]"
                      compId="328"
                      comWidth={194}
                      comHeight={30}
                      compLeft={925}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="cursor-pointer hover:font-bold font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_50 text-left w-[auto]"
                        compId="18:48"
                        comWidth={79}
                        comHeight={30}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Help Center`}</Text>
                      <Text
                        className="cursor-pointer hover:font-bold font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_50 text-left w-[auto]"
                        compId="18:49"
                        comWidth={31}
                        comHeight={30}
                        compLeft={20}
                        compRight={0}
                        compType="Text"
                      >{`Blog`}</Text>
                      <Text
                        className="cursor-pointer hover:font-bold font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_50 text-left w-[auto]"
                        compId="18:50"
                        comWidth={44}
                        comHeight={30}
                        compLeft={20}
                        compRight={0}
                        compType="Text"
                      >{`Career`}</Text>
                    </Row>
                    <Text
                      className="cursor-pointer hover:font-bold font-bold lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] ml-[68px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_50 text-left w-[auto]"
                      compId="18:51"
                      comWidth={20}
                      comHeight={30}
                      compLeft={68}
                      compRight={0}
                      compType="Text"
                    >{`EN`}</Text>
                    <Image
                      src={"images/img_chevron1.svg"}
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] 3xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      compId="18:52"
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
                    compId="18:1"
                    comWidth={1920}
                    comHeight={1}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                </Column>
                <Column
                  className="bg-bluegray_700 w-[100%]"
                  compId="130"
                  comWidth={1920}
                  comHeight={130}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-start lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] w-[100%]"
                    compId="129"
                    comWidth={1920}
                    comHeight={72}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_logo.svg"}
                      className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] h-[72px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] object-contain w-[10%]"
                      compId="1:619"
                      comWidth={198}
                      comHeight={72}
                      compLeft={150}
                      compRight={0}
                      compType="Image"
                      alt="logo"
                    />
                    <Row
                      className="items-center justify-center 3xl:ml-[105px] ml-[117px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[87px] lg:my-[11px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] my-[19px] w-[32%]"
                      compId="329"
                      comWidth={609}
                      comHeight={34}
                      compLeft={117}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_50 text-left w-[auto]"
                        compId="1:613"
                        comWidth={47}
                        comHeight={34}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`About`}</Text>
                      <Row
                        className="items-center justify-center lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[49px] w-[27%]"
                        compId="16:5"
                        comWidth={165}
                        comHeight={34}
                        compLeft={49}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_50 text-left w-[auto]"
                          compId="1:614"
                          comWidth={142}
                          comHeight={34}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Program & Events`}</Text>
                        <Image
                          src={"images/img_chevron1_1.svg"}
                          className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] ml-[7px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                          compId="16:3"
                          comWidth={16}
                          comHeight={16}
                          compLeft={7}
                          compRight={0}
                          compType="Image"
                          alt="chevron1"
                        />
                      </Row>
                      <Text
                        className="font-bold lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_50 text-left w-[auto]"
                        compId="1:617"
                        comWidth={101}
                        comHeight={34}
                        compLeft={50}
                        compRight={0}
                        compType="Text"
                      >{`Alumni Story`}</Text>
                      <Text
                        className="font-bold lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_50 text-left w-[auto]"
                        compId="1:615"
                        comWidth={149}
                        comHeight={34}
                        compLeft={48}
                        compRight={0}
                        compType="Text"
                      >{`Career Oppurtunity`}</Text>
                    </Row>
                    <Image
                      src={"images/img_search91.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[159px] xl:ml-[182px] 2xl:ml-[205px] 3xl:ml-[246px] ml-[274px] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="1:609"
                      comWidth={24}
                      comHeight={24}
                      compLeft={274}
                      compRight={0}
                      compType="Image"
                      alt="search91"
                    />
                    <Button
                      className="border border-gray_300_33 border-solid font-bold lg:ml-[22px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] ml-[39px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] 2xl:py-[10px] 3xl:py-[13px] py-[14.545px] lg:py-[8px] xl:py-[9px] rounded-radius58 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_50 text-center w-[9%]"
                      compId="15:0"
                      comWidth={178}
                      comHeight={60}
                      compLeft={39}
                      compRight={0}
                      compType="Button"
                    >{`Sign In`}</Button>
                    <Button
                      className="bg-gray_300_33 font-bold lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] ml-[18px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] 2xl:py-[10px] 3xl:py-[13px] py-[14.545px] lg:py-[8px] xl:py-[9px] rounded-radius58 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_300 w-[8%]"
                      compId="1:600"
                      comWidth={163}
                      comHeight={60}
                      compLeft={18}
                      compRight={0}
                      compType="Button"
                    >{`Join Now`}</Button>
                  </Row>
                  <Line
                    className="bg-bluegray_600 h-[1px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[100%]"
                    compId="15:9"
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
              className="items-center justify-start w-[100%]"
              compId="1:134"
              comWidth={1920}
              comHeight={9864}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Stack
                className="lg:h-[475px] xl:h-[544px] 2xl:h-[612px] 3xl:h-[734px] h-[814.27px] w-[100%]"
                compId="277"
                comWidth={1920}
                comHeight={814.27}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_background.svg"}
                  className="absolute lg:h-[475px] xl:h-[544px] 2xl:h-[612px] 3xl:h-[734px] h-[814.27px] inset-[0] object-cover w-[100%]"
                  compId="18:33"
                  comWidth={1920}
                  comHeight={814.27}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="background"
                />
                <Row
                  className="absolute bottom-[10%] inset-x-[0] items-start justify-start mx-[auto] w-[86%]"
                  compId="134"
                  comWidth={1654}
                  comHeight={532.98}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="items-start justify-start lg:mb-[25px] xl:mb-[28px] 2xl:mb-[32px] 3xl:mb-[39px] mb-[43.43px] w-[42%]"
                    compId="133"
                    comWidth={692}
                    comHeight={489.55}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-center justify-start lg:mx-[19px] xl:mx-[22px] 2xl:mx-[25px] 3xl:mx-[30px] mx-[34px] w-[55%]"
                      compId="18:32"
                      comWidth={383}
                      comHeight={31.58}
                      compLeft={34}
                      compRight={34}
                      compType="Row"
                    >
                      <Text
                        className="font-semibold xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] text-[17px] lg:text-[9px] text-left text-white_A700 uppercase w-[auto]"
                        compId="1:590"
                        comWidth={187}
                        comHeight={31.58}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`best place for alumni`}</Text>
                      <Line
                        className="bg-gray_300 h-[0.99px] xl:mb-[10px] 3xl:mb-[14px] mb-[15.78px] lg:mb-[9px] ml-[11px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] 3xl:mt-[13px] mt-[14.81px] lg:mt-[8px] xl:mt-[9px] 2xl:my-[11px] w-[48%]"
                        compId="18:31"
                        comWidth={185}
                        comHeight={0.99}
                        compLeft={11}
                        compRight={0}
                        compType="Line"
                      />
                    </Row>
                    <Column
                      className="font-lora lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[38px] mt-[42.45px] w-[100%]"
                      compId="331"
                      comWidth={692}
                      comHeight={236.88}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-between w-[100%]"
                        compId="132"
                        comWidth={692}
                        comHeight={236.88}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-normal xl:mb-[111px] 2xl:mb-[125px] 3xl:mb-[151px] mb-[167.79px] lg:mb-[97px] not-italic lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-left text-white_A700 w-[auto]"
                          compId="18:37"
                          comWidth={26}
                          comHeight={69.09}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`“`}</Text>
                        <Stack
                          className="lg:h-[139px] xl:h-[159px] 2xl:h-[178px] 3xl:h-[214px] h-[236.88px] w-[95%]"
                          compId="279"
                          comWidth={658}
                          comHeight={236.88}
                          compLeft={0}
                          compRight={0}
                          compType="Stack"
                        >
                          <Text
                            className="absolute font-bold inset-[0] lg:leading-[46px] xl:leading-[53px] 2xl:leading-[60px] 3xl:leading-[72px] leading-[80.00px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-left text-white_A700 w-[100%]"
                            compId="1:589"
                            comWidth={658}
                            comHeight={236.88}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`Find your career opportunities with the Elmna’s community`}</Text>
                          <Text
                            className="absolute bottom-[0] font-normal not-italic right-[8%] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-left text-white_A700 w-[auto]"
                            compId="18:38"
                            comWidth={26}
                            comHeight={69.09}
                            compLeft={0}
                            compRight={55}
                            compType="Text"
                          >{`“`}</Text>
                        </Stack>
                      </Row>
                    </Column>
                    <Text
                      className="font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[21.71px] lg:mx-[19px] xl:mx-[22px] 2xl:mx-[25px] 3xl:mx-[30px] mx-[34px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-left text-white_A700 w-[77%]"
                      compId="1:596"
                      comWidth={531}
                      comHeight={55.27}
                      compLeft={34}
                      compRight={34}
                      compType="Text"
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                    <Text
                      className="bg-gray_300 font-bold leading-[normal] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[38px] mt-[42.44px] lg:mx-[19px] xl:mx-[22px] 2xl:mx-[25px] 3xl:mx-[30px] mx-[34px] lg:px-[20px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] px-[35px] 3xl:py-[11px] py-[12.830017px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius38 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-black_900 text-center w-[28%]"
                      compId="1:591"
                      comWidth={197}
                      comHeight={59.22}
                      compLeft={34}
                      compRight={34}
                      compType="Text"
                    >{`Learn More`}</Text>
                  </Column>
                  <Image
                    src={"images/img_lines.svg"}
                    className="lg:h-[23px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] h-[38.49px] lg:mb-[53px] xl:mb-[61px] 2xl:mb-[68px] 3xl:mb-[82px] mb-[91.79px] lg:ml-[29px] xl:ml-[34px] 2xl:ml-[38px] 3xl:ml-[45px] ml-[51px] lg:mt-[234px] xl:mt-[268px] 2xl:mt-[302px] 3xl:mt-[362px] mt-[402.7px] object-contain w-[5%]"
                    compId="18:27"
                    comWidth={77}
                    comHeight={38.49}
                    compLeft={51}
                    compRight={0}
                    compType="Image"
                    alt="lines"
                  />
                  <Image
                    src={"images/img_icon.svg"}
                    className="3xl:h-[118px] h-[130.28px] lg:h-[76px] xl:h-[87px] 2xl:h-[98px] lg:ml-[391px] xl:ml-[447px] 2xl:ml-[503px] 3xl:ml-[604px] ml-[671px] lg:mt-[234px] xl:mt-[268px] 2xl:mt-[302px] 3xl:mt-[362px] mt-[402.7px] object-contain w-[8%]"
                    compId="18:3"
                    comWidth={132}
                    comHeight={130.28}
                    compLeft={671}
                    compRight={0}
                    compType="Image"
                    alt="icon"
                  />
                  <Image
                    src={"images/img_sliderindicator.svg"}
                    className="lg:h-[114px] xl:h-[130px] 2xl:h-[146px] 3xl:h-[176px] h-[194.44px] lg:mb-[134px] xl:mb-[153px] 2xl:mb-[172px] 3xl:mb-[207px] mb-[229.97px] 3xl:ml-[11px] ml-[13px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[108.57px] lg:mt-[63px] xl:mt-[72px] 2xl:mt-[81px] 3xl:mt-[97px] object-contain w-[1%]"
                    compId="1:517"
                    comWidth={18}
                    comHeight={194.44}
                    compLeft={13}
                    compRight={0}
                    compType="Image"
                    alt="sliderIndicator"
                  />
                </Row>
              </Stack>
              <Row
                className="bg-black_900 items-center justify-start mt-[1px] w-[100%]"
                compId="146"
                comWidth={1920}
                comHeight={268.46}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <List
                  className="lg:gap-[30px] xl:gap-[35px] 2xl:gap-[39px] 3xl:gap-[47px] gap-[53.00px] grid grid-cols-[repeat(2,_1fr_1px)_1fr] lg:mb-[38px] xl:mb-[43px] 2xl:mb-[49px] 3xl:mb-[58px] mb-[65.45px] min-h-[auto] 2xl:ml-[111px] 3xl:ml-[134px] ml-[149px] lg:ml-[86px] xl:ml-[99px] lg:mt-[39px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] mt-[67.11px] w-[84%]"
                  compId="327"
                  comWidth={1617}
                  comHeight={135.90002}
                  compLeft={149}
                  compRight={0}
                  compType="List"
                  orientation="horizontal"
                >
                  <Row
                    className="items-start justify-between xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] mb-[5.62px] 3xl:mb-[5px] w-[100%]"
                    compId="137"
                    comWidth={497}
                    comHeight={130.28}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="items-center justify-start lg:mb-[18px] xl:mb-[21px] 2xl:mb-[23px] 3xl:mb-[28px] mb-[31.57px] w-[14%]"
                      compId="280"
                      comWidth={72}
                      comHeight={98.71}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold font-lora lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] ml-[3px] lg:mr-[2px] 3xl:mr-[3px] 2xl:mr-[3px] mr-[4px] xl:mx-[2px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-center text-gray_300 w-[auto]"
                        compId="18:43"
                        comWidth={65}
                        comHeight={76}
                        compLeft={3}
                        compRight={4}
                        compType="Text"
                      >{`24`}</Text>
                      <Text
                        className="font-cairo font-semibold mx-[auto] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-center text-gray_300 w-[auto]"
                        compId="18:44"
                        comWidth={72}
                        comHeight={27.64}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`November`}</Text>
                    </Column>
                    <Column
                      className="items-start justify-start w-[80%]"
                      compId="136"
                      comWidth={399}
                      comHeight={130.28003}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-cairo font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-left text-yellow_600 w-[auto]"
                        compId="18:46"
                        comWidth={179}
                        comHeight={27.64}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`08:00 AM - 04:30 PM`}</Text>
                      <Text
                        className="font-lora font-medium mt-[10.86px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                        compId="18:45"
                        comWidth={399}
                        comHeight={30.6}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Weekend holiday with Elmna Club’s`}</Text>
                      <Text
                        className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5.91px] 3xl:mt-[5px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[89%]"
                        compId="18:47"
                        comWidth={355}
                        comHeight={55.27}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...`}</Text>
                    </Column>
                  </Row>
                  <Line
                    className="self-center w-[1px] h-[163.84px] bg-gray_900 lg:h-[96px] xl:h-[110px] 2xl:h-[123px] 3xl:h-[148px]"
                    compId="25:189"
                    comWidth={1}
                    comHeight={163.84}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Row
                    className="items-start justify-center xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] mb-[5.62px] 3xl:mb-[5px] w-[100%]"
                    compId="140"
                    comWidth={454}
                    comHeight={130.28}
                    compLeft={106}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="items-center justify-start lg:mb-[18px] xl:mb-[21px] 2xl:mb-[23px] 3xl:mb-[28px] mb-[31.57px] w-[16%]"
                      compId="281"
                      comWidth={72}
                      comHeight={98.71}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold font-lora ml-[1px] lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-center text-gray_300 w-[auto]"
                        compId="25:175"
                        comWidth={67}
                        comHeight={76}
                        compLeft={2}
                        compRight={3}
                        compType="Text"
                      >{`28`}</Text>
                      <Text
                        className="font-cairo font-semibold mx-[auto] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-center text-gray_300 w-[auto]"
                        compId="25:176"
                        comWidth={72}
                        comHeight={27.64}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`November`}</Text>
                    </Column>
                    <Column
                      className="items-start justify-start lg:ml-[15px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] ml-[27px] w-[78%]"
                      compId="139"
                      comWidth={355}
                      comHeight={130.28003}
                      compLeft={27}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-cairo font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-left text-yellow_600 w-[auto]"
                        compId="25:178"
                        comWidth={179}
                        comHeight={27.64}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`08:00 AM - 04:30 PM`}</Text>
                      <Text
                        className="font-lora font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10.86px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                        compId="25:177"
                        comWidth={332}
                        comHeight={30.6}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Club Sponsorships 2020-2021`}</Text>
                      <Text
                        className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5.91px] 3xl:mt-[5px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[100%]"
                        compId="25:179"
                        comWidth={355}
                        comHeight={55.27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...`}</Text>
                    </Column>
                  </Row>
                  <Line
                    className="self-center w-[1px] h-[163.84px] bg-gray_900 lg:h-[96px] xl:h-[110px] 2xl:h-[123px] 3xl:h-[148px]"
                    compId="25:189"
                    comWidth={1}
                    comHeight={163.84}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                  <Row
                    className="items-start justify-between xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5.62px] 3xl:mt-[5px] w-[100%]"
                    compId="143"
                    comWidth={454}
                    comHeight={130.28}
                    compLeft={106}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="items-center justify-start lg:mb-[18px] xl:mb-[21px] 2xl:mb-[23px] 3xl:mb-[28px] mb-[31.58px] w-[16%]"
                      compId="282"
                      comWidth={72}
                      comHeight={98.7}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold font-lora ml-[1px] lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-center text-gray_300 w-[auto]"
                        compId="212:3"
                        comWidth={67}
                        comHeight={76}
                        compLeft={2}
                        compRight={3}
                        compType="Text"
                      >{`28`}</Text>
                      <Text
                        className="font-cairo font-semibold mx-[auto] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-center text-gray_300 w-[auto]"
                        compId="212:4"
                        comWidth={72}
                        comHeight={27.64}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`November`}</Text>
                    </Column>
                    <Column
                      className="items-start justify-start w-[78%]"
                      compId="142"
                      comWidth={355}
                      comHeight={130.28003}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-cairo font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-left text-yellow_600 w-[auto]"
                        compId="212:6"
                        comWidth={179}
                        comHeight={27.64}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`08:00 AM - 04:30 PM`}</Text>
                      <Text
                        className="font-lora font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10.85px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-white_A700 w-[auto]"
                        compId="212:5"
                        comWidth={332}
                        comHeight={30.6}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Club Sponsorships 2020-2021`}</Text>
                      <Text
                        className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5.92px] 3xl:mt-[5px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[100%]"
                        compId="212:7"
                        comWidth={355}
                        comHeight={55.27}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...`}</Text>
                    </Column>
                  </Row>
                </List>
              </Row>
              <Stack
                className="3xl:h-[1103px] h-[1223.87px] lg:h-[714px] xl:h-[817px] 2xl:h-[919px] 3xl:mt-[106px] mt-[118.44px] lg:mt-[69px] xl:mt-[79px] 2xl:mt-[88px] w-[100%]"
                compId="284"
                comWidth={1920}
                comHeight={1223.87}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Stack
                  className="absolute 3xl:h-[1103px] h-[1223.87px] lg:h-[714px] xl:h-[817px] 2xl:h-[919px] inset-[0] w-[100%]"
                  compId="286"
                  comWidth={1920}
                  comHeight={1223.87}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Stack
                    className="absolute 3xl:h-[1103px] h-[1223.87px] lg:h-[714px] xl:h-[817px] 2xl:h-[919px] inset-[0] w-[100%]"
                    compId="288"
                    comWidth={1920}
                    comHeight={1223.87}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <Image
                      src={"images/img_background_1.svg"}
                      className="absolute lg:h-[533px] xl:h-[610px] 2xl:h-[686px] 3xl:h-[823px] h-[912.97px] object-cover top-[0] w-[100%]"
                      compId="1:397"
                      comWidth={1920}
                      comHeight={912.97}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="background"
                    />
                    <Image
                      src={"images/img_image.svg"}
                      className="absolute bottom-[12%] lg:h-[328px] xl:h-[375px] 2xl:h-[422px] 3xl:h-[506px] h-[561.6px] object-cover w-[100%]"
                      compId="25:107"
                      comWidth={1920}
                      comHeight={561.6}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="image"
                    />
                    <Stack
                      className="absolute bottom-[0] lg:h-[224px] xl:h-[257px] 2xl:h-[289px] 3xl:h-[346px] h-[383.93994px] right-[8%] w-[35%]"
                      compId="290"
                      comWidth={669}
                      comHeight={383.93994}
                      compLeft={0}
                      compRight={150}
                      compType="Stack"
                    >
                      <div
                        className="absolute bg-bluegray_700 lg:h-[224px] xl:h-[257px] 2xl:h-[289px] 3xl:h-[346px] h-[383.94px] inset-[0] justify-center m-[auto] rounded-radius16 shadow-bs w-[68%]"
                        compId="25:108"
                        comWidth={455}
                        comHeight={383.94}
                        compLeft={107}
                        compRight={107}
                        compType="View"
                      ></div>
                      <Column
                        className="absolute bg-gradient  inset-[0] items-center justify-end rounded-radius16 w-[100%]"
                        compId="150"
                        comWidth={669}
                        comHeight={383.94}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="items-center justify-between lg:mt-[37px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] mt-[65.14px] mx-[auto] w-[78%]"
                          compId="25:133"
                          comWidth={522}
                          comHeight={126.33}
                          compLeft={51}
                          compRight={51}
                          compType="Row"
                        >
                          <Column
                            className="items-center w-[14%]"
                            compId="25:114"
                            comWidth={71}
                            comHeight={126.33}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-bold font-lora mx-[auto] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-center text-white_A700 w-[auto]"
                              compId="25:109"
                              comWidth={71}
                              comHeight={76}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`02`}</Text>
                            <Text
                              className="font-cairo font-normal mx-[auto] not-italic lg:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] text-[27px] text-center text-gray_300 w-[auto]"
                              compId="25:110"
                              comWidth={57}
                              comHeight={50.34}
                              compLeft={7}
                              compRight={7}
                              compType="Text"
                            >{`Days`}</Text>
                          </Column>
                          <Column
                            className="items-center w-[11%]"
                            compId="25:115"
                            comWidth={58}
                            comHeight={126.33}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-bold font-lora mx-[auto] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-center text-white_A700 w-[auto]"
                              compId="25:116"
                              comWidth={58}
                              comHeight={76}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`14`}</Text>
                            <Text
                              className="font-cairo font-normal ml-[1px] not-italic lg:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] text-[27px] text-center text-gray_300 w-[auto]"
                              compId="25:117"
                              comWidth={57}
                              comHeight={50.34}
                              compLeft={1}
                              compRight={0}
                              compType="Text"
                            >{`Hour`}</Text>
                          </Column>
                          <Column
                            className="items-center w-[16%]"
                            compId="25:120"
                            comWidth={81}
                            comHeight={126.33}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-bold font-lora mx-[auto] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-center text-white_A700 w-[auto]"
                              compId="25:118"
                              comWidth={69}
                              comHeight={76}
                              compLeft={6}
                              compRight={6}
                              compType="Text"
                            >{`36`}</Text>
                            <Text
                              className="font-cairo font-normal mx-[auto] not-italic lg:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] text-[27px] text-center text-gray_300 w-[auto]"
                              compId="25:119"
                              comWidth={81}
                              comHeight={50.34}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`Minute`}</Text>
                          </Column>
                          <Column
                            className="items-center w-[18%]"
                            compId="25:121"
                            comWidth={96}
                            comHeight={126.33}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-bold font-lora mx-[auto] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-center text-white_A700 w-[auto]"
                              compId="25:122"
                              comWidth={66}
                              comHeight={76}
                              compLeft={15}
                              compRight={15}
                              compType="Text"
                            >{`54`}</Text>
                            <Text
                              className="font-cairo font-normal mx-[auto] not-italic lg:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] text-[27px] text-center text-gray_300 w-[auto]"
                              compId="25:123"
                              comWidth={96}
                              comHeight={50.34}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`Seconds`}</Text>
                          </Column>
                        </Row>
                        <Line
                          className="bg-bluegray_601 h-[0.99px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[21.72px] mx-[auto] rounded-radius16 w-[85%]"
                          compId="25:148"
                          comWidth={567}
                          comHeight={0.99}
                          compLeft={51}
                          compRight={51}
                          compType="Line"
                        />
                        <Row
                          className="items-end justify-start lg:mb-[29px] xl:mb-[33px] 2xl:mb-[37px] 3xl:mb-[45px] mb-[50.34px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48.36px] w-[100%]"
                          compId="149"
                          comWidth={669}
                          comHeight={71.06006}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Column
                            className="items-start justify-start lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] w-[39%]"
                            compId="151"
                            comWidth={262}
                            comHeight={71.0603}
                            compLeft={50}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-semibold lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-[28px] text-gray_300 text-left w-[auto]"
                              compId="25:146"
                              comWidth={262}
                              comHeight={31.58}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`November 28th, 2020`}</Text>
                            <Text
                              className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7.9px] 3xl:mt-[7px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[auto]"
                              compId="25:147"
                              comWidth={208}
                              comHeight={31.58}
                              compLeft={0}
                              compRight={10}
                              compType="Text"
                            >{`Monday, 08:00 AM - 06:00 PM`}</Text>
                          </Column>
                          <Image
                            src={"images/img_btnbell.svg"}
                            className="lg:h-[33px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] h-[55.27px] lg:ml-[51px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] ml-[88px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[14px] mt-[15.79px] lg:mt-[9px] object-contain w-[8%]"
                            compId="25:149"
                            comWidth={56}
                            comHeight={55.27}
                            compLeft={88}
                            compRight={0}
                            compType="Image"
                            alt="btnBell"
                          />
                          <Text
                            className="bg-gray_300 font-bold leading-[normal] lg:ml-[5px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] ml-[9px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[14px] mt-[15.79px] lg:mt-[9px] pb-[10.8498535px] pt-[10.860107px] lg:px-[20px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] px-[35px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius70 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-black_901 text-center w-[23%]"
                            compId="25:143"
                            comWidth={154}
                            comHeight={55.27}
                            compLeft={9}
                            compRight={0}
                            compType="Text"
                          >{`REGISTER`}</Text>
                        </Row>
                      </Column>
                    </Stack>
                  </Stack>
                  <Column
                    className="absolute inset-x-[0] mx-[auto] top-[5%] w-[71%]"
                    compId="148"
                    comWidth={1369}
                    comHeight={387.88}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-center justify-start w-[100%]"
                      compId="291"
                      comWidth={1369}
                      comHeight={216.15}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-semibold mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-bluegray_700 text-center uppercase w-[auto]"
                        compId="1:443"
                        comWidth={200}
                        comHeight={44.41}
                        compLeft={283}
                        compRight={283}
                        compType="Text"
                      >{`FEATURED EVENTS`}</Text>
                      <Stack
                        className="font-lora lg:h-[102px] xl:h-[116px] 2xl:h-[131px] 3xl:h-[157px] h-[173.71px] mb-[0] lg:ml-[165px] 2xl:ml-[212px] 3xl:ml-[254px] ml-[283px] lg:mr-[164px] 2xl:mr-[211px] 3xl:mr-[253px] mr-[282px] xl:mx-[188px] w-[59%]"
                        compId="293"
                        comWidth={804}
                        comHeight={173.71}
                        compLeft={283}
                        compRight={282}
                        compType="Stack"
                      >
                        <Image
                          src={"images/img_circleelement.svg"}
                          className="absolute lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56.48px] left-[11%] object-contain top-[0] w-[9%]"
                          compId="1:422"
                          comWidth={74.68}
                          comHeight={56.48}
                          compLeft={88}
                          compRight={0}
                          compType="Image"
                          alt="circleElement"
                        />
                        <Text
                          className="absolute bottom-[0] capitalize font-bold lg:leading-[46px] xl:leading-[53px] 2xl:leading-[60px] 3xl:leading-[72px] leading-[80.00px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-black_902 text-center w-[100%]"
                          compId="1:444"
                          comWidth={804}
                          comHeight={157.92}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Annual Meetup & Scholarship Presentation`}</Text>
                      </Stack>
                    </Column>
                    <Stack
                      className="2xl:h-[112px] 3xl:h-[134px] h-[148.04px] lg:h-[87px] xl:h-[99px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] mt-[23.69px] w-[100%]"
                      compId="295"
                      comWidth={1369}
                      comHeight={148.04}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Text
                        className="absolute bottom-[0] font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] leading-[32.00px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_700 w-[100%]"
                        compId="1:414"
                        comWidth={1369}
                        comHeight={94.75}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`}</Text>
                      <Row
                        className="absolute inset-x-[0] items-start justify-center mx-[auto] top-[0] w-[33%]"
                        compId="25:131"
                        comWidth={454}
                        comHeight={59.22}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_mapmarker1.svg"}
                          className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[23.69px] lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[29px] mb-[32.57px] xl:mt-[1px] lg:mt-[1px] mt-[2.96px] 3xl:mt-[2px] 2xl:mt-[2px] object-contain w-[5%]"
                          compId="25:127"
                          comWidth={24}
                          comHeight={23.69}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="mapmarker1"
                        />
                        <Text
                          className="font-semibold leading-[normal] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[91%]"
                          compId="25:126"
                          comWidth={415}
                          comHeight={59.22}
                          compLeft={15}
                          compRight={0}
                          compType="Text"
                        >{`832  Thompson Drive, San Fransisco CA 94107, United States`}</Text>
                      </Row>
                    </Stack>
                  </Column>
                </Stack>
                <Row
                  className="absolute bottom-[5%] items-center justify-between left-[8%] w-[47%]"
                  compId="25:165"
                  comWidth={907}
                  comHeight={33.56}
                  compLeft={150}
                  compRight={0}
                  compType="Row"
                >
                  <Row
                    className="items-center justify-start w-[26%]"
                    compId="169:17"
                    comWidth={237}
                    comHeight={33.56}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_rightarrow1.svg"}
                      className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[23.69px] mb-[4.94px] mt-[4.93px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain w-[10%]"
                      compId="25:163"
                      comWidth={24}
                      comHeight={23.69}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="rightarrow1"
                    />
                    <Text
                      className="font-normal lg:ml-[11px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] ml-[19px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_400 text-left w-[auto]"
                      compId="25:167"
                      comWidth={194}
                      comHeight={33.56}
                      compLeft={19}
                      compRight={0}
                      compType="Text"
                    >{`Weekend at Elmna  Camp`}</Text>
                  </Row>
                  <Row
                    className="items-center justify-between w-[39%]"
                    compId="169:18"
                    comWidth={351}
                    comHeight={33.56}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-center underline w-[auto]"
                      compId="25:166"
                      comWidth={302}
                      comHeight={33.56}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`New elmna “Start-up” in distrupt 2020`}</Text>
                    <Image
                      src={"images/img_rightarrow1_1.svg"}
                      className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[23.69px] mb-[4.94px] mt-[4.93px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain w-[7%]"
                      compId="25:161"
                      comWidth={24}
                      comHeight={23.69}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="rightarrow1"
                    />
                  </Row>
                </Row>
              </Stack>
              <Stack
                className="lg:h-[528px] xl:h-[604px] 2xl:h-[679px] 3xl:h-[815px] h-[904.0801px] 3xl:mt-[106px] mt-[118.44px] lg:mt-[69px] xl:mt-[79px] 2xl:mt-[88px] w-[100%]"
                compId="297"
                comWidth={1920}
                comHeight={904.0801}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_background_2.svg"}
                  className="absolute lg:h-[528px] xl:h-[604px] 2xl:h-[679px] 3xl:h-[815px] h-[904.08px] inset-[0] object-cover w-[100%]"
                  compId="1:339"
                  comWidth={1920}
                  comHeight={904.08}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="background"
                />
                <Column
                  className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[83%]"
                  compId="158"
                  comWidth={1602}
                  comHeight={746.17}
                  compLeft={150}
                  compRight={168}
                  compType="Column"
                >
                  <Text
                    className="font-bold font-lora mx-[auto] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-black_902 text-center w-[auto]"
                    compId="1:395"
                    comWidth={462}
                    comHeight={76}
                    compLeft={492}
                    compRight={492}
                    compType="Text"
                  >{`Why Join Elmna`}</Text>
                  <Text
                    className="font-cairo font-normal lg:leading-[14px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] leading-[24.00px] lg:ml-[287px] xl:ml-[328px] 2xl:ml-[369px] 3xl:ml-[443px] ml-[492px] lg:mr-[277px] xl:mr-[316px] 2xl:mr-[356px] 3xl:mr-[427px] mr-[475px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30.6px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_902 text-center w-[40%]"
                    compId="1:394"
                    comWidth={635}
                    comHeight={47.38}
                    compLeft={492}
                    compRight={475}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`}</Text>
                  <Grid
                    className="font-cairo gap-[111px] lg:gap-[64px] xl:gap-[74px] 2xl:gap-[83px] 3xl:gap-[99px] grid grid-cols-3 lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] mt-[71.06px] w-[100%]"
                    compId="325"
                    comWidth={1602}
                    comHeight={521.1299}
                    compLeft={0}
                    compRight={0}
                    compType="Grid"
                  >
                    <Row
                      className="bg-white_A700 items-start justify-start rounded-radius8 w-[100%]"
                      compId="239"
                      comWidth={460}
                      comHeight={245.76}
                      compLeft={0}
                      compRight={1142}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_icon_1.svg"}
                        className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[72px] h-[79.95px] 3xl:mb-[113px] mb-[126.33px] lg:mb-[73px] xl:mb-[84px] 2xl:mb-[94px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] mt-[39.48px] object-contain w-[18%]"
                        compId="1:343"
                        comWidth={81}
                        comHeight={79.95}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="icon"
                      />
                      <Column
                        className="items-start justify-start lg:mb-[29px] xl:mb-[33px] 2xl:mb-[37px] 3xl:mb-[45px] mb-[50.33px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[55px] mt-[61.19px] w-[76%]"
                        compId="238"
                        comWidth={349}
                        comHeight={134.23999}
                        compLeft={8}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-[30px] text-black_900 text-left w-[auto]"
                          compId="1:342"
                          comWidth={153}
                          comHeight={31.58}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Guaranteed`}</Text>
                        <Text
                          className="font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19.75px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900 text-left w-[100%]"
                          compId="1:346"
                          comWidth={349}
                          comHeight={82.91}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                      </Column>
                    </Row>
                    <Row
                      className="bg-white_A700 items-start justify-center rounded-radius8 w-[100%]"
                      compId="241"
                      comWidth={460}
                      comHeight={245.76}
                      compLeft={571}
                      compRight={571}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_icon_2.svg"}
                        className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[72px] h-[79.95px] 3xl:mb-[113px] mb-[126.33px] lg:mb-[73px] xl:mb-[84px] 2xl:mb-[94px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] mt-[39.48px] object-contain w-[18%]"
                        compId="1:380"
                        comWidth={81}
                        comHeight={79.95}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="icon"
                      />
                      <Column
                        className="items-start justify-start lg:mb-[29px] xl:mb-[33px] 2xl:mb-[37px] 3xl:mb-[45px] mb-[50.33px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[55px] mt-[61.19px] w-[76%]"
                        compId="240"
                        comWidth={349}
                        comHeight={134.23999}
                        compLeft={8}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-[30px] text-black_900 text-left w-[auto]"
                          compId="1:379"
                          comWidth={211}
                          comHeight={31.58}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Strong Together`}</Text>
                        <Text
                          className="font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19.75px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900 text-left w-[100%]"
                          compId="1:383"
                          comWidth={349}
                          comHeight={82.91}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                      </Column>
                    </Row>
                    <Row
                      className="bg-white_A700 items-center justify-center rounded-radius8 w-[100%]"
                      compId="243"
                      comWidth={460}
                      comHeight={245.76}
                      compLeft={1142}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_icon_3.svg"}
                        className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[72px] h-[79.95px] 3xl:mb-[113px] mb-[126.33px] lg:mb-[73px] xl:mb-[84px] 2xl:mb-[94px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] mt-[39.48px] object-contain w-[18%]"
                        compId="1:350"
                        comWidth={81}
                        comHeight={79.95}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="icon"
                      />
                      <Column
                        className="items-start lg:mb-[29px] xl:mb-[34px] 2xl:mb-[38px] 3xl:mb-[46px] mb-[51.32px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:mr-[12px] xl:mr-[14px] 2xl:mr-[16px] 3xl:mr-[19px] mr-[22px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[60.21px] w-[76%]"
                        compId="242"
                        comWidth={349}
                        comHeight={134.22974}
                        compLeft={8}
                        compRight={22}
                        compType="Column"
                      >
                        <Text
                          className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-[30px] text-black_900 text-left w-[auto]"
                          compId="1:349"
                          comWidth={156}
                          comHeight={31.58}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Achievment`}</Text>
                        <Text
                          className="font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] mb-[0] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19.74px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900 text-left w-[100%]"
                          compId="1:356"
                          comWidth={349}
                          comHeight={82.91}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                      </Column>
                    </Row>
                    <Row
                      className="bg-white_A700 items-start justify-start rounded-radius8 w-[100%]"
                      compId="245"
                      comWidth={460}
                      comHeight={245.76}
                      compLeft={0}
                      compRight={1142}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_icon_4.svg"}
                        className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[72px] h-[79.95px] 3xl:mb-[113px] mb-[126.33px] lg:mb-[73px] xl:mb-[84px] 2xl:mb-[94px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] mt-[39.48px] object-contain w-[18%]"
                        compId="25:84"
                        comWidth={81}
                        comHeight={79.95}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="icon"
                      />
                      <Column
                        className="items-start justify-start lg:mb-[29px] xl:mb-[33px] 2xl:mb-[37px] 3xl:mb-[45px] mb-[50.33px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[55px] mt-[61.19px] w-[76%]"
                        compId="244"
                        comWidth={349}
                        comHeight={134.23999}
                        compLeft={8}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-[30px] text-black_900 text-left w-[auto]"
                          compId="25:62"
                          comWidth={114}
                          comHeight={31.58}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Learning`}</Text>
                        <Text
                          className="font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19.75px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900 text-left w-[100%]"
                          compId="25:66"
                          comWidth={349}
                          comHeight={82.91}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                      </Column>
                    </Row>
                    <Row
                      className="bg-white_A700 items-start justify-center rounded-radius8 w-[100%]"
                      compId="247"
                      comWidth={460}
                      comHeight={245.76}
                      compLeft={571}
                      compRight={571}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_icon_5.svg"}
                        className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[72px] h-[79.95px] 3xl:mb-[113px] mb-[126.33px] lg:mb-[73px] xl:mb-[84px] 2xl:mb-[94px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] mt-[39.48px] object-contain w-[18%]"
                        compId="25:90"
                        comWidth={81}
                        comHeight={79.95}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="icon"
                      />
                      <Column
                        className="items-start justify-start lg:mb-[29px] xl:mb-[33px] 2xl:mb-[37px] 3xl:mb-[45px] mb-[50.33px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[55px] mt-[61.19px] w-[76%]"
                        compId="246"
                        comWidth={349}
                        comHeight={134.23999}
                        compLeft={8}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-[30px] text-black_900 text-left w-[auto]"
                          compId="25:79"
                          comWidth={161}
                          comHeight={31.58}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Big Network`}</Text>
                        <Text
                          className="font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19.75px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900 text-left w-[100%]"
                          compId="25:83"
                          comWidth={349}
                          comHeight={82.91}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                      </Column>
                    </Row>
                    <Row
                      className="bg-white_A700 items-center justify-center rounded-radius8 w-[100%]"
                      compId="249"
                      comWidth={460}
                      comHeight={245.76}
                      compLeft={1142}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_icon_6.svg"}
                        className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[72px] h-[79.95px] 3xl:mb-[113px] mb-[126.33px] lg:mb-[73px] xl:mb-[84px] 2xl:mb-[94px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] mt-[39.48px] object-contain w-[18%]"
                        compId="25:96"
                        comWidth={81}
                        comHeight={79.95}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="icon"
                      />
                      <Column
                        className="items-start lg:mb-[29px] xl:mb-[34px] 2xl:mb-[38px] 3xl:mb-[46px] mb-[51.32px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:mr-[12px] xl:mr-[14px] 2xl:mr-[16px] 3xl:mr-[19px] mr-[22px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[60.21px] w-[76%]"
                        compId="248"
                        comWidth={349}
                        comHeight={134.22998}
                        compLeft={8}
                        compRight={22}
                        compType="Column"
                      >
                        <Text
                          className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-[30px] text-black_900 text-left w-[auto]"
                          compId="25:69"
                          comWidth={163}
                          comHeight={31.58}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Professional`}</Text>
                        <Text
                          className="font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19.74px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900 text-left w-[100%]"
                          compId="25:76"
                          comWidth={349}
                          comHeight={82.91}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                      </Column>
                    </Row>
                  </Grid>
                </Column>
              </Stack>
              <Column
                className="bg-white_A700 font-lora items-center justify-start 3xl:mt-[106px] mt-[118.44px] lg:mt-[69px] xl:mt-[79px] 2xl:mt-[88px] w-[100%]"
                compId="250"
                comWidth={1920}
                comHeight={354.33}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mt-[46px] xl:mt-[53px] 2xl:mt-[59px] 3xl:mt-[71px] mt-[79.94px] mx-[auto] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-[30px] text-black_902 text-center w-[auto]"
                  compId="25:235"
                  comWidth={236}
                  comHeight={37.51}
                  compLeft={305}
                  compRight={305}
                  compType="Text"
                >{`Our Partnership`}</Text>
                <Image
                  src={"images/img_clientlogo.svg"}
                  className="lg:h-[36px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60.14px] lg:mb-[48px] xl:mb-[55px] 2xl:mb-[62px] 3xl:mb-[74px] mb-[82.98px] lg:mt-[54px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] mt-[93.76px] mx-[auto] object-contain w-[68%]"
                  compId="25:217"
                  comWidth={1308.32}
                  comHeight={60.14}
                  compLeft={305}
                  compRight={305}
                  compType="Image"
                  alt="clientLogo"
                />
              </Column>
              <Stack
                className="font-cairo lg:h-[513px] xl:h-[587px] 2xl:h-[660px] 3xl:h-[792px] h-[878.42px] 3xl:mt-[106px] mt-[118.44px] lg:mt-[69px] xl:mt-[79px] 2xl:mt-[88px] w-[100%]"
                compId="299"
                comWidth={1920}
                comHeight={878.42}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Stack
                  className="absolute lg:h-[513px] xl:h-[587px] 2xl:h-[660px] 3xl:h-[792px] h-[878.42px] inset-[0] w-[100%]"
                  compId="302"
                  comWidth={1920}
                  comHeight={878.42}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_background_3.svg"}
                    className="absolute lg:h-[513px] xl:h-[587px] 2xl:h-[660px] 3xl:h-[792px] h-[878.42px] left-[0] object-contain w-[78%]"
                    compId="25:258"
                    comWidth={1498}
                    comHeight={878.42}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="background"
                  />
                  <Stack
                    className="absolute lg:h-[513px] xl:h-[587px] 2xl:h-[660px] 3xl:h-[792px] h-[878.42px] inset-[0] w-[100%]"
                    compId="304"
                    comWidth={1920}
                    comHeight={878.42}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <Image
                      src={"images/img_maskgroup.svg"}
                      className="absolute lg:h-[513px] xl:h-[587px] 2xl:h-[660px] 3xl:h-[792px] h-[878.42px] left-[0] object-contain w-[78%]"
                      compId="25:259"
                      comWidth={1498}
                      comHeight={878.42}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="MaskGroup"
                    />
                    <Image
                      src={"images/img_image_1.svg"}
                      className="absolute lg:h-[373px] xl:h-[426px] 2xl:h-[479px] 3xl:h-[575px] h-[637.78px] inset-y-[0] my-[auto] object-contain right-[0] w-[34%]"
                      compId="25:278"
                      comWidth={648}
                      comHeight={637.78}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="image"
                    />
                  </Stack>
                </Stack>
                <Column
                  className="absolute bottom-[12%] items-start justify-start left-[8%] w-[50%]"
                  compId="163"
                  comWidth={951}
                  comHeight={619.82}
                  compLeft={150}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="332"
                    comWidth={951}
                    comHeight={245.75977}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Stack
                      className="lg:h-[144px] xl:h-[164px] 2xl:h-[185px] 3xl:h-[222px] h-[245.76px] w-[100%]"
                      compId="306"
                      comWidth={951}
                      comHeight={245.76}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Stack
                        className="absolute bottom-[0] font-lora lg:h-[126px] xl:h-[144px] 2xl:h-[162px] 3xl:h-[194px] h-[215.17px] w-[100%]"
                        compId="308"
                        comWidth={951}
                        comHeight={215.17}
                        compLeft={0}
                        compRight={0}
                        compType="Stack"
                      >
                        <Image
                          src={"images/img_circleelement_1.svg"}
                          className="absolute lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56.48px] object-contain right-[14%] top-[0] w-[8%]"
                          compId="25:283"
                          comWidth={74.68}
                          comHeight={56.48}
                          compLeft={0}
                          compRight={136.32}
                          compType="Image"
                          alt="circleElement"
                        />
                        <Text
                          className="absolute bottom-[0] capitalize font-bold lg:leading-[52px] xl:leading-[60px] 2xl:leading-[67px] 3xl:leading-[81px] leading-[90.00px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-black_900 text-left w-[100%]"
                          compId="25:305"
                          comWidth={951}
                          comHeight={177.66}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Education is a progressive discovery of our own ignorance`}</Text>
                      </Stack>
                      <Text
                        className="absolute font-cairo font-semibold left-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-bluegray_700 text-left top-[0] uppercase w-[auto]"
                        compId="25:304"
                        comWidth={222}
                        comHeight={44.41}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Grandmaster Talk`}</Text>
                    </Stack>
                  </Column>
                  <Text
                    className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] leading-[32.00px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] mt-[23.69px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_700 text-left w-[85%]"
                    compId="25:275"
                    comWidth={805}
                    comHeight={157.92}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`}</Text>
                  <Image
                    src={"images/img_william.svg"}
                    className="lg:h-[37px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[57px] h-[63.17px] ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[43px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] mt-[74.02px] object-contain w-[17%]"
                    compId="25:307"
                    comWidth={161}
                    comHeight={63.17}
                    compLeft={1}
                    compRight={10}
                    compType="Image"
                    alt="William"
                  />
                  <Text
                    className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] mt-[23.68px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-black_902 text-left w-[auto]"
                    compId="25:276"
                    comWidth={113}
                    comHeight={31.58}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`William Durant`}</Text>
                </Column>
              </Stack>
              <Row
                className="bg-white_A700 font-lora items-center justify-evenly 3xl:mt-[106px] mt-[118.44px] lg:mt-[69px] xl:mt-[79px] 2xl:mt-[88px] mx-[auto] rounded-radius6 w-[84%]"
                compId="166"
                comWidth={1620}
                comHeight={355.32}
                compLeft={150}
                compRight={150}
                compType="Row"
              >
                <Column
                  className="lg:mb-[35px] xl:mb-[40px] 2xl:mb-[45px] 3xl:mb-[54px] mb-[60.22px] lg:mt-[36px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[56px] mt-[63.16px] w-[13%]"
                  compId="1:254"
                  comWidth={216}
                  comHeight={231.94}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Stack
                    className="lg:h-[47px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] h-[78.95996px] w-[100%]"
                    compId="333"
                    comWidth={216}
                    comHeight={78.95996}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <Image
                      src={"images/img_user31.svg"}
                      className="absolute lg:h-[47px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] h-[78.96px] left-[29%] object-contain right-[auto] w-[37%]"
                      compId="29:228"
                      comWidth={80}
                      comHeight={78.96}
                      compLeft={62}
                      compRight={62}
                      compType="Image"
                      alt="user31"
                    />
                  </Stack>
                  <Text
                    className="font-bold lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] mt-[33.56px] mx-[auto] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-bluegray_700 text-center w-[auto]"
                    compId="1:255"
                    comWidth={216}
                    comHeight={76}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`345,568`}</Text>
                  <Column
                    className="font-cairo items-start lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] mt-[9.87px] w-[100%]"
                    compId="334"
                    comWidth={216}
                    comHeight={33.56006}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold lg:mx-[40px] xl:mx-[46px] 2xl:mx-[52px] 3xl:mx-[63px] mx-[70px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_700 w-[auto]"
                      compId="1:256"
                      comWidth={65}
                      comHeight={33.56}
                      compLeft={70}
                      compRight={70}
                      compType="Text"
                    >{`Member`}</Text>
                  </Column>
                </Column>
                <Column
                  className="items-start lg:mb-[35px] xl:mb-[40px] 2xl:mb-[45px] 3xl:mb-[54px] mb-[60.22px] lg:mt-[36px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[56px] mt-[63.16px] w-[9%]"
                  compId="1:257"
                  comWidth={150}
                  comHeight={231.94}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_deal1.svg"}
                    className="lg:h-[47px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] h-[78.96px] mx-[auto] object-contain w-[53%]"
                    compId="29:240"
                    comWidth={80}
                    comHeight={78.96}
                    compLeft={35}
                    compRight={35}
                    compType="Image"
                    alt="deal1"
                  />
                  <Text
                    className="font-bold lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] mt-[33.56px] mx-[auto] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-bluegray_700 text-center w-[auto]"
                    compId="1:258"
                    comWidth={150}
                    comHeight={76}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`8,356`}</Text>
                  <Column
                    className="font-cairo items-start lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] mt-[9.87px] w-[100%]"
                    compId="335"
                    comWidth={150}
                    comHeight={33.56006}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold lg:mx-[24px] xl:mx-[28px] 2xl:mx-[31px] 3xl:mx-[37px] mx-[42px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_700 w-[auto]"
                      compId="1:259"
                      comWidth={58}
                      comHeight={33.56}
                      compLeft={42}
                      compRight={42}
                      compType="Text"
                    >{`Partner`}</Text>
                  </Column>
                </Column>
                <Column
                  className="lg:mb-[35px] xl:mb-[40px] 2xl:mb-[45px] 3xl:mb-[54px] mb-[60.22px] lg:mt-[36px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[56px] mt-[63.16px] w-[6%]"
                  compId="1:260"
                  comWidth={104}
                  comHeight={231.94}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="font-lora items-end w-[100%]"
                    compId="336"
                    comWidth={104}
                    comHeight={188.52002}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Image
                      src={"images/img_money11.svg"}
                      className="lg:h-[47px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] h-[78.96px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] lg:mr-[5px] 2xl:mr-[6px] xl:mr-[6px] 3xl:mr-[8px] mr-[9px] object-contain w-[77%]"
                      compId="29:253"
                      comWidth={80}
                      comHeight={78.96}
                      compLeft={15}
                      compRight={9}
                      compType="Image"
                      alt="money11"
                    />
                    <Text
                      className="font-bold lg:ml-[5px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] ml-[9px] lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] mt-[33.56px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-bluegray_700 text-center w-[auto]"
                      compId="1:261"
                      comWidth={92}
                      comHeight={76}
                      compLeft={9}
                      compRight={3}
                      compType="Text"
                    >{`941`}</Text>
                  </Column>
                  <Text
                    className="font-cairo font-semibold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] mt-[9.87px] mx-[auto] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_700 w-[auto]"
                    compId="1:262"
                    comWidth={104}
                    comHeight={33.56}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Sponsorships`}</Text>
                </Column>
                <Column
                  className="items-start lg:mb-[35px] xl:mb-[40px] 2xl:mb-[45px] 3xl:mb-[54px] mb-[60.22px] lg:mt-[36px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[56px] mt-[63.16px] w-[6%]"
                  compId="1:263"
                  comWidth={97}
                  comHeight={231.94}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_calendarsilhou.svg"}
                    className="lg:h-[47px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] h-[78.96px] lg:ml-[5px] xl:ml-[6px] 3xl:ml-[8px] ml-[9px] lg:mr-[4px] xl:mr-[5px] 3xl:mr-[7px] mr-[8px] 2xl:mx-[6px] object-contain w-[82%]"
                    compId="29:264"
                    comWidth={80}
                    comHeight={78.96}
                    compLeft={9}
                    compRight={8}
                    compType="Image"
                    alt="calendarsilhou"
                  />
                  <Text
                    className="font-bold lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] mt-[33.56px] mx-[auto] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-bluegray_700 text-center w-[auto]"
                    compId="1:264"
                    comWidth={97}
                    comHeight={76}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`678`}</Text>
                  <Column
                    className="font-cairo items-start lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] mt-[9.87px] w-[100%]"
                    compId="337"
                    comWidth={97}
                    comHeight={33.56006}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold lg:mx-[11px] xl:mx-[13px] 2xl:mx-[15px] 3xl:mx-[18px] mx-[20px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_700 w-[auto]"
                      compId="1:265"
                      comWidth={53}
                      comHeight={33.56}
                      compLeft={20}
                      compRight={20}
                      compType="Text"
                    >{`Events`}</Text>
                  </Column>
                </Column>
              </Row>
              <Stack
                className="lg:h-[568px] xl:h-[649px] 2xl:h-[730px] 3xl:h-[876px] h-[972.18994px] 3xl:mt-[106px] mt-[118.43px] lg:mt-[69px] xl:mt-[79px] 2xl:mt-[88px] w-[100%]"
                compId="310"
                comWidth={1920}
                comHeight={972.18994}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_background_4.svg"}
                  className="absolute lg:h-[568px] xl:h-[649px] 2xl:h-[730px] 3xl:h-[876px] h-[972.19px] inset-[0] object-cover w-[100%]"
                  compId="29:319"
                  comWidth={1920}
                  comHeight={972.19}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="background"
                />
                <Column
                  className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[82%]"
                  compId="207"
                  comWidth={1572}
                  comHeight={819.2}
                  compLeft={174}
                  compRight={174}
                  compType="Column"
                >
                  <Text
                    className="font-bold font-lora mx-[auto] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-black_902 text-center w-[auto]"
                    compId="29:321"
                    comWidth={569}
                    comHeight={76}
                    compLeft={494}
                    compRight={494}
                    compType="Text"
                  >{`Career Opportunity`}</Text>
                  <Text
                    className="font-cairo font-normal leading-[normal] 3xl:mt-[11px] mt-[12.83px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] mx-[auto] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900_99 text-center w-[37%]"
                    compId="29:320"
                    comWidth={584}
                    comHeight={52.31}
                    compLeft={494}
                    compRight={494}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`}</Text>
                  <Grid
                    className="font-cairo lg:gap-[23px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] gap-[40px] grid grid-cols-2 lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[63px] mt-[70.08px] w-[100%]"
                    compId="326"
                    comWidth={1572}
                    comHeight={477.6997}
                    compLeft={0}
                    compRight={0}
                    compType="Grid"
                  >
                    <Column
                      className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer rounded-radius20 hover:shadow-bs1 w-[100%]"
                      compId="175"
                      comWidth={766}
                      comHeight={219.11}
                      compLeft={0}
                      compRight={806}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-evenly lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] mt-[29.61px] w-[100%]"
                        compId="173"
                        comWidth={766}
                        comHeight={81.91992}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_companylogo.svg"}
                          className="lg:h-[48px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] h-[81.92px] object-contain w-[11%]"
                          compId="29:515"
                          comWidth={83}
                          comHeight={81.92}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="companyLogo"
                        />
                        <Row
                          className="items-center justify-start lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] mb-[9.87px] xl:mt-[1px] lg:mt-[1px] mt-[2.96px] 3xl:mt-[2px] 2xl:mt-[2px] w-[78%]"
                          compId="167"
                          comWidth={596}
                          comHeight={69.09}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Column
                            className="items-start w-[32%]"
                            compId="168"
                            comWidth={190}
                            comHeight={69.09033}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-bold font-lora lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-black_901 text-left w-[auto]"
                              compId="29:395"
                              comWidth={190}
                              comHeight={30.6}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`Branch Manager`}</Text>
                            <Text
                              className="font-cairo font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] mt-[4.93px] 3xl:mt-[4px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left w-[auto]"
                              compId="29:396"
                              comWidth={142}
                              comHeight={33.56}
                              compLeft={0}
                              compRight={10}
                              compType="Text"
                            >{`Highspeed Studios`}</Text>
                          </Column>
                          <Text
                            className="bg-teal_50 font-bold leading-[normal] mb-[4.94px] lg:ml-[105px] xl:ml-[120px] 2xl:ml-[135px] 3xl:ml-[162px] ml-[180px] mt-[4.93px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] pb-[12.8203125px] lg:pl-[16px] xl:pl-[19px] 2xl:pl-[21px] 3xl:pl-[26px] pl-[29px] pt-[12.839844px] 3xl:py-[11px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius60 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left w-[24%]"
                            compId="32:7"
                            comWidth={143}
                            comHeight={59.22}
                            compLeft={180}
                            compRight={0}
                            compType="Text"
                          >{`Apply Now`}</Text>
                          <Image
                            src={"images/img_btnbookmark.svg"}
                            className="lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[54px] h-[59.22px] mb-[4.94px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23px] mt-[4.93px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain w-[10%]"
                            compId="32:10"
                            comWidth={60}
                            comHeight={59.22}
                            compLeft={23}
                            compRight={0}
                            compType="Image"
                            alt="btnBookmark"
                          />
                        </Row>
                      </Row>
                      <Row
                        className="items-center justify-center lg:mb-[15px] xl:mb-[17px] 2xl:mb-[20px] 3xl:mb-[23px] mb-[26.65px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[13.82px] lg:mt-[8px] xl:mt-[9px] w-[100%]"
                        compId="174"
                        comWidth={766}
                        comHeight={67.10986}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="items-start mt-[1px] w-[27%]"
                          compId="172"
                          comWidth={206}
                          comHeight={66.13}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Column
                            className="w-[100%]"
                            compId="338"
                            comWidth={206}
                            comHeight={36.52002}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Row
                              className="items-end justify-start w-[100%]"
                              compId="171"
                              comWidth={206}
                              comHeight={36.52002}
                              compLeft={0}
                              compRight={0}
                              compType="Row"
                            >
                              <Image
                                src={"images/img_icsalary.svg"}
                                className="lg:h-[17px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27.64px] mb-[1px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7.9px] 3xl:mt-[7px] object-contain w-[14%]"
                                compId="29:373"
                                comWidth={28}
                                comHeight={27.64}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="icSalary"
                              />
                              <Text
                                className="font-semibold xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] ml-[17px] lg:ml-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_900 text-left w-[auto]"
                                compId="29:371"
                                comWidth={161}
                                comHeight={36.52}
                                compLeft={17}
                                compRight={0}
                                compType="Text"
                              >{`$14,000 - $25,000`}</Text>
                            </Row>
                          </Column>
                          <Text
                            className="font-normal lg:mx-[26px] xl:mx-[30px] 2xl:mx-[33px] 3xl:mx-[40px] mx-[45px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                            compId="29:372"
                            comWidth={102}
                            comHeight={29.61}
                            compLeft={45}
                            compRight={45}
                            compType="Text"
                          >{`Monthly Salary`}</Text>
                        </Column>
                        <Column
                          className="items-start mb-[1px] lg:ml-[39px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] ml-[67px] w-[24%]"
                          compId="170"
                          comWidth={186}
                          comHeight={66.13}
                          compLeft={67}
                          compRight={0}
                          compType="Column"
                        >
                          <Column
                            className="w-[100%]"
                            compId="339"
                            comWidth={186}
                            comHeight={36.52002}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Row
                              className="items-center justify-start w-[100%]"
                              compId="169"
                              comWidth={186}
                              comHeight={36.52002}
                              compLeft={0}
                              compRight={0}
                              compType="Row"
                            >
                              <Image
                                src={"images/img_iclocation.svg"}
                                className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[23.69px] xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] mb-[6.91px] 3xl:mb-[6px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5.92px] 3xl:mt-[5px] object-contain w-[13%]"
                                compId="29:380"
                                comWidth={24}
                                comHeight={23.69}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="icLocation"
                              />
                              <Text
                                className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_900 text-left w-[auto]"
                                compId="29:378"
                                comWidth={142}
                                comHeight={36.52}
                                compLeft={20}
                                compRight={0}
                                compType="Text"
                              >{`London, England`}</Text>
                            </Row>
                          </Column>
                          <Text
                            className="font-normal lg:mx-[25px] xl:mx-[29px] 2xl:mx-[33px] 3xl:mx-[39px] mx-[44px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                            compId="29:379"
                            comWidth={58}
                            comHeight={29.61}
                            compLeft={44}
                            compRight={44}
                            compType="Text"
                          >{`Location`}</Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column
                      className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer rounded-radius20 hover:shadow-bs1 w-[100%]"
                      compId="184"
                      comWidth={766}
                      comHeight={219.11}
                      compLeft={806}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-evenly lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] mt-[29.61px] w-[100%]"
                        compId="182"
                        comWidth={766}
                        comHeight={81.91992}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_companylogo.svg"}
                          className="lg:h-[48px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] h-[81.92px] object-contain w-[11%]"
                          compId="32:23"
                          comWidth={83}
                          comHeight={81.92}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="companyLogo"
                        />
                        <Row
                          className="items-center justify-start lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] mb-[9.87px] xl:mt-[1px] lg:mt-[1px] mt-[2.96px] 3xl:mt-[2px] 2xl:mt-[2px] w-[78%]"
                          compId="176"
                          comWidth={596}
                          comHeight={69.09}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Column
                            className="items-start w-[49%]"
                            compId="177"
                            comWidth={293}
                            comHeight={69.09033}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-bold font-lora lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-black_901 text-left w-[auto]"
                              compId="32:41"
                              comWidth={293}
                              comHeight={30.6}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`Sales Marketing Manager`}</Text>
                            <Text
                              className="font-cairo font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] mt-[4.93px] 3xl:mt-[4px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left w-[auto]"
                              compId="32:50"
                              comWidth={155}
                              comHeight={33.56}
                              compLeft={0}
                              compRight={10}
                              compType="Text"
                            >{`Oliver Group London`}</Text>
                          </Column>
                          <Text
                            className="bg-teal_50 font-bold leading-[normal] mb-[4.94px] lg:ml-[44px] xl:ml-[51px] 2xl:ml-[57px] 3xl:ml-[69px] ml-[77px] mt-[4.93px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] pb-[12.8203125px] lg:pl-[16px] xl:pl-[19px] 2xl:pl-[21px] 3xl:pl-[26px] pl-[29px] pt-[12.839844px] 3xl:py-[11px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius60 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left w-[24%]"
                            compId="36:3"
                            comWidth={143}
                            comHeight={59.22}
                            compLeft={77}
                            compRight={0}
                            compType="Text"
                          >{`Apply Now`}</Text>
                          <Image
                            src={"images/img_btnbookmark.svg"}
                            className="lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[54px] h-[59.22px] mb-[4.94px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23px] mt-[4.93px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain w-[10%]"
                            compId="32:45"
                            comWidth={60}
                            comHeight={59.22}
                            compLeft={23}
                            compRight={0}
                            compType="Image"
                            alt="btnBookmark"
                          />
                        </Row>
                      </Row>
                      <Row
                        className="items-center justify-center lg:mb-[15px] xl:mb-[17px] 2xl:mb-[20px] 3xl:mb-[23px] mb-[26.65px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[13.82px] lg:mt-[8px] xl:mt-[9px] w-[100%]"
                        compId="183"
                        comWidth={766}
                        comHeight={67.10986}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="items-start mt-[1px] w-[27%]"
                          compId="181"
                          comWidth={206}
                          comHeight={66.13}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Column
                            className="w-[100%]"
                            compId="340"
                            comWidth={206}
                            comHeight={36.52002}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Row
                              className="items-end justify-start w-[100%]"
                              compId="180"
                              comWidth={206}
                              comHeight={36.52002}
                              compLeft={0}
                              compRight={0}
                              compType="Row"
                            >
                              <Image
                                src={"images/img_icsalary_1.svg"}
                                className="lg:h-[17px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27.64px] mb-[1px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7.9px] 3xl:mt-[7px] object-contain w-[14%]"
                                compId="32:29"
                                comWidth={28}
                                comHeight={27.64}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="icSalary"
                              />
                              <Text
                                className="font-semibold xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] ml-[17px] lg:ml-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_900 text-left w-[auto]"
                                compId="32:27"
                                comWidth={161}
                                comHeight={36.52}
                                compLeft={17}
                                compRight={0}
                                compType="Text"
                              >{`$14,000 - $25,000`}</Text>
                            </Row>
                          </Column>
                          <Text
                            className="font-normal lg:mx-[26px] xl:mx-[30px] 2xl:mx-[33px] 3xl:mx-[40px] mx-[45px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                            compId="32:28"
                            comWidth={102}
                            comHeight={29.61}
                            compLeft={45}
                            compRight={45}
                            compType="Text"
                          >{`Monthly Salary`}</Text>
                        </Column>
                        <Column
                          className="items-start mb-[1px] lg:ml-[39px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] ml-[67px] w-[24%]"
                          compId="179"
                          comWidth={186}
                          comHeight={66.13}
                          compLeft={67}
                          compRight={0}
                          compType="Column"
                        >
                          <Column
                            className="w-[100%]"
                            compId="341"
                            comWidth={186}
                            comHeight={36.52002}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Row
                              className="items-center justify-start w-[100%]"
                              compId="178"
                              comWidth={186}
                              comHeight={36.52002}
                              compLeft={0}
                              compRight={0}
                              compType="Row"
                            >
                              <Image
                                src={"images/img_iclocation_1.svg"}
                                className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[23.69px] xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] mb-[6.91px] 3xl:mb-[6px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5.92px] 3xl:mt-[5px] object-contain w-[13%]"
                                compId="32:35"
                                comWidth={24}
                                comHeight={23.69}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="icLocation"
                              />
                              <Text
                                className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_900 text-left w-[auto]"
                                compId="32:33"
                                comWidth={142}
                                comHeight={36.52}
                                compLeft={20}
                                compRight={0}
                                compType="Text"
                              >{`London, England`}</Text>
                            </Row>
                          </Column>
                          <Text
                            className="font-normal lg:mx-[25px] xl:mx-[29px] 2xl:mx-[33px] 3xl:mx-[39px] mx-[44px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                            compId="32:34"
                            comWidth={58}
                            comHeight={29.61}
                            compLeft={44}
                            compRight={44}
                            compType="Text"
                          >{`Location`}</Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column
                      className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer rounded-radius20 hover:shadow-bs1 w-[100%]"
                      compId="193"
                      comWidth={766}
                      comHeight={219.11}
                      compLeft={0}
                      compRight={806}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-evenly lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] mt-[29.61px] w-[100%]"
                        compId="191"
                        comWidth={766}
                        comHeight={81.91992}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_companylogo.svg"}
                          className="lg:h-[48px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] h-[81.92px] object-contain w-[11%]"
                          compId="32:53"
                          comWidth={83}
                          comHeight={81.92}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="companyLogo"
                        />
                        <Row
                          className="items-center justify-start lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] mb-[9.87px] xl:mt-[1px] lg:mt-[1px] mt-[2.96px] 3xl:mt-[2px] 2xl:mt-[2px] w-[78%]"
                          compId="185"
                          comWidth={596}
                          comHeight={69.09}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Column
                            className="items-start w-[33%]"
                            compId="186"
                            comWidth={194}
                            comHeight={69.08984}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-bold font-lora lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-black_901 text-left w-[auto]"
                              compId="32:71"
                              comWidth={194}
                              comHeight={30.6}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`Business Analyst`}</Text>
                            <Text
                              className="font-cairo font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] mt-[4.93px] 3xl:mt-[4px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left w-[auto]"
                              compId="32:80"
                              comWidth={150}
                              comHeight={33.56}
                              compLeft={0}
                              compRight={10}
                              compType="Text"
                            >{`Merahputih Sutdios`}</Text>
                          </Column>
                          <Text
                            className="bg-teal_50 font-bold leading-[normal] mb-[4.93px] lg:ml-[102px] xl:ml-[117px] 2xl:ml-[132px] 3xl:ml-[158px] ml-[176px] mt-[4.94px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] lg:pl-[16px] xl:pl-[19px] 2xl:pl-[21px] 3xl:pl-[26px] pl-[29px] 3xl:py-[11px] py-[12.830078px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius60 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left w-[24%]"
                            compId="32:72"
                            comWidth={143}
                            comHeight={59.22}
                            compLeft={176}
                            compRight={0}
                            compType="Text"
                          >{`Apply Now`}</Text>
                          <Image
                            src={"images/img_btnbookmark_1.svg"}
                            className="lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[54px] h-[59.22px] mb-[4.93px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23px] mt-[4.94px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain w-[10%]"
                            compId="32:75"
                            comWidth={60}
                            comHeight={59.22}
                            compLeft={23}
                            compRight={0}
                            compType="Image"
                            alt="btnBookmark"
                          />
                        </Row>
                      </Row>
                      <Row
                        className="items-center justify-center lg:mb-[15px] xl:mb-[17px] 2xl:mb-[20px] 3xl:mb-[23px] mb-[26.65px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[13.82px] lg:mt-[8px] xl:mt-[9px] w-[100%]"
                        compId="192"
                        comWidth={766}
                        comHeight={67.10986}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="items-start mt-[1px] w-[27%]"
                          compId="190"
                          comWidth={206}
                          comHeight={66.13}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Column
                            className="w-[100%]"
                            compId="342"
                            comWidth={206}
                            comHeight={36.52002}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Row
                              className="items-end justify-start w-[100%]"
                              compId="189"
                              comWidth={206}
                              comHeight={36.52002}
                              compLeft={0}
                              compRight={0}
                              compType="Row"
                            >
                              <Image
                                src={"images/img_icsalary_2.svg"}
                                className="lg:h-[17px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27.64px] mb-[1px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7.9px] 3xl:mt-[7px] object-contain w-[14%]"
                                compId="32:59"
                                comWidth={28}
                                comHeight={27.64}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="icSalary"
                              />
                              <Text
                                className="font-semibold xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] ml-[17px] lg:ml-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_900 text-left w-[auto]"
                                compId="32:57"
                                comWidth={161}
                                comHeight={36.52}
                                compLeft={17}
                                compRight={0}
                                compType="Text"
                              >{`$14,000 - $25,000`}</Text>
                            </Row>
                          </Column>
                          <Text
                            className="font-normal lg:mx-[26px] xl:mx-[30px] 2xl:mx-[33px] 3xl:mx-[40px] mx-[45px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                            compId="32:58"
                            comWidth={102}
                            comHeight={29.61}
                            compLeft={45}
                            compRight={45}
                            compType="Text"
                          >{`Monthly Salary`}</Text>
                        </Column>
                        <Column
                          className="items-start mb-[1px] lg:ml-[39px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] ml-[67px] w-[24%]"
                          compId="188"
                          comWidth={186}
                          comHeight={66.13}
                          compLeft={67}
                          compRight={0}
                          compType="Column"
                        >
                          <Column
                            className="w-[100%]"
                            compId="343"
                            comWidth={186}
                            comHeight={36.52002}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Row
                              className="items-center justify-start w-[100%]"
                              compId="187"
                              comWidth={186}
                              comHeight={36.52002}
                              compLeft={0}
                              compRight={0}
                              compType="Row"
                            >
                              <Image
                                src={"images/img_iclocation_2.svg"}
                                className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[23.69px] xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] mb-[6.91px] 3xl:mb-[6px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5.92px] 3xl:mt-[5px] object-contain w-[13%]"
                                compId="32:65"
                                comWidth={24}
                                comHeight={23.69}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="icLocation"
                              />
                              <Text
                                className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_900 text-left w-[auto]"
                                compId="32:63"
                                comWidth={142}
                                comHeight={36.52}
                                compLeft={20}
                                compRight={0}
                                compType="Text"
                              >{`London, England`}</Text>
                            </Row>
                          </Column>
                          <Text
                            className="font-normal lg:mx-[25px] xl:mx-[29px] 2xl:mx-[33px] 3xl:mx-[39px] mx-[44px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                            compId="32:64"
                            comWidth={58}
                            comHeight={29.61}
                            compLeft={44}
                            compRight={44}
                            compType="Text"
                          >{`Location`}</Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column
                      className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer rounded-radius20 hover:shadow-bs1 w-[100%]"
                      compId="202"
                      comWidth={766}
                      comHeight={219.11}
                      compLeft={806}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-evenly lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] mt-[29.61px] w-[100%]"
                        compId="200"
                        comWidth={766}
                        comHeight={81.91992}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_companylogo.svg"}
                          className="lg:h-[48px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] h-[81.92px] object-contain w-[11%]"
                          compId="32:83"
                          comWidth={83}
                          comHeight={81.92}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="companyLogo"
                        />
                        <Row
                          className="items-center justify-start lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] mb-[9.87px] xl:mt-[1px] lg:mt-[1px] mt-[2.96px] 3xl:mt-[2px] 2xl:mt-[2px] w-[78%]"
                          compId="194"
                          comWidth={596}
                          comHeight={69.09}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Column
                            className="items-start w-[34%]"
                            compId="195"
                            comWidth={202}
                            comHeight={69.08984}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-bold font-lora lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-black_901 text-left w-[auto]"
                              compId="32:101"
                              comWidth={202}
                              comHeight={30.6}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`Graphic Designer`}</Text>
                            <Text
                              className="font-cairo font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] mt-[4.93px] 3xl:mt-[4px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left w-[auto]"
                              compId="32:110"
                              comWidth={125}
                              comHeight={33.56}
                              compLeft={0}
                              compRight={10}
                              compType="Text"
                            >{`UD. Madju Djaya`}</Text>
                          </Column>
                          <Text
                            className="bg-bluegray_700 font-bold leading-[normal] mb-[4.93px] xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[151px] ml-[168px] lg:ml-[98px] mt-[4.94px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] lg:pl-[16px] xl:pl-[19px] 2xl:pl-[21px] 3xl:pl-[26px] pl-[29px] 3xl:py-[11px] py-[12.830078px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius60 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_300 text-left w-[24%]"
                            compId="36:6"
                            comWidth={143}
                            comHeight={59.22}
                            compLeft={168}
                            compRight={0}
                            compType="Text"
                          >{`Apply Now`}</Text>
                          <Image
                            src={"images/img_btnbookmark_1.svg"}
                            className="lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[54px] h-[59.22px] mb-[4.93px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23px] mt-[4.94px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain w-[10%]"
                            compId="32:105"
                            comWidth={60}
                            comHeight={59.22}
                            compLeft={23}
                            compRight={0}
                            compType="Image"
                            alt="btnBookmark"
                          />
                        </Row>
                      </Row>
                      <Row
                        className="items-center justify-center lg:mb-[15px] xl:mb-[17px] 2xl:mb-[20px] 3xl:mb-[23px] mb-[26.65px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[13.82px] lg:mt-[8px] xl:mt-[9px] w-[100%]"
                        compId="201"
                        comWidth={766}
                        comHeight={67.10986}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="items-start mt-[1px] w-[27%]"
                          compId="199"
                          comWidth={206}
                          comHeight={66.13}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Column
                            className="w-[100%]"
                            compId="344"
                            comWidth={206}
                            comHeight={36.52002}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Row
                              className="items-end justify-start w-[100%]"
                              compId="198"
                              comWidth={206}
                              comHeight={36.52002}
                              compLeft={0}
                              compRight={0}
                              compType="Row"
                            >
                              <Image
                                src={"images/img_icsalary_3.svg"}
                                className="lg:h-[17px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27.64px] mb-[1px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7.9px] 3xl:mt-[7px] object-contain w-[14%]"
                                compId="32:89"
                                comWidth={28}
                                comHeight={27.64}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="icSalary"
                              />
                              <Text
                                className="font-semibold xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] ml-[17px] lg:ml-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_900 text-left w-[auto]"
                                compId="32:87"
                                comWidth={161}
                                comHeight={36.52}
                                compLeft={17}
                                compRight={0}
                                compType="Text"
                              >{`$14,000 - $25,000`}</Text>
                            </Row>
                          </Column>
                          <Text
                            className="font-normal lg:mx-[26px] xl:mx-[30px] 2xl:mx-[33px] 3xl:mx-[40px] mx-[45px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                            compId="32:88"
                            comWidth={102}
                            comHeight={29.61}
                            compLeft={45}
                            compRight={45}
                            compType="Text"
                          >{`Monthly Salary`}</Text>
                        </Column>
                        <Column
                          className="items-start mb-[1px] lg:ml-[39px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] ml-[67px] w-[24%]"
                          compId="197"
                          comWidth={186}
                          comHeight={66.13}
                          compLeft={67}
                          compRight={0}
                          compType="Column"
                        >
                          <Column
                            className="w-[100%]"
                            compId="345"
                            comWidth={186}
                            comHeight={36.52002}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Row
                              className="items-center justify-start w-[100%]"
                              compId="196"
                              comWidth={186}
                              comHeight={36.52002}
                              compLeft={0}
                              compRight={0}
                              compType="Row"
                            >
                              <Image
                                src={"images/img_iclocation_3.svg"}
                                className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[23.69px] xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] mb-[6.91px] 3xl:mb-[6px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5.92px] 3xl:mt-[5px] object-contain w-[13%]"
                                compId="32:95"
                                comWidth={24}
                                comHeight={23.69}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="icLocation"
                              />
                              <Text
                                className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_900 text-left w-[auto]"
                                compId="32:93"
                                comWidth={142}
                                comHeight={36.52}
                                compLeft={20}
                                compRight={0}
                                compType="Text"
                              >{`London, England`}</Text>
                            </Row>
                          </Column>
                          <Text
                            className="font-normal lg:mx-[25px] xl:mx-[29px] 2xl:mx-[33px] 3xl:mx-[39px] mx-[44px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                            compId="32:94"
                            comWidth={58}
                            comHeight={29.61}
                            compLeft={44}
                            compRight={44}
                            compType="Text"
                          >{`Location`}</Text>
                        </Column>
                      </Row>
                    </Column>
                  </Grid>
                  <Text
                    className="bg-teal_50 font-bold font-cairo lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] leading-[34.00px] mb-[0] lg:mt-[40px] xl:mt-[46px] 2xl:mt-[51px] 3xl:mt-[62px] mt-[69.09px] mx-[auto] pb-[13.810059px] pt-[13.819824px] lg:px-[20px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] px-[35px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[8px] xl:py-[9px] rounded-radius60 lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_700 text-center w-[26%]"
                    compId="29:363"
                    comWidth={413}
                    comHeight={61.19}
                    compLeft={494}
                    compRight={494}
                    compType="Text"
                  >{`Load More`}</Text>
                </Column>
              </Stack>
              <Stack
                className="font-cairo lg:h-[423px] xl:h-[483px] 2xl:h-[543px] 3xl:h-[652px] h-[723.46px] 3xl:mt-[110px] mt-[122.39px] lg:mt-[71px] xl:mt-[81px] 2xl:mt-[91px] w-[100%]"
                compId="312"
                comWidth={1920}
                comHeight={723.46}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Column
                  className="absolute bg-bluegray_700 items-start justify-center right-[0] w-[79%]"
                  compId="36:78"
                  comWidth={1508}
                  comHeight={723.46}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start lg:ml-[322px] xl:ml-[368px] 2xl:ml-[415px] 3xl:ml-[497px] ml-[553px] lg:mr-[166px] xl:mr-[190px] 2xl:mr-[214px] 3xl:mr-[257px] mr-[286px] xl:mt-[109px] 2xl:mt-[123px] 3xl:mt-[148px] mt-[164.82px] lg:mt-[96px] w-[44%]"
                    compId="216:2"
                    comWidth={669}
                    comHeight={290.18}
                    compLeft={553}
                    compRight={286}
                    compType="Column"
                  >
                    <Text
                      className="font-cairo font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-left text-yellow_600 uppercase w-[auto]"
                      compId="36:77"
                      comWidth={207}
                      comHeight={44.41}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Alumni Interview`}</Text>
                    <Text
                      className="font-bold font-lora mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8.89px] 3xl:mt-[8px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-gray_300 text-left w-[auto]"
                      compId="36:74"
                      comWidth={431}
                      comHeight={76}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Roberto Karloz`}</Text>
                    <Text
                      className="font-cairo font-normal leading-[normal] 3xl:mt-[11px] mt-[12.83px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[100%]"
                      compId="36:73"
                      comWidth={669}
                      comHeight={148.05}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`}</Text>
                  </Column>
                  <Row
                    className="items-center justify-end xl:mb-[109px] 2xl:mb-[123px] 3xl:mb-[148px] mb-[164.83px] lg:mb-[96px] lg:ml-[322px] xl:ml-[368px] 2xl:ml-[415px] 3xl:ml-[497px] ml-[553px] lg:mr-[255px] xl:mr-[292px] 2xl:mr-[329px] 3xl:mr-[394px] mr-[438.45px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] mt-[44.41px] w-[34%]"
                    compId="164:3"
                    comWidth={516.55}
                    comHeight={59.22}
                    compLeft={553}
                    compRight={438.45}
                    compType="Row"
                  >
                    <Row
                      className="bg-gray_300 items-center justify-center rounded-radius58 w-[45%]"
                      compId="208"
                      comWidth={233}
                      comHeight={59.22}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-bold 3xl:my-[11px] my-[12.83px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-black_900 text-left w-[auto]"
                        compId="36:89"
                        comWidth={86}
                        comHeight={33.56}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Read Story`}</Text>
                      <Image
                        src={"images/img_rightarrow1_2.svg"}
                        className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[23.69px] 3xl:mb-[15px] mb-[17.76px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 3xl:mt-[16px] mt-[17.77px] lg:my-[10px] xl:my-[11px] 2xl:my-[13px] object-contain w-[10%]"
                        compId="36:90"
                        comWidth={24}
                        comHeight={23.69}
                        compLeft={16}
                        compRight={0}
                        compType="Image"
                        alt="rightarrow1"
                      />
                    </Row>
                    <Image
                      src={"images/img_follow.svg"}
                      className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[22.86px] xl:mb-[12px] mb-[18.59px] lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] xl:mt-[11px] mt-[17.77px] lg:my-[10px] 2xl:my-[13px] 3xl:my-[16px] object-contain w-[45%]"
                      compId="36:92"
                      comWidth={233.55}
                      comHeight={22.86}
                      compLeft={50}
                      compRight={0}
                      compType="Image"
                      alt="Follow"
                    />
                  </Row>
                </Column>
                <Image
                  src={"images/img_profile.svg"}
                  className="absolute bottom-[5%] lg:h-[353px] xl:h-[404px] 2xl:h-[454px] 3xl:h-[545px] h-[604.76px] left-[0] object-contain w-[48%]"
                  compId="36:86"
                  comWidth={923}
                  comHeight={604.76}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="profile"
                />
              </Stack>
              <Stack
                className="lg:h-[568px] xl:h-[649px] 2xl:h-[730px] 3xl:h-[876px] h-[972.1904px] 3xl:mt-[111px] mt-[123.37px] lg:mt-[71px] xl:mt-[82px] 2xl:mt-[92px] w-[100%]"
                compId="314"
                comWidth={1920}
                comHeight={972.1904}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_background_4.svg"}
                  className="absolute lg:h-[568px] xl:h-[649px] 2xl:h-[730px] 3xl:h-[876px] h-[972.19px] inset-[0] object-cover w-[100%]"
                  compId="29:271"
                  comWidth={1920}
                  comHeight={972.19}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="background"
                />
                <Column
                  className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[84%]"
                  compId="213"
                  comWidth={1620}
                  comHeight={834.01}
                  compLeft={150}
                  compRight={150}
                  compType="Column"
                >
                  <Text
                    className="font-bold font-lora mx-[auto] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-black_902 text-center w-[auto]"
                    compId="29:273"
                    comWidth={350}
                    comHeight={76}
                    compLeft={518}
                    compRight={518}
                    compType="Text"
                  >{`Latest News`}</Text>
                  <Text
                    className="font-cairo font-normal leading-[normal] 3xl:mt-[11px] mt-[12.83px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] mx-[auto] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900_99 text-center w-[36%]"
                    compId="29:272"
                    comWidth={584}
                    comHeight={52.31}
                    compLeft={518}
                    compRight={518}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`}</Text>
                  <List
                    className="lg:gap-[29px] xl:gap-[34px] 2xl:gap-[38px] 3xl:gap-[45px] gap-[51px] grid grid-cols-3 min-h-[auto] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[53px] mt-[59.22px] w-[100%]"
                    compId="210"
                    comWidth={1620}
                    comHeight={525.0801}
                    compLeft={0}
                    compRight={0}
                    compType="List"
                    orientation="horizontal"
                  >
                    <Column
                      className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer items-start justify-start rounded-radius20 hover:shadow-bs1 w-[100%]"
                      compId="256"
                      comWidth={506}
                      comHeight={525.08}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="347"
                        comWidth={506}
                        comHeight={232.93018}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <div
                          className="bg-gray_401 lg:h-[136px] xl:h-[156px] 2xl:h-[175px] 3xl:h-[210px] h-[232.93px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                          compId="29:276"
                          comWidth={506}
                          comHeight={232.93}
                          compLeft={0}
                          compRight={0}
                          compType="View"
                        ></div>
                      </Column>
                      <Text
                        className="font-lora font-medium lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] leading-[34.00px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[32.57px] lg:mx-[24px] xl:mx-[27px] 2xl:mx-[30px] 3xl:mx-[37px] mx-[41.28px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-[26px] text-black_900 text-left w-[76%]"
                        compId="29:280"
                        comWidth={382.8}
                        comHeight={67.12}
                        compLeft={41.28}
                        compRight={41.28}
                        compType="Text"
                      >{`Elmna’s in Silicon Valley: Finance vs Family`}</Text>
                      <Text
                        className="font-cairo font-semibold 3xl:mt-[11px] mt-[12.83px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:mx-[23px] xl:mx-[27px] 2xl:mx-[30px] 3xl:mx-[36px] mx-[41px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_700 text-left w-[auto]"
                        compId="29:282"
                        comWidth={294}
                        comHeight={27.64}
                        compLeft={41}
                        compRight={41}
                        compType="Text"
                      >{`By Admin, on Nov 23th, 2020  |   1 days ago`}</Text>
                      <Text
                        className="font-cairo font-normal lg:leading-[15px] xl:leading-[17px] 2xl:leading-[19px] 3xl:leading-[23px] leading-[26.00px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[16.77px] lg:mt-[9px] lg:mx-[23px] xl:mx-[27px] 2xl:mx-[30px] 3xl:mx-[36px] mx-[41px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[80%]"
                        compId="29:281"
                        comWidth={407.05}
                        comHeight={51.32}
                        compLeft={41}
                        compRight={41}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...`}</Text>
                      <Text
                        className="font-cairo font-semibold lg:mb-[21px] xl:mb-[25px] 2xl:mb-[28px] 3xl:mb-[33px] mb-[37.5px] 3xl:mt-[11px] mt-[12.84px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:mx-[24px] xl:mx-[27px] 2xl:mx-[30px] 3xl:mx-[37px] mx-[41.28px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left w-[auto]"
                        compId="29:283"
                        comWidth={84}
                        comHeight={33.56}
                        compLeft={41.28}
                        compRight={41.28}
                        compType="Text"
                      >{`Read more`}</Text>
                    </Column>
                    <Column
                      className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer items-start justify-start rounded-radius20 hover:shadow-bs1 w-[100%]"
                      compId="259"
                      comWidth={506}
                      comHeight={525.08}
                      compLeft={51}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="348"
                        comWidth={506}
                        comHeight={232.93018}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <div
                          className="bg-gray_401 lg:h-[136px] xl:h-[156px] 2xl:h-[175px] 3xl:h-[210px] h-[232.93px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                          compId="29:286"
                          comWidth={506}
                          comHeight={232.93}
                          compLeft={0}
                          compRight={0}
                          compType="View"
                        ></div>
                      </Column>
                      <Text
                        className="font-lora font-medium lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] leading-[34.00px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[32.57px] lg:mx-[24px] xl:mx-[27px] 2xl:mx-[30px] 3xl:mx-[37px] mx-[41.28px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-[26px] text-black_900 text-left w-[76%]"
                        compId="29:290"
                        comWidth={382.8}
                        comHeight={67.12}
                        compLeft={41.28}
                        compRight={41.28}
                        compType="Text"
                      >{`Elmna’s Library Gives Alumni New Access`}</Text>
                      <Text
                        className="font-cairo font-semibold 3xl:mt-[11px] mt-[12.83px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:mx-[23px] xl:mx-[27px] 2xl:mx-[30px] 3xl:mx-[36px] mx-[41px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_700 text-left w-[auto]"
                        compId="29:292"
                        comWidth={294}
                        comHeight={27.64}
                        compLeft={41}
                        compRight={41}
                        compType="Text"
                      >{`By Admin, on Nov 23th, 2020  |   1 days ago`}</Text>
                      <Text
                        className="font-cairo font-normal lg:leading-[15px] xl:leading-[17px] 2xl:leading-[19px] 3xl:leading-[23px] leading-[26.00px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[16.77px] lg:mt-[9px] lg:mx-[23px] xl:mx-[27px] 2xl:mx-[30px] 3xl:mx-[36px] mx-[41px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[80%]"
                        compId="29:291"
                        comWidth={407.05}
                        comHeight={51.32}
                        compLeft={41}
                        compRight={41}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...`}</Text>
                      <Text
                        className="font-cairo font-semibold lg:mb-[21px] xl:mb-[25px] 2xl:mb-[28px] 3xl:mb-[33px] mb-[37.5px] 3xl:mt-[11px] mt-[12.84px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:mx-[24px] xl:mx-[27px] 2xl:mx-[30px] 3xl:mx-[37px] mx-[41.28px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left w-[auto]"
                        compId="29:293"
                        comWidth={84}
                        comHeight={33.56}
                        compLeft={41.28}
                        compRight={41.28}
                        compType="Text"
                      >{`Read more`}</Text>
                    </Column>
                    <Column
                      className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer items-start justify-start rounded-radius20 hover:shadow-bs1 w-[100%]"
                      compId="262"
                      comWidth={506}
                      comHeight={525.08}
                      compLeft={51}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="349"
                        comWidth={506}
                        comHeight={232.93018}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <div
                          className="bg-gray_401 lg:h-[136px] xl:h-[156px] 2xl:h-[175px] 3xl:h-[210px] h-[232.93px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                          compId="29:296"
                          comWidth={506}
                          comHeight={232.93}
                          compLeft={0}
                          compRight={0}
                          compType="View"
                        ></div>
                      </Column>
                      <Text
                        className="font-lora font-medium lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] leading-[34.00px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[32.57px] lg:mx-[24px] xl:mx-[27px] 2xl:mx-[30px] 3xl:mx-[37px] mx-[41.28px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-[26px] text-black_900 text-left w-[76%]"
                        compId="29:300"
                        comWidth={382.8}
                        comHeight={67.12}
                        compLeft={41.28}
                        compRight={41.28}
                        compType="Text"
                      >{`Alumni Service Sportlight: Haji Mahmud AB OO2`}</Text>
                      <Text
                        className="font-cairo font-semibold 3xl:mt-[11px] mt-[12.83px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:mx-[23px] xl:mx-[27px] 2xl:mx-[30px] 3xl:mx-[36px] mx-[41px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_700 text-left w-[auto]"
                        compId="29:302"
                        comWidth={294}
                        comHeight={27.64}
                        compLeft={41}
                        compRight={41}
                        compType="Text"
                      >{`By Admin, on Nov 23th, 2020  |   1 days ago`}</Text>
                      <Text
                        className="font-cairo font-normal lg:leading-[15px] xl:leading-[17px] 2xl:leading-[19px] 3xl:leading-[23px] leading-[26.00px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[16.77px] lg:mt-[9px] lg:mx-[23px] xl:mx-[27px] 2xl:mx-[30px] 3xl:mx-[36px] mx-[41px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[80%]"
                        compId="29:301"
                        comWidth={407.05}
                        comHeight={51.32}
                        compLeft={41}
                        compRight={41}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...`}</Text>
                      <Text
                        className="font-cairo font-semibold lg:mb-[21px] xl:mb-[25px] 2xl:mb-[28px] 3xl:mb-[33px] mb-[37.5px] 3xl:mt-[11px] mt-[12.84px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:mx-[24px] xl:mx-[27px] 2xl:mx-[30px] 3xl:mx-[37px] mx-[41.28px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left w-[auto]"
                        compId="29:303"
                        comWidth={84}
                        comHeight={33.56}
                        compLeft={41.28}
                        compRight={41.28}
                        compType="Text"
                      >{`Read more`}</Text>
                    </Column>
                  </List>
                  <Row
                    className="font-cairo items-start justify-between lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] mt-[29.61px] w-[100%]"
                    compId="29:304"
                    comWidth={1620}
                    comHeight={78.96}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_arrowleft.svg"}
                      className="lg:h-[47px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] h-[78.96px] object-contain w-[5%]"
                      compId="29:310"
                      comWidth={80}
                      comHeight={78.96}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="arrowLeft"
                    />
                    <Text
                      className="bg-bluegray_700 font-bold lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] leading-[34.00px] mb-[1px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[16.78px] lg:mt-[9px] pb-[13.810547px] pt-[13.8203125px] lg:px-[20px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] px-[35px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[8px] xl:py-[9px] rounded-radius60 lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-center text-gray_300 w-[12%]"
                      compId="166:8"
                      comWidth={201}
                      comHeight={61.19}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Load More`}</Text>
                    <Image
                      src={"images/img_arrowright.svg"}
                      className="lg:h-[47px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] h-[78.96px] object-contain w-[5%]"
                      compId="29:305"
                      comWidth={80}
                      comHeight={78.96}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="arrowRight"
                    />
                  </Row>
                </Column>
              </Stack>
              <Stack
                className="lg:h-[492px] xl:h-[562px] 2xl:h-[632px] 3xl:h-[759px] h-[841.9004px] 3xl:mt-[106px] mt-[118.44px] lg:mt-[69px] xl:mt-[79px] 2xl:mt-[88px] w-[100%]"
                compId="316"
                comWidth={1920}
                comHeight={841.9004}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_background_5.svg"}
                  className="absolute lg:h-[492px] xl:h-[562px] 2xl:h-[632px] 3xl:h-[759px] h-[841.9px] inset-[0] object-cover w-[100%]"
                  compId="36:107"
                  comWidth={1920}
                  comHeight={841.9}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="background"
                />
                <Column
                  className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[84%]"
                  compId="219"
                  comWidth={1621.33}
                  comHeight={723.36}
                  compLeft={150}
                  compRight={148.67}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-between w-[100%]"
                    compId="217"
                    comWidth={1621.33}
                    comHeight={76}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-bold font-lora lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-black_902 text-left w-[auto]"
                      compId="32:199"
                      comWidth={500}
                      comHeight={76}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Upcoming Events`}</Text>
                    <Text
                      className="bg-bluegray_700 font-bold font-cairo lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] leading-[34.00px] xl:mb-[4px] mb-[6.92px] 3xl:mb-[6px] mr-[1px] xl:mt-[5px] mt-[7.89px] 3xl:mt-[7px] lg:my-[4px] 2xl:my-[5px] pb-[13.811523px] pt-[13.819336px] lg:px-[20px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] px-[35px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[8px] xl:py-[9px] rounded-radius60 lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-center text-gray_300 w-[12%]"
                      compId="32:200"
                      comWidth={196}
                      comHeight={61.19}
                      compLeft={0}
                      compRight={1.33}
                      compType="Text"
                    >{`View More`}</Text>
                  </Row>
                  <List
                    className="lg:gap-[26px] xl:gap-[30px] 2xl:gap-[34px] 3xl:gap-[41px] gap-[45.670013px] grid grid-cols-3 min-h-[auto] lg:mt-[50px] xl:mt-[58px] 2xl:mt-[65px] 3xl:mt-[78px] mt-[87.36px] w-[100%]"
                    compId="218"
                    comWidth={1619.33}
                    comHeight={560}
                    compLeft={2}
                    compRight={0}
                    compType="List"
                    orientation="horizontal"
                  >
                    <Stack
                      className="lg:h-[327px] xl:h-[374px] 2xl:h-[421px] 3xl:h-[505px] h-[560px] w-[100%]"
                      compId="318"
                      comWidth={509.33}
                      comHeight={560}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Column
                        className="absolute bg-white_A700 border border-gray_300 border-solid inset-[0] items-start justify-center rounded-radius20 w-[100%]"
                        compId="166:11"
                        comWidth={509}
                        comHeight={560}
                        compLeft={0}
                        compRight={0.33}
                        compType="Column"
                      >
                        <Text
                          className="font-cairo font-semibold lg:mt-[200px] xl:mt-[229px] 2xl:mt-[258px] 3xl:mt-[309px] mt-[343.95px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left tracking-ls1 w-[auto]"
                          compId="32:126"
                          comWidth={125}
                          comHeight={26.86}
                          compLeft={30}
                          compRight={30}
                          compType="Text"
                        >{`MOBILE APP`}</Text>
                        <Text
                          className="font-bold font-lora lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] lg:mr-[16px] xl:mr-[19px] 2xl:mr-[21px] 3xl:mr-[26px] mr-[29.06px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] mt-[6.69px] 3xl:mt-[6px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_801 text-left w-[auto]"
                          compId="32:125"
                          comWidth={449.94}
                          comHeight={27.65}
                          compLeft={30}
                          compRight={29.06}
                          compType="Text"
                        >{`Global Android Programmer Meetup 2020`}</Text>
                        <Text
                          className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mb-[33px] xl:mb-[38px] 2xl:mb-[43px] 3xl:mb-[52px] mb-[58.13px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] lg:mr-[16px] xl:mr-[19px] 2xl:mr-[21px] 3xl:mr-[26px] mr-[29px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[13.81px] lg:mt-[8px] xl:mt-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[88%]"
                          compId="32:127"
                          comWidth={450}
                          comHeight={82.91}
                          compLeft={30}
                          compRight={29}
                          compType="Text"
                        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ....`}</Text>
                      </Column>
                      <Column
                        className="absolute bg-gray_401 items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] top-[0] w-[100%]"
                        compId="32:129"
                        comWidth={509.33}
                        comHeight={313.86}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="bg-bluegray_700 items-center justify-start mb-[0] lg:mr-[168px] xl:mr-[193px] 2xl:mr-[217px] 3xl:mr-[260px] mr-[289.33px] lg:mt-[118px] xl:mt-[134px] 2xl:mt-[151px] 3xl:mt-[182px] mt-[202.33px] rounded-radius6 w-[43%]"
                          compId="264"
                          comWidth={220}
                          comHeight={111.53}
                          compLeft={0}
                          compRight={289.33}
                          compType="Row"
                        >
                          <Column
                            className="items-start lg:mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] mb-[18.75px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] ml-[28.35px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.64px] w-[18%]"
                            compId="263"
                            comWidth={40}
                            comHeight={65.13965}
                            compLeft={28.35}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-bold font-lora lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-[34px] text-left text-white_A700 w-[auto]"
                              compId="32:140"
                              comWidth={40}
                              comHeight={27.64}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`20`}</Text>
                            <Text
                              className="font-cairo font-semibold ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] mt-[9.86px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700_70 w-[auto]"
                              compId="32:141"
                              comWidth={35}
                              comHeight={27.64}
                              compLeft={1.03}
                              compRight={10}
                              compType="Text"
                            >{`NOV`}</Text>
                          </Column>
                          <Image
                            src={"images/img_btnbook.svg"}
                            className="lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[54px] h-[59.22px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[22px] mb-[24.67px] lg:ml-[30px] xl:ml-[35px] 2xl:ml-[39px] 3xl:ml-[47px] ml-[52.65px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.64px] object-contain w-[27%]"
                            compId="32:135"
                            comWidth={60}
                            comHeight={59.22}
                            compLeft={52.65}
                            compRight={0}
                            compType="Image"
                            alt="btnBook"
                          />
                        </Row>
                      </Column>
                    </Stack>
                    <Stack
                      className="lg:h-[327px] xl:h-[374px] 2xl:h-[421px] 3xl:h-[505px] h-[560px] w-[100%]"
                      compId="320"
                      comWidth={509.33}
                      comHeight={560}
                      compLeft={45.67}
                      compRight={0}
                      compType="Stack"
                    >
                      <Column
                        className="absolute bg-white_A700 inset-[0] items-start justify-center rounded-radius20 shadow-bs1 w-[100%]"
                        compId="166:13"
                        comWidth={509}
                        comHeight={560}
                        compLeft={0}
                        compRight={0.33}
                        compType="Column"
                      >
                        <Text
                          className="font-cairo font-semibold lg:mt-[200px] xl:mt-[229px] 2xl:mt-[258px] 3xl:mt-[309px] mt-[343.95px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left tracking-ls1 w-[auto]"
                          compId="36:24"
                          comWidth={152}
                          comHeight={27.64}
                          compLeft={30}
                          compRight={30}
                          compType="Text"
                        >{`ART EXIBITHION`}</Text>
                        <Text
                          className="font-bold font-lora lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] lg:mr-[16px] xl:mr-[19px] 2xl:mr-[21px] 3xl:mr-[26px] mr-[29.06px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5.91px] 3xl:mt-[5px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_801 text-left w-[auto]"
                          compId="36:23"
                          comWidth={449.94}
                          comHeight={27.65}
                          compLeft={30}
                          compRight={29.06}
                          compType="Text"
                        >{`Paris Designer Meetup with Ziro Partner`}</Text>
                        <Text
                          className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mb-[33px] xl:mb-[38px] 2xl:mb-[43px] 3xl:mb-[52px] mb-[58.13px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] lg:mr-[16px] xl:mr-[19px] 2xl:mr-[21px] 3xl:mr-[26px] mr-[29px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[13.81px] lg:mt-[8px] xl:mt-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[88%]"
                          compId="36:25"
                          comWidth={450}
                          comHeight={82.91}
                          compLeft={30}
                          compRight={29}
                          compType="Text"
                        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ....`}</Text>
                      </Column>
                      <Column
                        className="absolute bg-gray_401 items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] top-[0] w-[100%]"
                        compId="36:27"
                        comWidth={509.33}
                        comHeight={313.86}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="bg-black_900 items-center justify-start mb-[0] lg:mr-[168px] xl:mr-[193px] 2xl:mr-[217px] 3xl:mr-[260px] mr-[289.33px] lg:mt-[118px] xl:mt-[134px] 2xl:mt-[151px] 3xl:mt-[182px] mt-[202.33px] rounded-radius6 w-[43%]"
                          compId="267"
                          comWidth={220}
                          comHeight={111.53}
                          compLeft={0}
                          compRight={289.33}
                          compType="Row"
                        >
                          <Column
                            className="items-start lg:mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] mb-[18.75px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] ml-[28.35px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.64px] w-[17%]"
                            compId="266"
                            comWidth={37}
                            comHeight={65.13965}
                            compLeft={28.35}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-bold font-lora lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-[34px] text-left text-white_A700 w-[auto]"
                              compId="36:38"
                              comWidth={37}
                              comHeight={27.64}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`25`}</Text>
                            <Text
                              className="font-cairo font-semibold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] mt-[9.86px] mx-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700_70 w-[auto]"
                              compId="36:39"
                              comWidth={35}
                              comHeight={27.64}
                              compLeft={1.03}
                              compRight={0.97}
                              compType="Text"
                            >{`NOV`}</Text>
                          </Column>
                          <Image
                            src={"images/img_btnbook_1.svg"}
                            className="lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[54px] h-[59.22px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[22px] mb-[24.67px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[41px] 3xl:ml-[50px] ml-[55.65px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.64px] object-contain w-[27%]"
                            compId="36:33"
                            comWidth={60}
                            comHeight={59.22}
                            compLeft={55.65}
                            compRight={0}
                            compType="Image"
                            alt="btnBook"
                          />
                        </Row>
                      </Column>
                    </Stack>
                    <Stack
                      className="lg:h-[327px] xl:h-[374px] 2xl:h-[421px] 3xl:h-[505px] h-[560px] w-[100%]"
                      compId="322"
                      comWidth={509.33}
                      comHeight={560}
                      compLeft={45.67}
                      compRight={0}
                      compType="Stack"
                    >
                      <Column
                        className="absolute bg-white_A700 border border-gray_300 border-solid inset-[0] items-start justify-center rounded-radius20 w-[100%]"
                        compId="166:15"
                        comWidth={509}
                        comHeight={560}
                        compLeft={0}
                        compRight={0.33}
                        compType="Column"
                      >
                        <Text
                          className="font-cairo font-semibold lg:mt-[200px] xl:mt-[229px] 2xl:mt-[258px] 3xl:mt-[309px] mt-[343.95px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left tracking-ls1 w-[auto]"
                          compId="36:43"
                          comWidth={125}
                          comHeight={26.86}
                          compLeft={30}
                          compRight={30}
                          compType="Text"
                        >{`ACCOUNTING`}</Text>
                        <Text
                          className="font-bold font-lora leading-[normal] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] lg:mr-[16px] xl:mr-[19px] 2xl:mr-[21px] 3xl:mr-[26px] mr-[29px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] mt-[6.69px] 3xl:mt-[6px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_801 text-left w-[88%]"
                          compId="36:42"
                          comWidth={450}
                          comHeight={53.31}
                          compLeft={30}
                          compRight={29}
                          compType="Text"
                        >{`Bussiness Plan in Pandemic with Famous Native Speaker`}</Text>
                        <Text
                          className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[29px] mb-[32.47px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] lg:mr-[16px] xl:mr-[19px] 2xl:mr-[21px] 3xl:mr-[26px] mr-[29px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[13.81px] lg:mt-[8px] xl:mt-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[88%]"
                          compId="36:44"
                          comWidth={450}
                          comHeight={82.91}
                          compLeft={30}
                          compRight={29}
                          compType="Text"
                        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ....`}</Text>
                      </Column>
                      <Column
                        className="absolute bg-gray_401 items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] top-[0] w-[100%]"
                        compId="36:46"
                        comWidth={509.33}
                        comHeight={313.86}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="bg-black_900 items-center justify-start mb-[0] lg:mr-[168px] xl:mr-[193px] 2xl:mr-[217px] 3xl:mr-[260px] mr-[289.33px] lg:mt-[118px] xl:mt-[134px] 2xl:mt-[151px] 3xl:mt-[182px] mt-[202.33px] rounded-radius6 w-[43%]"
                          compId="270"
                          comWidth={220}
                          comHeight={111.53}
                          compLeft={0}
                          compRight={289.33}
                          compType="Row"
                        >
                          <Column
                            className="items-start lg:mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] mb-[18.75px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] ml-[28.35px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.64px] w-[17%]"
                            compId="269"
                            comWidth={38}
                            comHeight={65.13965}
                            compLeft={28.35}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-bold font-lora lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-[34px] text-left text-white_A700 w-[auto]"
                              compId="36:57"
                              comWidth={38}
                              comHeight={27.64}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`28`}</Text>
                            <Text
                              className="font-cairo font-semibold ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] mt-[9.86px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700_70 w-[auto]"
                              compId="36:58"
                              comWidth={35}
                              comHeight={27.64}
                              compLeft={1.03}
                              compRight={10}
                              compType="Text"
                            >{`NOV`}</Text>
                          </Column>
                          <Image
                            src={"images/img_btnbook_1.svg"}
                            className="lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[54px] h-[59.22px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[22px] mb-[24.67px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] ml-[54.65px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.64px] object-contain w-[27%]"
                            compId="36:52"
                            comWidth={60}
                            comHeight={59.22}
                            compLeft={54.65}
                            compRight={0}
                            compType="Image"
                            alt="btnBook"
                          />
                        </Row>
                      </Column>
                    </Stack>
                  </List>
                </Column>
              </Stack>
              <Stack
                className="bg-black_900 font-lora lg:h-[211px] xl:h-[242px] 2xl:h-[272px] 3xl:h-[326px] h-[361.24px] 3xl:mt-[106px] mt-[118.44px] lg:mt-[69px] xl:mt-[79px] 2xl:mt-[88px] w-[100%]"
                compId="324"
                comWidth={1920}
                comHeight={361.24}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_maskgroup_1.svg"}
                  className="absolute lg:h-[211px] xl:h-[242px] 2xl:h-[272px] 3xl:h-[326px] h-[361.24px] inset-[0] object-cover w-[100%]"
                  compId="25:51"
                  comWidth={1920}
                  comHeight={361.24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="MaskGroup"
                />
                <Row
                  className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[84%]"
                  compId="221"
                  comWidth={1619}
                  comHeight={150.02}
                  compLeft={152}
                  compRight={149}
                  compType="Row"
                >
                  <Text
                    className="font-normal lg:leading-[44px] xl:leading-[50px] 2xl:leading-[57px] 3xl:leading-[68px] leading-[76.00px] not-italic lg:text-[25px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[39px] text-[44px] text-left text-white_A700 w-[49%]"
                    compId="25:59"
                    comWidth={789}
                    comHeight={150.02}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Don’t miss our weekly updates about elmna’s alumni story`}</Text>
                  <Row
                    className="bg-black_900 border border-gray_300 border-solid font-cairo items-center justify-between lg:my-[20px] xl:my-[23px] 2xl:my-[26px] 3xl:my-[31px] my-[35.53px] rounded-radius60 w-[34%]"
                    compId="220"
                    comWidth={546}
                    comHeight={78.96}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] mb-[17.76px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[33px] ml-[37px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.64px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_600 text-left w-[auto]"
                      compId="25:55"
                      comWidth={201}
                      comHeight={33.56}
                      compLeft={37}
                      compRight={0}
                      compType="Text"
                    >{`Enter your email address...`}</Text>
                    <Button
                      className="bg-bluegray_700 font-bold mr-[10.21px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] my-[9.87px] xl:pb-[10px] 2xl:pb-[11px] 3xl:pb-[13px] pb-[15.3550005px] lg:pb-[8px] lg:pl-[20px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] pl-[35px] 2xl:pt-[10px] 3xl:pt-[12px] pt-[13.395px] lg:pt-[7px] xl:pt-[8px] rounded-radius37 shadow-bs2 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-left text-white_A700 w-[36%]"
                      compId="25:56"
                      comWidth={196.79}
                      comHeight={59.22}
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
            className="2xl:mt-[101px] 3xl:mt-[121px] mt-[135px] lg:mt-[78px] xl:mt-[90px] w-[100%]"
            compId="1:17"
            comWidth={1920}
            comHeight={421}
            compLeft={0}
            compRight={0}
            compType="BottomBar"
          >
            <Column
              className="w-[100%]"
              compId="112"
              comWidth={1920}
              comHeight={421}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-start justify-evenly w-[100%]"
                compId="1:95"
                comWidth={1920}
                comHeight={303}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-start justify-start w-[28%]"
                  compId="1:96"
                  comWidth={530}
                  comHeight={303}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_logo_1.svg"}
                    className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] h-[72px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] object-contain w-[37%]"
                    compId="23:0"
                    comWidth={198}
                    comHeight={72}
                    compLeft={0}
                    compRight={10}
                    compType="Image"
                    alt="logo"
                  />
                  <Text
                    className="font-normal lg:leading-[14px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] leading-[24.00px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900 text-left w-[100%]"
                    compId="1:103"
                    comWidth={530}
                    comHeight={72}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Elmna University Alumni is a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud`}</Text>
                  <Column
                    className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30px] w-[100%]"
                    compId="350"
                    comWidth={530}
                    comHeight={99}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="225"
                      comWidth={530}
                      comHeight={99}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900 text-left w-[auto]"
                        compId="23:20"
                        comWidth={66}
                        comHeight={30}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Follow Us`}</Text>
                      <Column
                        className="lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] w-[100%]"
                        compId="351"
                        comWidth={530}
                        comHeight={51}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="items-center justify-start w-[100%]"
                          compId="224"
                          comWidth={530}
                          comHeight={51}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Image
                            src={"images/img_social01.svg"}
                            className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22.15px] 3xl:mb-[12px] mb-[14.35px] lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] ml-[5px] 3xl:mt-[13px] mt-[14.5px] 2xl:my-[10px] lg:my-[8px] xl:my-[9px] object-contain w-[2%]"
                            compId="23:10"
                            comWidth={12.08}
                            comHeight={22.15}
                            compLeft={5}
                            compRight={0}
                            compType="Image"
                            alt="social01"
                          />
                          <Image
                            src={"images/img_social03.svg"}
                            className="lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[48.92px] object-contain lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]"
                            compId="23:14"
                            comWidth={51}
                            comHeight={51}
                            compLeft={48.92}
                            compRight={0}
                            compType="Image"
                            alt="social03"
                          />
                          <Image
                            src={"images/img_social02.svg"}
                            className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[22.66px] 3xl:mb-[12px] mb-[13.84px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40.29px] 3xl:mt-[13px] mt-[14.5px] 2xl:my-[10px] lg:my-[8px] xl:my-[9px] object-contain w-[6%]"
                            compId="23:12"
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
                            compId="23:16"
                            comWidth={24.17}
                            comHeight={23.16}
                            compLeft={51.6}
                            compRight={0}
                            compType="Image"
                            alt="social04"
                          />
                          <Image
                            src={"images/img_social05.svg"}
                            className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22.15px] 3xl:mb-[12px] mb-[14.35px] lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] ml-[57.64px] 3xl:mt-[13px] mt-[14.5px] 2xl:my-[10px] lg:my-[8px] xl:my-[9px] object-contain lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px] w-[22.15px]"
                            compId="23:18"
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
                  compId="25:38"
                  comWidth={99}
                  comHeight={216}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-black_900 text-left w-[auto]"
                    compId="25:39"
                    comWidth={99}
                    comHeight={37}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Why Elmna`}</Text>
                  <Column
                    className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[89%]"
                    compId="25:40"
                    comWidth={88}
                    comHeight={162}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold mr-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:41"
                      comWidth={87}
                      comHeight={30}
                      compLeft={0}
                      compRight={1}
                      compType="Text"
                    >{`About elmna`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:42"
                      comWidth={71}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Enterprise`}</Text>
                    <Text
                      className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:43"
                      comWidth={88}
                      comHeight={30}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Alumni Story`}</Text>
                    <Text
                      className="font-semibold lg:mr-[5px] 2xl:mr-[6px] xl:mr-[6px] 3xl:mr-[8px] mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:44"
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
                  compId="25:29"
                  comWidth={90}
                  comHeight={260}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-black_900 text-left w-[auto]"
                    compId="25:37"
                    comWidth={90}
                    comHeight={37}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Resources`}</Text>
                  <Column
                    className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[89%]"
                    compId="25:30"
                    comWidth={80}
                    comHeight={206}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:31"
                      comWidth={69}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Download`}</Text>
                    <Text
                      className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:32"
                      comWidth={80}
                      comHeight={30}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Help Center`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:33"
                      comWidth={47}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Events`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:34"
                      comWidth={47}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Guides`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:35"
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
                  compId="25:20"
                  comWidth={100}
                  comHeight={260}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-black_900 text-left w-[auto]"
                    compId="25:28"
                    comWidth={100}
                    comHeight={37}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Community`}</Text>
                  <Column
                    className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[72%]"
                    compId="25:21"
                    comWidth={72}
                    comHeight={206}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:22"
                      comWidth={61}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`About us`}</Text>
                    <Text
                      className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:23"
                      comWidth={72}
                      comHeight={30}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Contact us`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:25"
                      comWidth={37}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Login`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:26"
                      comWidth={52}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Sign Up`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:27"
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
                  compId="25:1"
                  comWidth={285}
                  comHeight={226}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-black_900 text-left w-[auto]"
                    compId="25:2"
                    comWidth={176}
                    comHeight={37}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Get in Touch with Us`}</Text>
                  <Column
                    className="xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[100%]"
                    compId="352"
                    comWidth={285}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-start justify-start w-[100%]"
                      compId="25:3"
                      comWidth={285}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_pin51.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[15px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="25:254"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="pin51"
                      />
                      <Text
                        className="font-semibold leading-[normal] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[86%]"
                        compId="25:4"
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
                    compId="25:9"
                    comWidth={285}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_telephonecall_1.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="25:243"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="telephonecall"
                    />
                    <Text
                      className="font-semibold xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:10"
                      comWidth={124}
                      comHeight={30}
                      compLeft={15}
                      compRight={0}
                      compType="Text"
                    >{`+123 345123 556`}</Text>
                  </Row>
                  <Row
                    className="items-start justify-start lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                    compId="25:14"
                    comWidth={285}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_inbox21_1.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="25:247"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="inbox21"
                    />
                    <Text
                      className="font-semibold xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="25:15"
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
                className="lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[61px] w-[100%]"
                compId="226"
                comWidth={1920}
                comHeight={57}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Line
                  className="bg-gray_100_14 h-[1px] w-[100%]"
                  compId="1:41"
                  comWidth={1920}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Row
                  className="items-center justify-evenly lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] mt-[26px] w-[100%]"
                  compId="24:1"
                  comWidth={1920}
                  comHeight={30}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900 text-left w-[auto]"
                    compId="1:42"
                    comWidth={372}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Elmna University Alumni -   © 2020 All Rights Reserved`}</Text>
                  <Row
                    className="items-center justify-center w-[19%]"
                    compId="330"
                    comWidth={367}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="1:39"
                      comWidth={41}
                      comHeight={30}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`About`}</Text>
                    <Text
                      className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="1:38"
                      comWidth={28}
                      comHeight={30}
                      compLeft={50}
                      compRight={0}
                      compType="Text"
                    >{`FAQ`}</Text>
                    <Text
                      className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="1:37"
                      comWidth={92}
                      comHeight={30}
                      compLeft={50}
                      compRight={0}
                      compType="Text"
                    >{`Privacy Policy`}</Text>
                    <Text
                      className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[auto]"
                      compId="1:40"
                      comWidth={56}
                      comHeight={30}
                      compLeft={50}
                      compRight={0}
                      compType="Text"
                    >{`Sitemap`}</Text>
                  </Row>
                  <Text
                    className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900 text-right w-[auto]"
                    compId="1:44"
                    comWidth={171}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Made with ♥ by DhiWise`}</Text>
                </Row>
              </Column>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default HomepagePage;

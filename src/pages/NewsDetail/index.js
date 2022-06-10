import React from "react";

import {
  Column,
  Stack,
  Image,
  Row,
  Text,
  Line,
  Button,
  Input,
  List,
} from "components";

const NewsDetailPage = () => {
  return (
    <>
      <Column
        className="bg-white_A700 font-cairo mx-[auto] w-[100%]"
        compId="25:2972"
        comWidth={1920}
        comHeight={7163}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="items-center justify-start w-[100%]"
          compId="1078"
          comWidth={1920}
          comHeight={6580}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Stack
            className="lg:h-[313px] xl:h-[358px] 2xl:h-[403px] 3xl:h-[483px] h-[536px] w-[100%]"
            compId="1113"
            comWidth={1920}
            comHeight={536}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Stack
              className="absolute lg:h-[313px] xl:h-[358px] 2xl:h-[403px] 3xl:h-[483px] h-[536px] inset-[0] w-[100%]"
              compId="1115"
              comWidth={1920}
              comHeight={536}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Image
                src={"images/img_background_19.svg"}
                className="absolute lg:h-[313px] xl:h-[358px] 2xl:h-[403px] 3xl:h-[483px] h-[536px] inset-[0] object-cover w-[100%]"
                compId="41:3"
                comWidth={1920}
                comHeight={536}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="background"
              />
              <header
                className="absolute top-[0] w-[100%]"
                compId="87"
                comWidth={1920}
                comHeight={191}
                compLeft={0}
                compRight={0}
                compType="AppBar"
              >
                <Stack
                  className="lg:h-[112px] xl:h-[128px] 2xl:h-[144px] 3xl:h-[172px] h-[191px] w-[100%]"
                  compId="1117"
                  comWidth={1920}
                  comHeight={191}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_vector4.svg"}
                    className="absolute lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] h-[175.04px] left-[0] object-contain top-[0] w-[23%]"
                    compId="41:16"
                    comWidth={436.65}
                    comHeight={175.04}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector4"
                  />
                  <Column
                    className="absolute inset-[0] w-[100%]"
                    compId="25:3366"
                    comWidth={1920}
                    comHeight={191}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="bg-bluegray_800 w-[100%]"
                      compId="1056"
                      comWidth={1920}
                      comHeight={61}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-start justify-start 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]"
                        compId="1055"
                        comWidth={1920}
                        comHeight={30}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_telephonecall.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="25:3400"
                          comWidth={24}
                          comHeight={24}
                          compLeft={150}
                          compRight={0}
                          compType="Image"
                          alt="telephonecall"
                        />
                        <Text
                          className="cursor-pointer hover:font-bold font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[21px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_50 text-left w-[auto]"
                          compId="25:3399"
                          comWidth={97}
                          comHeight={30}
                          compLeft={21}
                          compRight={0}
                          compType="Text"
                        >{`+12 345 6789`}</Text>
                        <Image
                          src={"images/img_inbox21_9.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="25:3406"
                          comWidth={24}
                          comHeight={24}
                          compLeft={56}
                          compRight={0}
                          compType="Image"
                          alt="inbox21"
                        />
                        <Text
                          className="cursor-pointer hover:font-bold font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[21px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_50 text-left w-[auto]"
                          compId="25:3405"
                          comWidth={142}
                          comHeight={30}
                          compLeft={21}
                          compRight={0}
                          compType="Text"
                        >{`support@elmna.com`}</Text>
                        <Row
                          className="items-center justify-center lg:ml-[539px] xl:ml-[617px] 2xl:ml-[694px] 3xl:ml-[832px] ml-[925px] w-[10%]"
                          compId="1127"
                          comWidth={194}
                          comHeight={30}
                          compLeft={925}
                          compRight={0}
                          compType="Row"
                        >
                          <Text
                            className="cursor-pointer hover:font-bold font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_50 text-left w-[auto]"
                            compId="25:3397"
                            comWidth={79}
                            comHeight={30}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`Help Center`}</Text>
                          <Text
                            className="cursor-pointer hover:font-bold font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_50 text-left w-[auto]"
                            compId="25:3409"
                            comWidth={31}
                            comHeight={30}
                            compLeft={20}
                            compRight={0}
                            compType="Text"
                          >{`Blog`}</Text>
                          <Text
                            className="cursor-pointer hover:font-bold font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_50 text-left w-[auto]"
                            compId="25:3410"
                            comWidth={44}
                            comHeight={30}
                            compLeft={20}
                            compRight={0}
                            compType="Text"
                          >{`Career`}</Text>
                        </Row>
                        <Text
                          className="cursor-pointer hover:font-bold font-bold lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] ml-[68px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_50 text-left w-[auto]"
                          compId="25:3411"
                          comWidth={20}
                          comHeight={30}
                          compLeft={68}
                          compRight={0}
                          compType="Text"
                        >{`EN`}</Text>
                        <Image
                          src={"images/img_chevron1_8.svg"}
                          className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] 3xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                          compId="25:3412"
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
                        compId="25:3414"
                        comWidth={1920}
                        comHeight={1}
                        compLeft={0}
                        compRight={0}
                        compType="Line"
                      />
                    </Column>
                    <Column
                      className="w-[100%]"
                      compId="1059"
                      comWidth={1920}
                      comHeight={130}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-start lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] w-[100%]"
                        compId="1058"
                        comWidth={1920}
                        comHeight={72}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_logo_5.svg"}
                          className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] h-[72px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] object-contain w-[10%]"
                          compId="25:3387"
                          comWidth={198}
                          comHeight={72}
                          compLeft={150}
                          compRight={0}
                          compType="Image"
                          alt="logo"
                        />
                        <Row
                          className="items-center justify-center 3xl:ml-[105px] ml-[117px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[87px] lg:my-[11px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] my-[19px] w-[32%]"
                          compId="1128"
                          comWidth={610}
                          comHeight={34}
                          compLeft={117}
                          compRight={0}
                          compType="Row"
                        >
                          <Text
                            className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_50 text-left w-[auto]"
                            compId="25:3380"
                            comWidth={47}
                            comHeight={34}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`About`}</Text>
                          <Row
                            className="items-center justify-center lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[49px] w-[27%]"
                            compId="25:3381"
                            comWidth={165}
                            comHeight={34}
                            compLeft={49}
                            compRight={0}
                            compType="Row"
                          >
                            <Text
                              className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_50 text-left w-[auto]"
                              compId="25:3382"
                              comWidth={141}
                              comHeight={34}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`Program & Events`}</Text>
                            <Image
                              src={"images/img_chevron1_8.svg"}
                              className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                              compId="25:3383"
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
                            compId="25:3386"
                            comWidth={101}
                            comHeight={34}
                            compLeft={50}
                            compRight={0}
                            compType="Text"
                          >{`Alumni Story`}</Text>
                          <Text
                            className="font-bold lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_50 text-left w-[auto]"
                            compId="25:3385"
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
                          compId="25:3377"
                          comWidth={24}
                          comHeight={24}
                          compLeft={273}
                          compRight={0}
                          compType="Image"
                          alt="search91"
                        />
                        <Button
                          className="border border-gray_300_33 border-solid font-bold lg:ml-[22px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] ml-[39px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] 2xl:py-[10px] 3xl:py-[13px] py-[14.545px] lg:py-[8px] xl:py-[9px] rounded-radius58 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_50 text-center w-[9%]"
                          compId="25:3373"
                          comWidth={178}
                          comHeight={60}
                          compLeft={39}
                          compRight={0}
                          compType="Button"
                        >{`Sign In`}</Button>
                        <Button
                          className="bg-gray_300_33 font-bold lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] ml-[18px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] 2xl:py-[10px] 3xl:py-[13px] py-[14.545px] lg:py-[8px] xl:py-[9px] rounded-radius58 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_300 w-[8%]"
                          compId="25:3370"
                          comWidth={163}
                          comHeight={60}
                          compLeft={18}
                          compRight={0}
                          compType="Button"
                        >{`Join Now`}</Button>
                      </Row>
                      <Line
                        className="bg-bluegray_600 h-[1px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[100%]"
                        compId="25:3369"
                        comWidth={1920}
                        comHeight={1}
                        compLeft={0}
                        compRight={0}
                        compType="Line"
                      />
                    </Column>
                  </Column>
                </Stack>
              </header>
            </Stack>
            <Column
              className="absolute bottom-[14%] inset-x-[0] items-center justify-start mx-[auto] w-[56%]"
              compId="41:21"
              comWidth={1076}
              comHeight={208}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold font-lora lg:leading-[46px] xl:leading-[53px] 2xl:leading-[60px] 3xl:leading-[72px] leading-[80.00px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-[60px] text-center text-white_A700 w-[100%]"
                compId="41:22"
                comWidth={1076}
                comHeight={160}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Learn How to Increase Business Network in Pandemic`}</Text>
              <Text
                className="font-cairo font-normal lg:ml-[159px] xl:ml-[182px] 3xl:ml-[245px] ml-[273px] lg:mr-[158px] xl:mr-[181px] 3xl:mr-[244px] mr-[272px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] 2xl:mx-[204px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-center text-white_A700 w-[auto]"
                compId="41:23"
                comWidth={531}
                comHeight={28}
                compLeft={273}
                compRight={272}
                compType="Text"
              >{`by Admin, November 23th 2020   |   09:25 AM`}</Text>
            </Column>
          </Stack>
          <Image
            src={"images/img_image_8.svg"}
            className="lg:h-[380px] xl:h-[434px] 2xl:h-[488px] 3xl:h-[586px] h-[650px] object-cover w-[100%]"
            compId="41:24"
            comWidth={1920}
            comHeight={650}
            compLeft={0}
            compRight={0}
            compType="Image"
            alt="image"
          />
          <Column
            className="items-start justify-start 3xl:mt-[108px] mt-[120px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] mx-[auto] w-[70%]"
            compId="41:47"
            comWidth={1348}
            comHeight={142}
            compLeft={286}
            compRight={286}
            compType="Column"
          >
            <Text
              className="font-lora font-medium lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-[26px] text-black_901 text-left w-[auto]"
              compId="41:33"
              comWidth={1345}
              comHeight={38}
              compLeft={0}
              compRight={3}
              compType="Text"
            >{`The standard Lorem Ipsum passage, used since the 1500s`}</Text>
            <Text
              className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-black_901 text-left w-[100%]"
              compId="41:31"
              comWidth={1348}
              comHeight={84}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'`}</Text>
          </Column>
          <Column
            className="items-start justify-start lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] mx-[auto] w-[70%]"
            compId="41:46"
            comWidth={1348}
            comHeight={236}
            compLeft={286}
            compRight={286}
            compType="Column"
          >
            <Text
              className="font-lora font-medium lg:leading-[22px] xl:leading-[25px] 2xl:leading-[28px] 3xl:leading-[34px] leading-[38.00px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-[26px] text-black_901 text-left w-[100%]"
              compId="41:35"
              comWidth={1345}
              comHeight={76}
              compLeft={0}
              compRight={3}
              compType="Text"
            >{`The standard Lorem Ipsum passageSection 1.10.32 of 'de Finibus Bonorum et Malorum', written by Cicero in 45 BCused since the 1500s`}</Text>
            <Text
              className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-black_901 text-left w-[100%]"
              compId="41:34"
              comWidth={1348}
              comHeight={140}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`}</Text>
          </Column>
          <Column
            className="items-start justify-start lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] mt-[68px] mx-[auto] w-[70%]"
            compId="41:45"
            comWidth={1348}
            comHeight={226}
            compLeft={286}
            compRight={286}
            compType="Column"
          >
            <Text
              className="font-lora font-medium lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-[26px] text-black_901 text-left w-[auto]"
              compId="41:37"
              comWidth={1345}
              comHeight={38}
              compLeft={0}
              compRight={3}
              compType="Text"
            >{`1914 translation by H. Rackham`}</Text>
            <Text
              className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-black_901 text-left w-[100%]"
              compId="41:36"
              comWidth={1348}
              comHeight={168}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?'`}</Text>
          </Column>
          <Image
            src={"images/img_image_9.svg"}
            className="lg:h-[281px] xl:h-[321px] 2xl:h-[362px] 3xl:h-[434px] h-[481px] 3xl:mt-[108px] mt-[120px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] object-cover w-[100%]"
            compId="41:44"
            comWidth={1920}
            comHeight={481}
            compLeft={0}
            compRight={0}
            compType="Image"
            alt="image"
          />
          <Column
            className="items-start justify-start 3xl:mt-[108px] mt-[120px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] mx-[auto] w-[70%]"
            compId="41:48"
            comWidth={1348}
            comHeight={198}
            compLeft={286}
            compRight={286}
            compType="Column"
          >
            <Text
              className="font-lora font-medium lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-[26px] text-black_901 text-left w-[auto]"
              compId="41:50"
              comWidth={1345}
              comHeight={38}
              compLeft={0}
              compRight={3}
              compType="Text"
            >{`Section 1.10.33 of 'de Finibus Bonorum et Malorum', written by Cicero in 45 BC`}</Text>
            <Text
              className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-black_901 text-left w-[100%]"
              compId="41:49"
              comWidth={1348}
              comHeight={140}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'`}</Text>
          </Column>
          <Row
            className="items-center justify-center lg:mt-[51px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] mt-[88px] mx-[auto] w-[70%]"
            compId="41:195"
            comWidth={1348}
            comHeight={109}
            compLeft={286}
            compRight={286}
            compType="Row"
          >
            <Row
              className="bg-white_A700 items-center justify-between w-[92%]"
              compId="1063"
              comWidth={1241}
              comHeight={109}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-semibold lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] mt-[35px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-[26px] text-black_901 text-left w-[auto]"
                compId="41:171"
                comWidth={153}
                comHeight={38}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Share this article :`}</Text>
              <Row
                className="lg:gap-[11px] xl:gap-[13px] 2xl:gap-[15px] 3xl:gap-[18px] gap-[20px] grid grid-cols-3 items-center justify-between lg:mb-[16px] 2xl:mb-[21px] 3xl:mb-[25px] mb-[28px] mr-[11px] lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] lg:mt-[15px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27px] xl:my-[18px] w-[41%]"
                compId="1129"
                comWidth={514}
                comHeight={54}
                compLeft={0}
                compRight={11}
                compType="Row"
              >
                <div className="bg-transparent border-0 w-[100%] input-wrap">
                  <Image
                    src={"images/img_linkedin_1_1.svg"}
                    className="absolute h-[24px] left-[17px] bg-transparent border-0 lg:h-[14px] lg:left-[9px] xl:h-[17px] xl:left-[11px] 2xl:h-[19px] 2xl:left-[12px] 3xl:h-[22px] 3xl:left-[15px] my-[auto] inset-y-[0]"
                    compId="41:175"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="linkedin (1) 1"
                  />
                  <Input
                    className="bg-blue_50 placeholder:bg-transparent border-0 font-semibold lg:pl-[33px] xl:pl-[38px] 2xl:pl-[43px] 3xl:pl-[52px] pl-[58px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[22px] py-[25px] rounded-radius57 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] placeholder:text-black_900 text-black_900 text-left w-[100%]"
                    compId="41:184"
                    comWidth={0}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="linkedin"
                    placeholder={`2,4k Shares`}
                  ></Input>
                </div>
                <Row
                  className="bg-indigo_50 items-center justify-center rounded-radius57 w-[100%]"
                  compId="1062"
                  comWidth={158}
                  comHeight={54}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_facebook1.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] my-[15px] lg:my-[8px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="41:172"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="facebook1"
                  />
                  <Text
                    className="font-semibold lg:leading-[22px] xl:leading-[25px] 2xl:leading-[28px] 3xl:leading-[34px] leading-[38.00px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-black_900 text-left w-[54%]"
                    compId="41:183"
                    comWidth={86}
                    comHeight={38}
                    compLeft={10}
                    compRight={0}
                    compType="Text"
                  >{`13k Shares`}</Text>
                </Row>
                <div className="bg-transparent border-0 w-[100%] input-wrap">
                  <Image
                    src={"images/img_twitter_1.svg"}
                    className="absolute h-[24px] left-[19px] bg-transparent border-0 lg:h-[14px] lg:left-[11px] xl:h-[17px] xl:left-[12px] 2xl:h-[19px] 2xl:left-[14px] 3xl:h-[22px] 3xl:left-[17px] my-[auto] inset-y-[0]"
                    compId="41:180"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="twitter 1"
                  />
                  <Input
                    className="bg-light_blue_50 placeholder:bg-transparent border-0 font-semibold lg:pl-[36px] xl:pl-[41px] 2xl:pl-[46px] 3xl:pl-[55px] pl-[62px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[22px] py-[25px] rounded-radius57 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] placeholder:text-black_900 text-black_900 text-left w-[100%]"
                    compId="41:187"
                    comWidth={0}
                    comHeight={54}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="twitter"
                    placeholder={`13k Shares`}
                  ></Input>
                </div>
              </Row>
            </Row>
            <Image
              src={"images/img_wa.svg"}
              className="lg:h-[32px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] h-[54px] lg:mb-[16px] 2xl:mb-[21px] 3xl:mb-[25px] mb-[28px] lg:ml-[5px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] ml-[9px] lg:mt-[15px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27px] xl:my-[18px] object-contain lg:w-[31px] xl:w-[36px] 2xl:w-[40px] 3xl:w-[48px] w-[54px]"
              compId="41:193"
              comWidth={54}
              comHeight={54}
              compLeft={9}
              compRight={0}
              compType="Image"
              alt="wa"
            />
          </Row>
          <Stack
            className="font-lora lg:h-[458px] xl:h-[524px] 2xl:h-[589px] 3xl:h-[707px] h-[784px] lg:mt-[22px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] mt-[39px] w-[100%]"
            compId="1119"
            comWidth={1920}
            comHeight={784}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Image
              src={"images/img_background_20.svg"}
              className="absolute lg:h-[458px] xl:h-[524px] 2xl:h-[589px] 3xl:h-[707px] h-[784px] inset-[0] object-cover w-[100%]"
              compId="41:252"
              comWidth={1920}
              comHeight={784}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="background"
            />
            <Column
              className="absolute bottom-[8%] inset-x-[0] items-start justify-start mx-[auto] w-[84%]"
              compId="1065"
              comWidth={1620}
              comHeight={629}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[40px] text-black_902 text-left w-[auto]"
                compId="41:254"
                comWidth={285}
                comHeight={51}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Related Article`}</Text>
              <Column
                className="lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] mt-[46px] w-[100%]"
                compId="1131"
                comWidth={1620}
                comHeight={532}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <List
                  className="lg:gap-[29px] xl:gap-[34px] 2xl:gap-[38px] 3xl:gap-[45px] gap-[51px] grid grid-cols-3 min-h-[auto] w-[100%]"
                  compId="1064"
                  comWidth={1620}
                  comHeight={532}
                  compLeft={0}
                  compRight={0}
                  compType="List"
                  orientation="horizontal"
                >
                  <Column
                    className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer items-start justify-start rounded-radius20 hover:shadow-bs1 w-[100%]"
                    compId="1088"
                    comWidth={506}
                    comHeight={532}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="1132"
                      comWidth={506}
                      comHeight={236}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <div
                        className="bg-gray_401 lg:h-[138px] xl:h-[158px] 2xl:h-[178px] 3xl:h-[213px] h-[236px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                        compId="41:257"
                        comWidth={506}
                        comHeight={236}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                    </Column>
                    <Text
                      className="font-lora font-medium lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] leading-[34.00px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] lg:mx-[24px] xl:mx-[27px] 2xl:mx-[30px] 3xl:mx-[37px] mx-[41.28px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-[26px] text-black_900 text-left w-[76%]"
                      compId="41:261"
                      comWidth={382.8}
                      comHeight={68}
                      compLeft={41.28}
                      compRight={41.28}
                      compType="Text"
                    >{`Elmna’s in Silicon Valley: Finance vs Family`}</Text>
                    <Text
                      className="font-cairo font-semibold 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:mx-[23px] xl:mx-[27px] 2xl:mx-[30px] 3xl:mx-[36px] mx-[41px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_700 text-left w-[auto]"
                      compId="41:263"
                      comWidth={293}
                      comHeight={28}
                      compLeft={41}
                      compRight={41}
                      compType="Text"
                    >{`By Admin, on Nov 23th, 2020  |   1 days ago`}</Text>
                    <Text
                      className="font-cairo font-normal lg:leading-[15px] xl:leading-[17px] 2xl:leading-[19px] 3xl:leading-[23px] leading-[26.00px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] lg:mx-[23px] xl:mx-[27px] 2xl:mx-[30px] 3xl:mx-[36px] mx-[41px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[80%]"
                      compId="41:262"
                      comWidth={407.05}
                      comHeight={52}
                      compLeft={41}
                      compRight={41}
                      compType="Text"
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...`}</Text>
                    <Text
                      className="font-cairo font-semibold lg:mb-[22px] xl:mb-[25px] 2xl:mb-[28px] 3xl:mb-[34px] mb-[38px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:mx-[24px] xl:mx-[27px] 2xl:mx-[30px] 3xl:mx-[37px] mx-[41.28px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left w-[auto]"
                      compId="41:264"
                      comWidth={83}
                      comHeight={34}
                      compLeft={41.28}
                      compRight={41.28}
                      compType="Text"
                    >{`Read more`}</Text>
                  </Column>
                  <Column
                    className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer items-start justify-start rounded-radius20 hover:shadow-bs1 w-[100%]"
                    compId="1091"
                    comWidth={506}
                    comHeight={532}
                    compLeft={51}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="1133"
                      comWidth={506}
                      comHeight={236}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <div
                        className="bg-gray_401 lg:h-[138px] xl:h-[158px] 2xl:h-[178px] 3xl:h-[213px] h-[236px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                        compId="41:277"
                        comWidth={506}
                        comHeight={236}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                    </Column>
                    <Text
                      className="font-lora font-medium lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] leading-[34.00px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] lg:mx-[24px] xl:mx-[27px] 2xl:mx-[30px] 3xl:mx-[37px] mx-[41.28px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-[26px] text-black_900 text-left w-[76%]"
                      compId="41:281"
                      comWidth={382.8}
                      comHeight={68}
                      compLeft={41.28}
                      compRight={41.28}
                      compType="Text"
                    >{`Alumni Service Sportlight: Haji Mahmud AB OO2`}</Text>
                    <Text
                      className="font-cairo font-semibold 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:mx-[23px] xl:mx-[27px] 2xl:mx-[30px] 3xl:mx-[36px] mx-[41px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_700 text-left w-[auto]"
                      compId="41:283"
                      comWidth={293}
                      comHeight={28}
                      compLeft={41}
                      compRight={41}
                      compType="Text"
                    >{`By Admin, on Nov 23th, 2020  |   1 days ago`}</Text>
                    <Text
                      className="font-cairo font-normal lg:leading-[15px] xl:leading-[17px] 2xl:leading-[19px] 3xl:leading-[23px] leading-[26.00px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] lg:mx-[23px] xl:mx-[27px] 2xl:mx-[30px] 3xl:mx-[36px] mx-[41px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[80%]"
                      compId="41:282"
                      comWidth={407.05}
                      comHeight={52}
                      compLeft={41}
                      compRight={41}
                      compType="Text"
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...`}</Text>
                    <Text
                      className="font-cairo font-semibold lg:mb-[22px] xl:mb-[25px] 2xl:mb-[28px] 3xl:mb-[34px] mb-[38px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:mx-[24px] xl:mx-[27px] 2xl:mx-[30px] 3xl:mx-[37px] mx-[41.28px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left w-[auto]"
                      compId="41:284"
                      comWidth={83}
                      comHeight={34}
                      compLeft={41.28}
                      compRight={41.28}
                      compType="Text"
                    >{`Read more`}</Text>
                  </Column>
                  <Column
                    className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer items-start justify-start rounded-radius20 hover:shadow-bs1 w-[100%]"
                    compId="1094"
                    comWidth={506}
                    comHeight={532}
                    compLeft={51}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="1134"
                      comWidth={506}
                      comHeight={236}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <div
                        className="bg-gray_401 lg:h-[138px] xl:h-[158px] 2xl:h-[178px] 3xl:h-[213px] h-[236px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                        compId="41:267"
                        comWidth={506}
                        comHeight={236}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                    </Column>
                    <Text
                      className="font-lora font-medium lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] leading-[34.00px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] lg:mx-[24px] xl:mx-[27px] 2xl:mx-[30px] 3xl:mx-[37px] mx-[41.28px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-[26px] text-black_900 text-left w-[76%]"
                      compId="41:271"
                      comWidth={382.8}
                      comHeight={68}
                      compLeft={41.28}
                      compRight={41.28}
                      compType="Text"
                    >{`Elmna’s Library Gives Alumni New Access`}</Text>
                    <Text
                      className="font-cairo font-semibold 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:mx-[23px] xl:mx-[27px] 2xl:mx-[30px] 3xl:mx-[36px] mx-[41px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_700 text-left w-[auto]"
                      compId="41:273"
                      comWidth={293}
                      comHeight={28}
                      compLeft={41}
                      compRight={41}
                      compType="Text"
                    >{`By Admin, on Nov 23th, 2020  |   1 days ago`}</Text>
                    <Text
                      className="font-cairo font-normal lg:leading-[15px] xl:leading-[17px] 2xl:leading-[19px] 3xl:leading-[23px] leading-[26.00px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] lg:mx-[23px] xl:mx-[27px] 2xl:mx-[30px] 3xl:mx-[36px] mx-[41px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_700 text-left w-[80%]"
                      compId="41:272"
                      comWidth={407.05}
                      comHeight={52}
                      compLeft={41}
                      compRight={41}
                      compType="Text"
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ...`}</Text>
                    <Text
                      className="font-cairo font-semibold lg:mb-[22px] xl:mb-[25px] 2xl:mb-[28px] 3xl:mb-[34px] mb-[38px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:mx-[24px] xl:mx-[27px] 2xl:mx-[30px] 3xl:mx-[37px] mx-[41.28px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-bluegray_700 text-left w-[auto]"
                      compId="41:274"
                      comWidth={83}
                      comHeight={34}
                      compLeft={41.28}
                      compRight={41.28}
                      compType="Text"
                    >{`Read more`}</Text>
                  </Column>
                </List>
              </Column>
            </Column>
          </Stack>
          <Line
            className="bg-gray_300 h-[1px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[60px] w-[100%]"
            compId="41:196"
            comWidth={1920}
            comHeight={1}
            compLeft={0}
            compRight={0}
            compType="Line"
          />
          <Row
            className="font-cairo items-start justify-start lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[60px] w-[100%]"
            compId="1098"
            comWidth={1920}
            comHeight={388}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Column
              className="items-start justify-start lg:ml-[166px] xl:ml-[190px] 2xl:ml-[214px] 3xl:ml-[257px] ml-[286px] w-[27%]"
              compId="1097"
              comWidth={511}
              comHeight={388}
              compLeft={286}
              compRight={0}
              compType="Column"
            >
              <Text
                className="capitalize font-bold font-lora mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[40px] text-black_902 text-left w-[auto]"
                compId="41:197"
                comWidth={307}
                comHeight={80}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Write Comment`}</Text>
              <Input
                className="placeholder:bg-transparent bg-transparent border-2 border-bluegray_700 border-solid font-cairo font-semibold lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[60px] xl:pl-[11px] 2xl:pl-[12px] 3xl:pl-[15px] pl-[17px] lg:pl-[9px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] rounded-radius6 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] placeholder:text-black_900 text-black_900 text-left w-[100%]"
                compId="44:10"
                comWidth={510}
                comHeight={66}
                compLeft={1}
                compRight={0}
                compType="EditText"
                name="input"
                placeholder={`Mahmud Supardi`}
              ></Input>
              <Input
                className="placeholder:bg-transparent bg-transparent border-2 border-bluegray_700 border-solid font-cairo font-semibold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[25px] xl:pl-[11px] 2xl:pl-[12px] 3xl:pl-[15px] pl-[17px] lg:pl-[9px] lg:py-[14px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] py-[24px] rounded-radius6 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] placeholder:text-black_900 text-black_900 text-left w-[100%]"
                compId="44:15"
                comWidth={510}
                comHeight={66}
                compLeft={1}
                compRight={0}
                compType="EditText"
                name="input"
                placeholder={`mahmudkeren@mail.com`}
              ></Input>
              <Button
                className="bg-bluegray_700 font-bold font-cairo ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] 2xl:py-[10px] 3xl:py-[13px] py-[14.545px] lg:py-[8px] xl:py-[9px] rounded-radius37 shadow-bs2 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-white_A700 w-[51%]"
                compId="41:204"
                comWidth={261}
                comHeight={60}
                compLeft={1}
                compRight={10}
                compType="Button"
              >{`POST A COMMENT`}</Button>
            </Column>
            <Column
              className="border-2 border-bluegray_700 border-solid lg:mb-[53px] xl:mb-[60px] 2xl:mb-[68px] 3xl:mb-[81px] mb-[91px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] 2xl:mt-[105px] 3xl:mt-[126px] mt-[140px] lg:mt-[81px] xl:mt-[93px] rounded-radius6 w-[42%]"
              compId="41:200"
              comWidth={805}
              comHeight={157}
              compLeft={32}
              compRight={0}
              compType="Column"
            >
              <Column
                className="lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] w-[100%]"
                compId="1135"
                comWidth={805}
                comHeight={32}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-start w-[100%]"
                  compId="1066"
                  comWidth={805}
                  comHeight={32}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Line
                    className="bg-bluegray_700 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] w-[2px]"
                    compId="41:203"
                    comWidth={2}
                    comHeight={24}
                    compLeft={15}
                    compRight={0}
                    compType="Line"
                  />
                  <Text
                    className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-gray_601 text-left w-[auto]"
                    compId="41:202"
                    comWidth={205}
                    comHeight={32}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Write your comment here...`}</Text>
                </Row>
              </Column>
              <Stack
                className="lg:h-[13px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[20px] h-[21.20996px] 2xl:mb-[11px] 3xl:mb-[13px] mb-[14.79px] lg:mb-[8px] xl:mb-[9px] lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[63px] mt-[70px] w-[100%]"
                compId="1136"
                comWidth={805}
                comHeight={21.20996}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_expand.svg"}
                  className="absolute lg:h-[13px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[20px] h-[21.21px] left-[auto] object-contain right-[1%] lg:w-[12px] xl:w-[14px] 2xl:w-[15px] 3xl:w-[19px] w-[21.21px]"
                  compId="44:19"
                  comWidth={21.21}
                  comHeight={21.21}
                  compLeft={10.79}
                  compRight={10.79}
                  compType="Image"
                  alt="expand"
                />
              </Stack>
            </Column>
          </Row>
          <Column
            className="font-lora items-center justify-start lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80px] w-[100%]"
            compId="1071"
            comWidth={1920}
            comHeight={971}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-center justify-between w-[100%]"
              compId="1068"
              comWidth={1920}
              comHeight={80}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="capitalize font-bold lg:ml-[166px] xl:ml-[190px] 2xl:ml-[214px] 3xl:ml-[257px] ml-[286px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[40px] text-black_902 text-left w-[auto]"
                compId="41:209"
                comWidth={368}
                comHeight={80}
                compLeft={286}
                compRight={0}
                compType="Text"
              >{`4 Comments found`}</Text>
              <Row
                className="border border-bluegray_700 border-solid font-cairo items-center justify-center lg:mr-[166px] xl:mr-[190px] 2xl:mr-[214px] 3xl:mr-[257px] mr-[286px] lg:my-[5px] 2xl:my-[6px] xl:my-[6px] 3xl:my-[8px] my-[9px] rounded-radius60 w-[8%]"
                compId="1067"
                comWidth={161}
                comHeight={62}
                compLeft={0}
                compRight={286}
                compType="Row"
              >
                <Text
                  className="font-bold lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] ml-[35px] 2xl:my-[10px] 3xl:my-[12px] my-[14px] lg:my-[8px] xl:my-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_700 text-left w-[auto]"
                  compId="41:247"
                  comWidth={54}
                  comHeight={34}
                  compLeft={35}
                  compRight={0}
                  compType="Text"
                >{`Latest`}</Text>
                <Image
                  src={"images/img_chevron1_11.svg"}
                  className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] mr-[32px] lg:my-[13px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[20px] my-[23px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                  compId="41:248"
                  comWidth={16}
                  comHeight={16}
                  compLeft={24}
                  compRight={32}
                  compType="Image"
                  alt="chevron1"
                />
              </Row>
            </Row>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] mx-[auto] w-[70%]"
              compId="1126"
              comWidth={1345}
              comHeight={851}
              compLeft={286}
              compRight={286}
              compType="List"
              orientation="vertical"
            >
              <Row
                className="items-start justify-between lg:my-[20px] xl:my-[23px] 2xl:my-[25px] 3xl:my-[31px] my-[34.5px] w-[100%]"
                compId="1100"
                comWidth={1345}
                comHeight={201}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-gray_401 3xl:h-[114px] h-[126px] lg:h-[74px] xl:h-[85px] 2xl:h-[95px] lg:mb-[43px] xl:mb-[50px] 2xl:mb-[56px] 3xl:mb-[67px] mb-[75px] rounded-radius501 3xl:w-[113px] w-[126px] lg:w-[73px] xl:w-[84px] 2xl:w-[94px]"
                  compId="41:220"
                  comWidth={126}
                  comHeight={126}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Column
                  className="items-start justify-start 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[88%]"
                  compId="1099"
                  comWidth={1179}
                  comHeight={189}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="capitalize font-bold font-lora mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-[28px] text-black_901 text-left w-[auto]"
                    compId="41:221"
                    comWidth={197}
                    comHeight={36}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`James Mulyadi`}</Text>
                  <Text
                    className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-black_901 text-left w-[100%]"
                    compId="41:222"
                    comWidth={1179}
                    comHeight={84}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est el'`}</Text>
                  <Text
                    className="font-bold font-cairo mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_700 text-left w-[auto]"
                    compId="41:229"
                    comWidth={55}
                    comHeight={28}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`REPLY`}</Text>
                </Column>
              </Row>
              <Row
                className="items-start justify-between lg:my-[20px] xl:my-[23px] 2xl:my-[25px] 3xl:my-[31px] my-[34.5px] w-[100%]"
                compId="1102"
                comWidth={1345}
                comHeight={173}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-gray_401 3xl:h-[114px] h-[126px] lg:h-[74px] xl:h-[85px] 2xl:h-[95px] lg:mb-[27px] xl:mb-[31px] 2xl:mb-[35px] 3xl:mb-[42px] mb-[47px] rounded-radius501 3xl:w-[113px] w-[126px] lg:w-[73px] xl:w-[84px] 2xl:w-[94px]"
                  compId="41:226"
                  comWidth={126}
                  comHeight={126}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Column
                  className="items-start justify-start 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[88%]"
                  compId="1101"
                  comWidth={1179}
                  comHeight={161}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="capitalize font-bold font-lora mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-[28px] text-black_901 text-left w-[auto]"
                    compId="41:227"
                    comWidth={187}
                    comHeight={36}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Cici Paramida`}</Text>
                  <Text
                    className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-black_901 text-left w-[100%]"
                    compId="41:228"
                    comWidth={1179}
                    comHeight={56}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias cons`}</Text>
                  <Text
                    className="font-bold font-cairo mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_700 text-left w-[auto]"
                    compId="41:231"
                    comWidth={55}
                    comHeight={28}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`REPLY`}</Text>
                </Column>
              </Row>
              <Row
                className="items-start justify-between xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[149px] ml-[166px] lg:ml-[96px] lg:my-[20px] xl:my-[23px] 2xl:my-[25px] 3xl:my-[31px] my-[34.5px] w-[88%]"
                compId="1104"
                comWidth={1179}
                comHeight={153}
                compLeft={166}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-gray_401 3xl:h-[114px] h-[126px] lg:h-[74px] xl:h-[85px] 2xl:h-[95px] lg:mb-[15px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] rounded-radius501 3xl:w-[113px] w-[126px] lg:w-[73px] xl:w-[84px] 2xl:w-[94px]"
                  compId="41:234"
                  comWidth={126}
                  comHeight={126}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Column
                  className="items-start justify-start 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[86%]"
                  compId="1103"
                  comWidth={1013}
                  comHeight={141}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="capitalize font-bold font-lora mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-[28px] text-black_901 text-left w-[auto]"
                    compId="41:235"
                    comWidth={164}
                    comHeight={36}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Kevin Smith`}</Text>
                  <Text
                    className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-black_901 text-left w-[100%]"
                    compId="41:236"
                    comWidth={1013}
                    comHeight={84}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima venia`}</Text>
                </Column>
              </Row>
              <Row
                className="items-end justify-between xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[149px] ml-[166px] lg:ml-[96px] lg:my-[20px] xl:my-[23px] 2xl:my-[25px] 3xl:my-[31px] my-[34.5px] w-[88%]"
                compId="1106"
                comWidth={1179}
                comHeight={126}
                compLeft={166}
                compRight={0}
                compType="Row"
              >
                <div
                  className="bg-gray_401 3xl:h-[114px] h-[126px] lg:h-[74px] xl:h-[85px] 2xl:h-[95px] rounded-radius501 3xl:w-[113px] w-[126px] lg:w-[73px] xl:w-[84px] 2xl:w-[94px]"
                  compId="41:240"
                  comWidth={126}
                  comHeight={126}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
                <Column
                  className="items-start justify-start mb-[1px] 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[86%]"
                  compId="1105"
                  comWidth={1013}
                  comHeight={113}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="capitalize font-bold font-lora mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-[28px] text-black_901 text-left w-[auto]"
                    compId="41:241"
                    comWidth={186}
                    comHeight={36}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Melinda Chan`}</Text>
                  <Text
                    className="font-cairo font-normal lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] leading-[28.00px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-black_901 text-left w-[100%]"
                    compId="41:242"
                    comWidth={1013}
                    comHeight={56}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse`}</Text>
                </Column>
              </Row>
            </List>
          </Column>
          <Line
            className="bg-gray_300 h-[1px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[60px] w-[100%]"
            compId="41:244"
            comWidth={1920}
            comHeight={1}
            compLeft={0}
            compRight={0}
            compType="Line"
          />
          <Stack
            className="font-lora lg:h-[515px] xl:h-[589px] 2xl:h-[662px] 3xl:h-[795px] h-[882px] 3xl:mt-[108px] mt-[120px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] w-[100%]"
            compId="1121"
            comWidth={1920}
            comHeight={882}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Stack
              className="absolute lg:h-[515px] xl:h-[589px] 2xl:h-[662px] 3xl:h-[795px] h-[882px] inset-[0] w-[100%]"
              compId="1123"
              comWidth={1920}
              comHeight={882}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Image
                src={"images/img_background_21.svg"}
                className="absolute bottom-[0] lg:h-[394px] xl:h-[450px] 2xl:h-[506px] 3xl:h-[607px] h-[674px] object-cover w-[100%]"
                compId="41:52"
                comWidth={1920}
                comHeight={674}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="background"
              />
              <Row
                className="absolute bg-bluegray_700 inset-x-[0] items-center justify-center mx-[auto] rounded-radius6 top-[0] w-[84%]"
                compId="1072"
                comWidth={1620}
                comHeight={366}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-normal lg:leading-[44px] xl:leading-[50px] 2xl:leading-[57px] 3xl:leading-[68px] leading-[76.00px] my-[107px] lg:my-[62px] xl:my-[71px] 2xl:my-[80px] 3xl:my-[96px] not-italic lg:text-[25px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[39px] text-[44px] text-left text-white_A700 w-[39%]"
                  compId="41:84"
                  comWidth={639}
                  comHeight={152}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Don’t miss our weekly updates about elmna’s alumni story`}</Text>
                <Stack
                  className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] ml-[163px] lg:ml-[95px] 2xl:my-[107px] 3xl:my-[128px] my-[143px] lg:my-[83px] xl:my-[95px] w-[34%]"
                  compId="1125"
                  comWidth={546}
                  comHeight={80}
                  compLeft={163}
                  compRight={0}
                  compType="Stack"
                >
                  <Input
                    className="absolute placeholder:bg-transparent bg-transparent border border-gray_300 border-solid font-normal font-opensans inset-[0] not-italic lg:pb-[16px] 2xl:pb-[21px] 3xl:pb-[25px] pb-[28.545px] lg:pl-[20px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] pl-[35px] lg:pt-[17px] 2xl:pt-[22px] 3xl:pt-[26px] pt-[29.545px] xl:py-[19px] rounded-radius60 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] placeholder:text-gray_300 text-gray_300 text-left w-[100%]"
                    compId="88"
                    comWidth={546}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group88"
                    placeholder={`Enter your email address...`}
                  ></Input>
                  <Button
                    className="absolute bg-gray_300 font-bold font-cairo h-[max-content] inset-y-[0] my-[auto] 2xl:py-[10px] 3xl:py-[13px] py-[14.545px] lg:py-[8px] xl:py-[9px] right-[2%] rounded-radius37 shadow-bs2 lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-black_900 text-center w-[36%]"
                    compId="41:81"
                    comWidth={196.79}
                    comHeight={60}
                    compLeft={0}
                    compRight={10.21}
                    compType="Button"
                  >{`SUBSCRIBE`}</Button>
                </Stack>
              </Row>
            </Stack>
            <Column
              className="absolute bottom-[12%] inset-x-[0] items-center justify-start mx-[auto] w-[42%]"
              compId="1074"
              comWidth={805}
              comHeight={332}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-lora font-normal mx-[auto] not-italic lg:text-[25px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[39px] text-[44px] text-center text-white_A700 w-[auto]"
                compId="41:63"
                comWidth={789}
                comHeight={76}
                compLeft={8}
                compRight={8}
                compType="Text"
              >{`Get our mobile apps now free`}</Text>
              <Text
                className="font-cairo font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] leading-[32.00px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center text-gray_300 w-[100%]"
                compId="41:64"
                comWidth={805}
                comHeight={96}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate`}</Text>
              <List
                className="font-lato lg:gap-[18px] xl:gap-[20px] 2xl:gap-[23px] 3xl:gap-[27px] gap-[31px] grid grid-cols-2 min-h-[auto] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] mt-[62px] mx-[auto] w-[61%]"
                compId="1073"
                comWidth={493}
                comHeight={76}
                compLeft={156}
                compRight={156}
                compType="List"
                orientation="horizontal"
              >
                <Row
                  className="bg-gray_300 items-start justify-start rounded-radius6 w-[100%]"
                  compId="1108"
                  comWidth={231}
                  comHeight={76}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_vector_2.svg"}
                    className="lg:h-[23px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] h-[38px] lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] mb-[22px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] object-contain w-[13%]"
                    compId="41:69"
                    comWidth={30}
                    comHeight={38}
                    compLeft={24}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Column
                    className="items-start justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] mb-[16px] lg:mb-[9px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] ml-[22px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[46%]"
                    compId="1107"
                    comWidth={107}
                    comHeight={49}
                    compLeft={22}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[8px] xl:text-[9px] text-black_900 text-left w-[auto]"
                      compId="41:68"
                      comWidth={107}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Download on the`}</Text>
                    <Text
                      className="font-black mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[1px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-black_900 text-left w-[auto]"
                      compId="41:67"
                      comWidth={90}
                      comHeight={24}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`App Store`}</Text>
                  </Column>
                </Row>
                <Row
                  className="bg-gray_300 items-end justify-center rounded-radius6 w-[100%]"
                  compId="1110"
                  comWidth={231}
                  comHeight={76}
                  compLeft={31}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_vector_3.svg"}
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] ml-[25px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] object-contain w-[11%]"
                    compId="41:74"
                    comWidth={26}
                    comHeight={32}
                    compLeft={25}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Column
                    className="items-start justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] mb-[16px] lg:mb-[9px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:mr-[28px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[44px] mr-[49px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[46%]"
                    compId="1109"
                    comWidth={107}
                    comHeight={49}
                    compLeft={24}
                    compRight={49}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic 2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[8px] xl:text-[9px] text-black_900 text-left w-[auto]"
                      compId="41:73"
                      comWidth={67}
                      comHeight={24}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`GET IT ON`}</Text>
                    <Text
                      className="font-black mt-[1px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-black_900 text-left w-[auto]"
                      compId="41:72"
                      comWidth={107}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Google Play`}</Text>
                  </Column>
                </Row>
              </List>
            </Column>
          </Stack>
        </Column>
        <footer
          className="font-opensans w-[100%]"
          compId="41:85"
          comWidth={1920}
          comHeight={583}
          compLeft={0}
          compRight={0}
          compType="BottomBar"
        >
          <Column
            className="bg-black_900 w-[100%]"
            compId="41:87"
            comWidth={1920}
            comHeight={583}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Line
              className="bg-gray_100_14 h-[1px] w-[100%]"
              compId="41:95"
              comWidth={1920}
              comHeight={1}
              compLeft={0}
              compRight={0}
              compType="Line"
            />
            <Row
              className="items-start justify-evenly 2xl:mt-[100px] 3xl:mt-[120px] mt-[134px] lg:mt-[78px] xl:mt-[89px] w-[100%]"
              compId="41:99"
              comWidth={1920}
              comHeight={303}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-start justify-start w-[28%]"
                compId="41:100"
                comWidth={530}
                comHeight={303}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_logo_8.svg"}
                  className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] h-[72px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] object-contain w-[37%]"
                  compId="41:101"
                  comWidth={198}
                  comHeight={72}
                  compLeft={0}
                  compRight={10}
                  compType="Image"
                  alt="logo"
                />
                <Text
                  className="font-normal lg:leading-[14px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] leading-[24.00px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-left text-white_A700 w-[100%]"
                  compId="41:109"
                  comWidth={530}
                  comHeight={72}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Elmna University Alumni is a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud`}</Text>
                <Column
                  className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30px] w-[100%]"
                  compId="1137"
                  comWidth={530}
                  comHeight={99}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="1082"
                    comWidth={530}
                    comHeight={99}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-left text-white_A700 w-[auto]"
                      compId="41:123"
                      comWidth={72}
                      comHeight={22}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Follow Us`}</Text>
                    <Column
                      className="lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] mt-[26px] w-[100%]"
                      compId="1138"
                      comWidth={530}
                      comHeight={51}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-start w-[100%]"
                        compId="1081"
                        comWidth={530}
                        comHeight={51}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_social01_2.svg"}
                          className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22.15px] 3xl:mb-[12px] mb-[14.35px] lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] ml-[5px] 3xl:mt-[13px] mt-[14.5px] 2xl:my-[10px] lg:my-[8px] xl:my-[9px] object-contain w-[2%]"
                          compId="41:112"
                          comWidth={12.08}
                          comHeight={22.15}
                          compLeft={5}
                          compRight={0}
                          compType="Image"
                          alt="social01"
                        />
                        <Image
                          src={"images/img_social03_3.svg"}
                          className="lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[48.92px] object-contain lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]"
                          compId="41:116"
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
                          compId="41:114"
                          comWidth={31.47}
                          comHeight={22.66}
                          compLeft={40.29}
                          compRight={0}
                          compType="Image"
                          alt="social02"
                        />
                        <Image
                          src={"images/img_social04_1.svg"}
                          className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[23.16px] mb-[13.84px] lg:ml-[30px] xl:ml-[34px] 2xl:ml-[38px] 3xl:ml-[46px] ml-[51.6px] mt-[14px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] object-contain w-[5%]"
                          compId="41:119"
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
                          compId="41:121"
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
                className="font-cairo items-start justify-start lg:mb-[49px] xl:mb-[56px] 2xl:mb-[63px] 3xl:mb-[75px] mb-[84px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] w-[5%]"
                compId="41:159"
                comWidth={99}
                comHeight={216}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-left text-white_A700 w-[auto]"
                  compId="41:160"
                  comWidth={99}
                  comHeight={37}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Why Elmna`}</Text>
                <Column
                  className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[89%]"
                  compId="41:161"
                  comWidth={88}
                  comHeight={162}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-semibold mr-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[auto]"
                    compId="41:162"
                    comWidth={87}
                    comHeight={30}
                    compLeft={0}
                    compRight={1}
                    compType="Text"
                  >{`About elmna`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[auto]"
                    compId="41:163"
                    comWidth={71}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Enterprise`}</Text>
                  <Text
                    className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[auto]"
                    compId="41:164"
                    comWidth={88}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Alumni Story`}</Text>
                  <Text
                    className="font-semibold lg:mr-[5px] 2xl:mr-[6px] xl:mr-[6px] 3xl:mr-[8px] mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[auto]"
                    compId="41:165"
                    comWidth={79}
                    comHeight={30}
                    compLeft={0}
                    compRight={9}
                    compType="Text"
                  >{`Community`}</Text>
                </Column>
              </Column>
              <Column
                className="font-cairo items-start justify-start lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] w-[5%]"
                compId="41:151"
                comWidth={90}
                comHeight={260}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-left text-white_A700 w-[auto]"
                  compId="41:158"
                  comWidth={90}
                  comHeight={37}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Resources`}</Text>
                <Column
                  className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[89%]"
                  compId="41:152"
                  comWidth={80}
                  comHeight={206}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[auto]"
                    compId="41:153"
                    comWidth={69}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Download`}</Text>
                  <Text
                    className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[auto]"
                    compId="41:154"
                    comWidth={80}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Help Center`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[auto]"
                    compId="41:155"
                    comWidth={47}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Events`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[auto]"
                    compId="41:156"
                    comWidth={47}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Guides`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[auto]"
                    compId="41:157"
                    comWidth={52}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Partner`}</Text>
                </Column>
              </Column>
              <Column
                className="font-cairo items-start justify-start lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] w-[5%]"
                compId="41:143"
                comWidth={100}
                comHeight={260}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-left text-white_A700 w-[auto]"
                  compId="41:150"
                  comWidth={100}
                  comHeight={37}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Community`}</Text>
                <Column
                  className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[72%]"
                  compId="41:144"
                  comWidth={72}
                  comHeight={206}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[auto]"
                    compId="41:145"
                    comWidth={61}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`About us`}</Text>
                  <Text
                    className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[auto]"
                    compId="41:146"
                    comWidth={72}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Contact us`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[auto]"
                    compId="41:147"
                    comWidth={37}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Login`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[auto]"
                    compId="41:148"
                    comWidth={52}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Sign Up`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[auto]"
                    compId="41:149"
                    comWidth={28}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`FAQ`}</Text>
                </Column>
              </Column>
              <Column
                className="font-cairo items-start justify-start lg:mb-[43px] xl:mb-[49px] 2xl:mb-[55px] 3xl:mb-[66px] mb-[74px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] w-[15%]"
                compId="41:124"
                comWidth={285}
                comHeight={226}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-left text-white_A700 w-[auto]"
                  compId="41:125"
                  comWidth={176}
                  comHeight={37}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Get in Touch with Us`}</Text>
                <Column
                  className="xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[100%]"
                  compId="1139"
                  comWidth={285}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-start justify-start w-[100%]"
                    compId="41:126"
                    comWidth={285}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_pin51_5.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[15px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="41:128"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="pin51"
                    />
                    <Text
                      className="font-semibold leading-[normal] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[86%]"
                      compId="41:127"
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
                  compId="41:131"
                  comWidth={285}
                  comHeight={30}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_telephonecall.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="41:133"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="telephonecall"
                  />
                  <Text
                    className="font-semibold xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[auto]"
                    compId="41:132"
                    comWidth={124}
                    comHeight={30}
                    compLeft={15}
                    compRight={0}
                    compType="Text"
                  >{`+123 345123 556`}</Text>
                </Row>
                <Row
                  className="items-start justify-start lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                  compId="41:137"
                  comWidth={285}
                  comHeight={30}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_inbox21_10.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="41:139"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="inbox21"
                  />
                  <Text
                    className="font-semibold xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[auto]"
                    compId="41:138"
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
              className="bg-black_900 font-cairo lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[61px] w-[100%]"
              compId="1083"
              comWidth={1920}
              comHeight={84}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Line
                className="bg-gray_100_14 h-[1px] w-[100%]"
                compId="41:94"
                comWidth={1920}
                comHeight={1}
                compLeft={0}
                compRight={0}
                compType="Line"
              />
              <Row
                className="items-center justify-evenly xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] mt-[26px] lg:my-[15px] w-[100%]"
                compId="41:89"
                comWidth={1920}
                comHeight={30}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-left text-white_A700 w-[auto]"
                  compId="41:96"
                  comWidth={372}
                  comHeight={30}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Elmna University Alumni -   © 2020 All Rights Reserved`}</Text>
                <Row
                  className="items-center justify-center w-[19%]"
                  compId="1130"
                  comWidth={367}
                  comHeight={30}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[auto]"
                    compId="41:92"
                    comWidth={41}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`About`}</Text>
                  <Text
                    className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[auto]"
                    compId="41:91"
                    comWidth={28}
                    comHeight={30}
                    compLeft={50}
                    compRight={0}
                    compType="Text"
                  >{`FAQ`}</Text>
                  <Text
                    className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[auto]"
                    compId="41:90"
                    comWidth={92}
                    comHeight={30}
                    compLeft={50}
                    compRight={0}
                    compType="Text"
                  >{`Privacy Policy`}</Text>
                  <Text
                    className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_300 text-left w-[auto]"
                    compId="41:93"
                    comWidth={56}
                    comHeight={30}
                    compLeft={50}
                    compRight={0}
                    compType="Text"
                  >{`Sitemap`}</Text>
                </Row>
                <Text
                  className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-right text-white_A700 w-[auto]"
                  compId="41:98"
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
    </>
  );
};

export default NewsDetailPage;
